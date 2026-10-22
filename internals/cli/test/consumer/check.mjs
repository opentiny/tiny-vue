import { spawnSync } from 'node:child_process'
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const fixtures = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(fixtures, '../../../..')
const pnpm = process.env.npm_execpath
if (!pnpm) throw new Error('Run this check with pnpm -C internals/cli test:types')

const temp = realpathSync(tmpdir())
const consumer = mkdtempSync(path.join(temp, 'tiny-vue-declarations-'))

const run = (args, cwd = consumer) => {
  const result = spawnSync(process.execPath, args, { cwd, encoding: 'utf8', env: { ...process.env, CI: 'true' } })
  if (result.error) throw result.error
  const output = (result.stdout || '') + (result.stderr || '')
  if (result.status !== 0) throw new Error(output || `Command exited with ${result.status}`)
  return output
}

try {
  const tarballs = path.join(consumer, 'tarballs')
  mkdirSync(tarballs)
  const packages = ['button', 'vue-common', 'space']
  const dependencies = { vue: '3.5.44', typescript: '5.9.3', 'vue-tsc': '3.1.4' }
  const overrides = {}

  for (const directory of packages) {
    const artifact = path.join(root, 'packages/dist3/@opentiny', directory)
    const pkg = JSON.parse(readFileSync(path.join(artifact, 'package.json'), 'utf8'))
    run([pnpm, 'pack', '--pack-destination', tarballs], artifact)
    const tarball = `${pkg.name.replace(/^@/, '').replace('/', '-')}-${pkg.version}.tgz`
    const dependency = `file:${path.join(tarballs, tarball).replace(/\\/g, '/')}`
    dependencies[pkg.name] = dependency
    overrides[pkg.name] = dependency
  }

  writeFileSync(
    path.join(consumer, 'package.json'),
    JSON.stringify({ private: true, dependencies, pnpm: { overrides } })
  )
  // Support both the repository's pnpm 9 and newer pnpm configuration locations.
  writeFileSync(
    path.join(consumer, 'pnpm-workspace.yaml'),
    `packages: []\noverrides:\n${Object.entries(overrides)
      .map(([name, value]) => `  ${JSON.stringify(name)}: ${JSON.stringify(value)}`)
      .join('\n')}\n`
  )
  for (const file of ['props.ts', 'Valid.vue', 'Invalid.vue'])
    copyFileSync(path.join(fixtures, file), path.join(consumer, file))
  writeFileSync(
    path.join(consumer, 'tsconfig.json'),
    JSON.stringify({
      compilerOptions: {
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'Bundler',
        strict: true,
        skipLibCheck: false,
        lib: ['ES2022', 'DOM'],
        noEmit: true
      },
      vueCompilerOptions: { strictTemplates: true },
      include: ['props.ts', 'Valid.vue']
    })
  )
  writeFileSync(
    path.join(consumer, 'tsconfig-invalid.json'),
    JSON.stringify({ extends: './tsconfig.json', include: ['Invalid.vue'] })
  )
  run([pnpm, 'install', '--ignore-scripts', '--no-frozen-lockfile'])
  const checker = path.join(consumer, 'node_modules/vue-tsc/bin/vue-tsc.js')
  for (const skipLibCheck of ['false', 'true']) {
    run([checker, '--noEmit', '--pretty', 'false', '--skipLibCheck', skipLibCheck])
    const invalid = spawnSync(
      process.execPath,
      [checker, '-p', 'tsconfig-invalid.json', '--noEmit', '--pretty', 'false', '--skipLibCheck', skipLibCheck],
      { cwd: consumer, encoding: 'utf8' }
    )
    if (invalid.error) throw invalid.error
    const diagnostics = (invalid.stdout || '') + (invalid.stderr || '')
    if (invalid.status === 0 || !diagnostics.includes('TS2322') || /error TS(?!2322)\d+/.test(diagnostics)) {
      throw new Error(`Expected template prop errors with skipLibCheck=${skipLibCheck}:\n${diagnostics}`)
    }
    console.log(`Published types: valid props pass; invalid props fail (skipLibCheck=${skipLibCheck}).`)
  }
} finally {
  const resolved = realpathSync(consumer)
  if (path.dirname(resolved) !== temp || !path.basename(resolved).startsWith('tiny-vue-declarations-')) {
    throw new Error(`Refusing to remove unexpected temporary directory: ${resolved}`)
  }
  rmSync(resolved, { recursive: true, force: true })
}

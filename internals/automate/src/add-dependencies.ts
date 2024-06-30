import path from 'node:path'
import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'
import { difference } from 'lodash-es'
import { scanDir, safeReadFile } from './utils/files'
import { parseString } from './utils/parse-string'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const root = path.join(__dirname, '../../../packages/vue/src')

async function writeJson(jsonPath, dependencies) {
  const jsonStr: any = await safeReadFile(jsonPath)
  const json = parseString(jsonStr)
  const oldDeps = json.dependencies
  const toDelDeps = difference(
    Object.keys(oldDeps).filter((name) => name.startsWith('@opentiny/')),
    dependencies
  )
  const newDep = difference(dependencies, Object.keys(oldDeps))
  newDep.forEach((dep) => {
    json.dependencies[dep] = 'workspace:~'
  })
  toDelDeps.forEach((dep) => {
    delete json.dependencies[dep]
  })
  writeFile(jsonPath, JSON.stringify(json, null, 2))
}

// 解析文件内容中的opentiny依赖
function parseDepencies(content) {
  const reg = /import(.|\n)+?(\@opentiny\/.+)/g
  return content.match(reg)?.map((importStr) => {
    const depReg = /('|")(\@opentiny\/.+)('|")/
    const dep = importStr.match(depReg)[2]

    const needDep = dep.split('/').slice(0, 2).join('/')
    return needDep
  })
}

async function addComponentDepencies(component, dir) {
  let dependencies = []
  const componentPath = path.join(dir, component)
  // 如果没有package.json 则跳过
  const jsonPath = path.join(componentPath, 'package.json')
  const packageJson = await safeReadFile(jsonPath)
  if (!packageJson) {
    return
  }

  const allFiles = await fg(['**/*.ts', '**/*.vue'], {
    dot: true,
    cwd: componentPath,
    ignore: ['**/node_modules', '__test__']
  })
  for (let i = 0; i < allFiles.length; i++) {
    const file = allFiles[i]
    const filePath = path.join(componentPath, file)
    const fileContent = await safeReadFile(filePath)
    const componentDependencies = parseDepencies(fileContent)
    dependencies = dependencies.concat(componentDependencies)
  }
  dependencies = Array.from(new Set(dependencies.filter((i) => i)))

  writeJson(jsonPath, dependencies)
}

scanDir(root, 'dir').then((dirs) => {
  dirs.forEach((dir) => addComponentDepencies(dir, root))
})

scanDir(path.join(root, 'chart'), 'dir').then((dirs) => {
  dirs.forEach((dir) => addComponentDepencies(dir, path.join(root, 'chart')))
})

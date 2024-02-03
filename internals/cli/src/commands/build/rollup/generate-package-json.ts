import type { Plugin, NormalizedOutputOptions, OutputBundle } from 'rollup'
import path from 'node:path'
import fs from 'node:fs'
import { sync as findUpSync } from 'find-up'

export default function generatePackageJson({ beforeWriteFile }): Plugin {
  return {
    name: 'opentiny-vue:generate-package-json',
    generateBundle(output: NormalizedOutputOptions, bundle: OutputBundle) {
      const cache = {}
      Object.entries(bundle).forEach(([, item]) => {
        // 主入口文件, button/index.ts, common/src/index.ts
        if (item.type === 'chunk' && /\/index\.(js|ts)/.test(item.facadeModuleId!)) {
          // 从源文件中往上查找最近的 package.json 文件
          const packageJsonFile = findUpSync('package.json', { cwd: item.facadeModuleId! })

          if (!packageJsonFile) return

          if (cache[packageJsonFile]) return

          let packageJson
          try {
            packageJson = JSON.parse(fs.readFileSync(packageJsonFile, { encoding: 'utf-8' }))
          } catch {}

          const { filePath, content } = beforeWriteFile(path.dirname(item.fileName), packageJson)

          if (content) {
            this.emitFile({
              type: 'asset',
              fileName: `${filePath}/package.json`,
              source: typeof content === 'string' ? content : JSON.stringify(content, null, 2)
            })
          }

          const changelogFile = path.join(path.dirname(packageJsonFile), 'CHANGELOG.md')
          if (fs.existsSync(changelogFile)) {
            this.emitFile({
              type: 'asset',
              fileName: `${filePath}/CHANGELOG.md`,
              source: fs.readFileSync(changelogFile, { encoding: 'utf-8' })
            })
          }

          cache[packageJsonFile] = true
        }
      })
    }
  }
}

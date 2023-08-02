import type { Plugin, NormalizedOutputOptions, OutputBundle } from 'rollup'

export default function (version: string): Plugin {
  return {
    name: 'opentiny-vue:replace-module-name',
    generateBundle: (output: NormalizedOutputOptions, bundle: OutputBundle) => {
      const regexpStr = /\.([mc]?js)$/

      const jsAssets = Object.keys(bundle).filter((i) => regexpStr.test(i))

      for (const name of jsAssets) {
        const chunk = bundle[name]
        if (chunk.type === 'asset') continue

        let code = chunk.code
        if (!code) continue

        const suffix = name.match(regexpStr)?.[1]

        if (suffix) {
          // "../../button/src/mobile-first.vue"
          code = code
            .replace(/".+\/src\/(pc|mobile|mobile-first)\.vue/g, `"./$1.${suffix}`)
            .replace(/\.\.\/src/g, './lib')
        }

        // 统一给运行时组件添加版本号
        if (name.includes('index.js')) {
          code = code.replace(/version = "([\d \.]{5,})"/, `version = "${version}"`)
        }

        // import "@opentiny/vue-theme-*/index.less"; 替换为 css
        code = code.replace(/^(import.+@opentiny\/vue-theme.+index)\.less/gm, '$1.css')

        // from "./src/xxx" 替换为 from "./lib/xxx"
        code = code.replace(/from "\.\/src\//g, 'from "./lib/')
          .replace(/".*\.\/.*\/label-wrap"/, '"./label-wrap"')
          .replace(/".*\.\/.*\/tall-storage.vue"/, '"./tall-storage"')

        chunk.code = code
      }
    }
  }
}

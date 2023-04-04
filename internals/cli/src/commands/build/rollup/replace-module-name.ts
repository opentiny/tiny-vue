import type { Plugin, NormalizedOutputOptions, OutputBundle } from 'rollup'

export default function (): Plugin {
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
          code = code
            .replace(/".+\/src\/(pc|mobile)\.vue/g, `"./$1.${suffix}`)
            .replace(/\.\.\/src/g, './lib')
            .replace('../lowercase', './lowercase')
        }

        // import "@opentiny/vue-theme-*/index.less"; 替换为 css
        code = code.replace(/^(import.+@opentiny\/vue-theme.+index)\.less/gm, '$1.css')

        // 替换scrollbar组件路径问题
        code = code.replace('.././lib/bar.vue', './bar.js')

        // from "./src/xxx" 替换为 from "./lib/xxx"
        code = code.replace(/from "\.\/src\//g, 'from "./lib/')

        chunk.code = code
      }
    }
  }
}

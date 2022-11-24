let compilerDom = require('@vue/compiler-dom')

function vue3SvgInline() {
  return {
    name: 'vue3SvgInline',

    transform(source, id) {
      if (id.indexOf('vue-theme') === -1) {
        return null
      }
      const parsedSvg = source.match(/<svg([\s\S]*?)<\/svg>/)[0]
      const { code } = compilerDom.compile(parsedSvg, {
        mode: 'module'
      })

      return `
        ${code}
        export default {
          render
      }`
    }
  }
}

module.exports = vue3SvgInline

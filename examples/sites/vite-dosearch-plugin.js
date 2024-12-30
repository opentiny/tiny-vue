export default function viteDosearchPlugin() {
  return {
    name: 'vite-dosearch-plugin',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('@docsearch')) {
        const newCode = code.replace(
          'Promise((function(t){var n=new XMLHttpRequest;',
          'Promise((function(t){t=window.handleGlobalSearchData(t);var n=new XMLHttpRequest;'
        )
        return {
          code: newCode,
          map: null
        }
      }
    }
  }
}

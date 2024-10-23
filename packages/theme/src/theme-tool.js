import OldTheme from './old-theme-index.js'

export { OldTheme }

export default class TinyThemeTool {
  constructor(theme) {
    if (theme) {
      this.changeTheme(theme)
    }
  }

  changeTheme(theme) {
    if (this._loadedSheet) {
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter((t) => t !== this._loadedSheet)
    }

    if (theme && (theme.data || theme.css)) {
      let cssContent = ''
      if (theme.data && typeof theme.data === 'object') {
        cssContent = Object.keys(theme.data)
          .map((key) => `--${key}: ${theme.data[key]}; `)
          .join('')

        cssContent = `:root{${cssContent}}`
      }
      if (theme.css && typeof theme.css === 'string') {
        cssContent += theme.css
      }

      const sheet = new CSSStyleSheet()
      sheet.replaceSync(cssContent)

      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
      this._loadedSheet = sheet
    }
  }
}

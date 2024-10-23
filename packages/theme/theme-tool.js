import OldTheme from './old-theme-index.js'

export { OldTheme }

export default class TinyThemeTool {
  constructor(theme) {
    this._loadedSheet = theme
    this.changeTheme(theme)
  }

  changeTheme(theme) {
    if (this._loadedSheet) {
      document.adoptedStyleSheets = document.adoptedStyleSheets.filter((t) => t !== this._loadedSheet)
    }

    const sheet = new CSSStyleSheet()
    sheet.replaceSync(theme.data)

    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
    this._loadedSheet = sheet
  }
}

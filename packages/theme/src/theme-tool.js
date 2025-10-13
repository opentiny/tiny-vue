import tinyOldTheme from './old-theme-index.js'
import tinyAuroraTheme from './aurora-theme-index.js'
import tinyDarkTheme from './dark-theme-index.js'

export { tinyOldTheme, tinyAuroraTheme, tinyDarkTheme }

/**
 * 动态切换文档或影子根节点的样式类
 */
export default class TinyThemeTool {
  constructor(theme) {
    this.loaded = {} // 缓存已加载的样式
    if (theme) {
      this.changeTheme(theme)
    }
  }

  changeTheme(theme, target = document) {
    let loadedSheet = this.loaded[target]
    if (!loadedSheet) {
      loadedSheet = new CSSStyleSheet()
      target.adoptedStyleSheets = [...target.adoptedStyleSheets, loadedSheet]
      this.loaded[target] = loadedSheet
    }

    if (theme && (theme.data || theme.css)) {
      let cssContent = ''
      if (theme.data && typeof theme.data === 'object') {
        cssContent = Object.keys(theme.data)
          .map((key) => `--${key}: ${theme.data[key]}; `)
          .join('')

        cssContent = `:root, :host{${cssContent}}`
      }
      if (theme.css && typeof theme.css === 'string') {
        cssContent += theme.css
      }

      loadedSheet.replaceSync(cssContent)
    }
  }
}

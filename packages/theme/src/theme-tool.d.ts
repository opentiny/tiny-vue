interface ThemeData {
  id: string
  name: string
  cnName: string
  /** 全局css变量覆盖的对象，比如： { 'tv-base-color-brand' : '#1476ff' }*/
  data: object
  /** 需要追加的样式表 */
  css: string
}

export default class TinyThemeTool {
  changeTheme: (theme: ThemeData) => void
  constructor(theme: ThemeData)
}

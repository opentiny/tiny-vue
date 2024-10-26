interface ThemeData {
  /** 主题的ID */
  id?: string
  /** 主题的名称 */
  name?: string
  /** 主题的中文名称 */
  cnName?: string
  /**
   * 需要追加的全局css变量的对象
   * 比如： { 'tv-base-color-brand' : '#1476ff' } 会追加到 :root { --tv-base....... }
   * */
  data?: Record<string, string>
  /**
   * 需要追加的样式规则, 以覆盖或扩充组件的样式
   * 比如： .tiny-button { border:none;  }
   * */
  css?: string
}

/**
 * 动态切换文档或影子根节点的样式类
 * @example
 * const themeTool= new TinyThemeTool();
 * themeTool.changeTheme(xxx)
 */
export default class TinyThemeTool {
  constructor(theme?: ThemeData)
  /**
   * 变更目标上的主题。
   * 它会汇总 theme 下 data 和 css 属性的有效样式，挂载到target 节点下
   * @param {ThemeData} theme - 变量的主题数据
   * @param {Document | ShadowRoot} target - 变量的挂载点，不指定时默认为 document
   */
  changeTheme: (theme: ThemeData, target?: Document | ShadowRoot) => void
}

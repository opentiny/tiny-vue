/**
 *
 * @title Props
 */
export interface TinyScatterProps {
  /**
   * @zh 数据由指标和维度组成,“维度” 指的是数据的属性,“指标” 是量化衡量标准
   *
   */
  dimension?: object

  /**
   * @zh 配置项，各图表 Settings 属性配置请查阅各图表详情页面
   *
   */
  settings?: Object

  /**
   * @zh 设置图表容器的宽度。
   *
   */
  width?: string

  /**
   * @zh 设置图表容器的高度
   *
   */
  height?: string
}

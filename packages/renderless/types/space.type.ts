/** 支持的 size 类型定义：预设值或 px 数字，或水平/垂直间距数组 */
export type SpaceSize = 'small' | 'medium' | 'large' | string | number | Array<string | number>

/** 交叉轴对齐方式 */
export type SpaceAlign = 'stretch' | 'start' | 'center' | 'end' | 'baseline'

/** 主轴对齐方式 */
export type SpaceJustify = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly'

/** 布局方向：横向还是纵向 */
export type SpaceDirection = 'row' | 'column'

/** Space 组件 props 接口定义 */
export interface ISpaceProps {
  size?: SpaceSize
  align?: SpaceAlign
  justify?: SpaceJustify
  direction?: SpaceDirection
  wrap?: boolean
  order?: any[] // 可以拓展为具体对象结构
  customClass?: string
  customStyle?: string | Record<string, any>
}

/** renderless 返回的响应式数据结构 */
export interface ISpaceApi {
  state: {
    direction: SpaceDirection
    align: SpaceAlign
    justify: SpaceJustify
    wrap: boolean
    gapStyle: Record<string, string> // 一般是 margin 样式，如 { gap: '12px' }
  }
}

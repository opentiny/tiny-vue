/** 支持的 size 类型定义：预设值或 px 数字，或水平/垂直间距数组 */
export type SpaceSize = 'small' | 'medium' | 'large' | string | number | [string | number, string | number]

/** 交叉轴对齐方式，对应 CSS align-items */
export type SpaceAlign = 'stretch' | 'start' | 'center' | 'end' | 'baseline'

/** 主轴对齐方式，对应 CSS justify-content */
export type SpaceJustify = 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly'

/** 布局方向：横向还是纵向 */
export type SpaceDirection = 'row' | 'column'

/** Space 组件 props 接口定义 */
export interface SpaceProps {
  size?: SpaceSize
  align?: SpaceAlign
  justify?: SpaceJustify
  direction?: SpaceDirection
  wrap?: boolean
  order?: any[]
}

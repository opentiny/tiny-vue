/**
 * 滚动方向存储对象接口
 */
export interface ScrollDirStore {
  // 行高（Y方向）
  rowHeight?: number
  // 开始索引
  startIndex: number
  // 渲染大小
  renderSize: number
  // 偏移量大小
  offsetSize: number
  // 可视索引
  visibleIndex: number
  // 可视大小
  visibleSize: number
}

/**
 * 滚动加载存储对象接口
 */
export interface ScrollLoadStore {
  // 表格体高度
  bodyHeight: number
  // 滚动高度
  scrollHeight: number
}

/**
 * 滚动配置选项接口
 */
export interface ScrollConfig {
  // 多少条数据时启用虚拟滚动
  gt?: number
  // 当数据少于多少条时触发重新渲染
  oSize?: number
  // 每次渲染的数据条数
  rSize?: number
  // 可视区域的数据条数
  vSize?: number
  // 行高（Y方向）
  rHeight?: number
  // 自适应最优渲染方式
  adaptive?: boolean
}

/**
 * 优化选项接口
 */
export interface OptimizeOptions {
  // 动画
  animat?: boolean
  // 延迟hover处理
  delayHover?: number
  // X方向滚动配置
  scrollX?: ScrollConfig
  // Y方向滚动配置
  scrollY?: ScrollConfig
}

/**
 * 表格列接口
 */
export interface TableColumn {
  // 列ID
  id: string
  // 属性名
  property: string
  // 渲染宽度
  renderWidth: number
  // 其他属性...
  [key: string]: any
}

/**
 * 表格行接口
 */
export interface TableRow {
  // 表格行的键值对数据
  [key: string]: any
}

/**
 * 表格元素存储接口
 */
export interface ElementStore {
  // 主体表格元素
  'main-body-table'?: HTMLElement
  // Y轴空间元素
  'main-body-ySpace'?: HTMLElement
  // X轴空间元素
  'main-body-xSpace'?: HTMLElement
  // 其他元素...
  [key: string]: any
}

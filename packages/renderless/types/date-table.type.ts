import type { ExtractPropTypes } from 'vue'
import { DATEPICKER } from '../src/common'

export interface IDateTableRow {
  /** 列数，从0开始，[0, 6] */
  column: number

  /** 日期单元格元素的自定义class类名 */
  customClass: string

  /** 当前日期是否处于禁用态 */
  disabled: boolean

  /** 是否是一个日期范围的结束日期 */
  end: boolean

  /** 是否在一个日期范围的区间里 */
  inRange: boolean

  /** 行数，从0开始，[0, 5] */
  row: number

  /** 当前日期是否处于选中态 */
  selected: boolean

  /** 是否是一个日期范围的开始日期 */
  start: boolean

  /** 显示在日期表格中的文本 */
  text: number

  /** 日期单元格的类型，一共有4种类型：
   * - normal 当月的日期
   * - today 今天
   * - pre-month 上一月的日期
   * - next-month 下一月的日期
   * - week 周
   * */
  type: typeof DATEPICKER.Normal
    | typeof DATEPICKER.Today
    | typeof DATEPICKER.PreMonth
    | typeof DATEPICKER.NextMonth
    | typeof DATEPICKER.Week // 如果日期单元格的类型是 week，则不可点击
}

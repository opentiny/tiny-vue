export interface Column {
  type: string
  [property: string]: string
  visible: any
  renderCell: any
  renderHeader: any
}

export interface FieldConfig {
  render?: Function
}
export type FieldType = [string, FieldConfig]
export type Field = string | FieldType
export interface CardConfig {
  primaryField?: Field
  contentFields?: Array<Field>
  logoField?: Field
  tagFields?: Array<Field>
  tagColorFields?: Array<Field>
  minCardWidth?: number
  gapWidth?: number
  selectable?: boolean
  renderLink?: Function
  split?: string
  operable?: boolean
  few?: number
  showTip?: boolean
}
export interface Datas {
  primaryColumn: Column
  contentColumns: Array<Column>
  genParams: Function
  config: Config
  cardView: boolean
  row: Object
  selectionColumn: Column
  slotLink: Function
  operationColumn: Column
  hasType: boolean
  hasOperation: boolean
  hasLink: boolean
  rowClass: string
}
export interface Config {
  tableVm: Object
  cardConfig: CardConfig
}

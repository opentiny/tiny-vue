import { IRange } from './range.interface'

export interface ISelectionChange {
  editor: any
  oldRange: IRange | null
  range: IRange | null
  source: string
}

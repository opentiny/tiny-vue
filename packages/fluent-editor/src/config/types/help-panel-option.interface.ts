import { IHelpPanelItem } from './help-panel-item.interface'

export interface IHelpPanelOption {
  id: string
  title: string
  content: IHelpPanelItem[]
}

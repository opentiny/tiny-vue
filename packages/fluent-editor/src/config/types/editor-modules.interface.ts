import { ToolbarOption } from './type'

export interface IEditorModules {
  [key: string]: any
  clipboard?:
    | {
        matchers?: any[]
        matchVisual?: boolean
      }
    | boolean
  history?:
    | {
        delay?: number
        maxStack?: number
        userOnly?: boolean
      }
    | boolean
  keyboard?:
    | {
        bindings?: any
      }
    | boolean
  syntax?: boolean
  toolbar?:
    | (string | string[])[][]
    | ToolbarOption
    | string
    | {
        container?: string | string[] | ToolbarOption
        handlers?: {
          [key: string]: any
        }
      }
    | boolean
}

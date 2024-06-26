import { IEditorModules } from './editor-modules.interface'
import { EditorFormat } from './type'

export interface IEditorConfig {
  bounds?: HTMLElement | string
  debug?: 'error' | 'warn' | 'log' | false
  format?: EditorFormat
  formats?: any
  modules?: IEditorModules
  placeholder?: string
  readOnly?: boolean
  screenshotOnStaticPage?: boolean
  scrollingContainer?: HTMLElement | string | null
  theme?: string
  // Custom Config to track all changes or only changes by 'user'
  trackChanges?: 'user' | 'all'
  autoProtocol?: boolean
  editorPaste?: any
  uploadOption?: {
    imageAccept?: Array<string>[] | string
    fileAccept?: Array<string>[] | string
    isVideoPlay?: boolean
  }
}

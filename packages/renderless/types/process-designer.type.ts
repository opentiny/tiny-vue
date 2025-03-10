import type { ProcessDesignerProps } from '@/process-designer/src'

export type InternalEvent = (ev: Object) => void
export type IProcessDesignerProps = ProcessDesignerProps
export type On = (name: string, f: (e: InternalEvent) => void) => void
export interface IProcessDesignerExpose {
  modeler: Object | null
  eventBus: Object | null
  on: On | null
  canvas: Object | null
}
export interface IProcessDesignerState {
  showProperties: boolean
}

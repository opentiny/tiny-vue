import type { Canvas, Object, Line, Path, Polyline } from '@/types'
import type { MindMapProps } from '@/mind-map/src'
import type { ExtractPropTypes } from 'vue'

export interface Theme {
  bg: string[]
  text: string[]
  rounded: number
}

export type IMindMapProps = ExtractPropTypes<typeof MindMapProps>

export interface IRenderNode {
  instance: Object
  parnet: IRenderNode | null
  children: IRenderNode[]
  width: number | null
  height: number | null
  x: number | null
  y: number | null
  bg: string | null
  color: string | null
  edges: IRenderEdege[]
  layer: number
  get childrenHeight(): number
  get childrenWidth(): number
  addChild(node: IRenderNode, ctx: Canvas): void
  removeChild(node: IRenderNode, ctx: Canvas): void
}

export interface IRenderEdege {
  from: IRenderNode
  to: IRenderNode
  line: Line | Path | Polyline
}

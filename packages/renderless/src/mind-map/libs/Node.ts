import type { IRenderEdege, IRenderNode, Object } from '@/types'

export class RenderNode implements IRenderNode {
  instance: Object
  parnet: IRenderNode | null = null
  children: IRenderNode[] = []
  width: number | null = null
  height: number | null = null
  x: number | null = null
  y: number | null = null
  bg: string | null = null
  color: string | null = null
  edges: IRenderEdege[] = []
  layer: number = 0
  constructor(instance: Object) {
    this.instance = instance
  }

  get childrenHeight(): number {
    throw new Error('Method not implemented.')
  }

  get childrenWidth(): number {
    throw new Error('Method not implemented.')
  }

  addChild(): void {
    throw new Error(`Method not implemented.`)
  }

  removeChild(): void {
    throw new Error('Method not implemented.')
  }
}

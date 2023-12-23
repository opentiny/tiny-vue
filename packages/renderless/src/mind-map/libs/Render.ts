import type { Canvas, IRenderNode, Theme } from '@/types'

const preparePlugin = (canvas: Canvas) => {
  let isDragging = false
  let lastPosX = 0
  let lastPosY = 0
  let zoom = canvas.getZoom()
  return () => {
    canvas.on('mouse:down', ({ e }) => {
      if (e.ctrlKey) {
        isDragging = true
        lastPosX = e.clientX
        lastPosY = e.clientY
      }
    })
    canvas.on('mouse:wheel', ({ e }) => {
      const delta = e.deltaY
      zoom = canvas.getZoom()
      zoom *= 0.999 ** delta
      zoom = Math.max(0.01, Math.min(zoom, 20))
      canvas.zoomToPoint(
        {
          x: e.offsetX,
          y: e.offsetY
        },
        zoom
      )
    })
    canvas.on('mouse:move', ({ e }) => {
      if (isDragging) {
        const vpt = canvas.viewportTransform
        if (vpt) {
          vpt[4] += e.clientX - lastPosX
          vpt[5] += e.clientY - lastPosY
          lastPosX = e.clientX
          lastPosY = e.clientY
        }
      }
    })
    canvas.on('mouse:up', function (opt) {
      if (canvas.viewportTransform) {
        canvas.setViewportTransform(canvas.viewportTransform)
      }
      isDragging = false
    })
  }
}

export class Render {
  private el: HTMLCanvasElement
  private theme: Theme
  public canvas: Canvas
  public root: IRenderNode | null = null
  constructor(el: HTMLCanvasElement, CanvasFactory: typeof Canvas, theme: Theme) {
    this.el = el
    this.canvas = new CanvasFactory(el)
    this.theme = theme
    preparePlugin(this.canvas)()
  }

  add(node: IRenderNode, parent?: IRenderNode, x?: number, y?: number) {
    if (!parent) {
      this.root = node
      const { top, left } = this.canvas.getCenter()
      node.x = (x ?? left) / 2
      node.y = (y ?? top) / 2
      node.instance.set('top', node.y)
      node.instance.set('left', node.x)
      node.instance.setCoords()
      this.canvas.add(this.root.instance)
      return
    }
    parent.addChild(node, this.canvas)
  }
}

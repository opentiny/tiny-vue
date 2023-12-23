import type {
  ISharedRenderlessParamHooks,
  Canvas as FCanvas,
  Rect as FRect,
  IText as FIText,
  IMindMapProps,
  Group as FGroup,
  Theme,
  Object
} from '@/types'
import { onMounted } from 'vue'
import { Render } from './libs/Render'

export const api = ['state']
export const renderless = (
  props: IMindMapProps,
  { ref, reactive, getCurrentInstance, inject }: ISharedRenderlessParamHooks,
  // eslint-disable-next-line no-empty-pattern
  {}: never,
  {
    Canvas,
    Rect,
    IText,
    Group
  }: { Canvas: typeof FCanvas; Rect: typeof FRect; IText: typeof FIText; Group: typeof FGroup }
) => {
  const theme: Theme = (props.theme as Theme) ??
    inject('TINY_MIND-MAP-THEME') ?? {
      rounded: 8,
      bg: ['#b31312', '#a9a9a9'],
      text: ['#fff', '#000']
    }
  const canvas = ref<HTMLCanvasElement | null>(null)
  const state = reactive({
    canvas
  })
  const api = { state }
  onMounted(() => {
    const instance = getCurrentInstance()
    if (!instance) {
      throw new Error(
        'Can not find instance. Please open Issue: https://github.com/opentiny/tiny-vue/issues/new/choose'
      )
    }
    const canvasEl: HTMLCanvasElement = instance.refs.canvas as HTMLCanvasElement
    const text = new IText('hello-world', {
      originX: 'center',
      originY: 'center'
    })
    const { width, height } = text
    const render = new Render(canvasEl, Canvas, theme)
    const { canvas } = render
    let items: Object[] = []
    const ungroup = function (group) {
      items = group._objects
      group._restoreObjectsState()
      canvas.remove(group)
      canvas.renderAll()
      for (let i = 0; i < items.length; i++) {
        canvas.add(items[i])
      }
      canvas.renderAll()
    }
    const rect = new Rect({
      width: (width ?? 0) + 24,
      height: (height ?? 0) + 8,
      fill: theme.bg[0],
      rx: 8,
      ry: 8,
      originX: 'center',
      originY: 'center',
      selectable: false
    })
    const prepare = () => {
      const group = new Group([rect, text], {})
      canvas.add(group)
      canvas.centerObject(group)
      group.on('mousedblclick', () => {
        ungroup(group)
        canvas.setActiveObject(text)
        text.enterEditing()
        text.selectAll()
      })
    }
    text.on('changed', (e) => {
      const { width, height } = text
      rect.set('width', (width ?? 0) + 24)
      rect.set('height', (height ?? 0) + 8)
      rect.setCoords()
    })
    text.on('editing:exited', () => {
      const items: Object[] = []
      canvas.forEachObject((obj) => {
        items.push(obj)
        canvas.remove(obj)
      })
      const group = new Group(items, {})
      group.on('mousedblclick', () => {
        ungroup(group)
        canvas.setActiveObject(text)
        text.enterEditing()
        text.selectAll()
      })
      canvas.add(group)
    })

    prepare()
  })
  return api
}

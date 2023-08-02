<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/flowchart/vue'
import { props, setup, h, defineComponent, isVue3 } from '@opentiny/vue-common'
import Popover from '@opentiny/vue-popover'

export default defineComponent({
  props: [...props, 'data', 'config'],
  emits: ['click-link', 'click-blank', 'click-node'],
  setup(props: any, context: any): any {
    return setup({ props, context, renderless, api })
  },
  render() {
    const { state, omitText, config, clickNode } = this
    const { afterData, wrapperStyle, refreshKey } = state
    const { graph, afterNodes } = afterData
    const { font, popoverPlacement, colors, statusOngoing, statusFail, ongoingBackgroundColor } = config
    const ratio = graph.thin ? graph.thinValue : 1
    const padding: [string, number] = ['px-1.5', 12]

    return h(
      'div',
      {
        attrs: { 'data-tag': 'tiny-flow-chart' },
        class: 'relative',
        style: wrapperStyle,
        key: refreshKey
      },
      [
        h('canvas', {
          attrs: { 'data-tag': 'tiny-flow-chart__canvas', width: graph.width * ratio, height: graph.height * ratio },
          class: graph.thin ? 'scale-50 -translate-x-1/4 -translate-y-1/4' : 'absolute top-0 left-0',
          ref: 'canvas'
        }),
        ...afterNodes.map((afterNode: any) => {
          const { x, y, width, height, raw } = afterNode
          const { info, renderInner, renderOuter } = raw
          const { other, shape, status } = info
          const { main, auxi, error } = other
          const popoverProps = { props: { trigger: 'hover', placement: popoverPlacement }, class: 'w-full block' }

          const renderLabel = (label: string, type: string) => {
            if (!label) return null

            const t = omitText(label, font, width - padding[1])
            const fontClass = type === 'main' ? 'font-semibold text-color-text-primary' : 'text-color-text-secondary'
            const labelClass = `w-full text-center whitespace-nowrap overflow-hidden text-ellipsis ${padding[0]} ${fontClass}`
            const lableVnode = h('div', { slot: 'reference', class: labelClass }, label)

            if (!t.o) return lableVnode

            const def = h('span', label)
            const childNodes = isVue3 ? { default: () => def, reference: () => lableVnode } : [def, lableVnode]

            // @ts-ignore
            return h(Popover, popoverProps, childNodes)
          }

          let shapeVnodeChildren: any = null

          if (typeof renderInner === 'function') {
            shapeVnodeChildren = [renderInner(h, raw)]
          } else {
            const mainVnode = renderLabel(main, 'main')
            const auxiVnode = renderLabel(auxi, 'auxi')

            shapeVnodeChildren = [mainVnode, auxiVnode]
          }

          let shapeVnode: any = null

          if (typeof renderOuter === 'function') {
            shapeVnode = renderOuter(h, raw)
          } else {
            const borderColor = `border-color:${colors[status]};`
            const backgroundColor = status === statusOngoing ? `background-color:${ongoingBackgroundColor};` : ''
            const cls = [
              'w-full h-full border-0.5 sm:border border-solid flex flex-col items-center cursor-pointer',
              shape === 'circle' ? 'rounded-full justify-center' : '',
              shape === 'rectangle' ? 'rounded justify-evenly' : ''
            ]
            const styl = borderColor + backgroundColor

            if (status === statusFail && error) {
              const def = h('span', error)
              const ref = h('div', { class: cls, style: styl, slot: 'reference' }, shapeVnodeChildren)
              const childNodes = isVue3 ? { default: () => def, reference: () => ref } : [def, ref]

              popoverProps.class = 'w-full h-full block'

              // @ts-ignore
              shapeVnode = h(Popover, popoverProps, childNodes)
            } else {
              shapeVnode = h('div', { class: cls, style: styl, slot: 'reference' }, shapeVnodeChildren)
            }
          }

          const wrapperProps = {
            attrs: { 'data-tag': 'tiny-flow-chart__node' },
            style: `left:${x}px;top:${y}px;width:${width}px;height:${height}px;`,
            class: 'absolute',
            on: { click: (e: any) => clickNode({ afterNode }, e) }
          }

          return h('div', wrapperProps, [shapeVnode])
        })
      ]
    )
  }
})
</script>

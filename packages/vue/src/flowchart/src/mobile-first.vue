<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/flowchart/vue'
import { props, setup, h, defineComponent, isVue3, emitter } from '@opentiny/vue-common'
import Popover from '@opentiny/vue-popover'

const getRenderLabel =
  ({ omitText, font, width, padding, popoverProps }: any) =>
  (label: string, type: string) => {
    if (!label) return null

    const t = omitText(label, font, width - padding[1])
    const fontClass = type === 'main' ? 'font-semibold text-color-text-primary' : 'text-color-text-secondary'
    const labelClass = `w-full text-center whitespace-nowrap overflow-hidden text-ellipsis ${padding[0]} ${fontClass}`
    const lableVnode = h('div', { slot: 'reference', class: labelClass }, label)

    if (!t.o) return lableVnode

    const def = h('span', label)
    const childNodes = isVue3 ? { default: () => def, reference: () => lableVnode } : [def, lableVnode]

    // @ts-expect-error
    return h(Popover, popoverProps, childNodes)
  }

const renderShapeChildren = ({ renderInner, raw, renderLabel, main, auxi }: any) => {
  let shapeVnodeChildren: any = null

  if (typeof renderInner === 'function') {
    shapeVnodeChildren = [renderInner(h, raw)]
  } else {
    const mainVnode = renderLabel(main, 'main')
    const auxiVnode = renderLabel(auxi, 'auxi')

    shapeVnodeChildren = [mainVnode, auxiVnode]
  }

  return shapeVnodeChildren
}

const renderShapeVnode = (args: any) => {
  let { renderOuter, raw, colors, status, statusOngoing, ongoingBackgroundColor } = args
  let { shape, statusFail, error, shapeVnodeChildren, popoverProps } = args
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

      // @ts-expect-error
      shapeVnode = h(Popover, popoverProps, childNodes)
    } else {
      shapeVnode = h('div', { class: cls, style: styl, slot: 'reference' }, shapeVnodeChildren)
    }
  }

  return shapeVnode
}

const renderCondVnodes = ({ isDot, afterLinks, afterConfig, config }: any) => {
  if (!isDot) return []

  const cfg = afterConfig || config || {}
  const { condClass, renderCond } = cfg

  return afterLinks
    .filter(({ cond }: any) => cond)
    .map((afterLink: any) => {
      const { rect, raw } = afterLink
      const clazz = 'absolute flex justify-center items-center'
      const style = `left:${rect.x}px;top:${rect.y}px;width:${rect.w}px;height:${rect.h}px;`

      return h('div', { class: clazz, style }, [
        renderCond
          ? renderCond(h, afterLink, cfg)
          : h('div', { attrs: { title: raw.info.other.title }, class: condClass || '' }, raw.info.other.title)
      ])
    })
}

const renderGroupVnodes = ({ afterGroups, clickGroup }: any) => {
  if (!afterGroups) return []

  return afterGroups.map((afterGroup: any) => {
    const { title, titleClass } = afterGroup.raw
    let vnode = null

    if (title) {
      const titlePosition = afterGroup.raw.titlePosition
      const { width, height } = afterGroup
      const p0 = afterGroup.coords[0]
      const p3 = afterGroup.coords[3]
      const pos = { x: 0, y: p3.y + 8 }
      let centerClass = ''

      if (!titlePosition || titlePosition === 'top-left') {
        pos.x = p0.x + 8
      } else {
        pos.x = p3.x - width / 2
        centerClass = 'flex justify-center items-center'
      }

      vnode = h(
        'div',
        {
          class: `absolute ${centerClass}`,
          style: { left: `${pos.x}px`, top: `${pos.y}px`, width: `${width}px`, height: `${height}px` },
          on: { click: (e: any) => clickGroup(afterGroup, e) }
        },
        [h('div', { class: 'truncate', attrs: { title } }, [h('span', { class: titleClass }, title)])]
      )
    }

    return vnode
  })
}

export default defineComponent({
  emits: ['click-node', 'click-link', 'click-blank', 'click-group'],
  props: [...props, 'data', 'config'],
  setup(props: any, context: any): any {
    return setup({ props, context, renderless, api, extendOptions: { emitter } })
  },
  render() {
    const { state, omitText, config, clickNode, clickGroup } = this
    const { afterData, wrapperStyle, refreshKey } = state
    const { graph, afterNodes, afterLinks, afterGroups, afterConfig } = afterData
    const { font, popoverPlacement, colors, statusOngoing, statusFail, ongoingBackgroundColor } = config
    const ratio = graph.thin ? graph.thinValue : 1
    const padding: [string, number] = ['px-1.5', 12]
    const isDot = config.type === 'dot'
    const condVnodes = renderCondVnodes({ isDot, afterLinks, afterConfig, config })
    const groupVnodes = renderGroupVnodes({ afterGroups, clickGroup })

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
          const { info, renderInner } = raw
          const renderOuter = raw.renderOuter || config.renderOuter
          const { other, shape, status } = info
          const { main, auxi, error } = other
          const popoverProps = { props: { trigger: 'hover', placement: popoverPlacement }, class: 'w-full block' }
          const renderLabel = getRenderLabel({ omitText, font, width, padding, popoverProps })
          const shapeVnodeChildren = renderShapeChildren({ renderInner, raw, renderLabel, main, auxi })
          const args = { renderOuter, raw, colors, status, statusOngoing, ongoingBackgroundColor }

          Object.assign(args, { shape, statusFail, error, shapeVnodeChildren, popoverProps })

          const shapeVnode = renderShapeVnode(args)
          const wrapperProps = {
            attrs: { 'data-tag': 'tiny-flow-chart__node' },
            style: `left:${x}px;top:${y}px;width:${width}px;height:${height}px;`,
            class: ['absolute', { 'flex justify-center items-center': isDot }],
            on: { click: (e: any) => clickNode({ afterNode }, e) }
          }
          const outerClass = [
            'absolute w-6 h-6',
            { 'sm:w-4 sm:h-4': config.nodeSize === 'mini', 'sm:w-8 sm:h-8': config.nodeSize === 'medium' }
          ]

          return h('div', wrapperProps, [isDot ? h('div', { class: outerClass }, [shapeVnode]) : shapeVnode])
        }),
        ...condVnodes,
        ...groupVnodes
      ]
    )
  }
})
</script>

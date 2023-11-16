<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/flowchart/vue'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'
import { props, setup, h, directive, emitter, defineComponent } from '@opentiny/vue-common'
import { IconYes as iconYes, IconClose as iconClose } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['click-node', 'click-link', 'click-blank'],
  props: [...props, 'data', 'config'],
  directives: directive({ Clickoutside }),
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { emitter } })
  },
  render() {
    const { slots, state, clearHoverAfterLink, clickNode, config, getVars, omitText } = this
    const { afterData, dropdowns, refreshKey, wrapperStyle } = state
    const { afterNodes, allItem } = afterData

    const nodes = afterNodes.map((afterNode) => {
      const ret = getVars(afterNode, config)
      const { background, borderColor, half, isCompleteFn, isFailFn, isOngoingFn, statusName, white } = ret

      // wrapper
      const halfIconWrapperSize = half(config.iconWrapperSize)
      const wrapperStyle =
        `left:${afterNode.x}px;top:${afterNode.y}px;` +
        `width:${config.iconWrapperSize}px;height:${config.iconWrapperSize}px;` +
        `transform:translate(-${halfIconWrapperSize}px,-${halfIconWrapperSize}px);` +
        `background:${config.background};`

      // icon
      const halfIconSize = half(config.iconSize)
      const iconWrapperPadding = halfIconWrapperSize - halfIconSize
      const iconStyle =
        `width:${config.iconSize}px;height:${config.iconSize}px;` +
        `border-radius:${halfIconSize}px;border-color:${borderColor};` +
        `transform:translate(${iconWrapperPadding}px,${iconWrapperPadding}px);` +
        `background:${background};`

      // svg
      const svgFill = isCompleteFn() ? borderColor : isFailFn() ? white : ''
      const svgStyle = `font-size:${config.iconSvgSize}px;fill:${svgFill};`
      const iconComp = isCompleteFn() ? iconYes() : isFailFn() ? iconClose() : null

      // label
      const labelWidth = config.labelWidth || afterData.widths[1] - config.labelSpacing
      const labelHeight = config.labelHeight || afterData.heights[1] - config.labelSpacing
      const halfLabelWidth = half(labelWidth)
      const labelTransform = config.anchor === 'center' ? `translateX(${halfIconWrapperSize - halfLabelWidth}px)` : ''
      const labelStyle = `width:${labelWidth}px;height:${labelHeight}px;transform:${labelTransform};`

      // label item
      const baseStyle = `text-align:${config.anchor === 'center' ? 'center' : 'left'};`
      const titleStyle = baseStyle + `color:${isOngoingFn() ? config.colors[config.statusOngoing] : ''};`
      const dateStyle = baseStyle + `color:${config.labelDateColor};`

      // item & scopedSlot content
      const valid = (arr) => Array.isArray(arr) && arr.length > config.listThreshold
      const showItem = slots.content && valid(afterNode.raw.info.items)
      const itemStyle = `width:${config.listWidth}px;height:${config.iconWrapperSize}px;background:${config.background};`

      // params of scopedSlot
      const params = {
        afterNode,
        node: afterNode.raw,
        config,
        allItem,
        dropdowns,
        showPop: dropdowns[afterNode.raw.name]
      }
      let iconVnode, lableVnodes

      // scopedSlot icon
      if (slots.icon) {
        iconVnode = slots.icon(params)
      } else {
        iconVnode = h('div', { class: `tiny-flow-chart__node-icon ${statusName}`, style: iconStyle }, [
          iconComp ? h(iconComp, { class: 'tiny-flow-chart__node-svg', style: svgStyle }) : null
        ])
      }

      // scopedSlot label
      if (slots.label) {
        lableVnodes = [slots.label(params)]
      } else {
        const property = { class: 'label-item label-title', style: titleStyle }
        const t = omitText(afterNode.raw.info.label, config.font, labelWidth)

        if (t.o) {
          property.attrs = { title: afterNode.raw.info.label }
        }

        lableVnodes = [
          h('div', property, t.t),
          h('div', { class: 'label-item label-date', style: dateStyle }, afterNode.raw.info.date)
        ]
      }

      return h(
        'div',
        {
          class: 'tiny-flow-chart__node-icon-wrapper',
          style: wrapperStyle,
          on: { mousemove: clearHoverAfterLink, click: (e) => clickNode(params, e) }
        },
        [
          iconVnode,
          h('div', { class: 'tiny-flow-chart__node-label', style: labelStyle }, lableVnodes),
          showItem ? h('div', { class: 'tiny-flow-chart__node-item', style: itemStyle }, [slots.content(params)]) : null
        ]
      )
    })

    return h(
      'div',
      {
        class: 'tiny-flow-chart',
        style: wrapperStyle,
        key: refreshKey,
        directives: [{ name: 'clickoutside', expression: 'clearDropdown' }]
      },
      [
        h('canvas', {
          class: 'tiny-flow-chart__canvas',
          attrs: { width: config.width, height: config.height },
          ref: 'canvas'
        }),
        ...nodes
      ]
    )
  }
})
</script>

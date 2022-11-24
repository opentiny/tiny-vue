import {
  renderless,
  api
} from '@opentiny/vue-renderless/cascader-menu/vue'
import { $prefix, h, setup } from '@opentiny/vue-common'
import { t } from '@opentiny/vue-locale'
import Scrollbar from '@opentiny/vue-scrollbar'
import CascaderNode from '@opentiny/vue-cascader-node'

const renderNodeListFunc = (_vm) => () => {
  const events = { on: {} }
  const menuId = _vm.state.menuId
  const isHoverMenu = _vm.panel.state.isHoverMenu

  if (isHoverMenu) {
    events.on.expand = _vm.handleExpand
  }

  const mapHandler = (node, index) => {
    const uid = node.uid
    const hasChildren = node.hasChildren

    return (
      <cascader-node
        key={uid}
        node={node}
        node-id={`${menuId}-${index}`}
        data-haspopup={hasChildren}
        data-owns={hasChildren ? menuId : null}
        {...events}
      ></cascader-node>
    )
  }

  const nodes = _vm.nodes.map(mapHandler)

  return [
    ...nodes,
    isHoverMenu ? (
      <svg ref="hoverZone" class="tiny-cascader-menu__hover-zone"></svg>
    ) : null
  ]
}

export default {
  name: $prefix + 'CascaderMenu',
  components: {
    TinyScrollbar: Scrollbar,
    CascaderNode
  },
  props: {
    nodes: {
      type: Array,
      required: true
    },
    index: Number
  },
  inject: ['panel'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    const renderEmptyText = () => (
      <div class="tiny-cascader-menu__empty-text">
        {t('ui.cascader.noData')}
      </div>
    )

    const renderNodeList = renderNodeListFunc(this)

    const { state } = this
    const events = { nativeOn: {} }

    if (this.panel.state.isHoverMenu) {
      events.nativeOn.mousemove = this.handleMouseMove
    }

    return h(
      'tiny-scrollbar',
      {
        attrs: {
          role: 'menu',
          id: state.menuId
        },
        ref: 'cascaderMenu',
        class: 'tiny-cascader-menu',
        props: {
          tag: 'ul',
          'wrap-class': 'tiny-cascader-menu__wrap',
          'view-class': {
            'tiny-cascader-menu__list': true,
            'is-empty': state.isEmpty
          }
        },
        ...events
      },
      [state.isEmpty ? renderEmptyText(h) : renderNodeList(h)]
    )
  }
}

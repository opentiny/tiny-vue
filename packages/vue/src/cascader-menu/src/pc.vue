<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/cascader-menu/vue'
import { $props, $prefix, h, setup, defineComponent } from '@opentiny/vue-common'
import { t } from '@opentiny/vue-locale'
import Scrollbar from '@opentiny/vue-scrollbar'
import CascaderNode from '@opentiny/vue-cascader-node'
import type { ICascaderMenuApi, ICascaderMenuRenderlessParams } from '@opentiny/vue-renderless/types/cascader-menu.type'
import type { ICascaderPanelNode } from '@opentiny/vue-renderless/types/cascader-panel.type'
import '@opentiny/vue-theme/cascader-menu/index.less'

const renderNodeListFunc = (_vm: InstanceType<typeof CascaderMenu>) => () => {
  const events = { on: {} } as { on: { [key: string]: (...args: any[]) => any } }
  const menuId = _vm.state.menuId
  const isHoverMenu = _vm.panel.state.isHoverMenu

  if (isHoverMenu) {
    events.on.expand = _vm.handleExpand
  }

  const mapHandler = (node: ICascaderPanelNode, index: number) => {
    const uid = node.uid
    const hasChildren = node.hasChildren

    return (
      <cascader-node
        key={uid}
        node={node}
        node-id={`${menuId}-${index}`}
        data-haspopup={hasChildren}
        data-owns={hasChildren ? menuId : null}
        {...events}></cascader-node>
    )
  }

  const nodes = _vm.nodes.map(mapHandler)

  return [...nodes, isHoverMenu ? <svg ref="hoverZone" class="tiny-cascader-menu__hover-zone"></svg> : null]
}

const CascaderMenu = defineComponent({
  name: $prefix + 'CascaderMenu',
  components: {
    TinyScrollbar: Scrollbar,
    CascaderNode
  },
  props: {
    ...$props,
    nodes: {
      type: Array<ICascaderPanelNode>,
      required: true
    },
    index: Number
  },
  inject: {
    panel: {
      value: 'panel',
      default: null
    },
    cascaderRoot: {
      value: 'cascaderRoot',
      default: null
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true }) as unknown as ICascaderMenuApi &
      Pick<ICascaderMenuRenderlessParams, 'panel'>
  },
  render() {
    const parentVm = this.cascaderRoot || this.panel || this
    const noDataSlot = parentVm.slots['no-data'] && parentVm.slots['no-data']()
    const renderEmptyText = () => {
      return noDataSlot ? (
        <div class="tiny-cascader-menu__no-data">{noDataSlot}</div>
      ) : (
        <div class="tiny-cascader-menu__empty-text">{t('ui.cascader.noData')}</div>
      )
    }
    const renderNodeList = renderNodeListFunc(this)

    const { state } = this
    const events = { nativeOn: {} } as { nativeOn: { [key: string]: (...args: any[]) => any } }

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
      [state.isEmpty ? renderEmptyText() : renderNodeList()]
    )
  }
})

export default CascaderMenu
</script>

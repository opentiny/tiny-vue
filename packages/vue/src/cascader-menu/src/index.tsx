/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { renderless, api } from '@opentiny/vue-renderless/cascader-menu/vue'
import { $prefix, h, setup, defineComponent } from '@opentiny/vue-common'
import { t } from '@opentiny/vue-locale'
import Scrollbar from '@opentiny/vue-scrollbar'
import CascaderNode from '@opentiny/vue-cascader-node'
import type { ICascaderMenuApi, ICascaderMenuRenderlessParams } from '@opentiny/vue-renderless/types/cascader-menu.type'
import type { ICascaderPanelNode } from '@opentiny/vue-renderless/types/cascader-panel.type'

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
    nodes: {
      type: Array<ICascaderPanelNode>,
      required: true
    },
    index: Number
  },
  inject: ['panel'],
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true }) as unknown as ICascaderMenuApi &
      Pick<ICascaderMenuRenderlessParams, 'panel'>
  },
  render() {
    const renderEmptyText = () => <div class="tiny-cascader-menu__empty-text">{t('ui.cascader.noData')}</div>

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

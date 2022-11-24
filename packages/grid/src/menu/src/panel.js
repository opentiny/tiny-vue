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
import { getFuncText } from '@opentiny/vue-renderless/grid/utils'
import { h, $prefix } from '@opentiny/vue-common'
import Children from './children'

const onMenuItem = ({ tableInstance, item, getEventTargetNode, toKebab }) => ({
  click(event) {
    tableInstance.ctxMenuLinkEvent(event, item)
  },
  mouseover(event) {
    tableInstance.ctxMenuMouseoverEvent(event, item)
  },
  mouseout(event) {
    if (!getEventTargetNode(event, document.body, toKebab(item.code)).flag) {
      tableInstance.ctxMenuMouseoutEvent(event, item)
    }
  }
})

function createMenuItem(args) {
  let { ctxMenuStore, gIndex, getEventTargetNode, hasChild } = args
  let { index, item, show, tableInstance, toKebab } = args
  let res = [null]

  const classMap = {
    linkDisabled: 'link__disabled',
    linkActive: 'link__active'
  }

  if (item.visible !== false) {
    res = h(
      'li',
      {
        class: {
          [classMap.linkDisabled]: item.disabled,
          [classMap.linkActive]: item === ctxMenuStore.selected
        },
        key: `${gIndex}_${index}`
      },
      [
        h(
          'a',
          {
            class: `tiny-grid-menu__link ${toKebab(item.code)}`,
            on: onMenuItem({ tableInstance, item, getEventTargetNode, toKebab })
          },
          [
            item.prefixIcon ? h(item.prefixIcon, { class: 'tiny-grid-menu__link-prefix' }) : [null],
            h('span', { class: 'tiny-grid-menu__link-content' }, getFuncText(item.name)),
            h('i', {
              class: ['tiny-grid-menu__link-suffix', hasChild ? item.suffixIcon || 'suffix__haschild' : item.suffixIcon]
            })
          ]
        ),
        hasChild ? h(Children, { props: { item, gIndex, index, show, tableInstance, ctxMenuStore } }) : [null]
      ]
    )
  }

  return res
}

function getMenuItemCreator({ ctxMenuStore, getEventTargetNode, tableInstance, toKebab }) {
  return (options, gIndex) =>
    h(
      'ul',
      {
        class: 'tiny-grid-menu__option-wrapper',
        key: gIndex
      },
      options.map((item, index) => {
        const hasChild = item.children && item.children.length
        const show = item === ctxMenuStore.selected && ctxMenuStore.showChild
        let args = { ctxMenuStore, gIndex, getEventTargetNode, hasChild }

        Object.assign(args, { index, item, show, tableInstance, toKebab })

        return createMenuItem(args)
      })
    )
}

export default {
  name: `${$prefix}GridContextMenu`,
  props: {
    ctxMenuStore: Object
  },
  render() {
    let { ctxMenuStore, $parent: tableInstance } = this
    let { toKebab, getEventTargetNode } = tableInstance

    return h(
      'div',
      {
        class: [
          'tiny-grid-menu__wrapper',
          {
            show: ctxMenuStore.visible
          }
        ],
        style: ctxMenuStore.style
      },
      ctxMenuStore.list.map(
        getMenuItemCreator({
          ctxMenuStore,
          getEventTargetNode,
          tableInstance,
          toKebab
        })
      )
    )
  }
}

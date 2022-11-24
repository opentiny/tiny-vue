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
import {
  getFuncText,
  getDomNode
} from '@opentiny/vue-renderless/grid/utils'
import { h, $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'GridContextMenuChild',
  props: {
    item: Object,
    gIndex: Number,
    index: Number,
    show: Boolean,
    ctxMenuStore: Object,
    tableInstance: Object
  },
  render() {
    const { tableInstance, item, gIndex, index, show, ctxMenuStore } = this
    const { toKebab, getEventTargetNode } = tableInstance

    return h(
      'ul',
      {
        style: { left: '-9999999px' },
        class: ['tiny-grid-menu__clild-wrapper', { show }]
      },
      item.children.map((child, cIndex) => {
        // prettier-ignore
        return child.visible === false
          ? [null]
          : h(
            'li',
            {
              class: { 'link__disabled': child.disabled, 'link__active': child === ctxMenuStore.selectChild },
              key: `${gIndex}_${index}_${cIndex}`
            },
            [
              h(
                'a',
                {
                  class: `tiny-grid-menu__link ${toKebab(item.code)}`,
                  on: {
                    click(event) {
                      tableInstance.ctxMenuLinkEvent(event, child)
                    },
                    mouseover(event) {
                      tableInstance.ctxMenuMouseoverEvent(event, item, child)
                    },
                    mouseout(event) {
                      if(!getEventTargetNode(event, document.body, toKebab(item.code)).flag) {
                        tableInstance.ctxMenuMouseoutEvent(event, item, child)
                      }
                    }
                  }
                },
                [
                  child.prefixIcon ? h(child.prefixIcon, { class: 'tiny-grid-menu__link-prefix' }) : [null],
                  h('span', { class: 'tiny-grid-menu__link-content' }, getFuncText(child.name))
                ]
              )
            ]
          )
      })
    )
  },
  watch: {
    show(value) {
      if (value) {
        this.$el.style.top = '0px'
        this.$nextTick(() => {
          const { tableInstance, $el } = this
          const { width, height, bottom } = $el.getBoundingClientRect()
          const { visibleHeight, visibleWidth } = getDomNode()
          const ctxElem = tableInstance.$refs.ctxWrapper.$el
          const target = tableInstance.ctxMenuStore.target
          const { width: ctxWidth, right: ctxRight } =
            ctxElem.getBoundingClientRect()

          if (width + ctxRight > visibleWidth - 6) {
            $el.style.left = -6 - width + 'px'
          } else {
            $el.style.left = ctxWidth + 'px'
          }

          if (bottom > visibleHeight) {
            let offset = (target && target.clientHeight) || 0
            $el.style.top = offset - height + 'px'
          }
        })
      }
    }
  }
}

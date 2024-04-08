/**
 * MIT License
 *
 * Copyright (c) 2019 Xu Liangzhan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */
import { getFuncText, getDomNode } from '@opentiny/vue-renderless/grid/utils'
import { h, $prefix, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
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
        class: ['tiny-grid-menu__clild-wrapper', { show }]
      },
      item.children.map((child, cIndex) =>
        child.visible === false
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
                        if (!getEventTargetNode(event, document.body, toKebab(item.code)).flag) {
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
      )
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
          const { width: ctxWidth, right: ctxRight } = ctxElem.getBoundingClientRect()

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
})

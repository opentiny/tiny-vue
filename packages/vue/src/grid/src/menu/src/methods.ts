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
import { findIndexOf } from '@opentiny/vue-renderless/grid/static/'
import { hasChildrenList, getDomNode, emitEvent } from '@opentiny/vue-renderless/grid/utils'
import { Menus } from '../../adapter'

let getSelectItem = (subList) => {
  for (let i = 0; i < subList.length; i++) {
    let menu = subList[i]

    if (menu.visible !== false) {
      return menu
    }
  }
}

export default {
  // 关闭快捷菜单
  _closeMenu() {
    Object.assign(this.ctxMenuStore, {
      visible: false,
      selected: null,
      selectChild: null,
      showChild: false
    })

    return this.$nextTick()
  },
  // 处理菜单的移动
  moveCtxMenu({ event, keyCode, ctxMenuStore, property, operKey, operRest, menuList }) {
    let selectIndex = findIndexOf(menuList, (item) => ctxMenuStore[property] === item)
    let selectItem

    let ruleChains = [
      {
        match: () => keyCode === operKey,
        action: () => {
          if (!operRest || !hasChildrenList(ctxMenuStore.selected)) {
            ctxMenuStore.showChild = false
            ctxMenuStore.selectChild = null
          } else {
            ctxMenuStore.showChild = true
          }
        }
      },
      {
        match: () => keyCode === 38,
        action: () => {
          let subList = menuList.slice(0, selectIndex)
          subList = subList.reverse()
          selectItem = getSelectItem(subList)
          ctxMenuStore[property] = selectItem || menuList[menuList.length - 1]
        }
      },
      {
        match: () => keyCode === 40,
        action: () => {
          let subList = menuList.slice(selectIndex + 1)
          selectItem = getSelectItem(subList)
          ctxMenuStore[property] = selectItem || menuList[0]
        }
      },
      {
        match: () => ctxMenuStore[property] && (keyCode === 13 || keyCode === 32),
        action: () => {
          this.ctxMenuLinkEvent(event, ctxMenuStore[property])
        }
      }
    ]

    for (let i = 0; i < ruleChains.length; i++) {
      let ruleChain = ruleChains[i]
      if (ruleChain.match()) {
        ruleChain.action()
        break
      }
    }
  },
  // 快捷菜单事件处理
  handleGlobalContextmenuEvent(event) {
    let { ctxMenuOpts, ctxMenuStore, isCtxMenu } = this
    let layoutList = ['header', 'body', 'footer']

    if (!isCtxMenu) {
      this.closeMenu()
      this.closeFilter()
      return
    }
    if (
      ctxMenuStore.visible &&
      this.$refs.ctxWrapper &&
      this.getEventTargetNode(event, this.$refs.ctxWrapper.$el).flag
    ) {
      event.preventDefault()
      return
    }

    for (let i = 0; i < layoutList.length; i++) {
      let layout = layoutList[i]
      let eventTargetNode = this.getEventTargetNode(event, this.$el, `tiny-grid-${layout}__column`)
      let eventParams = { $table: this, columns: this.visibleColumn.slice(0), type: layout }

      if (eventTargetNode.flag) {
        let cell = eventTargetNode.targetElem
        let column = this.getColumnNode(cell)?.item
        if (!column) {
          return
        }
        let typePrefix = `${layout}-`
        Object.assign(eventParams, { cell, column, columnIndex: this.getColumnIndex(column) })

        if (layout === 'body') {
          let row = this.getRowNode(cell.parentNode).item
          typePrefix = ''
          Object.assign(eventParams, { row, rowIndex: this.getRowIndex(row) })
        }

        this.openContextMenu(event, layout, eventParams)
        emitEvent(this, `${typePrefix}cell-context-menu`, [eventParams, event])
        return
      }

      eventTargetNode = this.getEventTargetNode(event, this.$el, `tiny-grid__${layout}-wrapper`)

      if (eventTargetNode.flag) {
        if (ctxMenuOpts.trigger === 'cell') {
          event.preventDefault()
        } else {
          this.openContextMenu(event, layout, eventParams)
        }
        return
      }
    }
    this.closeMenu()
    this.closeFilter()
  },
  // 显示快捷菜单
  openContextMenu(event, type, params) {
    let { ctxMenuOpts, ctxMenuStore } = this
    let { visibleMethod } = ctxMenuOpts
    let config = ctxMenuOpts[type]
    if (!config) {
      this.closeFilter()
      return
    }
    let { disabled, options } = config
    if (disabled) {
      event.preventDefault()
      this.closeFilter()
      return
    }
    if (!options || !options.length) {
      this.closeFilter()
      return
    }
    params.options = options
    let end = () => {
      if (visibleMethod && !visibleMethod(params, event)) {
        this.closeMenu()
        return
      }
      event.preventDefault()
      let { scrollLeft, scrollTop, visibleHeight, visibleWidth } = getDomNode()
      let { clientX, clientY } = event
      let left = clientX + scrollLeft
      let top = clientY + scrollTop
      const style = { left: `${left}px`, top: `${top}px` }
      Object.assign(ctxMenuStore, {
        args: params,
        list: options,
        selected: null,
        selectChild: null,
        showChild: false,
        style,
        visible: true
      })
      let next = () => {
        let ctxElem = this.$refs.ctxWrapper.$el
        let { clientWidth, clientHeight } = ctxElem
        let offsetLeft = clientX + clientWidth - visibleWidth
        let offsetTop = clientY + clientHeight - visibleHeight
        offsetLeft > -10 && (ctxMenuStore.style.left = `${left - clientWidth}px`)
        offsetTop > -10 && (ctxMenuStore.style.top = `${top - clientHeight}px`)
      }
      this.$nextTick(next)
    }
    this.preventEvent(event, 'event.show_menu', params, null, end)
    this.closeFilter()
  },
  ctxMenuMouseoverEvent(event, item, child) {
    let { ctxMenuStore } = this

    event.preventDefault()
    event.stopPropagation()

    Object.assign(ctxMenuStore, {
      selectChild: child,
      selected: item,
      target: event.target
    })

    !child && (ctxMenuStore.showChild = hasChildrenList(item))
  },
  ctxMenuMouseoutEvent(event, item) {
    let { ctxMenuStore } = this

    !item.children && (ctxMenuStore.selected = null)

    Object.assign(ctxMenuStore, {
      selectChild: null,
      showChild: null,
      target: null
    })
  },
  // 快捷菜单点击事件
  ctxMenuLinkEvent(event, menu) {
    if (menu.disabled || (menu.children && menu.children.length)) {
      return
    }

    let { ctxMenuStore } = this
    let ctxMenuMethod = Menus.get(menu.code)
    let params = { $table: this, menu, ...ctxMenuStore.args }

    ctxMenuMethod && ctxMenuMethod.call(this, params, event)

    emitEvent(this, 'context-menu-click', [params, event])
    this.closeMenu()
  },
  toKebab(code) {
    return typeof code === 'string' ? code.replace(/\B([A-Z])/g, '-$1').toLowerCase() : 'menu-code'
  }
}

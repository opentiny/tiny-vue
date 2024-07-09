import debounce from '@opentiny/vue-renderless/common/deps/debounce'
import { getStyle } from '@opentiny/vue-renderless/common/deps/dom'
import { createTooltipRange, processContentMethod } from './handleTooltip'

let focusSingle = null

export default {
  // 显示 tooltip 依赖的 popper 组件
  activateTooltip(tooltip, isValid) {
    if (!this.tasks.activateTooltip) {
      this.tasks.activateTooltip = debounce(300, () => {
        let sign = isValid !== undefined ? isValid : focusSingle

        if (sign) {
          tooltip.state.popperElm && (tooltip.state.popperElm.style.display = 'none')
          tooltip.doDestroy()
          tooltip.show()
          setTimeout(tooltip.updatePopper)
        }
      })
    }

    this.tasks.activateTooltip()
  },
  // 显示 tooltip 依赖的 popper 组件
  activateTooltipValid(tooltip) {
    if (!this.tasks.activateTooltipValid) {
      this.tasks.activateTooltipValid = debounce(50, () => {
        tooltip.handleShowPopper()
        setTimeout(() => tooltip.updatePopper())
      })
    }

    this.tasks.activateTooltipValid()
  },
  // 显示 tooltip
  handleTooltip(event, column, row, showTip, isHeader) {
    const cell = isHeader
      ? event.currentTarget.querySelector('.tiny-grid-cell-text')
      : event.currentTarget.querySelector('.tiny-grid-cell')

    // 当用户悬浮在排序或者筛选图标按钮时不应该显示tooltip，使用头部插槽且文本超长时也应该显示
    if (isHeader && event.target !== cell && !cell?.contains(event.target)) {
      return
    }
    const tooltip = this.$refs.tooltip
    const wrapperElem = cell
    const content = cell.innerText.trim() || cell.textContent.trim()
    const { contentMethod } = this.tooltipConfig
    const range = createTooltipRange({ _vm: this, cell, column, isHeader })
    const rangeWidth = range.getBoundingClientRect().width
    const padding =
      (parseInt(getStyle(cell, 'paddingLeft'), 10) || 0) + (parseInt(getStyle(cell, 'paddingRight'), 10) || 0)
    const isOverflow = rangeWidth + padding > cell.offsetWidth || wrapperElem.scrollWidth > wrapperElem.clientWidth

    // content如果是空字符串，但是用户配置了contentMethod，则同样也可以触发提示
    if ((contentMethod || content) && (showTip || isOverflow)) {
      Object.assign(this.tooltipStore, { row, column, visible: true })

      if (tooltip) {
        processContentMethod({ _vm: this, column, content, contentMethod, event, isHeader, row, showTip })
        tooltip.state.referenceElm = cell
        tooltip.state.popperElm && (tooltip.state.popperElm.style.display = 'none')

        focusSingle = true
        this.activateTooltip(tooltip)
      }
    }

    return this.$nextTick()
  },
  // 提供关闭tips提示的方法
  clostTooltip() {
    let tooltip = this.$refs.tooltip
    Object.assign(this.tooltipStore, {
      content: null,
      row: null,
      visible: false,
      column: null
    })
    focusSingle = false
    if (tooltip && typeof tooltip.setExpectedState === 'function') {
      tooltip.setExpectedState(false)
      this.debounceClose(tooltip)
    }
    return this.$nextTick()
  },
  // 添加代码让用户代码可以划入popper
  debounceClose(tooltip) {
    if (!this.tasks.debounceClose) {
      this.tasks.debounceClose = debounce(50, () => {
        tooltip.handleClosePopper()
      })
    }

    this.tasks.debounceClose()
  },
  // 触发表头 tooltip 事件
  triggerHeaderTooltipEvent(event, params) {
    let { tooltipStore } = this
    let { column, showHeaderTip } = params
    if (tooltipStore.column !== column || !tooltipStore.visible) {
      // 在 v3.0 中废弃 label
      this.handleTooltip(event, column, null, showHeaderTip, true)
    }
  },

  // 触发表尾 tooltip 事件
  triggerFooterTooltipEvent(event, params) {
    let { column } = params
    let tooltipStore = this.tooltipStore
    if (tooltipStore.column !== column || !tooltipStore.visible) {
      this.handleTooltip(event, column)
    }
  },
  // 触发 tooltip 事件
  triggerTooltipEvent(event, params) {
    let { editConfig, editStore, tooltipStore } = this
    let { actived } = editStore
    let { row, column, showTip } = params
    if (editConfig) {
      if (
        (editConfig.mode === 'row' && actived.row === row && column.editor) ||
        (actived.row === row && actived.column === column)
      ) {
        return
      }
    }
    if (tooltipStore.column !== column || tooltipStore.row !== row || !tooltipStore.visible) {
      this.handleTooltip(event, column, row, showTip)
    }
  }
}

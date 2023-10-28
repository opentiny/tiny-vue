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
import { isArray, isBoolean } from '@opentiny/vue-renderless/grid/static/'
import { getFilters, emitEvent } from '@opentiny/vue-renderless/grid/utils'
import { getDataset } from '@opentiny/vue-renderless/common/dataset'
import { hooks } from '@opentiny/vue-common'

function getClassName(elem) {
  if (elem && elem.nodeType) {
    if (elem instanceof SVGElement) {
      return elem.className.baseVal
    }

    if (elem instanceof HTMLElement) {
      return elem.className
    }
  }

  return ''
}

function closest(elem, parentClassName) {
  if (elem && elem.nodeType) {
    let clsReg = new RegExp(`\\b${parentClassName}\\b`)
    let matches

    do {
      matches = getClassName(elem).match(clsReg)

      if (matches) {
        return elem
      }

      if (elem === document.body) {
        break
      }
    } while ((elem = elem.parentNode))
  }

  return null
}

const columnfilters = (visibleColumn) => {
  const filters = {}

  visibleColumn.forEach((column) => {
    let { property, filter } = column

    if (filter) {
      const {
        condition: { type, input, relation, value, empty, dateList }
      } = filter

      if (type === 'input') {
        filters[property] = { type, value: { text: input, relation } }
      } else if (type === 'enum') {
        filters[property] = { type, value }
      } else if (type === 'empty') {
        filters[property] = { type, value: empty }
      } else if (type === 'custom') {
        filters[property] = { type }
      } else if (type === 'date') {
        filters[property] = { type, value: { dateList, relation } }
      } else if (type === 'extend') {
        filters[property] = { type, value }
      } else if (type === 'extend1') {
        filters[property] = { type, value }
      } else if (type === 'extend2') {
        filters[property] = { type, value }
      }

      filter.hasFilter =
        value.length || input || dateList?.some(Boolean) || input === 0 || empty !== null || type === 'custom'
    }
  })

  return filters
}

export default {
  filter(field, callback) {
    let column = this.getColumnByField(field)
    let filters = column.filter.options

    if (callback) {
      let rest = callback(filters)

      if (isArray(rest)) {
        column.filters = getFilters(rest)
      }
    }

    return Promise.resolve(filters)
  },
  getOptions({ property, filter }) {
    const { values, value = 'value', label = 'label', dataset } = filter

    if (typeof values === 'function') {
      return values({ property, filter })
    } else if (dataset) {
      return getDataset({ dataset, service: this.$service })
    } else {
      const newOptions = (values || []).map((item) => ({
        label: item[label],
        value: item[value],
        checked: !!item.checked
      }))

      if (!values) {
        const optionMap = {}
        const tableData = this.getTableData()

        tableData.fullData.forEach((row) => {
          const key = row[property]

          // 去重
          if (!optionMap[key]) {
            newOptions.push({ value: key, label: key, checked: false })
          }

          optionMap[key] = true
        })
      }

      return Promise.resolve(newOptions)
    }
  },

  /**
   * 点击筛选事件
   */
  triggerFilterEvent(event, column, params) {
    let { filterStore } = this
    let { filter } = column
    let inputFilterRelation

    if (filterStore.id !== column.id && filterStore.visible) {
      this.closeFilter()
    }

    if (filter && typeof filter.inputFilter === 'object' && filter.inputFilter.relation) {
      if (filter.condition.relation === 'equals' && filter.inputFilter.relation && !column.isInitTriggerFlag) {
        inputFilterRelation = filter.inputFilter.relation
        column.isInitTriggerFlag = true
      }

      filter.condition.relation = inputFilterRelation || filter.condition.relation
    }

    if (filterStore.column === column && filterStore.visible) {
      filterStore.visible = false
    } else {
      let targetElem = event.target
      let targetElemParentTr = closest(targetElem, 'tiny-grid-header__row')

      this.getOptions(column).then((options) => {
        Object.assign(filterStore, {
          args: params,
          layout: filter.layout, // 布局配置，用户可以自定义想要的筛选项
          enumable: filter.enumable,
          inputFilter: filter.inputFilter,
          simpleFilter: filter.simpleFilter,
          onResetInputFilter: filter.onResetInputFilter,
          extends: filter.extends,
          defaultFilter: isBoolean(filter.defaultFilter) ? filter.defaultFilter : true,
          options: options.map(({ value, label }) => {
            return {
              value,
              label,
              checked: filter.condition.value.includes(value)
            }
          }),
          condition: { ...filter.condition },
          multi: isBoolean(filter.multi) ? filter.multi : true,
          column,
          visible: true,
          targetElem: hooks.markRaw(targetElem),
          targetElemParentTr: hooks.markRaw(targetElemParentTr),
          id: column.id
        })
      })
    }
  },
  // 确认筛选
  confirmFilterEvent() {
    let { visibleColumn, filterStore, scrollXLoad, scrollYLoad, remoteFilter, lastScrollLeft } = this as any

    filterStore.visible = false

    // 如果是服务端筛选，则跳过本地筛选处理
    if (!remoteFilter) {
      this.handleTableData(true).then(this.refreshStyle)
    }

    // 服务端请求参数
    const filters = columnfilters(visibleColumn)

    if (this.$grid.pagerConfig) {
      this.$grid.pagerConfig.currentPage = 1
    }

    emitEvent(this, 'filter-change', [{ filters, $table: this }])
    this.updateFooter()

    // 表头过滤动作应保持水平滚动条位置不变
    let restoreScrollLeft = () => this.scrollTo(lastScrollLeft)

    if (scrollXLoad || scrollYLoad) {
      scrollXLoad && this.clearScroll() // 滚动后过滤会错拉

      if (scrollYLoad) {
        this.updateScrollYSpace()
      }
    }

    this.closeFilter()
    this.clearSelection()
    this.$nextTick().then(this.recalculate).then(restoreScrollLeft)
  },
  clearFilter(field) {
    let column = arguments.length ? this.getColumnByField(field) : null
    let filterStore = this.filterStore
    const filterData = this.$grid?.filterData || {}
    let handleClear = (column) => {
      let { filter } = column

      if (filter) {
        filter.condition = {
          input: '',
          relation: 'equals',
          empty: null,
          value: []
        }
        filter.hasFilter = false
        filter.custom = null
        // 删除fetchData请求参数中的筛选参数
        delete filterData[column.property]
      }
    }

    if (column) {
      handleClear(column)
    } else {
      this.visibleColumn.forEach(handleClear)
    }

    if (!column || column !== filterStore.column) {
      Object.assign(filterStore, {
        style: null,
        options: [],
        column: null,
        multi: false,
        visible: false
      })
    }

    // 如果清除所有列筛选或者参数传递的清除列存在才发送事件，从reload执行过来的不发送事件
    if (field === true || column) {
      emitEvent(this, 'filter-change', [{ filters: {}, $table: this }])
    }

    this.clearSelection()

    return this.updateData()
  }
}

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
        condition: { type, input, relation, value, empty }
      } = filter

      if (type === 'input') {
        filters[property] = { type, value: { text: input, relation } }
      } else if (type === 'enum') {
        filters[property] = { type, value }
      } else if (type === 'empty') {
        filters[property] = { type, value: empty }
      } else if (type === 'custom') {
        filters[property] = { type }
      } else if (type === 'extend') {
        filters[property] = { type, value }
      } else if (type === 'extend1') {
        filters[property] = { type, value }
      } else if (type === 'extend2') {
        filters[property] = { type, value }
      }

      filter.hasFilter = value.length || input || input === 0 || empty !== null || type === 'custom'
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
          enumable: filter.enumable,
          inputFilter: filter.inputFilter,
          onResetInputFilter: filter.onResetInputFilter,
          advancedFilter: filter.advancedFilter,
          extends: filter.extends,
          defaultFilter: isBoolean(filter.defaultFilter) ? filter.defaultFilter : true,
          options: options.map(({ value, label }) => ({ value, label, checked: ~filter.condition.value.indexOf(value) })),
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
    let { visibleColumn, filterStore, scrollXLoad, scrollYLoad, remoteFilter, lastScrollLeft } = this

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

    field === true && emitEvent(this, 'filter-change', [{ filters: {}, $table: this }]) // 从reload执行过来的不发送事件

    this.clearSelection()

    return this.updateData()
  }
}

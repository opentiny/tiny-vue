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

import Radio from '../../radio'
import Button from '@opentiny/vue-button'
import PopperJS from '@opentiny/vue-renderless/common/deps/popper'
import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'
import { extend } from '@opentiny/vue-renderless/common/object'
import { t } from '@opentiny/vue-locale'
import { hooks, h, $prefix } from '@opentiny/vue-common'
import { iconCheck, iconCheckedSur, iconHalfselect, iconSearch } from '@opentiny/vue-icon'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'

const renderInputArgs = ({ _vm, inputFilter }) => {
  let isAddbyProgram = false

  if (typeof inputFilter.relations_addby !== 'undefined') {
    isAddbyProgram = inputFilter.relations_addby === 'program'
  }

  let inputRelations

  if (isAddbyProgram) {
    inputRelations = inputFilter.relations_backup
  } else {
    inputRelations = inputFilter.relations
  }

  if (!inputRelations) {
    inputRelations = [
      { label: _vm.i18n('ui.grid.filter.prefix'), value: 'startwith' },
      { label: _vm.i18n('ui.grid.filter.equal'), value: 'equals' },
      { label: _vm.i18n('ui.grid.filter.include'), value: 'contains' }
    ]
  }

  return { isAddbyProgram, inputRelations }
}

const renderInputProps = ({ InputComponent, condition, event, inputFilter, isNativeInput, prop }) => {
  let inputProps = {
    style: 'width:100%',
    on: {
      [event]: (value) => {
        condition.input = value && value.target ? value.target.value : value
      }
    },
    ref: 'filterInputComponent'
  }

  if (isNativeInput) {
    inputProps = Object.assign(inputProps, {
      domProps: {
        [prop]: condition.input
      },
      attrs: {
        ...inputFilter.attrs
      }
    })
  } else {
    InputComponent = hooks.toRaw(InputComponent)
    inputProps = Object.assign(inputProps, {
      props: {
        ...inputFilter.attrs,
        [prop]: condition.input
      }
    })
  }

  return { inputProps, InputComponent }
}

const iconRender = function (checked, index, halfChecked) {
  const CheckedSur = iconCheckedSur()
  const Check = iconCheck()
  const HalfCheck = iconHalfselect()

  const props = {
    class: 'tiny-svg-size',
    tabindex: index
  }

  if (typeof halfChecked === 'undefined') {
    return checked ? <CheckedSur {...props} class="is-checked" /> : <Check {...props} />
  } else {
    return checked ? (
      <CheckedSur {...props} class="is-checked" />
    ) : halfChecked ? (
      <HalfCheck {...props} class="is-checked" />
    ) : (
      <Check {...props} />
    )
  }
}

const renderEnumableOptions = ({ iconRender, _vm, filterStore, selectAll, searchable }) => {
  const resultList = filterStore.options.filter((value) => value.label?.toString().includes(filterStore.searchValue))

  if (resultList.length) {
    const filterList = resultList.map((item, index) => (
      <li
        class={['tiny-grid__filter-option', { selected: item.checked }]}
        onClick={() => {
          if (!filterStore.multi) {
            // 单选
            filterStore.options.forEach((option: { checked: boolean }) => {
              option.checked = option === item
            })
            _vm.filterEnum()
          } else {
            // 多选
            item.checked = !item.checked
          }
        }}>
        {filterStore.multi ? iconRender(item.checked, index + 1) : null}
        <a title={item.label}> {item.label} </a>
      </li>
    ))
    const isShowAllSelect = selectAll && (!filterStore.multi || (!searchable && filterStore.multi))

    return isShowAllSelect
      ? [
          <li
            class="tiny-grid__filter-option"
            onClick={() => {
              const isAllSelected = filterStore.options.every((item) => item.checked)
              filterStore.options.forEach((option) => {
                option.checked = !isAllSelected
              })

              // 单选直接触发筛选
              if (!filterStore.multi) {
                _vm.filterEnum()
              }
            }}>
            {filterStore.multi
              ? iconRender(
                  filterStore.options.every((item) => item.checked),
                  0,
                  filterStore.options.some((item) => item.checked)
                )
              : null}
            <a title={_vm.i18n('ui.grid.filter.allSelect')}> {_vm.i18n('ui.grid.filter.allSelect')}</a>
          </li>,
          ...filterList
        ]
      : filterList
  } else {
    return [<li class="tiny-grid__filter-empty">{_vm.i18n('ui.grid.emptyText')}</li>]
  }
}

export default {
  name: $prefix + 'GridFilter',
  props: {
    filterStore: Object,
    optimizeOpts: Object
  },
  inject: {
    $grid: {
      default: null
    }
  },
  watch: {
    id() {
      this.updatePanel()
    },
    visible() {
      this.showAdvance = false
      this.updatePanel()
    }
  },
  data() {
    return {
      popperJS: null,
      showAdvance: false,
      showAdvItems: false,
      listPopper: null
    }
  },
  render() {
    const {
      filterStore,
      $grid,
      optimizeOpts,
      renderInput,
      renderEnumable,
      renderDefault,
      renderExtends,
      renderBase,
      renderSimple
    } = this as any
    const { args, column, options, layout = 'input,enum,default,extends,base' } = filterStore
    const layoutMap = {
      input: renderInput,
      enum: renderEnumable,
      default: renderDefault,
      extends: renderExtends,
      base: renderBase,
      simple: renderSimple
    }

    // 支持用户自定义筛选项的个数和显示顺序和位置
    const quickFilter = layout.split(',').map((item) => layoutMap[item] && layoutMap[item].call(this))

    const map = {
      filterActive: 'filter__active'
    }

    return (
      <div
        class={[
          'tiny-grid__wrapper',
          'tiny-grid__filter-wrapper',
          'filter__prevent-default',
          {
            'tiny-grid__animat': optimizeOpts.animat,
            [map.filterActive]: filterStore.visible,
            'tiny-grid__filter-simple': layout.includes('simple')
          }
        ]}
        style={filterStore.style}>
        {filterStore.visible ? (
          <div class={['tiny-grid__filter-body', { 'show-addvance': this.showAdvance }]}>
            {column.slots && column.slots.filter
              ? column.slots.filter({
                  $grid,
                  values: options,
                  args,
                  context: this
                })
              : quickFilter}
          </div>
        ) : null}
      </div>
    )
  },
  computed: {
    condition() {
      return this.filterStore.condition
    },
    visible() {
      return this.filterStore.visible
    },
    id() {
      return this.filterStore.id
    },
    i18n() {
      return t || this.$t
    }
  },
  methods: {
    updatePanel: debounce(20, function () {
      this.correctRelations()

      const inputFilter = this.filterStore.inputFilter

      if (inputFilter) {
        const { relations } = inputFilter

        if (inputFilter !== true && !relations.filter((r) => r.value === this.condition.relation).length) {
          this.resetInput()
        }
      }

      this.popperJS && this.popperJS.destroy() && (this.popperJS = null)
      this.$nextTick(() => {
        const { targetElemParentTr, id } = this.filterStore
        const reference = targetElemParentTr && targetElemParentTr.querySelector(`svg.tiny-grid-filter__btn.${id}`)
        const popper = this.$el

        popper.style.zIndex = PopupManager.nextZIndex()

        if (this.visible) {
          this.popperJS = new PopperJS(reference, popper, {
            placement: 'bottom-end'
          }).update()
        }
      })
    }),
    // 基础清除选项
    renderBase() {
      return (
        <ul class="tiny-grid__filter-panel filter-panel__clear">
          <li class="tiny-grid__filter-option" onClick={this.resetFilter}>
            <a class="item-content">{this.i18n('ui.grid.filter.clear')}</a>
          </li>
          <li class="tiny-grid__filter-option" onClick={this.clearFilter}>
            <a class="item-content">{this.i18n('ui.grid.filter.clearAll')}</a>
          </li>
        </ul>
      )
    },
    // 设置筛选条件为空和不为空
    renderDefault() {
      const { condition, filterStore } = this

      if (!filterStore.defaultFilter) {
        return null
      }

      return (
        <ul class="tiny-grid__filter-panel filter-panel__default">
          <li
            class={['tiny-grid__filter-option', { active: condition.empty === true }]}
            onClick={() => {
              this.filterNull(true)
            }}>
            <a class="item-content">{this.i18n('ui.grid.filter.empty')}</a>
          </li>
          <li
            class={['tiny-grid__filter-option', { active: condition.empty === false }]}
            onClick={() => {
              this.filterNull(false)
            }}>
            <a class="item-content">{this.i18n('ui.grid.filter.unempty')}</a>
          </li>
        </ul>
      )
    },
    // 筛选扩展项
    renderExtends() {
      const { filterStore } = this

      if (!filterStore.extends) {
        return null
      }

      return (
        <ul class="tiny-grid__filter-panel filter-panel__clear">
          {filterStore.extends.map((item) => (
            <li
              class="tiny-grid__filter-option"
              onClick={() => {
                this.filterExtends(item)
              }}>
              <a class="item-content">{item.label}</a>
            </li>
          ))}
        </ul>
      )
    },
    // 输入筛选项
    renderInput() {
      this.correctRelations()
      const { condition, filterStore } = this as any
      const { inputFilter } = filterStore

      if (!inputFilter) return null

      let { isAddbyProgram, inputRelations } = renderInputArgs({ _vm: this, inputFilter })
      let InputComponent = inputFilter.component || 'input'
      const isNativeInput = InputComponent === 'input'
      const model = InputComponent.model || {}
      const prop = isNativeInput ? 'value' : model.prop || 'modelValue'
      const event = isNativeInput ? 'input' : model.event || 'update:modelValue'
      let ret = renderInputProps({ InputComponent, condition, event, inputFilter, isNativeInput, prop })
      let inputProps = ret.inputProps
      InputComponent = ret.InputComponent

      return (
        <ul class="tiny-grid__filter-panel">
          {isAddbyProgram ? null : (
            <li class="tiny-grid__filter-option filter-option__radios">
              {inputRelations.map(({ label, value, method }) => (
                <Radio
                  modelValue={condition.relation}
                  label={value}
                  onChange={(value) => {
                    condition.relation = value
                    condition.method =
                      method ||
                      function () {
                        return true
                      }
                  }}>
                  {label}
                </Radio>
              ))}
            </li>
          )}
          <li class="filter-option__input">{h(InputComponent, inputProps)}</li>
          <li class="tiny-grid__filter-option filter-option__btns">
            <Button type="primary" onClick={this.filterInput}>
              {this.i18n('ui.base.confirm')}
            </Button>
            <Button onClick={this.resetInput}>{this.i18n('ui.base.reset')}</Button>
            <Button onClick={this.close}>{this.i18n('ui.base.cancel')}</Button>
          </li>
        </ul>
      )
    },
    // 选择筛选项
    renderEnumable() {
      const { filterStore } = this

      if (!filterStore.enumable) return null

      return (
        <div class="tiny-grid__filter-panel filter-panel__enum">
          <ul class="tiny-grid__filter-options">{renderEnumableOptions({ iconRender, _vm: this, filterStore })}</ul>
          {filterStore.multi ? (
            <div class="tiny-grid__filter-option filter-option__btns">
              <Button type="primary" onClick={this.filterEnum}>
                {this.i18n('ui.base.confirm')}
              </Button>
              <Button
                onClick={() => {
                  filterStore.visible = false
                }}>
                {this.i18n('ui.base.cancel')}
              </Button>
            </div>
          ) : null}
        </div>
      )
    },
    // 简化版筛选按钮对齐，对齐管理侧规范
    renderSimple() {
      const { filterStore } = this as any
      const { simpleFilter } = filterStore

      if (!simpleFilter) {
        return null
      }

      if (simpleFilter.isDatetime) {
        const DatePickComponents = simpleFilter?.datetimeConfig?.component
          ? hooks.toRaw(simpleFilter.datetimeConfig.component)
          : null

        const format = simpleFilter?.datetimeConfig?.format
        const valueFormat = simpleFilter?.datetimeConfig?.valueFormat
        const type = simpleFilter?.datetimeConfig?.type
        const max = simpleFilter?.datetimeConfig?.max
        const min = simpleFilter?.datetimeConfig?.min

        const pickerOptions = {
          disabledDate(time) {
            return time.getTime() < min || time.getTime() > max
          }
        }

        return (
          <div class="tiny-grid__filter-panel filter-panel__enum filter-panel__simple">
            <div class="tiny-grid__filter-date-title">{this.i18n('ui.grid.filter.dateTips')}</div>
            <ul class="tiny-grid__filter-date">
              <li class="tiny-grid__filter-date-item">
                <span>{this.i18n('ui.grid.filter.startDate')}</span>
                <DatePickComponents
                  format={format}
                  type={type}
                  value-format={valueFormat}
                  picker-options={pickerOptions}
                  class="tiny-grid__filter-date-pick"
                  onChange={(value) => {
                    if (filterStore.datetimeConfig) {
                      filterStore.datetimeConfig.startDate = value
                    }
                  }}
                  v-model={filterStore.startDate}></DatePickComponents>
              </li>
              <li class="tiny-grid__filter-date-item">
                <span>{this.i18n('ui.grid.filter.endDate')}</span>
                <DatePickComponents
                  format={format}
                  type={type}
                  value-format={valueFormat}
                  picker-options={pickerOptions}
                  class="tiny-grid__filter-date-pick"
                  v-model={filterStore.endDate}
                  onChange={(value) => {
                    if (filterStore.datetimeConfig) {
                      filterStore.datetimeConfig.endDate = value
                    }
                  }}></DatePickComponents>
              </li>
            </ul>
            <div class="tiny-grid__filter-option filter-option__btns filter-option__date-button">
              <Button size="mini" onClick={this.filterDate}>
                {this.i18n('ui.base.confirm')}
              </Button>
              <Button
                size="mini"
                onClick={() => {
                  filterStore.visible = false
                }}>
                {this.i18n('ui.base.cancel')}
              </Button>
            </div>
          </div>
        )
      } else {
        const IconSearch = iconSearch()

        const InputComponents = simpleFilter?.searchConfig?.component
          ? hooks.toRaw(simpleFilter.searchConfig.component)
          : null

        return (
          <div class="tiny-grid__filter-panel filter-panel__enum filter-panel__simple">
            {InputComponents ? (
              <InputComponents
                v-model={filterStore.searchValue}
                onChange={(value) => {
                  if (filterStore.searchConfig) {
                    filterStore.searchConfig.searchValue = value
                  }
                }}
                class="tiny-grid__filter-search"
                clearable
                v-slots={{
                  suffix: () => {
                    return <IconSearch></IconSearch>
                  }
                }}
              />
            ) : null}
            <ul class="tiny-grid__filter-options">
              {renderEnumableOptions({
                iconRender,
                _vm: this,
                filterStore,
                selectAll: simpleFilter.selectAll,
                searchable: Boolean(InputComponents)
              })}
            </ul>
            {filterStore.multi ? (
              <div class="tiny-grid__filter-option filter-option__btns">
                <Button size="mini" onClick={this.filterEnum}>
                  {this.i18n('ui.base.confirm')}
                </Button>
                <Button
                  size="mini"
                  onClick={() => {
                    filterStore.visible = false
                  }}>
                  {this.i18n('ui.base.cancel')}
                </Button>
              </div>
            ) : null}
          </div>
        )
      }
    },
    renderSlot(h) {
      let { $parent: $table, filterStore } = this
      let { args, column } = filterStore
      let { slots } = column

      if (slots && slots.filter) {
        return slots.filter.call($table, { $table, context: this, ...args }, h)
      }
    },
    // 全部筛选事件
    filterCheckAllEvent(event, value) {
      let filterStore = this.filterStore

      filterStore.options.forEach((item) => {
        item.checked = value
      })

      filterStore.isAllSelected = value
      filterStore.isIndeterminate = false
    },
    // 筛选发生改变 check 是否检查默认值的有效性，当自定义relations时，需要检查
    resetInput() {
      this.correctRelations()

      const { inputFilter, onResetInputFilter } = this.filterStore

      if (inputFilter) {
        const { relations, relation } = this.filterStore.inputFilter

        this.condition.input = ''

        if (typeof onResetInputFilter === 'function') {
          onResetInputFilter(this.$refs.filterInputComponent)
        }

        let defaultrelation = 'equals'
        let relationValues
        let relationValue

        if (Array.isArray(relations) && relations.length) {
          this.condition.method = relations[0].method
          defaultrelation = relations[0].value || 'equals'

          for (let i = 0; i < relations.length; i++) {
            if (relations[i].value === 'equals') {
              defaultrelation = 'equals'
              break
            }
          }

          relationValues = relations.map((r) => r.value)

          if (relation && ~relationValues.indexOf(relation)) {
            relationValue = relation
          }
        }

        this.condition.relation = relationValue || defaultrelation
      }
    },
    // 确认筛选
    confirmFilter(type) {
      const {
        filterStore: { column }
      } = this as any

      this.condition.type = type
      column.filter.condition = extend(true, {}, this.condition)
      this.$parent.confirmFilterEvent()
    },
    // 对外的暴露自定义提交方法
    commitFilter() {
      let {
        filterStore: { column }
      } = this

      column.filter.condition.type = 'custom'
      this.$parent.confirmFilterEvent()
    },
    // 重置当前列筛选
    resetFilter() {
      this.condition.value = null
      this.condition.input = ''
      this.condition.empty = null
      this.condition.value = []
      this.condition.type = null
      this.resetInput()
      this.confirmFilter()
    },
    // 清除所有列筛选
    clearFilter() {
      this.$parent.clearFilter(true)
    },
    filterNull(empty) {
      this.condition.value = []
      this.condition.input = ''
      this.condition.empty = empty
      this.confirmFilter('empty')
    },
    filterExtends(item) {
      this.condition.value = item.value || item.label
      this.condition.method = item.method
      this.confirmFilter('extend')
    },
    filterInput() {
      this.condition.value = []
      this.condition.empty = null
      this.confirmFilter('input')
    },
    filterDate() {
      const { startDate, endDate } = this.filterStore
      this.condition.input = ''
      this.condition.value = []
      this.condition.empty = null
      this.condition.dateList = [startDate, endDate]

      if (startDate && !endDate) {
        this.condition.relation = 'greaterThan'
      } else if (!startDate && endDate) {
        this.condition.relation = 'greaterThan'
      } else if (startDate && endDate) {
        this.condition.relation = 'interveningBetween'
      }

      this.confirmFilter('date')
    },
    filterEnum() {
      this.condition.input = ''
      this.condition.empty = null
      this.condition.value = this.filterStore.options.filter((item) => item.checked).map((check) => check.value)
      this.confirmFilter('enum')
    },
    close() {
      let { filterStore } = this

      filterStore.visible = false
    },
    correctRelations() {
      if (this.filterStore && typeof this.filterStore.inputFilter === 'object') {
        const relations = this.filterStore.inputFilter.relations
        const relation = this.filterStore.inputFilter.relation || 'equals'

        if (!relations || (Array.isArray(relations) && relations.length === 0)) {
          this.filterStore.inputFilter.relations = [{ label: relation, value: relation }]
          this.filterStore.inputFilter.relations_addby = 'program'
          this.filterStore.inputFilter.relations_backup = relations
        }
      }
    }
  },
  setup() {
    const instance = hooks.getCurrentInstance().proxy

    hooks.onBeforeUnmount(() => {
      instance.popperJS && instance.popperJS.destroy() && (instance.popperJS = null)
    })
  }
}

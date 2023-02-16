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
import Button from '../../button'
import PopperJS from '@opentiny/vue-renderless/common/deps/popper'
import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'
import { extend } from '@opentiny/vue-renderless/common/object'
import { t } from '@opentiny/vue-locale'
import { hooks, h, $prefix } from '@opentiny/vue-common'
import { iconCheck, iconCheckedSur, iconDefinedFiltration, iconLeftWard, iconDeltaDown } from '@opentiny/vue-icon'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'

function renderAdvancePanelAdvList({ _vm }) {
  return _vm.showAdvList && _vm.showAdvItems ? (
    <ul class="adv-list" ref="advlist">
      {['等于', '不等于', '包含', '不包含', '开头是', '结尾是'].map((item) => (
        <li class="adv-item">{item}</li>
      ))}
    </ul>
  ) : null
}

function renderAdvancePanelButtons({ _vm }) {
  return (
    <li class="adv-row adv-btn">
      <Button type="primary" onClick={_vm.filterInput}>
        {_vm.i18n('ui.base.confirm')}
      </Button>
      <Button onClick={_vm.close}>{_vm.i18n('ui.base.cancel')}</Button>
    </li>
  )
}

function renderAdvancePanelRadios() {
  return (
    <ul class="adv-row">
      <li class="tiny-grid__filter-option filter-option__radios">
        <Radio
          modelValue={'and'}
          label="startwith"
        >
          And
        </Radio>
        <Radio
          modelValue={'or'}
          label="equals"
        >
          Or
        </Radio>
      </li>
    </ul>
  )
}

function renderAdvancePanelAdvHeader({ _vm, ArrowLeft }) {
  return (
    <div
      class="adv-header"
      onClick={() => {
        _vm.showAdvance = false
        _vm.showAdvItems = false
        _vm.updatePanel()
      }}
    >
      <ArrowLeft></ArrowLeft>自定义筛选方式
    </div>
  )
}

function renderAdvancePanelAdvRow({ _vm, DeltaDown }) {
  return (
    <div class="adv-row">
      <input class="filter-option__input" readonly onFocus={_vm.showAdvList} onBlur={_vm.hideAdvList} />
      <DeltaDown class="drop-arrow"></DeltaDown>
      <input class="filter-option__input"></input>
    </div>
  )
}

function renderInputArgs({ _vm, inputFilter }) {
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

function renderInputProps({ InputComponent, condition, event, inputFilter, isNativeInput, prop }) {
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

function renderEnumableEmpty({ _vm }) {
  return [<li class="tiny-grid__filter-empty">{_vm.i18n('ui.grid.emptyText')}</li>]
}

function renderEnumableOptions({ iconRender, _vm, filterStore }) {
  return filterStore.options.map((item, index) => (
    <li
      class={['tiny-grid__filter-option', { selected: item.checked }]}
      onClick={() => {
        if (!filterStore.multi) {
          // 单选
          filterStore.options.forEach((option) => {
            option.checked = option === item
          })
          _vm.filterEnum()
        } else {
          // 多选
          item.checked = !item.checked
        }
      }}
    >
      {filterStore.multi ? iconRender(item.checked, index) : null}
      <a title={item.label}> {item.label} </a>
    </li>
  ))
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
    const { filterStore, $grid, optimizeOpts } = this
    let { args, column, options } = filterStore

    const quickFilter = [this.renderInput(), this.renderEnumable(), this.renderDefault(), this.renderExtends(), this.renderBase()]

    const map = {
      filterActive: 'filter__active'
    }

    return (
      <div
        class={[
          'tiny-grid',
          'tiny-grid__filter-wrapper',
          'filter__prevent-default',
          {
            'tiny-grid__animat': optimizeOpts.animat,
            [map.filterActive]: filterStore.visible
          }
        ]}
        style={filterStore.style}
      >
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
    updatePanel: debounce(20, function() {
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

        this.visible &&
          (this.popperJS = new PopperJS(reference, popper, {
            placement: 'bottom-end'
          }).update())
      })
    }),
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
            }}
          >
            <a class="item-content">{this.i18n('ui.grid.filter.empty')}</a>
          </li>
          <li
            class={['tiny-grid__filter-option', { active: condition.empty === false }]}
            onClick={() => {
              this.filterNull(false)
            }}
          >
            <a class="item-content">{this.i18n('ui.grid.filter.unempty')}</a>
          </li>
        </ul>
      )
    },
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
              }}
            >
              <a class="item-content">{item.label}</a>
            </li>
          ))}
        </ul>
      )
    },
    renderAdvance() {
      const DefinedFiltration = iconDefinedFiltration()
      const { filterStore } = this

      if (!filterStore.advancedFilter) {
        return null
      }

      return (
        <ul class="tiny-grid__filter-panel">
          <li class="contextmenu-item =">
            <DefinedFiltration class="tiny-svg-size defined-filtration" />
            <a
              onClick={() => {
                this.showAdvance = true
                this.updatePanel()
              }}
              class="item-content"
            >
              高级筛选
            </a>
          </li>
        </ul>
      )
    },
    renderAdvancePanel() {
      const ArrowLeft = iconLeftWard()
      const DeltaDown = iconDeltaDown()

      if (!this.showAdvance) {
        return null
      }

      let _vm = this

      const AdvRow = renderAdvancePanelAdvRow({ _vm, DeltaDown })

      return (
        <div class="tiny-grid__filter-advance">
          {renderAdvancePanelAdvHeader({ _vm, ArrowLeft })}
          <AdvRow></AdvRow>
          {renderAdvancePanelRadios()}
          <AdvRow></AdvRow>
          {renderAdvancePanelButtons({ _vm })}
          {renderAdvancePanelAdvList({ _vm })}
        </div>
      )
    },
    renderInput() {
      this.correctRelations()
      const { condition, filterStore } = this
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
                      function() {
                        return true
                      }
                  }}
                >
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
    renderEnumable() {
      const { filterStore } = this

      if (!filterStore.enumable) return null

      const CheckedSur = iconCheckedSur()
      const Check = iconCheck()

      const iconRender = function(checked, index) {
        const props = {
          class: 'tiny-svg-size',
          tabindex: index
        }
        return checked ? <CheckedSur {...props} class="is-checked" /> : <Check {...props} />
      }

      return (
        <div class="tiny-grid__filter-panel filter-panel__enum">
          <ul class="tiny-grid__filter-options">
            {!filterStore.options.length ? renderEnumableEmpty({ _vm: this }) : renderEnumableOptions({ iconRender, _vm: this, filterStore })}
          </ul>
          {filterStore.multi ? (
            <div class="tiny-grid__filter-option filter-option__btns">
              <Button type="primary" onClick={this.filterEnum}>
                {this.i18n('ui.base.confirm')}
              </Button>
              <Button
                onClick={() => {
                  filterStore.visible = false
                }}
              >
                {this.i18n('ui.base.cancel')}
              </Button>
            </div>
          ) : null}
        </div>
      )
    },
    showAdvList(e) {
      this.showAdvItems = true
      this.listPopper && this.listPopper.destroy() && (this.listPopper = null)

      this.$nextTick(() => {
        const reference = e.target
        const popper = this.$refs.advlist

        popper.style.zIndex = PopupManager.nextZIndex()
        this.listPopper = new PopperJS(reference, popper, {
          placement: 'bottom-start'
        }).update()
      })
    },
    hideAdvList() {
      this.listPopper && this.listPopper.destroy() && (this.listPopper = null)
      this.showAdvItems = false
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
      let {
        filterStore: { column }
      } = this

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

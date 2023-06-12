<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<script lang="tsx">
import Pager from '@opentiny/vue-pager-item'
import Popover from '@opentiny/vue-popover'
import { t } from '@opentiny/vue-locale'
import { $prefix, h, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/pager/vue'
import {
  iconTriangleDown,
  iconChevronLeft,
  iconChevronRight
} from '@opentiny/vue-icon'
import { emitEvent } from '@opentiny/vue-renderless/common/event'

export default defineComponent({
  name: $prefix + 'Pager',
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    total: Number,
    pageCount: Number,
    pagerCount: {
      type: Number,
      validator(value) {
        return (value | 0) === value && value > 2 && value < 22 && value % 2 === 1
      },
      default: 7
    },
    currentPage: {
      type: Number,
      default: 1
    },
    layout: String,
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100]
      }
    },
    prevText: String,
    nextText: String,
    hideOnSinglePage: Boolean,
    mode: String,
    appendToBody: {
      type: Boolean,
      default: true
    },
    isBeforePageChange: Boolean,
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0,
      lastEmittedPage: -1,
      userChangePageSize: false,
      internalTotal: this.total
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
  render() {
    const layout = this.internalLayout

    if (!layout) {
      return null
    }

    if (this.hideOnSinglePage && (!this.internalPageCount || this.internalPageCount === 1)) {
      return null
    }

    const TEMPLATE_MAP = {
      prev: <prev></prev>,
      jumper: <jumper isBeforePageChange={this.isBeforePageChange} onBeforePageChange={this.beforeJumperChangeHandler} max={this.internalPageCount}></jumper>,
      current: <current></current>,
      pager: (
        <pager
          isBeforePageChange={this.isBeforePageChange}
          onBeforePageChange={this.beforePagerChangeHandler}
          currentPage={this.internalCurrentPage}
          pageCount={this.internalPageCount}
          pagerCount={this.pagerCount}
          onChange={this.handleCurrentChange}
          disabled={this.disabled}
        ></pager>
      ),
      next: <next></next>,
      sizes: (
        <sizes
          ref="sizes"
          isBeforePageChange={this.isBeforePageChange}
          onBeforePageChange={this.beforeSizeChangeHandler}
          popperAppendToBody={this.popperAppendToBody === false ? false : this.appendToBody}
          popperClass={this.popperClass}
          pageSizes={this.pageSizes}
        ></sizes>
      ),
      slot: typeof this.slots.default === 'function' ? this.slots.default() : this.slots.default,
      total: <total></total>
    }

    const components = layout.split(',').map((item) => item.trim())

    const templateChildren = []

    components.forEach((compo) => {
      templateChildren.push(TEMPLATE_MAP[compo])
    })

    return <div class={['tiny-pager tiny-pager__number', this.size ? 'tiny-pager--' + this.size : '', this.disabled ? 'is-disabled' : '']}>{templateChildren}</div>
  },
  components: {
    Prev: {
      render() {
        const ChevronLeft = iconChevronLeft()

        return (
          <button
            type="button"
            class="tiny-pager__btn-prev"
            disabled={this.$parent.disabled || this.$parent.internalCurrentPage <= 1}
            onClick={this.$parent.prev}
          >
            {this.$parent.prevText ? <span>{this.$parent.prevText}</span> : <ChevronLeft class="tiny-svg-size" />}
          </button>
        )
      }
    },
    Next: {
      render() {
        const ChevronRight = iconChevronRight()

        return (
          <button
            type="button"
            class="tiny-pager__btn-next"
            disabled={this.$parent.disabled || this.$parent.internalCurrentPage === this.$parent.internalPageCount || this.$parent.internalPageCount === 0}
            onClick={this.$parent.next}
          >
            {this.$parent.nextText ? <span>{this.$parent.nextText}</span> : <ChevronRight class="tiny-svg-size" />}
          </button>
        )
      }
    },
    Current: {
      render() {
        const { internalCurrentPage } = this.$parent

        return (
          <div class="tiny-pager__group tiny-unselect">
            <ul class="tiny-pager__pages">
              <li class="is-active" v-text={internalCurrentPage}></li>
            </ul>
          </div>
        )
      }
    },
    Sizes: {
      props: {
        pageSizes: Array,
        appendToBody: Boolean,
        isBeforePageChange: Boolean,
        popperClass: String,
        popperAppendToBody: {
          type: Boolean,
          default: true
        }
      },
      data() {
        return {
          showSizes: false
        }
      },
      watch: {
        pageSizes: {
          immediate: true,
          handler(newVal) {
            if (Array.isArray(newVal)) {
              this.$parent.internalPageSize = newVal.includes(this.$parent.pageSize) ? this.$parent.pageSize : this.pageSizes[0]
            }
          }
        }
      },
      render() {
        const TriangleDown = iconTriangleDown()

        const scopedSlots = {
          reference: () => (
            <div slot="reference" class="tiny-pager__popover">
              <div class="tiny-pager__input">
                <input disabled={this.$parent.disabled} type="text" readonly="readonly" value={this.$parent.internalPageSize} />
                <div class="tiny-pager__input-btn"><TriangleDown class={['tiny-svg-size', this.showSizes ? 'tiny-svg-size__reverse-180' : '']} /></div>
              </div>
            </div>
          ),
          default: () => (
            <div class="tiny-pager tiny-pager__selector-body">
              <ul class="tiny-pager__selector-poplist">
                {this.pageSizes.map((item) => (
                  <li
                    class={['list-item', item === this.$parent.internalPageSize ? 'is-selected select-pre' : '']}
                    val={item}
                    title={item}
                    onClick={() => this.handleChange(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        }

        return (
          <div class={['tiny-pager__group', 'tiny-pager__sizes']}>
            {h(Popover, {
              props: {
                placement: 'bottom-start',
                appendToBody: this.popperAppendToBody,
                trigger: 'click',
                popperClass: 'tiny-pager__selector' + (this.popperClass ? ' ' + this.popperClass : ''),
                visibleArrow: false,
                disabled: this.$parent.disabled
              },
              on: {
                show: this.handleShowPopover,
                hide: this.handleHidePopover
              },
              scopedSlots,
              ref: 'sizesList'
            })}
          </div>
        )
      },
      methods: {
        handleChange(val) {
          if (val !== this.$parent.internalPageSize) {
            const callback = () => {
              if (!this.$parent.beforeChangeHandler()) {
                return false
              }

              this.$parent.internalPageSize = val = parseInt(val, 10)
              this.$parent.userChangePageSize = true
              this.showSizes = false
              this.$parent.$emit('update:pageSize', val)
              this.$parent.$emit('size-change', val)
              this.$parent.$emit('page-change', {
                currentPage: this.$parent.internalCurrentPage,
                pageSize: val,
                total: this.$parent.internalTotal
              })
              this.$refs.sizesList.state.showPopper = false
            }

            if (this.isBeforePageChange) {
              let newPageSize = val
              let currentPageSize = this.$parent.internalPageSize
              let params = { newPageSize, currentPageSize, callback }

              this.$parent.beforePagerChangeHandler(params)
            } else {
              callback()
            }
          }
        },
        handleShowPopover() {
          if (this.$parent.disabled) return this.showSizes = false
          this.showSizes = true
        },
        handleHidePopover() {
          this.showSizes = false
        }
      }
    },
    Jumper: {
      props: {
        isBeforePageChange: Boolean,
        disabled: Boolean,
        min: {
          type: Number,
          default: 1
        },
        max: {
          type: Number,
          default: 10
        },
        initValue: {
          type: Number,
          default: 1
        }
      },
      data() {
        return {
          backupValue: String(this.initValue),
          value: String(this.initValue)
        }
      },
      watch: {
        '$parent.internalCurrentPage': function (currentPage) {
          const value = String(currentPage)

          if (this.value !== value) {
            this.value = value
          }
        }
      },
      methods: {
        handleFocus(e) {
          this.backupValue = e.target.value
        },
        handleInput(e) {
          if (!e.target.value) {
            this.value = ''
          } else if (/^\d+$/.test(e.target.value)) {
            this.value = Number(e.target.value) || 1
          }
          e.target.value = this.value
        },
        handleChange() {
          this.parseValueNumber()

          const callback = () => {
            this.handleClick()
          }
          const rollback = () => {
            this.value = String(this.backupValue)
          }
          const newPage = this.value
          const currentPage = this.backupValue

          if (this.isBeforePageChange && newPage !== currentPage) {
            const params = { newPage, currentPage, callback, rollback }

            this.$parent.beforePagerChangeHandler(params)
          } else {
            callback()
          }
        },
        handleClick() {
          this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(this.value)
          this.$parent.emitChange()
        },
        isValueNumber() {
          return !isNaN(Number(this.value))
        },
        parseValueNumber() {
          let value = Number(
            String(this.value)
              .split(/[^0-9-+.]/)
              .join('')
          )

          if (isNaN(value)) {
            value = this.min
          }

          value = value.toFixed(0)

          const min = this.min
          const max = this.max

          if (value >= max) {
            this.value = String(max)
          } else if (value <= min) {
            this.value = String(min)
          } else {
            this.value = String(value)
          }
        }
      },
      render() {
        return h(
          'div',
          {
            class: ['tiny-pager__group']
          },
          [
            h('div', { class: ['tiny-pager__goto'] }, [
              h('input', {
                domProps: {
                  value: this.value
                },
                attrs: {
                  type: 'text',
                  disabled: this.disabled
                },
                on: {
                  focus: this.handleFocus,
                  input: this.handleInput,
                  change: this.handleChange
                },
                ref: 'input'
              }),
              h(
                'button',
                {
                  class: ['tiny-btn'],
                  attrs: { type: 'button' },
                  on: { click: this.handleClick }
                },
                [t('ui.page.goto')]
              )
            ])
          ]
        )
      }
    },
    Total: {
      render() {
        return typeof this.$parent.internalTotal === 'number'
          ? (
          <div class={['tiny-pager__group', this.$parent.disabled ? 'is-disabled' : '']}>
            {' '}
            <div class={['tiny-pager__total', this.$parent.size ? 'tiny-pager--' + this.$parent.size : '']}>
              <span>{t('ui.page.total')}：</span>
              <span class="tiny-pager__total-allpage">{this.$parent.internalTotal}</span>
            </div>
          </div>
            )
          : (
              ''
            )
      }
    },
    Pager
  },
  methods: {
    beforeSizeChangeHandler(params) {
      const { newPageSize, currentPageSize, callback } = params
      const newPage = 1
      const currentPage = this.internalCurrentPage
      const temp = {
        newPage,
        newPageSize,
        currentPage,
        currentPageSize,
        callback
      }

      this.$emit('before-page-change', temp)
    },
    beforePagerChangeHandler(params) {
      const { newPage, currentPage, callback } = params
      const newPageSize = this.internalPageSize
      const currentPageSize = this.internalPageSize
      const temp = {
        newPage,
        newPageSize,
        currentPage,
        currentPageSize,
        callback
      }

      this.$emit('before-page-change', temp)
    },
    beforeJumperChangeHandler(params) {
      const { newPage, currentPage, callback, rollback } = params
      const newPageSize = this.internalPageSize
      const currentPageSize = this.internalPageSize
      const temp = {
        newPage,
        newPageSize,
        currentPage,
        currentPageSize,
        callback,
        rollback
      }

      this.$emit('before-page-change', temp)
    },
    copyEmit(...args) {
      this.$emit.apply(this, args)
    },
    beforeChangeHandler(val = -1) {
      return emitEvent(this.copyEmit, 'before-change', this.internalCurrentPage, this, val)
    },
    handleCurrentChange(val) {
      if (!this.beforeChangeHandler(val)) {
        return false
      }

      this.internalCurrentPage = this.getValidCurrentPage(val)
      this.userChangePageSize = true
      this.emitChange()
    },
    prev() {
      const callback = () => {
        if (this.disabled || !this.beforeChangeHandler(this.internalCurrentPage - 1)) {
          return false
        }

        const newVal = this.internalCurrentPage - 1

        this.internalCurrentPage = this.getValidCurrentPage(newVal)
        this.$emit('prev-click', this.internalCurrentPage)
        this.emitChange()
      }

      if (this.isBeforePageChange) {
        const newPage = this.internalCurrentPage - 1
        const temp = this.buildBeforePageChangeParam({ newPage, callback })

        this.$emit('before-page-change', temp)
      } else {
        callback()
      }
    },
    next() {
      const callback = () => {
        if (this.disabled || !this.beforeChangeHandler(this.internalCurrentPage + 1)) {
          return false
        }

        const newVal = this.internalCurrentPage + 1

        this.internalCurrentPage = this.getValidCurrentPage(newVal)
        this.$emit('next-click', this.internalCurrentPage)
        this.emitChange()
      }

      if (this.isBeforePageChange) {
        const newPage = this.internalCurrentPage + 1
        const temp = this.buildBeforePageChangeParam({ newPage, callback })

        this.$emit('before-page-change', temp)
      } else {
        callback()
      }
    },
    buildBeforePageChangeParam(param) {
      const currentPage = this.internalCurrentPage
      const newPageSize = this.internalPageSize
      const currentPageSize = this.internalPageSize

      return { currentPage, newPageSize, currentPageSize, ...param }
    },
    getValidCurrentPage(val) {
      val = parseInt(val, 10)

      const hasPageCount = typeof this.internalPageCount === 'number'
      let resetVal

      if (hasPageCount) {
        if (val < 1) {
          resetVal = 1
        } else if (val > this.internalPageCount) {
          resetVal = this.internalPageCount
        }
      } else {
        if (isNaN(val) || val < 1) {
          resetVal = 1
        }
      }

      if (resetVal === undefined && isNaN(val)) {
        resetVal = 1
      } else if (resetVal === 0) {
        resetVal = 1
      }

      return resetVal === undefined ? val : resetVal
    },
    emitChange() {
      this.$nextTick(() => {
        if (this.internalCurrentPage !== this.lastEmittedPage || this.userChangePageSize) {
          this.$emit('update:current-page', this.internalCurrentPage)
          this.$emit('page-change', {
            currentPage: this.internalCurrentPage,
            pageSize: this.internalPageSize,
            total: this.internalTotal
          })
          this.lastEmittedPage = this.internalCurrentPage
          this.userChangePageSize = false
        }
      })
    },
    setTotal(val) {
      this.internalTotal = val
    }
  },
  computed: {
    internalPageCount() {
      if (typeof this.internalTotal === 'number') {
        return Math.max(1, Math.ceil(this.internalTotal / this.internalPageSize))
      } else if (typeof this.pageCount === 'number') {
        return Math.max(1, this.pageCount)
      }

      return null
    },
    internalLayout() {
      let layout = ''

      if (this.mode && !this.layout) {
        this.mode === 'number' && (layout = 'total, sizes, prev, pager, next, jumper')
        this.mode === 'simple' && (layout = 'sizes, total, prev, current, next')
        this.mode === 'complete' && (layout = 'sizes, total, prev, pager, next, jumper')
        this.mode === 'fixed' && (layout = 'prev,pager,next')
      } else if ((!this.mode && this.layout) || (this.mode && this.layout)) {
        layout = this.layout
      } else {
        layout = 'total, prev, pager, next, jumper'
      }

      return layout
    }
  },
  watch: {
    currentPage: {
      immediate: true,
      handler(val) {
        this.internalCurrentPage = this.getValidCurrentPage(val)
      }
    },
    pageSize: {
      immediate: true,
      handler(val) {
        this.internalPageSize = isNaN(val) ? 10 : val
      }
    },
    internalCurrentPage: {
      handler(newVal) {
        this.$emit('update:currentPage', newVal)
        this.$emit('current-change', newVal)
        this.lastEmittedPage = -1
      }
    },
    internalPageCount(newVal) {
      /* istanbul ignore if */
      const oldPage = this.internalCurrentPage

      if (newVal > 0 && oldPage === 0) {
        this.internalCurrentPage = 1
      } else if (oldPage > newVal) {
        this.internalCurrentPage = newVal === 0 ? 1 : newVal
        this.userChangePageSize && this.emitChange()
      }

      this.userChangePageSize = false
    },
    total(val) {
      this.internalTotal = val
    }
  }
})
</script>

<script lang="tsx">
import Pager from '@opentiny/vue-pager-item'
import Popover from '@opentiny/vue-popover'
import Loading from '@opentiny/vue-loading'
import { t } from '@opentiny/vue-locale'
import { h, defineComponent, $props } from '@opentiny/vue-common'
import { IconChevronDown, IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'
import { emitEvent } from '@opentiny/utils'

export default defineComponent({
  props: {
    ...$props,
    accurateJumper: {
      type: Boolean,
      default: () => true
    },
    appendToBody: {
      type: Boolean,
      default: () => true
    },
    currentPage: {
      type: Number,
      default: () => 1
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    hideOnSinglePage: Boolean,
    isBeforePageChange: Boolean,
    layout: String,
    mode: String,
    nextText: String,
    pageCount: Number,
    pageSize: {
      type: Number,
      default: () => 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50, 100]
    },
    pagerCount: {
      type: Number,
      validator: (value: number) => (value | 0) === value && value > 2 && value < 22 && value % 2 === 1,
      default: () => 7
    },
    popperAppendToBody: {
      type: Boolean,
      default: () => true
    },
    showTotalLoading: {
      type: Boolean,
      default: () => false
    },
    customTotal: {
      type: [Boolean, String],
      default: () => false
    },
    popperClass: String,
    prevText: String,
    total: Number,
    changeCompat: Boolean
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
  render() {
    const layout = this.internalLayout

    if (!layout) return null

    if (this.hideOnSinglePage && (!this.internalPageCount || this.internalPageCount === 1)) return null

    const TEMPLATE_MAP = {
      prev: <prev></prev>,
      jumper: (
        <jumper
          ref="jumper"
          isBeforePageChange={this.isBeforePageChange}
          onBeforePageChange={this.beforeJumperChangeHandler}
          max={this.internalPageCount}
          disabled={this.disabled}></jumper>
      ),
      pager: (
        <pager
          isBeforePageChange={this.isBeforePageChange}
          onBeforePageChange={this.beforePagerChangeHandler}
          currentPage={this.internalCurrentPage}
          pageCount={this.internalPageCount}
          pagerCount={this.pagerCount}
          onChange={this.handleCurrentChange}
          disabled={this.disabled}></pager>
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
          disabled={this.disabled}></sizes>
      ),
      slot: (
        <slot>
          {typeof this.$parent.$slots.default === 'function'
            ? this.$parent.$slots.default()
            : this.$parent.$slots.default}
        </slot>
      ),
      total: <total></total>
    }

    const components = layout.split(',').map((item) => item.trim())
    const templateChildren = components.map((compo) => {
      return TEMPLATE_MAP[compo]
    })

    return <div class={['text-right py-3 px-0 text-color-text-primary']}>{templateChildren}</div>
  },
  components: {
    Prev: {
      render() {
        const ChevronLeft = IconChevronLeft()

        return (
          <button
            type="button"
            class={[
              'group min-w-[theme(spacing.7)] h-7 text-xs py-0 px-1 text-color-text-primary bg-color-bg-1 rounded-sm outline-0 ml-0 sm:ml-2',
              'align-bottom cursor-pointer hover:border-color-icon-primary disabled:cursor-default'
            ]}
            disabled={this.$parent.disabled || this.$parent.internalCurrentPage <= 1}
            onClick={this.$parent.prev}>
            {this.$parent.prevText ? (
              <span
                class={[
                  'group-disabled:text-color-text-disabled group-disabled:cursor-not-allowed group-hover:text-color-icon-hover'
                ]}>
                {this.$parent.prevText}
              </span>
            ) : (
              <ChevronLeft class="align-sub group-disabled:fill-color-icon-disabled group-disabled:cursor-not-allowed group-hover:fill-color-icon-active" />
            )}
          </button>
        )
      }
    },
    Next: {
      render() {
        const ChevronRight = IconChevronRight()

        return (
          <button
            type="button"
            class={[
              'group min-w-[theme(spacing.7)] h-7 text-xs py-0 px-1 text-color-text-primary bg-color-bg-1 rounded-sm outline-0 ml-0 sm:ml-2',
              'align-bottom cursor-pointer hover:border-color-icon-primary disabled:cursor-default'
            ]}
            disabled={
              this.$parent.disabled ||
              this.$parent.internalCurrentPage === this.$parent.internalPageCount ||
              this.$parent.internalPageCount === 0
            }
            onClick={this.$parent.next}>
            {this.$parent.nextText ? (
              <span
                class={[
                  'group-disabled:text-color-text-disabled group-disabled:cursor-not-allowed group-hover:text-color-icon-hover'
                ]}>
                {this.$parent.nextText}
              </span>
            ) : (
              <ChevronRight class="align-sub group-disabled:fill-color-icon-disabled group-disabled:cursor-not-allowed group-hover:fill-color-icon-active" />
            )}
          </button>
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
        },
        disabled: Boolean
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
              this.$parent.internalPageSize = newVal.includes(this.$parent.pageSize)
                ? this.$parent.pageSize
                : this.pageSizes[0]
            }
          }
        },
        showSizes(newVal) {
          if (newVal) {
            this.$nextTick(() => {
              const width = this.$refs.pageSize.getBoundingClientRect().width
              const popover = document.querySelectorAll('.data-tag-pager-selector')
              Array.from(popover).forEach((ele) => {
                ele.style.width = width + 'px'
              })
            })
          }
        }
      },
      render() {
        const ChevronDown = IconChevronDown()
        const scopedSlots = {
          reference: () => (
            <div slot="reference" class="m-0 ml-2" onClick={(e) => e.stopPropagation()}>
              <div
                class={[
                  "min-w-[theme('spacing.18')] max-w-[theme('spacing.40')] relative text-left h-7 leading-7 border border-solid border-color-border ",
                  'rounded  text-xs py-0 pr-1 pl-3 block whitespace-nowrap transition-[border] duration-300 outline-0 box-border select-none',
                  this.showSizes
                    ? 'border-color-border-focus bg-color-fill-6 text-color-border-focus [&_svg]:rotate-180 [&_svg]:fill-color-brand-hover'
                    : '',
                  this.disabled
                    ? 'bg-color-border-disabled text-color-border cursor-not-allowed [&_svg]:fill-color-icon-disabled [&_svg]:cursor-not-allowed'
                    : 'bg-color-bg-1 text-color-text-primary hover:bg-color-border-disabled hover:border-color-border active:border-color-border-focus active:bg-color-fill-6 active:text-color-brand'
                ]}
                ref="pageSize">
                <span class="text-xs mr-1 relative -top-px">{this.$parent.internalPageSize}</span>
                <span class="relative -top-px">{t('ui.page.page')}</span>
                <div class="w-7 h-7 leading-7 relative float-right -top-px outline-0 box-border text-center overflow-hidden cursor-pointer">
                  <ChevronDown class="fill-color-text-primary text-sm absolute top-0 left-0 right-0 bottom-0 m-auto hover:fill-color-icon-hover transition-transform duration-300" />
                </div>
              </div>
            </div>
          ),
          default: () => (
            <div class="max-h-[theme('spacing.72')] overflow-y-auto overflow-x-hidden">
              <ul>
                {this.pageSizes.map((item) => (
                  <li
                    class={[
                      "min-h-[theme('spacing.8')] py-0 px-2 leading-8 max-w-full cursor-pointer overflow-hidden text-ellipsis text-center whitespace-nowrap m-1 rounded",
                      item === this.$parent.internalPageSize
                        ? 'text-color-brand bg-color-fill-6'
                        : 'hover:bg-color-bg-2 text-color-text-primary'
                    ]}
                    val={item}
                    title={item}
                    onClick={() => this.handleChange(item)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        }

        return (
          <div
            data-tag="tiny-pager-popover"
            class={[
              'hidden sm:inline-block align-middle text-xs h-7',
              'text-xs text-color-text-primary relative -top-px'
            ]}>
            {h(Popover, {
              props: {
                placement: 'bottom-start',
                appendToBody: this.popperAppendToBody,
                trigger: 'click',
                popperClass:
                  'w-24 sm:p-0 sm:!mt-1 sm:!mb-1 data-tag-pager-selector' +
                  (this.popperClass ? ' ' + this.popperClass : ''),
                visibleArrow: false,
                disabled: this.disabled
              },
              on: {
                show: () => {
                  this.showSizes = true
                },
                hide: () => {
                  this.showSizes = false
                }
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

              this.$parent.beforeSizeChangeHandler(params)
            } else {
              callback()
            }
          }
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
          backupValue: this.initValue,
          value: this.initValue
        }
      },
      watch: {
        '$parent.internalCurrentPage': {
          handler(currentPage) {
            const value = currentPage

            if (this.value !== value) {
              this.value = value
            }
          },
          immediate: true
        }
      },
      methods: {
        handleFocus(e) {
          this.backupValue = Number(e.target.value)
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
            this.value = this.backupValue
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
          if (!this.$parent.canJumperGo()) return

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

          value = Number(value.toFixed(0))

          const min = this.min
          const max = this.max

          if (value >= max) {
            this.value = max
          } else if (value <= min) {
            this.value = min
          } else {
            this.value = value
          }
        }
      },
      render() {
        return h('div', { class: ['h-7 leading-7 inline-block align-middle text-xs'] }, [
          h('div', { class: ['text-[0] h-7'] }, [
            h(
              'span',
              {
                class: ['text-xs pl-4 pr-2 text-color-text-primary']
              },
              [t('ui.page.jump')]
            ),
            h('input', {
              class: [
                'w-8 h-7 text-center align-top rounded-sm inline-block border border-solid border-color-border hover:text-color-icon-primary hover:border-color-icon-primary',
                'text-color-text-primary text-xs transition-[border] duration-300 outline-0 box-border mr-0 focus:border-color-border-focus'
              ],
              domProps: {
                value: this.value
              },
              attrs: {
                type: 'tel',
                disabled: this.disabled
              },
              on: {
                focus: this.handleFocus,
                input: this.handleInput,
                change: this.handleChange
              },
              ref: 'input'
            })
          ])
        ])
      }
    },
    Total: {
      mounted() {
        if (document.querySelector('[data-tag="tiny-pager-total-loading"]')) {
          Loading.service({
            target: document.querySelector('[data-tag="tiny-pager-total-loading"]')
          })
        }
      },
      render() {
        return typeof this.$parent.internalTotal === 'number' ? (
          this.$parent.showTotalLoading ? (
            <div class="inline-block align-middle text-xs h-7 leading-7 float-left">
              <div class="h-7 leading-7 text-xs text-color-text-primary">
                <div
                  data-tag="tiny-pager-total-loading"
                  class="inline-block align-baseline h-3.5 w-3.5 mr-1.5 top-0.5 [&_[data-tag=tiny-loading-icon]]:h-3.5 [&_[data-tag=tiny-loading-icon]]:w-3.5"></div>
                <span class="text-color-text-secondary">{t('ui.page.loadingTotals')}</span>
              </div>
            </div>
          ) : (
            <div class="inline-block align-middle text-xs h-7 leading-7 float-left">
              {' '}
              <div class="h-7 leading-7 text-xs text-color-text-primary">
                <span>{t('ui.page.total')}</span>
                <span class="my-0 mx-1">
                  {this.$parent.customTotal ? this.$parent.totalText : this.$parent.internalTotal}
                </span>
                <span>{t('ui.page.item')}</span>
              </div>
            </div>
          )
        ) : (
          ''
        )
      }
    },
    Pager
  },
  methods: {
    canJumperGo() {
      const inputValue = Number(this.$refs.jumper.$refs.input.value || 0)
      const currentPage = Number(this.internalCurrentPage || 0)
      return this.accurateJumper ? inputValue !== currentPage : true
    },
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

      return Object.assign({ currentPage, newPageSize, currentPageSize }, param)
    },
    getValidCurrentPage(val) {
      val = parseInt(val, 10)

      const hasPageCount = typeof this.internalPageCount === 'number'
      let resetVal

      if (!hasPageCount) {
        if (isNaN(val) || val < 1) {
          resetVal = 1
        }
      } else {
        if (val < 1) {
          resetVal = 1
        } else if (val > this.internalPageCount) {
          resetVal = this.internalPageCount
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
          this.$emit('current-change', this.internalCurrentPage)
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
    totalText() {
      if (typeof this.customTotal === 'string') return this.customTotal

      const totals = parseInt(this.total)

      if (isNaN(totals)) return 0

      const HUNDRED_THOUSAND = 100000
      const MILLION = 1000000
      const TEN_MILLION = 10000000

      if (totals < HUNDRED_THOUSAND) {
        return totals
      } else if (totals < MILLION) {
        return t('ui.page.hundredThousand')
      } else if (totals < TEN_MILLION) {
        return t('ui.page.million')
      } else {
        return t('ui.page.tenMillion')
      }
    },
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
        this.mode === 'number' && (layout = 'sizes, prev, pager, next, jumper, total')
        this.mode === 'simple' && (layout = 'sizes, prev, next')
        this.mode === 'complete' && (layout = 'sizes, prev, pager, next, jumper,total')
        this.mode === 'fixed' && (layout = 'prev, pager, next')
      } else if ((!this.mode && this.layout) || (this.mode && this.layout)) {
        layout = this.layout
      } else {
        layout = 'prev, pager, next, jumper, total'
      }

      return layout
    }
  },
  watch: {
    currentPage: {
      handler(curPage) {
        this.internalCurrentPage = this.getValidCurrentPage(curPage)
      },
      immediate: true
    },
    internalPageCount(pageCount) {
      const oldCurPage = this.internalCurrentPage

      if (pageCount > 0 && oldCurPage === 0) {
        this.internalCurrentPage = 1
      } else if (oldCurPage > pageCount) {
        this.internalCurrentPage = pageCount === 0 ? 1 : pageCount
        this.userChangePageSize && this.emitChange()
      }

      this.userChangePageSize = false
    },
    internalCurrentPage: {
      handler(curPage) {
        this.$emit('update:currentPage', curPage)
        this.lastEmittedPage = -1
      },
      immediate: true
    },
    pageSize: {
      handler(pageSize) {
        this.internalPageSize = isNaN(pageSize) ? 10 : pageSize
      },
      immediate: true
    },
    total(total) {
      this.internalTotal = total
    }
  }
})
</script>

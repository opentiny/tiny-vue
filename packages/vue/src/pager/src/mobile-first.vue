<script lang="tsx">
import Pager from '@opentiny/vue-pager-item'
import Popover from '@opentiny/vue-popover'
import { t } from '@opentiny/vue-locale'
import { h, defineComponent, $props } from '@opentiny/vue-common'
import { IconChevronDown, IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'
import { emitEvent } from '@opentiny/vue-renderless/common/event'

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
      validator: (value) => (value | 0) === value && value > 2 && value < 22 && value % 2 === 1,
      default: () => 7
    },
    popperAppendToBody: {
      type: Boolean,
      default: () => true
    },
    popperClass: String,
    prevText: String,
    total: Number
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
          max={this.internalPageCount}></jumper>
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
          pageSizes={this.pageSizes}></sizes>
      ),
      slot: <slot>{typeof this.$slots.default === 'function' ? this.$slots.default() : this.$slots.default}</slot>,
      total: <total></total>
    }

    const components = layout.split(',').map((item) => item.trim())
    let haveRightWrapper = false
    const templateChildren = []
    const rightWrapperChildren = []

    components.forEach((compo) => {
      if (compo === '->') {
        haveRightWrapper = true
        return
      }

      if (!haveRightWrapper) {
        templateChildren.push(TEMPLATE_MAP[compo])
      } else {
        rightWrapperChildren.push(TEMPLATE_MAP[compo])
      }
    })

    const rightWrapper = <div>{rightWrapperChildren}</div>

    if (haveRightWrapper) {
      templateChildren.unshift(rightWrapper)
    }
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
              'group min-w-[1.75rem] h-7 text-xs py-0 px-1 text-color-text-primary bg-color-bg-1 border border-solid border-color-border rounded-sm outline-0 ml-2',
              'align-bottom cursor-pointer hover:border-color-icon-primary disabled:bg-color-bg-4 disabled:border-color-border disabled:cursor-default disabled:opacity-50'
            ]}
            disabled={this.$parent.disabled || this.$parent.internalCurrentPage <= 1}
            onClick={this.$parent.prev}>
            {this.$parent.prevText ? (
              <span class="text-color-brand">{this.$parent.prevText}</span>
            ) : (
              <ChevronLeft class="group-disabled:fill-color-icon-disabled group-hover:fill-color-icon-primary" />
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
              'group min-w-[1.75rem] h-7 text-xs py-0 px-1 text-color-text-primary bg-color-bg-1 border border-solid border-color-border rounded-sm outline-0 ml-2',
              'align-bottom cursor-pointer hover:border-color-icon-primary disabled:bg-color-bg-4 disabled:border-color-border disabled:cursor-default disabled:opacity-50'
            ]}
            disabled={
              this.$parent.disabled ||
              this.$parent.internalCurrentPage === this.$parent.internalPageCount ||
              this.$parent.internalPageCount === 0
            }
            onClick={this.$parent.next}>
            {this.$parent.nextText ? (
              <span class="text-color-brand">{this.$parent.nextText}</span>
            ) : (
              <ChevronRight class="group-disabled:fill-color-icon-disabled group-hover:fill-color-icon-primary" />
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
              this.$parent.internalPageSize = newVal.includes(this.$parent.pageSize)
                ? this.$parent.pageSize
                : this.pageSizes[0]
            }
          }
        }
      },
      render() {
        const ChevronDown = IconChevronDown()

        const scopedSlots = {
          reference: () => (
            <div data-tag="tiny-pager-reference" slot="reference" class="my-0 mr-0 ml-4">
              <div
                class={[
                  'min-w-[6.125rem] max-w-[12.5rem] h-7 cursor-pointer leading-7 border border-solid border-color-border text-left text-color-text-primary',
                  'rounded-sm bg-color-bg-1 text-xs pl-3 pr-1 py-0 align-middle relative top-px whitespace-nowrap transition-[border] duration-300 box-border select-none',
                  'hover:border-color-border-hover',
                  this.showSizes ? 'border-color-brand-hover hover:border-color-brand-hover' : ''
                ]}>
                <span class="mr-[0.375rem]">{this.$parent.internalPageSize}</span>
                <span>{t('ui.page.page')}</span>
                <span class="w-7 h-7 leading-7 float-right box-border text-center overflow-hidden">
                  {
                    <ChevronDown
                      class={[
                        'align-text-bottom transition-transform duration-300',
                        this.showSizes ? 'fill-color-brand-hover rotate-180' : 'rotate-0'
                      ]}
                    />
                  }
                </span>
              </div>
            </div>
          ),
          default: () => (
            <div
              data-tag="tiny-pager-size"
              class="max-h-[18.75rem] overflow-y-auto overflow-x-hidden mx-[-1rem] my-[-0.75rem]">
              {this.pageSizes.map((item) => (
                <p
                  class={[
                    'min-h-7 px-2 py-0 leading-7 max-w-full overflow-hidden text-ellipsis whitespace-nowrap hover:cursor-pointer hover:bg-color-bg-4',
                    item === this.$parent.internalPageSize ? 'text-color-brand' : ''
                  ]}
                  val={item}
                  title={item}
                  onClick={() => this.handleChange(item)}>
                  {item}
                </p>
              ))}
            </div>
          )
        }

        return (
          <div
            data-tag="tiny-pager-popover"
            class={['inline-block align-middle text-xs h-7', 'text-xs text-color-text-primary relative -top-px']}>
            {h(Popover, {
              props: {
                placement: 'bottom-start',
                appendToBody: this.popperAppendToBody,
                trigger: 'click',
                popperClass: 'w-[6.125rem] p-0' + (this.popperClass ? ' ' + this.popperClass : ''),
                visibleArrow: false
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
        '$parent.internalCurrentPage': function (currentPage) {
          const value = currentPage

          if (this.value !== value) {
            this.value = value
          }
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
        return h('div', { class: 'h-7 leading-7 inline-block align-middle text-xs' }, [
          h('div', { class: 'text-[0]' }, [
            h(
              'span',
              {
                class: ['text-xs pl-4 pr-2 text-color-text-primary']
              },
              [t('ui.page.jump')]
            ),
            h('input', {
              class: [
                'w-8 h-7 leading-[1.625rem] text-center align-top rounded-sm inline-block border border-solid border-color-border',
                'text-color-text-primary text-xs transition-[border] duration-300 outline-0 box-border mr-0 hover:text-color-icon-primary hover:border-color-icon-primary'
              ],
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
            })
          ])
        ])
      }
    },
    Total: {
      render() {
        return typeof this.$parent.internalTotal === 'number' ? (
          <div
            data-tag="tiny-pager"
            class={[
              'inline-block align-middle text-xs h-7',
              this.$parent.mode === 'simple' ? '' : 'text-color-text-primary text-xs float-left'
            ]}>
            {' '}
            <div class="h-7 leading-7 text-xs text-color-text-primary">
              <span class="mr-1">{t('ui.page.totals')}</span>
              <span>{this.$parent.internalTotal}</span>
            </div>
          </div>
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
        this.mode === 'simple' && (layout = 'total, sizes, prev, next')
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

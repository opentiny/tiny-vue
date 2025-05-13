<template>
  <div class="text-right py-3 px-0 text-color-text-primary">
    <template v-if="internalLayout">
      <template v-if="!(hideOnSinglePage && (!internalPageCount || internalPageCount === 1))">
        <!-- 上一页按钮 -->
        <button
          v-if="internalLayout.includes('prev')"
          type="button"
          class="group min-w-[theme(spacing.7)] h-7 text-xs py-0 px-1 text-color-text-primary bg-color-bg-1 rounded-sm outline-0 ml-0 sm:ml-2 align-bottom cursor-pointer hover:border-color-icon-primary disabled:cursor-default"
          :disabled="disabled || internalCurrentPage <= 1"
          @click="prev"
        >
          <span
            v-if="prevText"
            class="group-disabled:text-color-text-disabled group-disabled:cursor-not-allowed group-hover:text-color-icon-hover"
          >
            {{ prevText }}
          </span>
          <tiny-icon-chevron-left
            v-else
            class="align-sub group-disabled:fill-color-icon-disabled group-disabled:cursor-not-allowed group-hover:fill-color-icon-active"
          />
        </button>

        <!-- 分页器 -->
        <pager
          v-if="internalLayout.includes('pager')"
          :is-before-page-change="isBeforePageChange"
          @before-page-change="beforePagerChangeHandler"
          :current-page="internalCurrentPage"
          :page-count="internalPageCount || 0"
          :pager-count="pagerCount"
          @change="handleCurrentChange"
          :disabled="disabled"
        />

        <!-- 下一页按钮 -->
        <button
          v-if="internalLayout.includes('next')"
          type="button"
          class="group min-w-[theme(spacing.7)] h-7 text-xs py-0 px-1 text-color-text-primary bg-color-bg-1 rounded-sm outline-0 ml-0 sm:ml-2 align-bottom cursor-pointer hover:border-color-icon-primary disabled:cursor-default"
          :disabled="disabled || internalCurrentPage === internalPageCount || internalPageCount === 0"
          @click="next"
        >
          <span
            v-if="nextText"
            class="group-disabled:text-color-text-disabled group-disabled:cursor-not-allowed group-hover:text-color-icon-hover"
          >
            {{ nextText }}
          </span>
          <tiny-icon-chevron-right
            v-else
            class="align-sub group-disabled:fill-color-icon-disabled group-disabled:cursor-not-allowed group-hover:fill-color-icon-active"
          />
        </button>

        <!-- 跳转器 -->
        <div v-if="internalLayout.includes('jumper')" class="h-7 leading-7 inline-block align-middle text-xs">
          <div class="text-[0] h-7">
            <span class="text-xs pl-4 pr-2 text-color-text-primary">{{ $t('ui.page.jump') }}</span>
            <input
              ref="jumperInput"
              type="tel"
              :disabled="disabled"
              class="w-8 h-7 text-center align-top rounded-sm inline-block border border-solid border-color-border hover:text-color-icon-primary hover:border-color-icon-primary text-color-text-primary text-xs transition-[border] duration-300 outline-0 box-border mr-0 focus:border-color-border-focus"
              :value="jumperValue"
              @focus="handleJumperFocus"
              @input="handleJumperInput"
              @change="handleJumperChange"
            />
          </div>
        </div>

        <!-- 每页条数选择器 -->
        <div
          v-if="internalLayout.includes('sizes')"
          data-tag="tiny-pager-popover"
          class="hidden sm:inline-block align-middle text-xs h-7 text-xs text-color-text-primary relative -top-px"
        >
          <popover
            ref="sizesList"
            placement="bottom-start"
            :append-to-body="popperAppendToBody"
            trigger="click"
            :popper-class="
              'w-24 sm:p-0 sm:!mt-1 sm:!mb-1 data-tag-pager-selector' + (popperClass ? ' ' + popperClass : '')
            "
            :visible-arrow="false"
            :disabled="disabled"
            @show="showSizes = true"
            @hide="showSizes = false"
          >
            <template #reference>
              <div class="m-0 ml-2" @click.stop>
                <div
                  ref="pageSize"
                  :class="[
                    'min-w-[theme(spacing.18)] max-w-[theme(spacing.40)] relative text-left h-7 leading-7 border border-solid border-color-border rounded text-xs py-0 pr-1 pl-3 block whitespace-nowrap transition-[border] duration-300 outline-0 box-border select-none',
                    showSizes
                      ? 'border-color-border-focus bg-color-fill-6 text-color-border-focus [&_svg]:rotate-180 [&_svg]:fill-color-brand-hover'
                      : '',
                    disabled
                      ? 'bg-color-border-disabled text-color-border cursor-not-allowed [&_svg]:fill-color-icon-disabled [&_svg]:cursor-not-allowed'
                      : 'bg-color-bg-1 text-color-text-primary hover:bg-color-border-disabled hover:border-color-border active:border-color-border-focus active:bg-color-fill-6 active:text-color-brand'
                  ]"
                >
                  <span class="text-xs mr-1 relative -top-px">{{ internalPageSize }}</span>
                  <span class="relative -top-px">{{ $t('ui.page.page') }}</span>
                  <div
                    class="w-7 h-7 leading-7 relative float-right -top-px outline-0 box-border text-center overflow-hidden cursor-pointer"
                  >
                    <tiny-icon-chevron-down
                      class="fill-color-text-primary text-sm absolute top-0 left-0 right-0 bottom-0 m-auto hover:fill-color-icon-hover transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </template>
            <div class="max-h-[theme(spacing.72)] overflow-y-auto overflow-x-hidden">
              <ul>
                <li
                  v-for="item in pageSizes"
                  :key="String(item)"
                  :class="[
                    'min-h-[theme(spacing.8)] py-0 px-2 leading-8 max-w-full cursor-pointer overflow-hidden text-ellipsis text-center whitespace-nowrap m-1 rounded',
                    item === internalPageSize
                      ? 'text-color-brand bg-color-fill-6'
                      : 'hover:bg-color-bg-2 text-color-text-primary'
                  ]"
                  :data-value="item"
                  :title="String(item)"
                  @click="handleSizeChange(Number(item))"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </popover>
        </div>

        <!-- 总数显示 -->
        <div
          v-if="internalLayout.includes('total') && typeof internalTotal === 'number'"
          class="inline-block align-middle text-xs h-7 leading-7 float-left"
        >
          <div v-if="showTotalLoading" class="h-7 leading-7 text-xs text-color-text-primary">
            <div
              data-tag="tiny-pager-total-loading"
              class="inline-block align-baseline h-3.5 w-3.5 mr-1.5 top-0.5 [&_[data-tag=tiny-loading-icon]]:h-3.5 [&_[data-tag=tiny-loading-icon]]:w-3.5"
            ></div>
            <span class="text-color-text-secondary">{{ $t('ui.page.loadingTotals') }}</span>
          </div>
          <div v-else class="h-7 leading-7 text-xs text-color-text-primary">
            <span>{{ $t('ui.page.total') }}</span>
            <span class="my-0 mx-1">
              {{ customTotal ? totalText : internalTotal }}
            </span>
            <span>{{ $t('ui.page.item') }}</span>
          </div>
        </div>

        <!-- 默认插槽 -->
        <slot v-if="internalLayout.includes('slot')">
          <template v-if="$parent?.$slots.default">
            <template v-if="typeof $parent.$slots.default === 'function'">
              {{ $parent.$slots.default() }}
            </template>
            <template v-else>
              {{ $parent.$slots.default }}
            </template>
          </template>
        </slot>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import Pager from '@opentiny/vue-pager-item'
import Popover from '@opentiny/vue-popover'
import Loading from '@opentiny/vue-loading'
import { t } from '@opentiny/vue-locale'
import { defineComponent, $props } from '@opentiny/vue-common'
import { IconChevronDown, IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'
import { emitEvent } from '@opentiny/utils'

export default defineComponent({
  name: 'MobileFirstPager',
  components: {
    Pager,
    Popover,
    TinyIconChevronLeft: IconChevronLeft(),
    TinyIconChevronRight: IconChevronRight(),
    TinyIconChevronDown: IconChevronDown()
  },
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
      internalTotal: this.total,
      showSizes: false,
      jumperValue: 1 as number
    }
  },
  methods: {
    // 国际化方法
    $t(key: string): string {
      return t(key)
    },
    // 跳转器相关方法
    handleJumperFocus(e: FocusEvent) {
      const target = e.target as HTMLInputElement
      this.jumperValue = Number(target.value)
    },
    handleJumperInput(e: Event) {
      const target = e.target as HTMLInputElement
      const value = String(target.value)
      if (!value) {
        this.jumperValue = 1
      } else if (/^\d+$/.test(value)) {
        this.jumperValue = Number(value) || 1
      }
      target.value = String(this.jumperValue)
    },
    handleJumperChange() {
      this.parseJumperValue()
      const callback = () => {
        this.handleJumperClick()
      }
      const rollback = () => {
        this.jumperValue = this.internalCurrentPage
      }
      const newPage = this.jumperValue
      const currentPage = this.internalCurrentPage

      if (this.isBeforePageChange && newPage !== currentPage) {
        const params = { newPage, currentPage, callback, rollback }
        this.beforePagerChangeHandler(params)
      } else {
        callback()
      }
    },
    handleJumperClick() {
      if (!this.canJumperGo()) return
      this.internalCurrentPage = this.getValidCurrentPage(Number(this.jumperValue))
      this.emitChange()
    },
    parseJumperValue() {
      let value = Number(
        String(this.jumperValue)
          .split(/[^0-9-+.]/)
          .join('')
      )

      if (isNaN(value)) {
        value = 1
      }

      value = Number(value.toFixed(0))

      if (this.internalPageCount) {
        if (value >= this.internalPageCount) {
          this.jumperValue = this.internalPageCount
        } else if (value <= 1) {
          this.jumperValue = 1
        } else {
          this.jumperValue = value
        }
      }
    },

    // 每页条数选择器相关方法
    handleSizeChange(val: number) {
      if (val !== this.internalPageSize) {
        const callback = () => {
          if (!this.beforeChangeHandler()) {
            return false
          }

          this.internalPageSize = val
          this.userChangePageSize = true
          this.showSizes = false
          this.$emit('update:pageSize', val)
          this.$emit('size-change', val)
          this.$emit('page-change', {
            currentPage: this.internalCurrentPage,
            pageSize: val,
            total: this.internalTotal
          })
          if (this.$refs.sizesList) {
            ;(this.$refs.sizesList as any).state.showPopper = false
          }
        }

        if (this.isBeforePageChange) {
          const newPageSize = val
          const currentPageSize = this.internalPageSize
          const params = { newPageSize, currentPageSize, callback }
          this.beforeSizeChangeHandler(params)
        } else {
          callback()
        }
      }
    },

    // 其他方法保持不变
    canJumperGo() {
      const inputValue = Number(this.jumperValue || 0)
      const currentPage = Number(this.internalCurrentPage || 0)
      return this.accurateJumper ? inputValue !== currentPage : true
    },
    beforeSizeChangeHandler(params: any) {
      const { newPageSize, currentPageSize, callback } = params as {
        newPageSize: number
        currentPageSize: number
        callback: () => void
      }
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
    beforePagerChangeHandler(params: any) {
      const { newPage, currentPage, callback, rollback } = params as {
        newPage: number
        currentPage: number
        callback: () => void
        rollback?: () => void
      }
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
    beforeJumperChangeHandler(params: any) {
      const { newPage, currentPage, callback, rollback } = params as {
        newPage: number
        currentPage: number
        callback: () => void
        rollback?: () => void
      }
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
    copyEmit(...args: any[]) {
      ;(this.$emit as (...args: any[]) => void)(...args)
    },
    beforeChangeHandler(val = -1) {
      return emitEvent(this.copyEmit as (...args: any[]) => void, 'before-change', this.internalCurrentPage, this, val)
    },
    handleCurrentChange(val: number) {
      if (!this.beforeChangeHandler(val)) {
        return false
      }
      this.internalCurrentPage = this.getValidCurrentPage(Number(val))
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
    buildBeforePageChangeParam(param: any) {
      const currentPage = this.internalCurrentPage
      const newPageSize = this.internalPageSize
      const currentPageSize = this.internalPageSize

      return Object.assign({ currentPage, newPageSize, currentPageSize }, param)
    },
    getValidCurrentPage(val: number) {
      val = parseInt(String(val), 10)

      const hasPageCount = typeof this.internalPageCount === 'number'
      let resetVal

      if (!hasPageCount) {
        if (isNaN(val) || val < 1) {
          resetVal = 1
        }
      } else {
        if (val < 1) {
          resetVal = 1
        } else if (this.internalPageCount && val > this.internalPageCount) {
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
    setTotal(val: number) {
      this.internalTotal = val
    }
  },
  computed: {
    totalText() {
      if (typeof this.customTotal === 'string') return this.customTotal

      const totals = parseInt(String(this.total || 0))

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
      } else if (pageCount && oldCurPage > pageCount) {
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
  },
  mounted() {
    if (document.querySelector('[data-tag="tiny-pager-total-loading"]')) {
      const target = document.querySelector('[data-tag="tiny-pager-total-loading"]')
      if (target) {
        Loading.service({
          target: target as HTMLElement
        })
      }
    }
  }
})
</script>

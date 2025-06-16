<template>
  <div
    v-if="!(hideOnSinglePage && (!internalPageCount || internalPageCount <= 1))"
    class="text-right py-3 px-0 text-color-text-primary"
  >
    <template v-for="(item, index) in internalLayout.split(',')">
      <!-- 总数显示 -->
      <div
        v-if="item.trim() === 'total' && typeof internalTotal === 'number'"
        :key="'total' + index"
        class="inline-block align-middle text-xs h-7 leading-7 float-left"
      >
        <div v-if="showTotalLoading" class="h-7 leading-7 text-xs text-color-text-primary">
          <div
            data-tag="tiny-pager-total-loading"
            class="inline-block align-baseline h-3.5 w-3.5 mr-1.5 top-0.5 [&_[data-tag=tiny-loading-icon]]:h-3.5 [&_[data-tag=tiny-loading-icon]]:w-3.5"
          ></div>
          <span class="text-color-text-secondary">{{ t('ui.page.loadingTotals') }}</span>
        </div>
        <div v-else class="h-7 leading-7 text-xs text-color-text-primary">
          <span>{{ t('ui.page.total') }}</span>
          <span class="my-0 mx-1">
            {{ customTotal ? totalText : internalTotal }}
          </span>
          <span>{{ t('ui.page.item') }}</span>
        </div>
      </div>

      <!-- 每页条数选择器 -->
      <div
        v-else-if="item.trim() === 'sizes'"
        :key="'sizes' + index"
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
                <span class="relative -top-px">{{ t('ui.page.page') }}</span>
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
                v-for="sizeItem in pageSizes"
                :key="String(sizeItem)"
                :class="[
                  'min-h-[theme(spacing.8)] py-0 px-2 leading-8 max-w-full cursor-pointer overflow-hidden text-ellipsis text-center whitespace-nowrap m-1 rounded',
                  sizeItem === internalPageSize
                    ? 'text-color-brand bg-color-fill-6'
                    : 'hover:bg-color-bg-2 text-color-text-primary'
                ]"
                :data-value="sizeItem"
                :title="String(sizeItem)"
                @click="handleSizeChange(Number(sizeItem))"
              >
                {{ sizeItem }}
              </li>
            </ul>
          </div>
        </popover>
      </div>

      <!-- 上一页按钮 -->
      <button
        v-else-if="item.trim() === 'prev'"
        :key="'prev' + index"
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
        v-else-if="item.trim() === 'pager'"
        :key="'pager' + index"
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
        v-else-if="item.trim() === 'next'"
        :key="'next' + index"
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
      <div
        v-else-if="item.trim() === 'jumper'"
        :key="'jumper' + index"
        class="h-7 leading-7 inline-block align-middle text-xs"
      >
        <div class="text-[0] h-7">
          <span class="text-xs pl-4 pr-2 text-color-text-primary">{{ t('ui.page.jump') }}</span>
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

      <!-- 默认插槽 -->
      <slot v-else-if="item.trim() === 'slot'"></slot>
    </template>
  </div>
</template>

<script lang="ts">
import Pager from '@opentiny/vue-pager-item'
import Popover from '@opentiny/vue-popover'
import Loading from '@opentiny/vue-loading'
import { t } from '@opentiny/vue-locale'
import { defineComponent, $props, hooks, $prefix } from '@opentiny/vue-common'
import { IconChevronDown, IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon'
import { emitEvent } from '@opentiny/utils'

export default defineComponent({
  name: $prefix + 'Pager',
  components: {
    Pager,
    Popover,
    TinyIconChevronLeft: IconChevronLeft(),
    TinyIconChevronRight: IconChevronRight(),
    TinyIconChevronDown: IconChevronDown()
  },
  emits: [
    'update:currentPage',
    'update:pageSize',
    'size-change',
    'page-change',
    'before-change',
    'before-page-change',
    'current-change',
    'prev-click',
    'next-click'
  ],
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
  setup(props, { emit }) {
    const { ref, reactive, computed, watch, onMounted, nextTick, toRefs } = hooks
    const sizesList = ref<{ hide: () => void } | null>(null)

    // 响应式数据
    const state = reactive({
      internalCurrentPage: 1, // 内部当前页码
      internalPageSize: 0, // 内部每页条数
      lastEmittedPage: -1, // 最后触发的页码
      userChangePageSize: false, // 用户是否改变了每页条数
      internalTotal: props.total, // 内部总条数
      showSizes: false, // 是否显示每页条数选择器
      jumperValue: 1 as number // 跳转器输入值
    })

    /**
     * 处理跳转器输入框获得焦点事件
     * @param e - 焦点事件对象
     */
    const handleJumperFocus = (e: FocusEvent) => {
      const target = e.target as HTMLInputElement
      state.jumperValue = Number(target.value)
    }

    /**
     * 处理跳转器输入事件
     * @param e - 输入事件对象
     * 确保输入值为有效的数字
     */
    const handleJumperInput = (e: Event) => {
      const target = e.target as HTMLInputElement
      const value = String(target.value)
      if (!value) {
        state.jumperValue = 1
      } else if (/^\d+$/.test(value)) {
        state.jumperValue = Number(value) || 1
      }
      target.value = String(state.jumperValue)
    }

    /**
     * 处理跳转器值变化事件
     * 在值变化时进行验证并触发页面跳转
     */
    const handleJumperChange = () => {
      parseJumperValue()
      const callback = () => {
        handleJumperClick()
      }
      const rollback = () => {
        state.jumperValue = state.internalCurrentPage
      }
      const newPage = state.jumperValue
      const currentPage = state.internalCurrentPage

      if (props.isBeforePageChange && newPage !== currentPage) {
        const params = { newPage, currentPage, callback, rollback }
        beforePagerChangeHandler(params)
      } else {
        callback()
      }
    }

    /**
     * 处理跳转器点击事件
     * 验证并执行页面跳转
     */
    const handleJumperClick = () => {
      if (!canJumperGo()) return
      state.internalCurrentPage = getValidCurrentPage(Number(state.jumperValue))
      emitChange()
    }

    /**
     * 解析跳转器输入值
     * 确保输入值在有效范围内
     */
    const parseJumperValue = () => {
      let value = Number(
        String(state.jumperValue)
          .split(/[^0-9-+.]/)
          .join('')
      )

      if (isNaN(value)) {
        value = 1
      }

      value = Number(value.toFixed(0))

      if (internalPageCount.value) {
        if (value >= internalPageCount.value) {
          state.jumperValue = internalPageCount.value
        } else if (value <= 1) {
          state.jumperValue = 1
        } else {
          state.jumperValue = value
        }
      }
    }

    /**
     * 处理每页条数变化事件
     * @param val - 新的每页条数值
     */
    const handleSizeChange = (val: number) => {
      if (val !== state.internalPageSize) {
        const callback = () => {
          if (!beforeChangeHandler()) {
            return false
          }

          state.internalPageSize = val
          state.userChangePageSize = true
          state.showSizes = false
          emit('update:pageSize', val)
          emit('size-change', val)
          emit('page-change', {
            currentPage: state.internalCurrentPage,
            pageSize: val,
            total: state.internalTotal
          })
          if (Array.isArray(sizesList.value)) {
            sizesList.value[0].state.showPopper = false
          }
        }

        if (props.isBeforePageChange) {
          const newPageSize = val
          const currentPageSize = state.internalPageSize
          const params = { newPageSize, currentPageSize, callback }
          beforeSizeChangeHandler(params)
        } else {
          callback()
        }
      }
    }

    /**
     * 检查跳转器是否可以执行跳转
     * @returns {boolean} 是否可以跳转
     */
    const canJumperGo = () => {
      const inputValue = Number(state.jumperValue || 0)
      const currentPage = Number(state.internalCurrentPage || 0)
      return props.accurateJumper ? inputValue !== currentPage : true
    }

    /**
     * 处理每页条数变化前的钩子函数
     * @param params - 包含新页码、当前页码和回调函数的参数对象
     */
    const beforeSizeChangeHandler = (params: any) => {
      const { newPageSize, currentPageSize, callback } = params as {
        newPageSize: number
        currentPageSize: number
        callback: () => void
      }
      const newPage = 1
      const currentPage = state.internalCurrentPage
      const temp = {
        newPage,
        newPageSize,
        currentPage,
        currentPageSize,
        callback
      }

      emit('before-page-change', temp)
    }

    /**
     * 处理页码变化前的钩子函数
     * @param params - 包含新页码、当前页码和回调函数的参数对象
     */
    const beforePagerChangeHandler = (params: any) => {
      const { newPage, currentPage, callback, rollback } = params as {
        newPage: number
        currentPage: number
        callback: () => void
        rollback?: () => void
      }
      const newPageSize = state.internalPageSize
      const currentPageSize = state.internalPageSize
      const temp = {
        newPage,
        newPageSize,
        currentPage,
        currentPageSize,
        callback,
        rollback
      }

      emit('before-page-change', temp)
    }

    /**
     * 处理跳转器变化前的钩子函数
     * @param params - 包含新页码、当前页码和回调函数的参数对象
     */
    const beforeJumperChangeHandler = (params: any) => {
      const { newPage, currentPage, callback, rollback } = params as {
        newPage: number
        currentPage: number
        callback: () => void
        rollback?: () => void
      }
      const newPageSize = state.internalPageSize
      const currentPageSize = state.internalPageSize
      const temp = {
        newPage,
        newPageSize,
        currentPage,
        currentPageSize,
        callback,
        rollback
      }

      emit('before-page-change', temp)
    }

    /**
     * 复制并触发事件
     * @param args - 事件参数数组
     */
    const copyEmit = (...args: any[]) => {
      emit(args[0], ...args.slice(1))
    }

    /**
     * 处理变化前的钩子函数
     * @param val - 变化值
     * @returns {boolean} 是否允许变化
     */
    const beforeChangeHandler = (val = -1) => {
      return emitEvent(copyEmit, 'before-change', state.internalCurrentPage, null, val)
    }

    /**
     * 处理当前页码变化事件
     * @param val - 新的页码值
     * @returns {boolean} 是否成功改变页码
     */
    const handleCurrentChange = (val: number) => {
      if (!beforeChangeHandler(val)) {
        return false
      }
      state.internalCurrentPage = getValidCurrentPage(Number(val))
      state.userChangePageSize = true
      emitChange()
    }

    /**
     * 处理上一页按钮点击事件
     */
    const prev = () => {
      const callback = () => {
        if (props.disabled || !beforeChangeHandler(state.internalCurrentPage - 1)) {
          return false
        }

        const newVal = state.internalCurrentPage - 1

        state.internalCurrentPage = getValidCurrentPage(newVal)
        emit('prev-click', state.internalCurrentPage)
        emitChange()
      }

      if (props.isBeforePageChange) {
        const newPage = state.internalCurrentPage - 1
        const temp = buildBeforePageChangeParam({ newPage, callback })

        emit('before-page-change', temp)
      } else {
        callback()
      }
    }

    /**
     * 处理下一页按钮点击事件
     */
    const next = () => {
      const callback = () => {
        if (props.disabled || !beforeChangeHandler(state.internalCurrentPage + 1)) {
          return false
        }

        const newVal = state.internalCurrentPage + 1

        state.internalCurrentPage = getValidCurrentPage(newVal)
        emit('next-click', state.internalCurrentPage)
        emitChange()
      }

      if (props.isBeforePageChange) {
        const newPage = state.internalCurrentPage + 1
        const temp = buildBeforePageChangeParam({ newPage, callback })

        emit('before-page-change', temp)
      } else {
        callback()
      }
    }

    /**
     * 构建页码变化前的参数对象
     * @param param - 包含新页码和回调函数的参数对象
     * @returns {Object} 完整的参数对象
     */
    const buildBeforePageChangeParam = (param: any) => {
      const currentPage = state.internalCurrentPage
      const newPageSize = state.internalPageSize
      const currentPageSize = state.internalPageSize

      return Object.assign({ currentPage, newPageSize, currentPageSize }, param)
    }

    /**
     * 获取有效的当前页码
     * @param val - 输入的页码值
     * @returns {number} 有效的页码值
     */
    const getValidCurrentPage = (val: number) => {
      val = parseInt(String(val), 10)

      const hasPageCount = typeof internalPageCount.value === 'number'
      let resetVal

      if (!hasPageCount) {
        if (isNaN(val) || val < 1) {
          resetVal = 1
        }
      } else {
        if (val < 1) {
          resetVal = 1
        } else if (internalPageCount.value && val > internalPageCount.value) {
          resetVal = internalPageCount.value
        }
      }

      if (resetVal === undefined && isNaN(val)) {
        resetVal = 1
      } else if (resetVal === 0) {
        resetVal = 1
      }

      return resetVal === undefined ? val : resetVal
    }

    /**
     * 触发页码变化事件
     */
    const emitChange = () => {
      nextTick(() => {
        if (state.internalCurrentPage !== state.lastEmittedPage || state.userChangePageSize) {
          emit('current-change', state.internalCurrentPage)
          emit('update:currentPage', state.internalCurrentPage)
          emit('page-change', {
            currentPage: state.internalCurrentPage,
            pageSize: state.internalPageSize,
            total: state.internalTotal
          })
          state.lastEmittedPage = state.internalCurrentPage
          state.userChangePageSize = false
        }
      })
    }

    /**
     * 设置总条数
     * @param val - 新的总条数值
     */
    const setTotal = (val: number) => {
      state.internalTotal = val
    }

    // 计算属性
    /**
     * 计算总条数文本
     * 根据总条数的大小返回不同的显示文本
     */
    const totalText = computed(() => {
      if (typeof props.customTotal === 'string') return props.customTotal

      const totals = parseInt(String(props.total || 0))

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
    })

    /**
     * 计算内部总页数
     * 根据总条数和每页条数计算
     */
    const internalPageCount = computed(() => {
      if (typeof state.internalTotal === 'number') {
        return Math.max(1, Math.ceil(state.internalTotal / state.internalPageSize))
      } else if (typeof props.pageCount === 'number') {
        return Math.max(1, props.pageCount)
      }

      return null
    })

    /**
     * 计算内部布局
     * 根据mode和layout属性确定分页器的布局
     */
    const internalLayout = computed(() => {
      let layout = ''

      if (props.mode && !props.layout) {
        props.mode === 'number' && (layout = 'sizes, prev, pager, next, jumper, total')
        props.mode === 'simple' && (layout = 'sizes, prev, next')
        props.mode === 'complete' && (layout = 'sizes, prev, pager, next, jumper,total')
        props.mode === 'fixed' && (layout = 'prev, pager, next')
      } else if ((!props.mode && props.layout) || (props.mode && props.layout)) {
        layout = props.layout
      } else {
        layout = 'prev, pager, next, jumper, total'
      }

      return layout
    })

    // 监听器
    watch(
      () => props.currentPage,
      (curPage) => {
        state.internalCurrentPage = getValidCurrentPage(curPage)
      },
      { immediate: true }
    )

    watch(internalPageCount, (pageCount) => {
      const oldCurPage = state.internalCurrentPage

      if (pageCount && pageCount > 0 && oldCurPage === 0) {
        state.internalCurrentPage = 1
      } else if (pageCount && oldCurPage > pageCount) {
        state.internalCurrentPage = pageCount === 0 ? 1 : pageCount
        state.userChangePageSize && emitChange()
      }

      state.userChangePageSize = false
    })

    watch(
      () => state.internalCurrentPage,
      (curPage) => {
        emit('update:currentPage', curPage)
        state.lastEmittedPage = -1
      },
      { immediate: true }
    )

    watch(
      () => props.pageSize,
      (pageSize) => {
        state.internalPageSize = isNaN(pageSize) ? 10 : pageSize
      },
      { immediate: true }
    )

    watch(
      () => props.total,
      (total) => {
        state.internalTotal = total
      }
    )

    // 生命周期钩子
    onMounted(() => {
      if (document.querySelector('[data-tag="tiny-pager-total-loading"]')) {
        const target = document.querySelector('[data-tag="tiny-pager-total-loading"]')
        if (target) {
          Loading.service({
            target: target as HTMLElement
          })
        }
      }
    })

    return {
      // 状态
      ...toRefs(state),
      // 方法
      t,
      handleJumperFocus,
      handleJumperInput,
      handleJumperChange,
      handleJumperClick,
      parseJumperValue,
      handleSizeChange,
      canJumperGo,
      beforeSizeChangeHandler,
      beforePagerChangeHandler,
      beforeJumperChangeHandler,
      copyEmit,
      beforeChangeHandler,
      handleCurrentChange,
      prev,
      next,
      buildBeforePageChangeParam,
      getValidCurrentPage,
      emitChange,
      setTotal,
      // 计算属性
      totalText,
      internalPageCount,
      internalLayout,
      // refs
      sizesList
    }
  }
})
</script>

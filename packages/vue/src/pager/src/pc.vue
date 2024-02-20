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

<template>
  <div
    v-if="state.showPager"
    :class="['tiny-pager tiny-pager__number', size ? 'tiny-pager--' + size : '', disabled ? 'is-disabled' : '']"
    :style="{ textAlign: state.align }"
  >
    <template v-for="(item, index) in state.internalLayout">
      <!-- prev -->
      <button
        v-if="item === 'prev'"
        :key="'prev' + index"
        type="button"
        class="tiny-pager__btn-prev"
        :disabled="disabled || state.internalCurrentPage <= 1"
        @click="prev"
      >
        <span v-if="prevText">{{ prevText }}</span>
        <chevron-left v-else class="tiny-svg-size" />
      </button>

      <!-- jumper -->
      <div v-else-if="item === 'jumper'" :key="'jumper' + index" class="tiny-pager__group">
        <div class="tiny-pager__goto">
          <span class="tiny-pager__goto-text">{{ t('ui.page.jump') }}</span>
          <input
            type="text"
            ref="jumperInput"
            :value="state.jumperValue"
            :disabled="disabled"
            @focus="handleJumperFocus"
            @input="handleJumperInput"
            @change="handleJumperChange"
          />
          <span v-if="state.showJumperSufix" class="tiny-pager__goto-text tiny-pager__goto-text-sufix">{{
            t('ui.page.pageClassifier')
          }}</span>
        </div>
      </div>

      <!-- current -->
      <div v-else-if="item === 'current'" :key="'current' + index" class="tiny-pager__group tiny-unselect">
        <ul class="tiny-pager__pages">
          <li class="is-active">{{ state.internalCurrentPage }}</li>
        </ul>
      </div>

      <!-- pager-item -->
      <pager
        v-else-if="item === 'pager'"
        :key="'pager' + index"
        :is-before-page-change="isBeforePageChange"
        :current-page="state.internalCurrentPage"
        :page-count="state.internalPageCount"
        :pager-count="pagerCount"
        :disabled="disabled"
        @change="handleCurrentChange"
        @before-page-change="beforePagerChangeHandler"
      ></pager>

      <!-- next -->
      <button
        v-else-if="item === 'next'"
        :key="'next' + index"
        type="button"
        class="tiny-pager__btn-next"
        :disabled="disabled || state.internalCurrentPage === state.internalPageCount || state.internalPageCount === 0"
        @click="next"
      >
        <span v-if="nextText">{{ nextText }}</span>
        <chevron-right v-else class="tiny-svg-size" />
      </button>

      <!-- sizes -->
      <div v-else-if="item === 'sizes'" :key="'sizes' + index" class="tiny-pager__group tiny-pager__sizes">
        <tiny-popover
          ref="sizesList"
          placement="bottom-start"
          :append-to-body="popperAppendToBody === false ? false : appendToBody"
          trigger="click"
          :popper-class="'tiny-pager__selector ' + (popperClass ? '' + popperClass : '')"
          :visible-arrow="false"
          :disabled="disabled"
          @show="handleSizeShowPopover"
          @hide="handleSizeHidePopover"
        >
          <template #reference>
            <div class="tiny-pager__popover" @click="clickSizes">
              <div ref="pageSize" class="tiny-pager__page-size">
                <span class="sizes">{{ state.internalPageSize }}</span>
                <span>{{ t('ui.page.page') }}</span>
                <div class="tiny-pager__page-size-btn">
                  <triangle-down :class="['tiny-svg-size', state.showSizes ? 'tiny-svg-size__reverse-180' : '']" />
                </div>
              </div>
            </div>
          </template>
          <div class="tiny-pager__selector-body">
            <ul class="tiny-pager__selector-poplist">
              <li
                v-for="(sizeItem, sizeIndex) in pageSizes"
                :key="sizeIndex"
                :class="['list-item', sizeItem === state.internalPageSize ? 'is-selected select-pre' : '']"
                :title="String(sizeItem)"
                @click="handleSizeChange(sizeItem)"
              >
                {{ sizeItem }}
              </li>
            </ul>
          </div>
        </tiny-popover>
      </div>
      <slot v-else-if="item === 'slot'"></slot>

      <!-- total -->
      <div
        v-else-if="item === 'total' && typeof state.internalTotal === 'number'"
        :key="'total' + index"
        class="tiny-pager__group"
        :class="{
          'is-disabled': disabled,
          'tiny-pager__loading': showTotalLoading,
          'tiny-pager__pull-left': state.totalFixedLeft
        }"
      >
        <div :class="['tiny-pager__total', size ? 'tiny-pager--' + size : '']">
          <template v-if="showTotalLoading">
            <div v-loading="showTotalLoading" class="tiny-pager__total-loading"></div>
            <span class="tiny-pager__loading-text">{{ t('ui.page.loadingTotals') }}</span>
          </template>
          <template v-else-if="state.totalI18n === 'total'">
            <span>{{ t('ui.page.total') }}</span>
            <span class="tiny-pager__total-allpage"> {{ customTotal ? state.totalText : state.internalTotal }} </span>
            <span>{{ t('ui.page.item') }}</span>
          </template>
          <template v-else>
            <span>{{ t('ui.page.totals') }}</span>
            <span> {{ customTotal ? state.totalText : state.internalTotal }} </span>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="tsx">
import Pager from '@opentiny/vue-pager-item'
import Popover from '@opentiny/vue-popover'
import Loading from '@opentiny/vue-loading'
import { $prefix, setup, defineComponent, props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/pager/vue'
import { iconTriangleDown, iconChevronLeft, iconChevronRight } from '@opentiny/vue-icon'
import type { IPagerApi } from '@opentiny/vue-renderless/types/pager.type'
import '@opentiny/vue-theme/pager/index.less'

export default defineComponent({
  name: $prefix + 'Pager',
  props: [
    ...props,
    'accurateJumper',
    'appendToBody',
    'currentPage',
    'disabled',
    'hideOnSinglePage',
    'isBeforePageChange',
    'layout',
    'mode',
    'nextText',
    'pageCount',
    'pageSize',
    'pageSizes',
    'pagerCount',
    'popperAppendToBody',
    'showTotalLoading',
    'customTotal',
    'popperClass',
    'prevText',
    'total',
    'size',
    'align'
  ],
  directives: {
    loading: Loading.directive
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IPagerApi
  },
  components: {
    TinyPopover: Popover,
    ChevronLeft: iconChevronLeft(),
    ChevronRight: iconChevronRight(),
    TriangleDown: iconTriangleDown(),
    Pager
  }
})
</script>

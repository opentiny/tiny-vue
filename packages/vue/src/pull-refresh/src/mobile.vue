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
  <div class="tiny-mobile-pull-refresh" :style="state.refreshStyle">
    <div
      class="tiny-mobile-pull-refresh__track"
      ref="track"
      :style="{
        'transition-duration': state.animationDuration + 'ms',
        transform: 'translate3d(0px,' + state.translate3d + 'px,0px)'
      }"
    >
      <div class="tiny-mobile-pull-refresh__tips tiny-mobile-pull-refresh__head">
        <span v-if="!state.pullDownLoading">{{ state.pullDownReplaces }}</span>

        <slot name="header" v-if="state.pullDownLoading">
          <div v-if="state.pullDownLoading" class="tiny-mobile-pull-refresh-loading-content">
            <div
              :class="[
                'tiny-mobile-pull-refresh__loading',
                state.pullDownLoading ? 'tiny-mobile-pull-refresh__loading-animation' : null
              ]"
            >
              <div class="tiny-mobile-pull-refresh__loading-inner"></div>
            </div>
            <div class="tiny-mobile-pull-refresh__text" v-if="state.pullDownLoadingText">
              {{ state.pullDownLoadingText }}
            </div>
          </div>
        </slot>
      </div>
      <div class="tiny-mobile-pull-refresh__content" ref="content">
        <slot></slot>

        <div class="tiny-mobile-pull-refresh__foot" v-if="!state.disabledPullUp" ref="foot">
          <slot name="footer">
            <div v-if="state.hasMore" class="tiny-mobile-pull-refresh-loading-content">
              <div class="tiny-mobile-pull-refresh__loading tiny-mobile-pull-refresh__loading-animation">
                <div class="tiny-mobile-pull-refresh__loading-inner"></div>
              </div>
              <div class="tiny-mobile-pull-refresh__text" v-if="state.pullUpLoadingText">
                {{ state.pullUpLoadingText }}
              </div>
            </div>
            <div v-else>{{ state.noMoreText }}</div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="tsx">
import { $prefix, setup, defineComponent, props } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/pull-refresh/vue'
import '@opentiny/vue-theme-mobile/pull-refresh/index.less'
export default defineComponent({
  name: $prefix + 'PullRefresh',
  props: {
    ...props,
    modelValue: Boolean,
    loosingText: String,
    animationDuration: {
      type: [Number, String],
      default: 300
    },
    hasMore: {
      type: Boolean,
      default: true
    },
    disabledPullDown: {
      type: Boolean,
      default: false
    },
    disabledPullUp: {
      type: Boolean,
      default: false
    },
    pullUpDistance: {
      type: [Number, String],
      default: 18
    },
    pullUpLoadingText: {
      type: String,
      default: null
    },
    pullDownLoadingText: {
      type: String,
      default: null
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>

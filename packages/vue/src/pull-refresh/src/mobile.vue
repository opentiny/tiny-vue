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
      <div
        class="tiny-mobile-pull-refresh__tips tiny-mobile-pull-refresh__head"
        :style="{ height: state.pullDown.headHeight + 'px' }"
        v-if="state.pullDownLoading || state.pullDownReplaces"
      >
        <span v-if="!state.pullDownLoading">{{ state.pullDownReplaces }}</span>
        <slot name="loading" v-if="state.pullDownLoading">
          <ul v-if="state.pullDownLoading" class="tiny-mobile-pull-refresh__loading">
            <i></i>
            <i></i>
            <i></i>
          </ul>
        </slot>
      </div>
      <div class="tiny-mobile-pull-refresh__content">
        <slot></slot>
      </div>
      <div
        class="tiny-mobile-pull-refresh__tips tiny-mobile-pull-refresh__foot"
        :style="{ height: state.pullUp.footHeight + 'px' }"
        v-if="state.pullUpLoading || state.pullUpReplaces"
      >
        <span v-if="!state.pullUpLoading">{{ state.pullUpReplaces }}</span>
        <slot name="loading" v-if="state.pullUpLoading">
          <ul v-if="state.pullUpLoading" class="tiny-mobile-pull-refresh__loading">
            <i></i>
            <i></i>
            <i></i>
          </ul>
        </slot>
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
    successText: String,
    failedText: String,
    successDuration: {
      type: [Number, String],
      default: 500
    },
    animationDuration: {
      type: [Number, String],
      default: 300
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pullUp: {
      type: Object,
      default: {}
    },
    pullDown: {
      type: Object,
      default: {}
    },
    hasMore: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>

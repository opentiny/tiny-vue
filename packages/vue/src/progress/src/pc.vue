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
    class="tiny-progress"
    :class="[
      'tiny-progress--' + type,
      status ? 'is-' + status : '',
      {
        'tiny-progress--without-text': !showText,
        'tiny-progress--text-inside': textInside
      }
    ]"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="tiny-progress-bar" v-if="type === 'line'">
      <div class="tiny-progress-bar__outer" :style="{ height: state.strokeWidth + 'px', borderRadius: `${state.strokeWidth / 2}px` }">
        <transition
          appear
          appear-class="custom-appear-class"
          @before-appear="customBeforeAppearHook"
          @appear="customAppearHook"
          @after-appear="customAfterAppearHook"
        >
          <div class="tiny-progress-bar__inner" :style="{ ...state.barStyle, borderRadius: `${state.strokeWidth / 2}px` }">
            <div class="tiny-progress-bar__innerText" v-if="showText && textInside">
              {{ state.content }}
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="tiny-progress-circle" :style="{ height: state.width + 'px', width: state.width + 'px' }" v-else>
      <svg viewBox="0 0 100 100">
        <path
          class="tiny-progress-circle__track"
          :d="state.trackPath"
          stroke="#e5e9f2"
          :stroke-width="state.relativeStrokeWidth"
          fill="none"
          :style="state.trailPathStyle"
        ></path>
        <transition
          appear
          appear-class="custom-appear-class"
          @before-appear="customBeforeAppearHook"
          @appear="customAppearHook"
          @after-appear="customAfterAppearHook"
        >
          <path
            class="tiny-progress-circle__path"
            :d="state.trackPath"
            :stroke="state.stroke"
            fill="none"
            stroke-linecap="round"
            :stroke-width="percentage ? state.relativeStrokeWidth : 0"
            :style="state.circlePathStyle"
          ></path>
        </transition>
      </svg>
    </div>
    <div class="tiny-progress__text" v-if="showText && !textInside" :style="{ fontSize: state.progressTextSize + 'px' }">
      <template v-if="!status">
        {{ state.content }}
      </template>
      <component v-else :is="state.iconClass" class="tiny-svg-size" />
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/progress/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconClose, iconSuccess, iconError, iconYes, iconWarning } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/progress/index.less'

export default defineComponent({
  props: [...props, 'type', 'percentage', 'status', 'strokeWidth', 'textInside', 'width', 'showText', 'color', 'format'],
  components: {
    IconClose: iconClose(),
    IconSuccess: iconSuccess(),
    IconError: iconError(),
    IconYes: iconYes(),
    IconWarning: iconWarning()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>

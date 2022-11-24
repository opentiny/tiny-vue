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
      <div
        class="tiny-progress-bar__outer"
        :style="{ height: strokeWidth + 'px' }"
      >
        <transition
          appear
          appear-class="custom-appear-class"
          @before-appear="customBeforeAppearHook"
          @appear="customAppearHook"
          @after-appear="customAfterAppearHook"
        >
          <div class="tiny-progress-bar__inner" :style="state.barStyle">
            <div
              class="tiny-progress-bar__innerText"
              v-if="showText && textInside"
            >
              {{ state.content }}
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div
      class="tiny-progress-circle"
      :style="{ height: width + 'px', width: width + 'px' }"
      v-else
    >
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
    <div
      class="tiny-progress__text"
      v-if="showText && !textInside"
      :style="{ fontSize: state.progressTextSize + 'px' }"
    >
      <template v-if="!status">{{ state.content }}</template>
      <component v-else :is="state.iconClass" class="tiny-svg-size" />
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/progress/vue'
import { props, setup } from '@opentiny/vue-common'
import {
  iconClose,
  iconSuccessful,
  iconError,
  iconYes,
  iconWarning
} from '@opentiny/vue-icon'
import '@opentiny/vue-theme/progress/index.css'

export default {
  props: [
    ...props,
    'type',
    'percentage',
    'status',
    'strokeWidth',
    'textInside',
    'width',
    'showText',
    'color',
    'format'
  ],
  components: {
    IconClose: iconClose(),
    IconSuccessful: iconSuccessful(),
    IconError: iconError(),
    IconYes: iconYes(),
    IconWarning: iconWarning()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>

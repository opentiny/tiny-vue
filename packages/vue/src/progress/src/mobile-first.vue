<template>
  <div
    :class="[type !== 'line' && 'inline-block text-center']"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="relative leading-none" :class="[type === 'line' ? 'flex items-center' : 'inline-block']">
      <div
        class="box-border inline-block align-middle flex-1"
        :class="[!showText ? 'pr-0 mr-0 block' : '', textInside ? 'pr-0 mr-0' : '']"
        v-if="type === 'line'"
      >
        <div
          class="rounded-full bg-color-bg-3 overflow-hidden relative align-middle"
          :class="[size === 'small' ? 'h-1' : '', size === 'medium' ? 'h-2' : '', size === 'large' ? 'h-4' : '']"
          :style="state.strokeWidth ? { height: state.strokeWidth + 'px' } : {}"
        >
          <transition
            appear
            appear-class="custom-appear-class"
            @before-appear="customBeforeAppearHook"
            @appear="customAppearHook"
            @after-appear="customAfterAppearHook"
          >
            <div
              :class="
                m(
                  `absolute left-0 top-0 h-full bg-color-brand text-right rounded-full leading-none whitespace-nowrap transition-[width] duration-500 ease-in after:content-[''] after:h-full after:inline-block after:align-middle`,
                  status === 'success' && 'bg-color-success',
                  status === 'warning' && 'bg-color-warning',
                  status === 'exception' && 'bg-color-error'
                )
              "
              :style="state.barStyle"
            >
              <div class="text-color-text-inverse text-xs mr-3 inline-block align-middle" v-if="showText && textInside">
                {{ state.content }}
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div
        class="inline-block"
        :class="[size === 'small' && 'w-12 h-12', size === 'medium' && 'w-24 h-24', size === 'large' && 'w-40 h-40']"
        :style="state.circleStyle"
        v-else
      >
        <svg viewBox="0 0 100 100">
          <path
            :d="state.trackPath"
            stroke="#E8EBEF"
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
        :class="
          m(
            'text-xs inline-block align-middle ml-3 leading-none',
            !showText && 'hidden',
            type !== 'line'
              ? 'text-color-text-primary absolute top-1/2 left-0 w-full text-center m-0 translate-x-0 -translate-y-1/2'
              : 'text-color-text-primary'
          )
        "
        v-if="showText && !textInside"
        :style="{ fontSize: state.progressTextSize + 'px' }"
      >
        <template v-if="!status">
          <span v-if="type === 'line'">
            {{ state.content }}
          </span>
          <div v-else>
            <span :style="{ fontSize: state.progressTextSize + 'px' }">{{
              typeof format === 'function' ? state.content : percentage
            }}</span>
            <span v-if="typeof format !== 'function'" :style="{ fontSize: state.percentTextSize + 'px' }">%</span>
          </div>
        </template>
        <component
          v-else
          :is="state.iconClass"
          :class="[
            status === 'success' && 'fill-color-success',
            status === 'warning' && 'fill-color-warning',
            status === 'exception' && 'fill-color-error',
            size === 'small' ? (type === 'line' ? 'w-3 h-3' : 'w-6 h-6') : '',
            size === 'medium' ? (type === 'line' ? 'w-4 h-4' : 'w-10 h-10') : '',
            size === 'large' ? (type === 'line' ? 'w-6 h-6' : 'w-20 h-20') : ''
          ]"
          :style="state.iconStyle"
        />
      </div>
    </div>
    <div v-if="type !== 'line' && info" class="mt-2 text-center text-sm text-gray-500">
      {{ info }}
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/progress/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconClose, iconSuccess, iconError, iconYes, iconWarning } from '@opentiny/vue-icon'

export default defineComponent({
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
    'format',
    'size',
    'info'
  ],
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

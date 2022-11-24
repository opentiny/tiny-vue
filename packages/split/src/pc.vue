<template>
  <div ref="outerWrapper" :class="state.wrapperClasses">
    <div v-if="state.isHorizontal" :class="`${state.prefix}-horizontal`">
      <div
        :style="{ right: `${state.anotherOffset}%` }"
        :class="state.paneClasses"
        class="left-pane"
      >
        <slot name="left" />
      </div>
      <div
        :class="`${state.prefix}-trigger-con`"
        :style="{ left: `${state.offset}%` }"
        @mousedown="handleMousedown"
      >
        <slot name="trigger">
          <div
            :class="[
              `${state.prefix}-trigger`,
              `${state.prefix}-trigger-vertical`
            ]"
          >
            <div :class="[`${state.prefix}-trigger-bar-con`, 'vertical']">
              <i
                v-for="i in 3"
                v-once
                :class="`${state.prefix}-trigger-bar`"
                :key="`trigger-${i}`"
              ></i>
            </div>
          </div>
        </slot>
      </div>
      <div
        :style="{ left: `${state.offset}%` }"
        :class="state.paneClasses"
        class="right-pane"
      >
        <slot name="right" />
      </div>
    </div>
    <div v-else :class="`${state.prefix}-vertical`">
      <div
        :style="{ bottom: `${state.anotherOffset}%` }"
        :class="state.paneClasses"
        class="top-pane"
      >
        <slot name="top" />
      </div>
      <div
        :class="`${state.prefix}-trigger-con`"
        :style="{ top: `${state.offset}%` }"
        @mousedown="handleMousedown"
      >
        <slot name="trigger">
          <div
            :class="[
              `${state.prefix}-trigger`,
              `${state.prefix}-trigger-horizontal`
            ]"
          >
            <div :class="[`${state.prefix}-trigger-bar-con`, 'horizontal']">
              <i
                v-for="i in 3"
                v-once
                :class="`${state.prefix}-trigger-bar`"
                :key="`trigger-${i}`"
              ></i>
            </div>
          </div>
        </slot>
      </div>
      <div
        :style="{ top: `${state.offset}%` }"
        :class="state.paneClasses"
        class="bottom-pane"
      >
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/split/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  emits: [
    'moving',
    'mousemove',
    'mouseup',
    'moveend',
    'movestart',
    'update:modelValue'
  ],
  props: [...props, 'modelValue', 'mode', 'leftTopMin', 'rightBottomMin'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>

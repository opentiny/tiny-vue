<template>
  <tiny-action-sheet
    data-tag="tiny-mobile-cascader-select"
    content-class="rounded-t-lg bg-white"
    :visible="state.actionSheetVisible"
    @update:visible="state.actionSheetVisible = $event"
  >
    <div class="w-full h-max rounded-t-lg bg-white select-none overflow-hidden" @click.stop>
      <div
        ref="selectPanel"
        :class="[
          'w-full h-max grid',
          { 'grid-cols-1': state.selectorCount === 1 },
          { 'grid-cols-2': state.selectorCount === 2 },
          { 'grid-cols-3': state.selectorCount === 3 }
        ]"
      >
        <div
          v-for="(v, i) in state.selectorCount"
          :key="`s${i}`"
          class="h-40"
          style="transform: translate3d(0, 0, 0)"
          @touchstart.prevent="handleTouchstart"
          @touchend.prevent="($event) => handleTouchend($event, i)"
          @touchmove.prevent="($event) => throttledHandleTouchmove($event, i)"
        >
          <div
            v-for="(option, j) in state[`selector${i}`].visibleOptions"
            data-tag="tiny-mobile-cs-option"
            :date-status="statusOpt(option)"
            :data-option="option[valueField]"
            :key="`s${i}o${j}`"
            :class="
              m(
                'w-full h-8 flex justify-center items-center cursor-pointer relative',
                { 'text-xs': styleOpt(option) === 2 },
                { 'text-sm': styleOpt(option) === 1 },
                { 'text-base': styleOpt(option) === 0 },
                { [textColor.third || 'text-color-icon-placeholder']: styleOpt(option) === 2 },
                { [textColor.second || 'text-color-icon-secondary']: styleOpt(option) === 1 },
                { [textColor.first || 'text-color-icon-focus']: styleOpt(option) === 0 },
                { [textColor.disabled || 'text-color-icon-disabled']: statusOpt(option) === 'disabled' }
              )
            "
          >
            <slot name="option" v-bind="{ i, j, option }">
              {{ option[textField] }}
            </slot>
          </div>
        </div>
      </div>
      <div class="w-full h-11 mt-4 flex justify-center items-center">
        <tiny-button
          type="primary"
          size="large"
          :button-class="
            m(
              'h-10 sm:h-10 mx-4 flex justify-center items-center',
              state.confirmDisabled ? 'bg-color-icon-disabled' : 'bg-color-icon-focus'
            )
          "
          :disabled="state.confirmDisabled"
          @click="confirm"
        >
          {{ t('ui.button.confirm') }}
        </tiny-button>
      </div>
    </div>
  </tiny-action-sheet>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/cascader-select/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import ActionSheet from '@opentiny/vue-action-sheet'
import Button from '@opentiny/vue-button'

export default defineComponent({
  emits: ['update:modelValue', 'update:visible'],
  props: [
    ...props,
    'modelValue',
    'options',
    'visible',
    'cycleRoll',
    'valueType',
    'valueField',
    'textField',
    'disabled',
    'textColor'
  ],
  components: {
    TinyActionSheet: ActionSheet,
    TinyButton: Button
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>

<template>
  <div data-tag="tiny-time-picker-mobile" v-show="visible">
    <tiny-cascader-select
      ref="cascaderSelect"
      v-model="state.dateArr"
      :cycle-roll="cycleRoll"
      :options="state.options"
      :disabled="disabled"
      :lock-scroll="lockScroll"
      custom-panel-class="px-4 pb-4"
      :visible="state.visible"
      @update:visible="updateVisible"
      @update:modelValue="confirm"
    >
      <template #split>
        <div
          data-tag="tiny-time-picker-split"
          class="h-full w-1 flex items-center justify-center absolute left-0 -ml-0.5 text-color-text-primary select-none"
        >
          :
        </div>
      </template>
      <template #header-left>
        <span v-if="clearable" class="cursor-pointer text-color-brand" @click="clear">
          {{ t('ui.datepicker.clear') }}
        </span>
      </template>
    </tiny-cascader-select>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/time-picker-mobile/vue'
import { $prefix, setup, $props, defineComponent } from '@opentiny/vue-common'
import CascaderSelect from '@opentiny/vue-cascader-select'

export default defineComponent({
  name: $prefix + 'TimePickerMobile',
  components: {
    TinyCascaderSelect: CascaderSelect
  },
  emits: ['update:modelValue', 'confirm', 'update:visible', 'clear'],
  props: {
    ...$props,
    modelValue: Array,
    visible: {
      type: Boolean,
      default: false
    },
    cycleRoll: {
      type: Boolean,
      default: true
    },
    disabled: Function,
    lockScroll: {
      type: Boolean,
      default: true
    },
    step: {
      type: Object,
      default() {
        return { hour: 1, minute: 1, second: 1 }
      }
    },
    showSeconds: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>

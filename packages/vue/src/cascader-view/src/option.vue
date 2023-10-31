<template>
  <div class="flex items-start leading-6 cursor-pointer select-none" @click="$emit('click', $event)">
    <span
      v-if="option"
      class="w-11 h-11 flex-none flex items-center justify-center relative"
      @click.stop="$emit('check', option)"
    >
      <div class="absolute left-0 right-0 top-0 bottom-0 z-10"></div>
      <tiny-checkbox
        custom-class="flex h-full w-full items-center justify-center"
        :checked="!option.indeterminate && option.checked"
        :indeterminate="option.indeterminate"
        :disabled="data.disabled"
      ></tiny-checkbox>
    </span>
    <div
      :class="['flex-auto flex w-full text-sm py-3', { 'truncate': ellipsis }]"
      @click.stop="$emit('expand', option)"
    >
      <slot>
        <div :class="['flex-auto', { 'truncate': ellipsis }]">
          <div class="flex">
            <div :class="[{ 'min-w-[theme(spacing.14)]': !textField3 }, { 'truncate': ellipsis }]">
              {{ data[textField] }}
            </div>
            <div v-if="textField2" :class="['ml-5 text-color-text-placeholder', { 'truncate': ellipsis }]">
              {{ data[textField2] }}
            </div>
          </div>
          <div v-if="textField3" :class="['text-color-text-placeholder', { 'truncate': ellipsis }]">
            {{ data[textField3] }}
          </div>
        </div>
        <div v-if="!loading && !option.isLeaf" class="flex flex-none w-8 items-center justify-end ml-2">
          <IconChevronRight custom-class="w-4 h-4 fill-current"></IconChevronRight>
        </div>
        <div v-if="option.loading" class="flex flex-none w-5 items-center justify-center ml-2">
          <svg class="animate-[spin_1.5s_linear_infinite] fill-current" viewBox="25 25 50 50">
            <circle class="stroke-color-brand tiny-loading-path" cx="50" cy="50" r="24" fill="none" />
          </svg>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import Checkbox from '@opentiny/vue-checkbox'
import { iconChevronRight } from '@opentiny/vue-icon'

export default {
  emits: ['click'],
  components: {
    TinyCheckbox: Checkbox,
    IconChevronRight: iconChevronRight()
  },
  props: ['selected', 'ellipsis', 'option', 'textField', 'textField2', 'textField3', 'loading'],
  computed: {
    data() {
      return this.option.data || this.option
    }
  }
}
</script>

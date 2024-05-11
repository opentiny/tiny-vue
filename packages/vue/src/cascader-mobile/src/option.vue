<template>
  <div class="flex items-start leading-5.5 py-3 cursor-pointer select-none" @click="$emit('click', $event)">
    <component
      v-if="multiple"
      :is="selected ? 'icon-checked-sur' : 'icon-check'"
      :class="['flex-none mt-1 mr-2', selected ? 'fill-color-brand' : 'fill-color-icon-disabled']"
      custom-class="w-4.5 h-4.5"
    />
    <div
      :class="[
        'flex-auto flex w-full text-sm',
        { 'truncate': ellipsis },
        { 'text-color-brand': !multiple && selected }
      ]"
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
        <div v-if="!loading && !multiple && selected" class="flex flex-none w-5 items-center justify-center ml-2">
          <IconYes custom-class="w-5 h-5" class="fill-color-brand"></IconYes>
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
import { IconHalfselect, IconCheckedSur, IconCheck, IconYes, IconLoading } from '@opentiny/vue-icon'

export default {
  emits: ['click'],
  components: {
    IconCheck: IconCheck(),
    IconYes: IconYes(),
    IconLoading: IconLoading(),
    IconCheckedSur: IconCheckedSur(),
    IconHalfselect: IconHalfselect()
  },
  props: ['selected', 'ellipsis', 'multiple', 'option', 'textField', 'textField2', 'textField3', 'loading'],
  computed: {
    data() {
      return this.option.data || this.option
    }
  }
}
</script>

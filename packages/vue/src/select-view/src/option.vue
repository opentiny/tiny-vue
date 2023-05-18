<template>
  <div class="flex items-start leading-[1.375rem] py-3 cursor-pointer select-none border-b-0.5 border-color-bg-4" @click.stop="$emit('click', $event)">
    <component v-if="multiple" :is="selected ? 'icon-checked-sur' : 'icon-check'" :class="[
      'flex-none w-4 h-4 mt-0.5 mr-3',
      selected && !readonly ? 'fill-color-brand' : 'fill-color-icon-disabled'
    ]" />
    <div :class="['flex-auto truncate', { 'text-color-brand': !multiple && selected }]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { IconHalfselect, IconCheckedSur, IconCheck } from '@opentiny/vue-icon'
import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  inheritAttrs: false,
  emits: ['click'],
  components: {
    IconCheck: IconCheck(),
    IconCheckedSur: IconCheckedSur(),
    IconHalfselect: IconHalfselect()
  },
  props: {
    selected: Boolean,
    multiple: Boolean,
    readonly: Boolean
  }
})
</script>

<template>
  <div class="flex items-start leading-5.5 py-3 cursor-pointer select-none" @click="$emit('click', $event)">
    <component
      v-if="multiple"
      :is="selected ? 'icon-checked-sur' : 'icon-check'"
      :class="['flex-none w-4 h-4 mt-0.5 mr-2', selected ? 'fill-color-brand' : 'fill-color-icon-disabled']"
    />
    <div :class="['flex-auto', { 'truncate': ellipsis }, { 'text-color-brand': !multiple && selected }]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { iconHalfselect, iconCheckedSur, iconCheck } from '@opentiny/vue-icon'

export default {
  emits: ['click'],
  components: {
    IconCheck: iconCheck(),
    IconCheckedSur: iconCheckedSur(),
    IconHalfselect: iconHalfselect()
  },
  props: ['selected', 'ellipsis', 'multiple']
}
</script>

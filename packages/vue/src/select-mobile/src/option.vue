<template>
  <div class="flex items-start leading-6 py-3 cursor-pointer select-none" @click="$emit('click', $event)">
    <component v-if="multiple" :is="selected ? 'icon-checked-sur' : 'icon-check'" :class="['flex-none mt-1 mr-2', selected ? 'fill-color-brand' : 'fill-color-icon-disabled']" custom-class="w-4.5 h-4.5" />
    <div :class="['flex-auto', { 'truncate': ellipsis }, { 'text-color-brand': !multiple && selected }]">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { IconHalfselect, IconCheckedSur, IconCheck } from '@opentiny/vue-icon'
import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  emits: ['click'],
  components: {
    IconCheck: IconCheck(),
    IconCheckedSur: IconCheckedSur(),
    IconHalfselect: IconHalfselect()
  },
  props: ['selected', 'ellipsis', 'multiple']
})
</script>

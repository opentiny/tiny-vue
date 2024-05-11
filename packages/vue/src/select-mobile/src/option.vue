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
            <div :class="[{ 'min-w-[3.75rem]': !textField3 }, { 'truncate': ellipsis }]">{{ option[textField] }}</div>
            <div v-if="textField2" :class="['ml-5 text-color-text-placeholder', { 'truncate': ellipsis }]">
              {{ option[textField2] }}
            </div>
          </div>
          <div v-if="textField3" :class="['text-color-text-placeholder', { 'truncate': ellipsis }]">
            {{ option[textField3] }}
          </div>
        </div>
        <div v-show="!multiple && selected" class="flex flex-none w-5 items-center justify-center ml-2">
          <IconYes custom-class="w-5 h-5" class="fill-color-brand"></IconYes>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { iconHalfselect, iconCheckedSur, iconCheck, iconYes } from '@opentiny/vue-icon'
import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  emits: ['click'],
  components: {
    IconCheck: iconCheck(),
    IconYes: iconYes(),
    IconCheckedSur: iconCheckedSur(),
    IconHalfselect: iconHalfselect()
  },
  props: ['selected', 'ellipsis', 'multiple', 'option', 'textField', 'textField2', 'textField3']
})
</script>

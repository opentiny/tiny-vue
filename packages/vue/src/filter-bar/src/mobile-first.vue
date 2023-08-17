<template>
  <div
    data-tag="tiny-filter-bar"
    class="relative text-sm text-color-text-primary w-full h-11 flex items-center justify-center px-4 border-b-0.5 border-color-border-separator"
  >
    <div
      v-for="(item, index) in data"
      :key="index"
      :class="[
        'flex-1 flex items-center justify-center cursor-pointer overflow-hidden mx-3',
        {
          'text-color-brand': modelValue === index
        }
      ]"
      @click.stop="click(index)"
    >
      <slot :data="item" :index="index">
        <span class="truncate" :title="item">{{ item }}</span>
        <IconChevronUp
          v-show="modelValue === index"
          custom-class="flex-none w-3 h-3 ml-2 fill-current"
          :class="[
            {
              'text-color-icon-placeholder': modelValue !== index
            }
          ]"
        ></IconChevronUp>
        <IconChevronDown
          v-show="modelValue !== index"
          custom-class="flex-none w-3 h-3 ml-2 fill-current"
          :class="[
            {
              'text-color-icon-placeholder': modelValue !== index
            }
          ]"
        ></IconChevronDown>
      </slot>
    </div>
    <div class="h-full flex items-center justify-center truncate">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/filter-bar/vue'
import { setup, $props, defineComponent } from '@opentiny/vue-common'
import { IconChevronDown, IconChevronUp, IconUnfilter } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    IconUnfilter: IconUnfilter(),
    IconChevronDown: IconChevronDown(),
    IconChevronUp: IconChevronUp()
  },
  props: {
    ...$props,
    modelValue: Number,
    data: Array
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>

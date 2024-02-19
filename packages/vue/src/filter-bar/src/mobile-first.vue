<template>
  <div
    data-tag="tiny-filter-bar"
    class="relative text-sm text-color-text-primary w-full h-11 flex items-center justify-center px-4 border-b-0.5 border-color-border-separator"
  >
    <div
      data-tag="tiny-filter-bar-body"
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
      <slot :data="item" :index="index" :active="modelValue === index">
        <span data-tag="tiny-filter-bar-item" class="truncate" :title="item">{{ item }}</span>
        <IconDown
          custom-class="flex-none w-3 h-3 ml-2 fill-current transition-transform duration-300"
          :class="modelValue !== index ? 'text-color-icon-placeholder rotate-0' : 'rotate-180'"
        ></IconDown>
      </slot>
    </div>
    <div class="h-full flex items-center justify-center truncate" data-tag="tiny-filter-bar-icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/filter-bar/vue'
import { setup, $props, defineComponent } from '@opentiny/vue-common'
import { IconDown } from '@opentiny/vue-icon'

export default defineComponent({
  components: {
    IconDown: IconDown()
  },
  emits: ['click', 'update:modelValue'],
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

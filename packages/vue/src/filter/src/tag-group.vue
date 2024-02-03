<template>
  <div data-tag="tiny-filter-tag-group overflow-hidden" class="clear-both">
    <div
      data-tag="tag-group-label"
      class="h-5 text-sm leading-5 overflow-hidden text-ellipsis whitespace-nowrap"
      v-if="label"
    >
      {{ label }}
    </div>
    <div data-tag="tag-group-tags" class="text-left -mr-3 overflow-hidden clear-both">
      <div
        v-show="type === 'tag' && multiple"
        :class="['h-9 mt-3 float-left relative']"
        :style="{ width: state.tagWidth }"
      >
        <span
          :class="[
            'h-full block p-2 text-center rounded-sm truncate cursor-pointer border-0.5 mr-3',
            state.selected.length === 0
              ? 'border-current text-color-brand bg-color-info-primary-subtler'
              : 'border-transparent bg-color-bg-2'
          ]"
          @click.stop="selectOptionAll"
          >{{ t('ui.base.all') }}</span
        >
      </div>
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="['h-9 mt-3 float-left relative']"
        :style="{ width: state.tagWidth }"
      >
        <IconSubScript
          v-if="state.selected.indexOf(item.value) !== -1 && multiple"
          class="absolute right-3 w-4 h-4 fill-color-icon-focus"
        ></IconSubScript>
        <span
          :class="[
            'h-full block p-2 text-center rounded-sm truncate cursor-pointer border-0.5 mr-3',
            state.selected.indexOf(item.value) !== -1
              ? 'border-current text-color-brand bg-color-info-primary-subtler'
              : 'border-transparent bg-color-bg-2'
          ]"
          :title="item.label"
          @click.stop="selectOption(item.value)"
          >{{ item.label }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/filter/tag-group'
import { setup, $props, defineComponent } from '@opentiny/vue-common'
import { IconSubScript } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['click'],
  components: { IconSubScript: IconSubScript() },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  props: {
    ...$props,
    modelValue: [String, Number, Array],
    data: Array,
    type: String,
    multiple: Boolean,
    columnNum: Number,
    label: String
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>

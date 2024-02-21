<template>
  <div ref="tagGroup" data-tag="tiny-tag-group" class="overflow-hidden relative pr-8">
    <tiny-tag
      v-for="(item, i) in data"
      :key="item.name + i"
      :size="size"
      :type="item.type || 'info'"
      :effect="effect"
      @click="handelItemClick(item, i, $event)"
      >{{ item.name }}</tiny-tag
    >
    <tiny-popover placement="top-start" trigger="hover" class="absolute top-0 right-0">
      <div data-tag="tiny-tag-group-popover">
        <tiny-tag
          v-for="(tag, i) in state.hiddenTags"
          :key="tag.name + i"
          :size="size"
          :type="tag.type || 'info'"
          customClass="mb-2"
          @click="handelItemClick(tag, data.length - state.hiddenTags.length + i, $event)"
          >{{ tag.name }}</tiny-tag
        >
      </div>
      <template #reference>
        <div
          class="absolute top-0 right-0 pointer-events-none sm:pointer-events-auto"
          :class="[state.showMore ? 'block' : 'invisible']"
        >
          <tiny-tag ref="more" :size="size" type="info" customClass="px-1.5 mr-0"
            ><icon-ellipsis class="fill-color-icon-secondary"></icon-ellipsis
          ></tiny-tag>
        </div>
      </template>
    </tiny-popover>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/tag-group/vue'
import { $props, setup, defineComponent, $prefix } from '@opentiny/vue-common'
import { IconEllipsis } from '@opentiny/vue-icon'
import Popover from '@opentiny/vue-popover'
import Tag from '@opentiny/vue-tag'

export default defineComponent({
  name: $prefix + 'TagGroup',
  emits: ['item-click'],
  props: {
    ...$props,
    size: {
      type: String,
      default: 'medium',
      validator: (value: string) => ~['medium', 'small', 'mini'].indexOf(value)
    },
    data: {
      type: Array,
      default: () => []
    },
    effect: {
      type: String,
      default: 'light',
      validator: (value: string) => ~['dark', 'light', 'plain'].indexOf(value)
    }
  },
  components: { TinyTag: Tag, TinyPopover: Popover, IconEllipsis: IconEllipsis() },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>

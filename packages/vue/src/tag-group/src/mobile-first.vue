<template>
  <div ref="tagGroup" class="overflow-hidden relative pr-8">
    <tiny-tag v-for="(item, i) in data" :key="item.name + i" :size="size" :type="item.type || 'info'" :effect="effect">{{
      item.name
    }}</tiny-tag>
    <tiny-popover placement="top-start" trigger="hover" width="400" class="absolute top-0 right-0">
      <div>
        <tiny-tag v-for="(tag, i) in state.hiddenTags" :key="tag.name + i" :size="size" :type="tag.type || 'info'" customClass="mb-2">{{ tag.name }}</tiny-tag>
      </div>
      <template #reference>
        <tiny-tag ref="more" :size="size" type="info" :customClass="
          state.showMore ? 'absolute top-0 right-0 px-1.5 block' : 'absolute top-0 right-0 px-1.5 invisible'
        "><icon-ellipsis class="fill-color-icon-secondary"></icon-ellipsis></tiny-tag>
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
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>

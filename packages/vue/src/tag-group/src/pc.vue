<template>
  <div ref="tagGroup" class="tiny-tag-group">
    <tiny-tag
      v-for="(item, i) in data"
      :key="item.name + i"
      :size="size"
      :type="item.type || 'info'"
      style="margin-right: 8px; margin-bottom: 8px"
      :effect="effect"
      @click="handelItemClick(item, i, $event)"
      >{{ item.name }}</tiny-tag
    >
    <tiny-popover placement="top-start" trigger="hover" width="auto" v-if="state.showMore">
      <div>
        <tiny-tag
          v-for="(tag, i) in state.hiddenTags"
          :key="tag.name + i"
          :size="size"
          :type="tag.type || 'info'"
          style="margin-right: 8px; margin-bottom: 8px"
          @click="handelItemClick(tag, data.length - state.hiddenTags.length + i, $event)"
          >{{ tag.name }}</tiny-tag
        >
      </div>
      <template #reference>
        <tiny-tag ref="more" :size="size" type="info" class="tiny-tag-group_icon">
          <icon-ellipsis></icon-ellipsis>
        </tiny-tag>
      </template>
    </tiny-popover>
  </div>
</template>

<script lang="ts">
import { props, setup, defineComponent, $prefix } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tag-group/vue'
import { IconEllipsis } from '@opentiny/vue-icon'
import Popover from '@opentiny/vue-popover'
import Tag from '@opentiny/vue-tag'
import '@opentiny/vue-theme/tag-group/index.less'

export default defineComponent({
  name: $prefix + 'TagGroup',
  components: {
    TinyTag: Tag,
    TinyPopover: Popover,
    IconEllipsis: IconEllipsis()
  },
  props: [...props, 'size', 'data', 'effect'],
  emits: ['item-click'],
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>

<template>
  <div class="w-full" data-tag="tiny-skeleton">
    <template v-if="loading">
      <slot name="placeholder">
        <div data-tag="tiny-skeleton__article" class="flex w-full">
          <tiny-skeleton-item
            v-if="avatar"
            variant="circle"
            data-tag="tiny-skeleton__avatar"
            class="relative overflow-hidden shrink-0 mr-4"
          >
          </tiny-skeleton-item>
          <div data-tag="tiny-skeleton__section" class="w-full">
            <tiny-skeleton-item data-tag="tiny-skeleton-item__title" class="w-60 h-12"> </tiny-skeleton-item>
            <div data-tag="tiny-skeleton-item__rows" class="mt-6 mb-6">
              <tiny-skeleton-item
                v-for="(item, index) in rows"
                :class="index === rows - 1 ? 'mb-0 w-3/5' : 'mb-3'"
                :key="item"
                :style="{ width: toPxStyle(rowsWidth[index]) }"
              >
              </tiny-skeleton-item>
            </div>
          </div>
        </div>
      </slot>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/skeleton/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import SkeletonItem from '@opentiny/vue-skeleton-item'

export default defineComponent({
  emits: [],
  props: [...props, 'loading', 'rows', 'avatar', 'rowsWidth', 'animated'],
  components: {
    TinySkeletonItem: SkeletonItem
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api }) as unknown
  }
})
</script>

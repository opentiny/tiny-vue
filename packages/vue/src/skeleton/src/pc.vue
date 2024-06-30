<template>
  <div class="tiny-skeleton">
    <template v-if="loading">
      <slot name="placeholder">
        <div class="tiny-skeleton__article">
          <tiny-skeleton-item variant="circle" class="tiny-skeleton__avatar" v-if="avatar"> </tiny-skeleton-item>
          <div class="tiny-skeleton__section">
            <tiny-skeleton-item class="tiny-skeleton-item__title"></tiny-skeleton-item>
            <div class="tiny-skeleton-item__rows">
              <tiny-skeleton-item
                v-for="(item, index) in rows"
                :key="item"
                :style="{ width: toPxStyle(rowsWidth[index]) }"
              ></tiny-skeleton-item>
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

<script>
import { renderless, api } from '@opentiny/vue-renderless/skeleton/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import SkeletonItem from '@opentiny/vue-skeleton-item'

export default defineComponent({
  emits: ['update:modelValue'],
  props: [...props, 'modelValue', 'loading', 'rows', 'avatar', 'rowsWidth', 'animated'],
  components: {
    TinySkeletonItem: SkeletonItem
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>

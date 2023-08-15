<template>
  <div
    class="border-0 border-color-border rounded-sm relative w-full h-[1.75rem] leading-7 sm:leading-[1.625rem] pr-5 sm:pr-7 cursor-pointer line-clamp-1 pl-3"
    :class="[
      m(
        data ? 'text-color-text-primary' : 'text-color-icon-placeholder',
        state.isDisplayOnly ? 'pointer-events-none cursor-default text-color-text-primary pl-0' : 'sm:border'
      )
    ]"
    @click="$emit('click', $event)"
  >
    {{ state.isDisplayOnly ? data || '-' : data || placeholder }}
    <div v-if="!state.isDisplayOnly">
      <slot name="icon">
        <component
          :is="icon"
          class="h-4 w-4 absolute top-1.5 sm:top-1 right-0 sm:right-2 fill-color-icon-placeholder"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { t } from '@opentiny/vue-locale'
import { renderless, api } from '@opentiny/vue-renderless/cell/vue'
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { IconChevronRight } from '@opentiny/vue-icon'

export default defineComponent({
  name: $prefix + 'Cell',
  componentName: 'Cell',
  props: {
    placeholder: {
      type: String,
      default: t('ui.cell.placeholder')
    },
    data: {
      type: String,
      default: ''
    },
    icon: {
      type: [Object, String],
      default: () => {
        return IconChevronRight()
      }
    }
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>

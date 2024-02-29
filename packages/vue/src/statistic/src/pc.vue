<template>
  <div class="">
    <div v-if="$slots.title || title" class="">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div class="">
      <div v-if="$slots.prefix || prefix" class="">
        <slot name="prefix">
          <span>{{ prefix }}</span>
        </slot>
      </div>
      <span class="" :style="valueStyle">
        {{ state.value }}
      </span>
      <div v-if="$slots.suffix || suffix" class="">
        <slot name="suffix">
          <span>{{ suffix }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/statistic/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  components: {},
  emits: [],
  props: [...props, 'formatter', 'precision', 'prefix', 'suffix', 'title', 'value', 'valueStyle', 'groupSeparator'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>

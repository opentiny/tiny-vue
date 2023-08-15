<template>
  <span :ref="dragRef" :class="className" :data-testid="testID" :title="title">{{ label }}</span>
</template>
>
<script lang="ts">
import { defineComponent, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/query-builder/vue'
export default defineComponent({
  props: {
    className: {
      type: String
    },
    label: {
      type: String
    },
    title: {
      type: String
    },
    testID: {
      type: String
    },
    dragRef: {
      type: Object
    }
  },
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
>

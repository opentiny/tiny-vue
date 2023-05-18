<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { $prefix, defineComponent, provideDesignConfig } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'ConfigProvider',
  props: {
    design: {
      type: Object
    }
  },
  setup(props) {
    provideDesignConfig(props.design)
  }
})
</script>

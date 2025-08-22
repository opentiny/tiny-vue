<template>
  <AuiTabs v-model="active" aui_mode="mobile-first">
    <slot></slot>
  </AuiTabs>
</template>

<script>
import { TinyTabs as AuiTabs } from '@opentiny/vue'

export default {
  components: {
    AuiTabs
  },
  data() {
    return {
      active: 'one'
    }
  }
}
</script>

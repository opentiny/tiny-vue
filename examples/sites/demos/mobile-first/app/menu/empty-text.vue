<template>
  <tiny-menu :data="treeData" empty-text="空数据"></tiny-menu>
</template>

<script>
import { TinyMenu } from '@opentiny/vue'

export default {
  components: {
    TinyMenu
  },
  data() {
    return {
      treeData: []
    }
  }
}
</script>

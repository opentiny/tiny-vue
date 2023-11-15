<template>
  <tiny-menu :data="treeData" empty-text="空数据"></tiny-menu>
</template>

<script>
import { Menu } from '@opentiny/vue'

export default {
  components: {
    TinyMenu: Menu
  },
  data() {
    return {
      treeData: []
    }
  }
}
</script>

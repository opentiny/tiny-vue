<template>
  <tiny-tree-menu :data="treeData" empty-text="空数据"></tiny-tree-menu>
</template>

<script>
import { TinyTreeMenu } from '@opentiny/vue'

export default {
  components: {
    TinyTreeMenu
  },
  data() {
    return {
      treeData: []
    }
  }
}
</script>

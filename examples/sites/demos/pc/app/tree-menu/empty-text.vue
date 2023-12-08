<template>
  <tiny-tree-menu :data="treeData" empty-text="空数据"></tiny-tree-menu>
</template>

<script>
import { TreeMenu } from '@opentiny/vue'

export default {
  components: {
    TinyTreeMenu: TreeMenu
  },
  data() {
    return {
      treeData: []
    }
  }
}
</script>

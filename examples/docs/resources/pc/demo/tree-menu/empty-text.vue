<template>
  <tiny-tree-menu :data="treeData" empty-text="空数据"></tiny-tree-menu>
</template>

<script lang="jsx">
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

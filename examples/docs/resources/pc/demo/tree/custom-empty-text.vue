<template>
  <tiny-tree :data="data">
    <template #empty>
      <span>没有提供有效数据</span>
    </template>
  </tiny-tree>
</template>

<script lang="jsx">
import { Tree } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree
  },
  data() {
    return {
      data: []
    }
  }
}
</script>

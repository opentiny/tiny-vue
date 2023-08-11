<template>
  <tiny-tree-menu :data="treeData" empty-text="空数据"></tiny-tree-menu>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TreeMenu as TinyTreeMenu } from '@opentiny/vue'

const treeData = ref([])
</script>

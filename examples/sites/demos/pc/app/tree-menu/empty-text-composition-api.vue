<template>
  <tiny-tree-menu :data="treeData" empty-text="空数据"></tiny-tree-menu>
</template>

<script setup>
import { ref } from 'vue'
import { TinyTreeMenu } from '@opentiny/vue'

const treeData = ref([])
</script>

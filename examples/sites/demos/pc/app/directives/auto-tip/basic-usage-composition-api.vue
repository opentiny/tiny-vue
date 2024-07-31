<template>
  <div class="auto-tip" v-auto-tip>超出省略隐藏，鼠标移入是会有ToolTip提示</div>
</template>

<script setup>
import { AutoTip as VAutoTip } from '@opentiny/vue-directive'
</script>

<style scoped>
.auto-tip {
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

<template>
  <div class="auto-tip" v-auto-tip>超出省略隐藏，鼠标移入是会有ToolTip提示</div>
</template>

<script>
import { AutoTip } from '@opentiny/vue-directive'

export default {
  directives: { AutoTip }
}
</script>

<style scoped>
.auto-tip {
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

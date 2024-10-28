<template>
  <tiny-line :options="options">
    <div class="data-empty">没有数据😂</div>
  </tiny-line>
</template>

<script lang="jsx">
import { HuichartsLine } from '@opentiny/vue'

export default {
  components: {
    TinyLine: HuichartsLine
  },
  data() {
    return {
      options: {
        data: []
      }
    }
  }
}
</script>

<style scoped>
.data-empty {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  color: #888;
  font-size: 14px;
}
</style>

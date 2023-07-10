<template>
  <div class="content">
    <tiny-layout>
      <tiny-col :span="2">
        <div class="col">move 0</div>
      </tiny-col>
      <tiny-col :span="2" :move="1">
        <div class="col">move 1</div>
      </tiny-col>
      <tiny-col :span="2" :move="4">
        <div class="col">向右移动4格</div>
      </tiny-col>
      <tiny-col :span="2" :move="-6">
        <div class="col">向左移动6格</div>
      </tiny-col>
    </tiny-layout>
  </div>
</template>

<script lang="jsx">
import { Layout, Col } from '@opentiny/vue'

export default {
  components: {
    TinyLayout: Layout,
    TinyCol: Col
  }
}
</script>

<style scoped>
.col {
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #1f9ed8;
  border-radius: 15px;
}
</style>

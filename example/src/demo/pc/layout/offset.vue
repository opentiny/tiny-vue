<template>
  <div class="content">
    <tiny-layout>
      <tiny-col :span="2">
        <div class="col">offset 0</div>
      </tiny-col>
      <tiny-col :span="2" :offset="1">
        <div class="col">offset 1</div>
      </tiny-col>
      <tiny-col :span="2" :offset="1">
        <div class="col">offset 3</div>
      </tiny-col>
      <tiny-col :span="2" :offset="1">
        <div class="col">offset 4</div>
      </tiny-col>
    </tiny-layout>
  </div>
</template>

<script>
import { Layout, Col } from '@opentiny/vue'

export default {
  components: {
    TinyLayout: Layout,
    TinyCol: Col
  }
}
</script>

<style scoped>
.tiny-row {
  margin-bottom: 20px;
}

.tiny-row .last-child {
  margin-bottom: 0;
}

.tiny-col .col {
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #1f9ed8;
  border-radius: 15px;
}

.tiny-col:nth-child(even) .col {
  background: #73d0fc;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.align {
  height: 120px;
}

.lg {
  height: 80px;
}

.md {
  height: 60px;
}

.sm {
  height: 40px;
}

.button {
  width: 70px;
  line-height: 30px;
  text-align: center;
  background: #46c096;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
}

.title {
  margin-bottom: 20px;
  margin-top: 20px;
  line-height: 30px;
  height: 30px;
  overflow: hidden;
}

.item {
  margin-bottom: 100px;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
  min-height: 200px;
}
</style>

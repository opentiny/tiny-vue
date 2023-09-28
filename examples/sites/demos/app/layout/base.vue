<template>
  <div class="content">
    <tiny-layout>
      <tiny-row>
        <tiny-col :span="12">
          <div class="col">span 12</div>
        </tiny-col>
      </tiny-row>
      <tiny-row>
        <tiny-col :span="3">
          <div class="col">span 3</div>
        </tiny-col>
        <tiny-col :span="6">
          <div class="col">span 6</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">span 3</div>
        </tiny-col>
      </tiny-row>
      <tiny-row>
        <tiny-col :span="2">
          <div class="col">span 2</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">span 3</div>
        </tiny-col>
        <tiny-col :span="2">
          <div class="col">span 2</div>
        </tiny-col>
        <tiny-col :span="3">
          <div class="col">span 3</div>
        </tiny-col>
        <tiny-col :span="2">
          <div class="col">span 2</div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script lang="jsx">
import { Layout, Row, Col } from '@opentiny/vue'

export default {
  components: {
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col
  }
}
</script>

<style scoped>
.content .tiny-row {
  margin-bottom: 20px;
}

.content .tiny-row .last-child {
  margin-bottom: 0;
}

.content .tiny-col .col {
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #1f9ed8;
  border-radius: 15px;
}

.content .tiny-col:nth-child(even) .col {
  background: #73d0fc;
}
</style>
<template>
  <div class="content">
    <tiny-layout>
      <tiny-row v-for="gutter in [0, 10, 20]" :gutter="gutter">
        <tiny-col :span="4">
          <div class="col">gutter {{ gutter }}px</div>
        </tiny-col>
        <tiny-col :span="4">
          <div class="col">gutter {{ gutter }}px</div>
        </tiny-col>
        <tiny-col :span="4">
          <div class="col">gutter {{ gutter }}px</div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script>
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
</style>

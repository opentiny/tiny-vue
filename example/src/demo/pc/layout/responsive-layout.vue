<template>
  <div class="content">
    <tiny-layout>
      <tiny-row :gutter="10">
        <tiny-col :xs="4" :sm="3" :md="2" :lg="4" :xl="1">
          <div class="col">1</div>
        </tiny-col>
        <tiny-col :xs="2" :sm="3" :md="4" :lg="2" :xl="5">
          <div class="col">2</div>
        </tiny-col>
        <tiny-col :xs="2" :sm="3" :md="4" :lg="4" :xl="5">
          <div class="col">3</div>
        </tiny-col>
        <tiny-col :xs="4" :sm="3" :md="2" :lg="2" :xl="1">
          <div class="col">4</div>
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

.lg {
  height: 80px;
}

.md {
  height: 60px;
}

.sm {
  height: 40px;
}
</style>

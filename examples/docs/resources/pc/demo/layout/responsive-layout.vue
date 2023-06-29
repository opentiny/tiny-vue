<template>
  <div class="content">
    <tiny-layout class="tiny-layout-responsive-layout">
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

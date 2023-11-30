<template>
  <div class="content">
    <tiny-layout>
      <tiny-row>
        <tiny-button @click="toggleOrder">
          {{ state.buttonLabel }}
        </tiny-button>
      </tiny-row>
      <tiny-row :flex="true" :gutter="20" :order="state.order">
        <tiny-col :span="3" :no="3">
          <div class="col">3</div>
        </tiny-col>
        <tiny-col :span="3" :no="1">
          <div class="col">1</div>
        </tiny-col>
        <tiny-col :span="3" :no="2">
          <div class="col">2</div>
        </tiny-col>
        <tiny-col :span="3" :no="4">
          <div class="col">4</div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script>
import { Layout, Row, Col, Button } from '@opentiny/vue'

export default {
  components: {
    TinyLayout: Layout,
    TinyRow: Row,
    TinyCol: Col,
    TinyButton: Button
  },
  data() {
    return {
      state: {
        buttonLabel: '升序',
        order: 'asc'
      }
    }
  },
  methods: {
    toggleOrder() {
      if (this.state.buttonLabel === '升序') {
        this.state.buttonLabel = '降序'
        this.state.order = 'des'
      } else {
        this.state.buttonLabel = '升序'
        this.state.order = 'asc'
      }
    }
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

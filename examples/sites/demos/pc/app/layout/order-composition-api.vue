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

<script setup lang="jsx">
import { ref } from 'vue'
import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol, Button as TinyButton } from '@opentiny/vue'

const state = ref({
  buttonLabel: '升序',
  order: 'asc'
})

function toggleOrder() {
  if (state.value.buttonLabel === '升序') {
    state.value.buttonLabel = '降序'
    state.value.order = 'des'
  } else {
    state.value.buttonLabel = '升序'
    state.value.order = 'asc'
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

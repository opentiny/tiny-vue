<template>
  <div>
    <tiny-company
      v-model="value"
      placeholder="请选择"
      @change="change"
      @clear="clear"
      @visible-change="visibleChange"
      is-drop-inherit-width
    ></tiny-company>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Company as TinyCompany, Modal } from '@opentiny/vue'

const value = ref('')

function visibleChange(val) {
  Modal.message({ message: `visible:${val}`, status: 'info' })
}

function clear() {
  Modal.message({ message: 'clear:触发了', status: 'info' })
}

function change(value) {
  Modal.message({ message: `change:${value}`, status: 'info' })
}
</script>

<style scoped>
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>

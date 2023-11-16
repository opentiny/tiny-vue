<template>
  <div>
    <tiny-time-select v-model="value1" @change="change" placeholder="选择时间"></tiny-time-select>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect, Modal } from '@opentiny/vue'

const value1 = ref('08:30')

function change() {
  Modal.message('change事件')
}
</script>

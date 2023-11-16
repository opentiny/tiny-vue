<template>
  <div>
    <tiny-time-select
      v-model="value1"
      @blur="bulr"
      @change="change"
      @focus="focus"
      placeholder="选择时间范围"
    ></tiny-time-select>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TimeSelect as TinyTimeSelect, Modal } from '@opentiny/vue'

const value1 = ref('08:30')

function bulr() {
  Modal.message('blur事件')
}

function change() {
  Modal.message('change事件')
}

function focus() {
  Modal.message('focus事件')
}
</script>

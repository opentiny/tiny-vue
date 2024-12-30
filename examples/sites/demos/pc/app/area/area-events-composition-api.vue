<template>
  <tiny-area
    v-model="value"
    placeholder="请选择"
    @change-region="changeRegion"
    @change-rep="changeRep"
    @change-office="changeOffice"
  ></tiny-area>
</template>

<script setup>
import { ref } from 'vue'
import { TinyArea, TinyNotify } from '@opentiny/vue'

const value = ref(['3623', '4199', '649991', '661414'])

function changeRegion(value) {
  TinyNotify({
    message: '当前选择的 Region 为：' + value,
    position: 'top-right'
  })
}

function changeRep(value) {
  TinyNotify({
    message: '当前选择的 Rep 为：' + value,
    position: 'top-right'
  })
}

function changeOffice(value) {
  TinyNotify({
    message: '当前选择的 Office 为：' + value,
    position: 'top-right'
  })
}
</script>

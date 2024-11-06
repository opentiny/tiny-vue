<template>
  <div class="demo-hrapprover-class">
    <tiny-button @click="Switchover" style="margin-bottom: 10px">启用/禁用</tiny-button>
    <tiny-hrapprover
      :value="value"
      :approval-person="person"
      title="选择权签人"
      @update:approvalPerson="person = $event"
      :disabled="disabled"
    ></tiny-hrapprover>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyHrapprover, TinyButton } from '@opentiny/vue'

const disabled = ref(false)
const value = ref('022471')
const person = ref('wangxiaofeng 00193664')

function Switchover() {
  disabled.value = !disabled.value
}
</script>

<style scoped>
.demo-hrapprover-class {
  width: 280px;
}
</style>

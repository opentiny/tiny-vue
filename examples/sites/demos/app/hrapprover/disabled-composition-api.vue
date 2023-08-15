<template>
  <div>
    <tiny-button @click="Switchover" style="margin-bottom: 10px">启用/禁用</tiny-button>
    <tiny-hrapprover
      :value="value"
      :approval-person="person"
      @update:approval-person="person = $event"
      :disabled="disabled"
    ></tiny-hrapprover>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Hrapprover as TinyHrapprover, Button as TinyButton } from '@opentiny/vue'

const disabled = ref(false)
const value = ref('022471')
const person = ref('wangxiaofeng 00193664')

function Switchover() {
  disabled.value = !disabled.value
}
</script>

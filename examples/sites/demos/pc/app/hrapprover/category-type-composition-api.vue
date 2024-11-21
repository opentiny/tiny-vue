<template>
  <div class="demo-hrapprover-class">
    <tiny-hrapprover
      v-model="value"
      :approval-person="person"
      @update:approvalPerson="person = $event"
      title="选择权签人"
      category="0506"
    ></tiny-hrapprover>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyHrapprover } from '@opentiny/vue'

const value = ref('022471')
const person = ref('wangxiaofeng 00193664')
</script>

<style scoped>
.demo-hrapprover-class {
  width: 280px;
}
</style>

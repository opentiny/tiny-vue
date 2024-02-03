<template>
  <div class="demo-steps-custom-field">
    <tiny-steps :data="stepsData" name-field="reName" count-field="reCount" status-field="reStatus"></tiny-steps>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Steps as TinySteps } from '@opentiny/vue'

const stepsData = ref([
  {
    reName: 'name属性内容1',
    reCount: 0,
    reStatus: 'done'
  },
  {
    reName: 'name属性内容2',
    reCount: 9,
    reStatus: 'done'
  },
  {
    reName: 'name属性内容3',
    reCount: 0,
    reStatus: 'doing'
  },
  {
    reName: 'name属性内容4',
    reCount: 5,
    reStatus: 'done'
  }
])
</script>

<style scoped>
.demo-steps-custom-field {
  padding: 20px;
  max-width: 50%;
  min-width: 700px;
}
</style>

<template>
  <div>
    <tiny-button-group :data="groupData" v-model="checkedVal"></tiny-button-group>
    <div class="mt-12">当前选中值：{{ checkedVal }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup } from '@opentiny/vue'

const checkedVal = ref('Button1')
const groupData = ref([
  { text: 'Button1', value: 'Button1' },
  { text: 'Button2', value: 'Button2' },
  { text: 'Button3', value: 'Button3' }
])
</script>

<style scoped>
.mt-12 {
  margin-top: 12px;
}
</style>

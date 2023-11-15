<template>
  <div class="button-group-demo">
    <tiny-button-group size="mini" :data="groupData" v-model="checkedVal"></tiny-button-group>
    <tiny-button-group size="small" :data="groupData" v-model="checkedVal"></tiny-button-group>
    <tiny-button-group size="medium" :data="groupData" v-model="checkedVal"></tiny-button-group>
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
.button-group-demo .tiny-button-group {
  margin-bottom: 20px;
  display: block;
}
</style>

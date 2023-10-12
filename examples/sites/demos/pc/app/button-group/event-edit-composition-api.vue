<template>
  <div>
    <tiny-button-group
      :data="groupData"
      :show-more="3"
      :show-edit="true"
      @edit="edit"
      v-model="checkedVal"
    ></tiny-button-group>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup, Notify } from '@opentiny/vue'

const checkedVal = ref('Button1')
const groupData = ref([
  { text: 'Button1', value: 'Button1' },
  { text: 'Button2', value: 'Button2' },
  { text: 'Button3', value: 'Button3' },
  { text: 'Button4', value: 'Button4' },
  { text: 'Button5', value: 'Button5' }
])

function edit() {
  Notify({
    title: '编辑事件',
    message: '触发编辑事件'
  })
}
</script>

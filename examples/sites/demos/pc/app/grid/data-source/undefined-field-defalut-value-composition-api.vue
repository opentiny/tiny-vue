<template>
  <tiny-grid :data="tableData" :edit-config="editConfig">
    <tiny-grid-column field="field1" title="所属区域" :editor="{}">
      <template #edit="{ row }">
        <tiny-input v-model="row.field1" />
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="field2" title="地址" :editor="{ defaultValue: '' }">
      <template #edit="{ row }">
        <tiny-input v-model="row.field2" />
      </template>
    </tiny-grid-column>
    <tiny-grid-column field="field3" title="邮编" :editor="{ defaultValue: '' }">
      <template #edit="{ row }">
        <tiny-input v-model="row.field3" />
      </template>
    </tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { TinyGrid, TinyGridColumn, TinyInput } from '@opentiny/vue'
import { ref } from 'vue'

const tableData = ref([
  {
    field1: 'field1'
  },
  {
    field1: 'field1'
  }
])

const editConfig = ref({
  trigger: 'click',
  mode: 'cell',
  autofocus: 'input'
})
</script>

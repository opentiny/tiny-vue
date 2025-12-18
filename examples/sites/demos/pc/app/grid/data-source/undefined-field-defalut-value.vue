<template>
  <div>
    <tiny-button @click="addRow">新增行</tiny-button>
    <tiny-grid ref="grid" :data="tableData" :edit-config="editConfig">
      <template #toolbar>
        <tiny-grid-toolbar id="undefined-field-defalut-value" :setting="{ storage: 'local' }"></tiny-grid-toolbar>
      </template>
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
  </div>
</template>

<script>
import { TinyGrid, TinyGridColumn, TinyInput, TinyButton, TinyGridToolbar } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    TinyInput,
    TinyButton,
    TinyGridToolbar
  },
  data() {
    return {
      tableData: [
        {
          field1: 'field1'
        },
        {
          field1: 'field1'
        }
      ],
      editConfig: {
        trigger: 'click',
        mode: 'cell',
        autofocus: 'input'
      }
    }
  },
  methods: {
    addRow() {
      this.$refs.grid.insert({})
    }
  }
}
</script>

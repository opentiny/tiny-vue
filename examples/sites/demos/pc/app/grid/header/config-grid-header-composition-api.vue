<template>
  <tiny-grid v-bind="op"></tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyGrid } from '@opentiny/vue'
import { iconHelpQuery } from '@opentiny/vue-icon'

const TinyHelpQuery = iconHelpQuery()

const tableData = [
  {
    id: '1',
    transDate: '2014-04-30',
    a1: '1-1',
    a2: '1-2',
    a3: '2-1',
    a4: '2-2'
  }
]

const op = ref({
  columns: [
    {
      type: 'index',
      width: 60
    },
    {
      type: 'selection',
      width: 60
    },
    {
      field: 'transDate',
      title: '交易日期'
    },
    {
      title: '父表头 1',
      children: [
        {
          field: 'a1',
          title: '子表头 1-1'
        },
        {
          field: 'a2',
          title: '子表头 1-2'
        }
      ]
    },
    {
      title: '父表头 2',
      children: [
        {
          field: 'a3',
          title: '子表头 2-1'
        },
        {
          field: 'a4',
          title: () => (
            <>
              <span class="tiny-grid-cell-text">自定义表头</span>
              <TinyHelpQuery style="margin-left: 4px;" />
            </>
          )
        }
      ]
    }
  ],
  data: tableData
})
</script>

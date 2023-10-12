<template>
  <tiny-hrapprover
    v-model="value"
    :approval-person="person"
    @update:approval-person="person = $event"
    :fetch-hrapprover="getFetchHrapprover"
    :category="category"
  ></tiny-hrapprover>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Hrapprover as TinyHrapprover } from '@opentiny/vue'

const value = ref('022471')
const person = ref('wangxiaofeng 00193664')
const category = ref('0303')

function getFetchHrapprover() {
  return Promise.resolve([
    {
      'dept_Code': '022471',
      'remarks': null,
      'approval_Person': 'test1',
      'approval_Category': '0303'
    },
    {
      'dept_Code': '041963',
      'remarks': '权限申请',
      'approval_Person': 'test2',
      'approval_Category': '0303'
    },
    {
      'dept_Code': '041963',
      'remarks': '资产申请',
      'approval_Person': 'test3',
      'approval_Category': '0303'
    }
  ])
}
</script>

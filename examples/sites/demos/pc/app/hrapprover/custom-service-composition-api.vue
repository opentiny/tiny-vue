<template>
  <div class="demo-hrapprover-class">
    <tiny-hrapprover
      v-model="value"
      :approval-person="person"
      @update:approvalPerson="person = $event"
      :fetch-hrapprover="getFetchHrapprover"
      :category="category"
      title="选择权签人"
    ></tiny-hrapprover>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyHrapprover } from '@opentiny/vue'

const value = ref('022471')
const person = ref('wangxiaofeng 00193664')
const category = ref('0303')

function getFetchHrapprover() {
  return Promise.resolve([
    {
      dept_Code: '022471',
      remarks: null,
      approval_Person: 'test1',
      approval_Category: '0303'
    },
    {
      dept_Code: '041963',
      remarks: '权限申请',
      approval_Person: 'test2',
      approval_Category: '0303'
    },
    {
      dept_Code: '041963',
      remarks: '资产申请',
      approval_Person: 'test3',
      approval_Category: '0303'
    }
  ])
}
</script>

<style scoped>
.demo-hrapprover-class {
  width: 280px;
}
</style>

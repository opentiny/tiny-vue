<template>
  <tiny-hrapprover
    v-model="value"
    :approval-person="person"
    @update:approvalPerson="person = $event"
    :fetch-hrapprover="getFetchHrapprover"
    :category="category"
  ></tiny-hrapprover>
</template>

<script lang="jsx">
import { Hrapprover } from '@opentiny/vue'

export default {
  components: {
    TinyHrapprover: Hrapprover
  },
  data() {
    return {
      value: '022471',
      person: 'wangxiaofeng 00193664',
      category: '0303'
    }
  },
  methods: {
    getFetchHrapprover() {
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
  }
}
</script>

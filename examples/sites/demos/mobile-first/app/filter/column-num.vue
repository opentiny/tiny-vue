<template>
  <div>
    <p>值：{{ value }}</p>
    <br />
    <tiny-filter v-model="value" :data="data" :column-num="4"></tiny-filter>
  </div>
</template>

<script>
import { Filter } from '@opentiny/vue'

export default {
  components: {
    TinyFilter: Filter
  },
  data() {
    return {
      value: [null, [2], [1, 2, 3]],
      data: [
        {
          type: 'tag',
          multiple: false,
          label: '状态选择',
          placeholder: '状态',
          options: [
            {
              label: '单选选项',
              value: 1
            },
            {
              label: '已审批',
              value: 2
            },
            {
              label: '已驳回',
              value: 3
            },
            {
              label: '已转交已转交',
              value: 4
            },
            {
              label: '已退回',
              value: 5
            }
          ]
        },
        {
          type: 'tag',
          multiple: true,
          label: '类目一状态',
          placeholder: '类目一类目一',
          options: [
            {
              label: '类目一选项',
              value: 1
            },
            {
              label: '已审批',
              value: 2
            },
            {
              label: '已驳回',
              value: 3
            },
            {
              label: '已转交已转交',
              value: 4
            },
            {
              label: '已退回',
              value: 5
            }
          ]
        },
        {
          type: 'tag',
          multiple: true,
          label: '类目二状态',
          placeholder: '类目二',
          options: [
            {
              label: '类目二选项',
              value: 1
            },
            {
              label: '已审批',
              value: 2
            },
            {
              label: '已驳回',
              value: 3
            },
            {
              label: '已转交已转交',
              value: 4
            },
            {
              label: '已退回',
              value: 5
            }
          ]
        }
      ]
    }
  }
}
</script>

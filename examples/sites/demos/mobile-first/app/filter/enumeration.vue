<template>
  <div style="height: 300px">
    <p><tiny-button @click="value = [2, 1, 2, [1, 4, 5]]">点击改变当前值</tiny-button> 值：{{ value }}</p>
    <br />
    <tiny-filter v-model="value" :data="data" @update:modelValue="aa"></tiny-filter>
  </div>
</template>

<script>
import { Filter, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFilter: Filter,
    TinyButton: Button
  },
  data() {
    return {
      value: [null, null, 2, [1, 2, 3]],
      data: [
        {
          type: 'list',
          showAll: true,
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
          type: 'list',
          multiple: false,
          showAll: false,
          placeholder: '枚举单选默认文本',
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
          multiple: false,
          label: '普通单选 Label',
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
  },
  methods: {
    aa() {
      console.log(111)
    }
  }
}
</script>

<template>
  <div style="height: 500px">
    <p>值：{{ value }}</p>
    <p>过滤组值：{{ filterValue }}</p>
    <br />
    <tiny-filter
      v-model="value"
      :data="data"
      :filter-value="filterValue"
      @update:filter-value="filterValue = $event"
      :filter-group="filterGroup"
    >
      <template #icon="{ active, show }">
        <div style="text-align: center; cursor: pointer" :style="{ color: active ? '#0067D1' : '#333' }">
          插槽内容可以很长 {{ show ? '^' : 'v' }}
          <icon-express-search style="fill: currentColor; width: 20px; height: 20px"></icon-express-search>
        </div>
      </template>
      <template #footer="{ cancel, reset, confirm }">
        <tiny-button
          tiny_mode="mobile-first"
          key="btn2"
          size="small"
          custom-class="w-20 mr-4 flex-1"
          @click="reset(true)"
          >重置-自定义</tiny-button
        >
        <tiny-button tiny_mode="mobile-first" key="btn1" size="small" custom-class="w-20 mr-4 flex-1" @click="cancel"
          >取消-自定义</tiny-button
        >
        <tiny-button
          tiny_mode="mobile-first"
          key="btn3"
          type="primary"
          size="small"
          custom-class="w-20 flex-1"
          @click="confirm(true)"
          >确定-自定义</tiny-button
        >
      </template>
    </tiny-filter>
  </div>
</template>

<script>
import { Filter, Button } from '@opentiny/vue'
import { IconExpressSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFilter: Filter,
    TinyButton: Button,
    IconExpressSearch: IconExpressSearch()
  },
  data() {
    return {
      value: [null, [2], [1, 2, 3]],
      filterValue: [null, [], []],
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
      ],
      filterGroup: [
        {
          type: 'tag',
          multiple: false,
          label: '状态选择',
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

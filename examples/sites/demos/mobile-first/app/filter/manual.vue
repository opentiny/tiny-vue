<template>
  <div>
    <p><tiny-button @click="value = [1, [1], [1, 2]]">点击改变当前值</tiny-button> 值：{{ value }}</p>
    <br />
    <tiny-filter
      ref="filter"
      v-model="value"
      manual
      :data="data"
      @update:modelValue="update"
      @panel="panel"
    ></tiny-filter>

    <tiny-select-mobile
      v-model="activeName"
      :menus="menus"
      :multiple="multiple"
      value-field="value"
      text-field="label"
      :search-config="searchConfig"
      title="标题"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      @confirm="confirm"
    ></tiny-select-mobile>
  </div>
</template>

<script>
import { Filter, Button, SelectMobile } from '@opentiny/vue'

export default {
  components: {
    TinyFilter: Filter,
    TinySelectMobile: SelectMobile,
    TinyButton: Button
  },
  data() {
    return {
      value: [1, [2], [1, 2, 3]],
      data: filterList,
      // ---- select config ----
      currentIndex: -1,
      activeName: 1,
      boxVisibility: false,
      multiple: false,
      menus: [],
      searchConfig: {
        options: []
      }
    }
  },
  methods: {
    update() {
      console.log(111)
    },
    panel({ index, modelValue }) {
      if (index !== -1) {
        const config = this.data[index]
        this.currentIndex = index
        this.multiple = config.multiple
        this.menus = config.options
        this.activeName = this.value[index]
        this.boxVisibility = true
      }
    },
    confirm(data) {
      console.log('val', data)
      const value = this.value.slice(0)
      const modelValue = this.multiple ? data.checkIds.slice(0) : data
      value[this.currentIndex] = modelValue
      this.value = value
      this.currentIndex = -1
      this.$refs.filter.cancel()
    }
  }
}

const filterList = [
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
const list = [
  {
    id: 1,
    label: '进行中'
  },
  {
    id: 2,
    label: '未开始'
  },
  {
    id: 3,
    label: '已完成'
  },
  {
    id: 4,
    label: '已过期已过期已过期已过期已过期已过期已过期'
  }
]
</script>

<template>
  <div>
    <div>场景1：单选 + 可搜索</div>
    <br />
    <tiny-select
      ref="select"
      v-model="value1"
      placeholder="请选择"
      filterable
      :filter-method="filter"
      clearable
      title="标题"
    >
      <tiny-option
        v-for="item in options"
        v-show="!item.filter"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景2：多选 + 折叠tag + 可搜索</div>
    <br />
    <tiny-select
      ref="select"
      v-model="value2"
      placeholder="请选择"
      multiple
      collapse-tags
      filterable
      :filter-method="filter"
      clearable
      title="标题"
    >
      <tiny-option
        v-for="item in options"
        v-show="!item.filter"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </tiny-option>
    </tiny-select>
  </div>
</template>

<script>
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value1: '',
      value2: []
    }
  },
  methods: {
    filter(value) {
      const select = this.$refs.select

      if (value) {
        select.state.cachedOptions.forEach((item) => {
          item.state.visible = item.label.includes(value)
        })
      } else {
        select.state.cachedOptions.forEach((item) => {
          item.state.visible = true
        })
      }
    }
  }
}
</script>

<template>
  <div>
    <p>场景1：组件默认过滤</p>
    <tiny-select v-model="value1" ref="selectRef" filterable no-match-text="No Match">
      <tiny-option
        v-for="item in options"
        v-show="!item.filter"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </tiny-option>
    </tiny-select>
    <p>场景2：自定义过滤</p>
    <tiny-select
      v-model="value2"
      ref="customFilterRef"
      filterable
      :filter-method="customFilterMethod"
      clearable
      no-match-text="No Match"
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
        { value: '选项1', label: '北京' },
        { value: '选项2', label: '上海' },
        { value: '选项3', label: '天津' },
        { value: '选项4', label: '重庆' },
        { value: '选项5', label: '深圳' }
      ],
      value1: '',
      value2: ''
    }
  },
  methods: {
    customFilterMethod(searchValue) {
      const customFilterRef = this.$refs.customFilterRef

      if (searchValue) {
        customFilterRef.state.cachedOptions.forEach((item) => {
          item.state.visible = item.label.includes(searchValue)
        })
      } else {
        customFilterRef.state.cachedOptions.forEach((item) => {
          item.state.visible = true
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>

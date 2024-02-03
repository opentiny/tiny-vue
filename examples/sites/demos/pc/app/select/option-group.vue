<template>
  <div>
    <p>场景1：分组 + 多选 + 面板可搜索</p>
    <tiny-select v-model="value" multiple filterable :searchable="true">
      <tiny-option-group v-for="group in options3" :key="group.label" :label="group.label" :disabled="!!group.disabled">
        <tiny-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></tiny-option>
      </tiny-option-group>
    </tiny-select>
    <p>场景2：分组</p>
    <tiny-select v-model="value" filterable>
      <tiny-option-group v-for="group in options3" :key="group.label" :label="group.label" :disabled="!!group.disabled">
        <tiny-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></tiny-option>
      </tiny-option-group>
    </tiny-select>
  </div>
</template>

<script>
import { Select, Option, OptionGroup } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option,
    TinyOptionGroup: OptionGroup
  },
  data() {
    return {
      options3: [
        {
          label: '热门城市',
          disabled: true,
          options: [
            { value: 'Shanghai', label: '上海' },
            { value: 'Beijing', label: '北京' }
          ]
        },
        {
          label: '城市名',
          options: [
            { value: 'Chengdu', label: '成都' },
            { value: 'Shenzhen', label: '深圳' },
            { value: 'Guangzhou', label: '广州' },
            { value: 'Dalian', label: '大连' },
            { value: 'Chongqing', label: '重庆' },
            { value: 'Xianggang', label: '香港' },
            { value: 'Aomen', label: '澳门' },
            { value: 'Wulumuqi', label: '乌鲁木齐' }
          ]
        }
      ]
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

<template>
  <div>
    <p>设置为下划线类型</p>
    <p>场景1：下划线默认</p>
    <tiny-base-select v-model="value1" input-box-type="underline" clearable>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <p>场景2：下划线禁用</p>
    <tiny-base-select v-model="value2" input-box-type="underline" disabled>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <p>场景3：下划线多选</p>
    <tiny-base-select v-model="value3" input-box-type="underline" multiple>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
  </div>
</template>

<script>
import { BaseSelect, Option } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect: BaseSelect,
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
      value2: '',
      value3: []
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-base-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>

<template>
  <div>
    <p>场景 1：默认</p>
    <tiny-base-select v-model="value">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <p>场景 2：自定义空数据文本</p>
    <tiny-base-select v-model="value" no-data-text="暂无数据">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
  </div>
</template>

<script>
import { TinyBaseSelect, TinyOption } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect,
    TinyOption
  },
  data() {
    return {
      options: [],
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
[data-tag='tiny-base-select'] {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>

<template>
  <div>
    <tiny-base-select v-model="value" value-key="val">
      <tiny-option v-for="(item, index) in options" :key="index" :label="item.text" :value="item.obj"> </tiny-option>
    </tiny-base-select>
    <p class="value">
      {{ value }}
    </p>
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
      options: [
        { obj: { val: '选项 1', id: 1 }, text: '北京' },
        { obj: { val: '选项 2', id: 2 }, text: '上海' },
        { obj: { val: '选项 3', id: 3 }, text: '天津' },
        { obj: { val: '选项 4', id: 4 }, text: '重庆' },
        { obj: { val: '选项 5', id: 5 }, text: '深圳' }
      ],
      value: { val: '选项 3', id: 3 }
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

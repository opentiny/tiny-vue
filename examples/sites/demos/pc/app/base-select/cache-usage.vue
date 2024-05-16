<template>
  <div>
    <tiny-base-select
      v-model="value"
      clearable
      :options="options"
      :cache-op="cacheOp"
      @change="cacheChange"
    ></tiny-base-select>
    <p class="cache-value">
      {{ cacheValue }}
    </p>
  </div>
</template>

<script>
import { BaseSelect } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect: BaseSelect
  },
  data() {
    return {
      cacheOp: {
        key: 'test'
      },
      cacheValue: '',
      options: [
        { value: '选项1', label: '北京' },
        { value: '选项2', label: '上海' },
        { value: '选项3', label: '天津' },
        { value: '选项4', label: '重庆' },
        { value: '选项5', label: '深圳' }
      ],
      value: '选项3'
    }
  },
  methods: {
    cacheChange() {
      this.cacheValue = window.localStorage.getItem(`tiny_memorize_${this.cacheOp.key}`)
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

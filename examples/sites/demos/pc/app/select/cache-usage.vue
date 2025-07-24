<template>
  <div>
    <tiny-select v-model="value" clearable :options="options" :cache-op="cacheOp" @change="cacheChange"></tiny-select>
    <p class="cache-value">
      {{ cacheValue }}
    </p>
  </div>
</template>

<script>
import { TinySelect } from '@opentiny/vue'

export default {
  components: {
    TinySelect
  },
  data() {
    return {
      cacheOp: {
        key: 'test'
      },
      cacheValue: '',
      options: [
        { value: '选项 1', label: '北京' },
        { value: '选项 2', label: '上海' },
        { value: '选项 3', label: '天津' },
        { value: '选项 4', label: '重庆' },
        { value: '选项 5', label: '深圳' }
      ],
      value: '选项 3'
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

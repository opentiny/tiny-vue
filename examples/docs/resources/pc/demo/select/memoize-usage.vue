<template>
  <div>
    <tiny-select v-model="value" placeholder="请选择">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
        @click.native="clickItem(item.value)" :highlight-class="item._highlightClass"></tiny-option>
    </tiny-select>
    <p class="cache-value">
      {{ cacheValue }}
    </p>
  </div>
</template>

<script lang="jsx">
import { Select, Option } from '@opentiny/vue'
import Memorize from '@opentiny/vue-renderless/common/deps/memorize'

const MemorizeInstance = new Memorize({ key: 'test456' })

const options = MemorizeInstance.assemble([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options,
      value: '选项3',
      cacheValue: []
    }
  },
  methods: {
    clickItem(value) {
      MemorizeInstance.updateByKey(value)
      this.cacheValue = window.localStorage.getItem('tiny_memorize_test456')
    }
  }
}
</script>

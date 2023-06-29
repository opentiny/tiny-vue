<template>
  <tiny-select v-model="value" placeholder="请选择" multiple collapse-tags>
    <template #prefix>
      <icon-share></icon-share>
    </template>
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </tiny-option>
  </tiny-select>
</template>

<script lang="jsx">
import { Select, Option } from '@opentiny/vue'
import { IconShare } from '@opentiny/vue-icon'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option,
    IconShare: IconShare()
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭' }
      ],
      value: ''
    }
  }
}
</script>

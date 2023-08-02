<template>
  <div>
    <p>多选</p>
    <tiny-select v-model="multivalue" placeholder="请选择" :searchable="true" multiple :show-empty-image="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </tiny-option>
    </tiny-select>
    <p>单选</p>
    <tiny-select v-model="value" placeholder="请选择" :searchable="true" :show-empty-image="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </tiny-option>
    </tiny-select>
  </div>
</template>

<script lang="jsx">
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
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
      value: '',
      multivalue: []
    }
  }
}
</script>

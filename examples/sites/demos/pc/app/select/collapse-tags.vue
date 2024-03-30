<template>
  <div>
    <br />
    <div>场景1： collapse-tags折叠</div>
    <br />
    <tiny-select v-model="value1" :show-proportion="true" multiple collapse-tags>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景2： hover-expand 折叠</div>
    <br />
    <tiny-select v-model="value2" multiple hover-expand>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <br />
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
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面超长超长超长超长超长超长超长超长超长' },
        { value: '选项5', label: '北京烤鸭' }
      ],
      value1: ['选项1', '选项2'],
      value2: ['选项1', '选项2', '选项3', '选项4']
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>

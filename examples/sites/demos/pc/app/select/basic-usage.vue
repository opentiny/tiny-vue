<template>
  <div>
    <p>选中的值为： {{ value }}</p>
    <p>场景1：标签式</p>
    <tiny-select v-model="value">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :icon="item.icon">
      </tiny-option>
    </tiny-select>
    <p>场景1：配置式</p>
    <tiny-select v-model="value" :options="options"> </tiny-select>
  </div>
</template>

<script>
import { Select, Option } from '@opentiny/vue'
import { iconFile } from '@opentiny/vue-icon'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '黄金糕', icon: iconFile() },
        { value: '选项2', label: '双皮奶', icon: iconFile() },
        { value: '选项3', label: '蚵仔煎', icon: iconFile() },
        { value: '选项4', label: '龙须面', icon: iconFile() },
        { value: '选项5', label: '北京烤鸭', icon: iconFile() }
      ],
      value: ''
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

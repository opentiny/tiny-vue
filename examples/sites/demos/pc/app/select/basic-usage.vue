<template>
  <div>
    <div>选中的值为： {{ value }}</div>
    <br />
    <div>场景1：标签式</div>
    <br />
    <tiny-select v-model="value">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :icon="item.icon">
      </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景2：配置式</div>
    <br />
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
        { value: '选项1', label: '北京', icon: iconFile() },
        { value: '选项2', label: '上海', icon: iconFile() },
        { value: '选项3', label: '天津', icon: iconFile() },
        { value: '选项4', label: '重庆', icon: iconFile() },
        { value: '选项5', label: '深圳', icon: iconFile() }
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
</style>

<template>
  <tiny-select v-model="value" popper-class="slot-default">
    <template v-for="item in options" :key="item.value">
      <tiny-tooltip :content="item.tip" placement="right" effect="light">
        <tiny-option :label="item.label" :value="item.value">
          <span class="left">{{ item.label }}</span>
          <tiny-tag v-if="item.tag" type="danger" effect="light" size="small">{{ item.tag }}</tiny-tag>
        </tiny-option>
      </tiny-tooltip>
    </template>
  </tiny-select>
</template>

<script>
import { Select, Option, Tag, Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option,
    TinyTag: Tag,
    TinyTooltip: Tooltip
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '黄金糕', tag: 'New', tip: '自定义提示' },
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

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.tiny-option {
  .left {
    margin-right: 8px;
  }
}
</style>

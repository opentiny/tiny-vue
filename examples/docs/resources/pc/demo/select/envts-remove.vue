<template>
  <tiny-select v-model="value" placeholder="请选择" multiple clearable @remove-tag="removeTag"
    @visible-change="visibleChange">
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </tiny-option>
  </tiny-select>
</template>

<script lang="jsx">
import { Select, Option, Modal } from '@opentiny/vue'

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
      value: ''
    }
  },
  methods: {
    removeTag() {
      Modal.message({
        message: 'removeTag事件'
      })
    },
    visibleChange() {
      Modal.message({
        message: 'visibleChange事件'
      })
    }
  }
}
</script>

<template>
  <tiny-select
      v-model="value"
      placeholder="请选择"
      clearable
      @change="change"
      @clear="clear"
      @blur="blur"
      @focus="focus"
      @remove-tag="removeTag"
      @visible-change="visibleChange"
  >
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption, Modal } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])
const value = ref('')

const change = () => {
  Modal.message({
    message: 'changes事件'
  })
}

const clear = () => {
  Modal.message({
    message: 'clear事件'
  })
}

const focus = () => {
  Modal.message({
    message: 'focus事件'
  })
}

const blur = () => {
  Modal.message({
    message: 'blur事件'
  })
}

const removeTag = () => {
  Modal.message({
    message: 'blur事件'
  })
}


const visibleChange = () => {
  Modal.message({
    message: 'blur事件'
  })
}
</script>

<template>
  <div>
    <p>单选</p>
    <tiny-select
      v-model="value1"
      clearable
      @change="change"
      @blur="blur"
      @focus="focus"
      @visible-change="visibleChange"
      @clear="clear"
    >
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>

    <p>多选</p>
    <tiny-select
      v-model="value2"
      multiple
      clearable
      @change="change"
      @blur="blur"
      @focus="focus"
      @visible-change="visibleChange"
      @remove-tag="removeTag"
    >
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
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
const value1 = ref('')
const value2 = ref([])

const change = () => {
  Modal.message({
    message: 'change 事件'
  })
}

const clear = () => {
  Modal.message({
    message: 'clear 事件'
  })
}

const focus = () => {
  Modal.message({
    message: 'focus 事件'
  })
}

const blur = () => {
  Modal.message({
    message: 'blur 事件'
  })
}

const removeTag = () => {
  Modal.message({
    message: 'remove-tag 事件'
  })
}

const visibleChange = () => {
  Modal.message({
    message: 'visible-change 事件'
  })
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

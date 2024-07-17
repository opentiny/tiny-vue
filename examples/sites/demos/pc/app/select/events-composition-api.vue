<template>
  <div>
    <p>单选</p>
    <br />
    <tiny-select
      v-model="value1"
      clearable
      @change="change"
      @blur="blur"
      @focus="focus"
      @visible-change="visibleChange"
      @clear="clear"
      @dropdown-click="dropdownClick"
    >
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br /><br />

    <p>多选</p>
    <br />
    <tiny-select
      v-model="value2"
      multiple
      clearable
      @change="change"
      @blur="blur"
      @focus="focus"
      @visible-change="visibleChange"
      @remove-tag="removeTag"
      @dropdown-click="dropdownClick"
    >
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption, Modal } from '@opentiny/vue'

const options = ref([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳' }
])
const value1 = ref('')
const value2 = ref([])

const change = () => {
  Modal.message({
    message: '触发 change 事件',
    status: 'info'
  })
}

const clear = () => {
  Modal.message({
    message: '触发 clear 事件',
    status: 'info'
  })
}

const focus = () => {
  Modal.message({
    message: '触发 focus 事件',
    status: 'info'
  })
}

const blur = () => {
  Modal.message({
    message: '触发 blur 事件',
    status: 'info'
  })
}

const removeTag = () => {
  Modal.message({
    message: '触发 remove-tag 事件',
    status: 'info'
  })
}

const visibleChange = () => {
  Modal.message({
    message: '触发 visible-change 事件',
    status: 'info'
  })
}

const dropdownClick = () => {
  Modal.message({
    message: '触发 dropdown-click 事件',
    status: 'info'
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

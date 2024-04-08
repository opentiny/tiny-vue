<template>
  <div>
    <div>单选</div>
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
    <br />
    <br />
    <div>多选</div>
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

<script>
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
      value1: '',
      value2: []
    }
  },
  methods: {
    change() {
      Modal.message({
        message: '触发 change 事件',
        status: 'info'
      })
    },
    clear() {
      Modal.message({
        message: '触发 clear 事件',
        status: 'info'
      })
    },
    focus() {
      Modal.message({
        message: '触发 focus 事件'
      })
    },
    blur() {
      Modal.message({
        message: '触发 blur 事件',
        status: 'info'
      })
    },
    removeTag() {
      Modal.message({
        message: '触发 remove-tag 事件',
        status: 'info'
      })
    },
    visibleChange() {
      Modal.message({
        message: '触发 visible-change 事件',
        status: 'info'
      })
    },
    dropdownClick() {
      Modal.message({
        message: '触发 dropdown-click 事件',
        status: 'info'
      })
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

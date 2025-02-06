<template>
  <div>
    <div>场景 1：allow-create + filterable，点击创建条目</div>
    <br />
    <tiny-select v-model="value" allow-create filterable>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景 2：allow-create + filterable + default-first-option，Enter 键创建条目</div>
    <br />
    <tiny-select v-model="value" allow-create filterable default-first-option>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景 3：下拉框显示新增按钮</div>
    <br />
    <tiny-select
      v-model="value"
      placeholder="请选择"
      @top-create-click="handleAddOption"
      automatic-dropdown
      top-create
      ref="selectDom"
    >
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <tiny-dialog-box :visible="boxVisibility" @update:visible="boxVisibility = $event" title="新建" width="30%">
      <div>
        <div>
          <span>label</span>
          <br />
          <br />
          <tiny-input v-model="optionLabel"></tiny-input>
        </div>
        <br />
        <div>
          <span>value</span>
          <br />
          <br />
          <tiny-input v-model="optionValue"></tiny-input>
        </div>
      </div>
      <template #footer>
        <tiny-button @click="boxVisibility = false">取消</tiny-button>
        <tiny-button type="primary" @click="handleConfirm"> 确定 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinySelect, TinyOption, TinyInput, TinyButton, TinyDialogBox, TinyModal } from '@opentiny/vue'

const options = ref([
  { value: '选项 1', label: '北京' },
  { value: '选项 2', label: '上海' },
  { value: '选项 3', label: '天津' },
  { value: '选项 4', label: '重庆' },
  { value: '选项 5', label: '深圳' }
])

const selectDom = ref(null)
const value = ref('')
const boxVisibility = ref(false)
const optionLabel = ref('')
const optionValue = ref('')

const handleAddOption = () => {
  optionValue.value = ''
  optionLabel.value = ''
  boxVisibility.value = true
}

const handleConfirm = () => {
  if (!optionLabel.value || !optionValue.value) {
    TinyModal.message({ message: '选项不能为空！', status: 'warning' })
    return
  }
  boxVisibility.value = false
  options.value.unshift({
    value: optionValue,
    label: optionLabel
  })
  selectDom.value.focus()
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>

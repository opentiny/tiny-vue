<template>
  <div>
    <div>场景1：allow-create + filterable，点击创建条目</div>
    <br />
    <tiny-base-select v-model="value" allow-create filterable>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <br />
    <br />
    <div>场景2：allow-create + filterable + default-first-option，Enter 键创建条目</div>
    <br />
    <tiny-base-select v-model="value" allow-create filterable default-first-option>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
    <br />
    <br />
    <div>场景3：下拉框显示新增按钮</div>
    <br />
    <tiny-base-select
      v-model="value"
      placeholder="请选择"
      @top-create-click="handleAddOption"
      automatic-dropdown
      top-create
      ref="selectDom"
    >
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-base-select>
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

<script>
import { BaseSelect, Option, Input, Button, DialogBox, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect: BaseSelect,
    TinyOption: Option,
    TinyInput: Input,
    TinyButton: Button,
    TinyDialogBox: DialogBox
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '北京' },
        { value: '选项2', label: '上海' },
        { value: '选项3', label: '天津' },
        { value: '选项4', label: '重庆' },
        { value: '选项5', label: '深圳' }
      ],
      value: '',
      boxVisibility: false,
      optionLabel: '',
      optionValue: ''
    }
  },
  methods: {
    handleAddOption() {
      this.optionValue = ''
      this.optionLabel = ''
      this.boxVisibility = true
    },
    handleConfirm() {
      if (!this.optionLabel || !this.optionValue) {
        Modal.message({ message: '选项不能为空！', status: 'warning' })
        return
      }
      this.boxVisibility = false
      this.options.unshift({
        value: this.optionValue,
        label: this.optionLabel
      })
      this.$refs.selectDom.focus()
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>

<template>
  <div class="tiny-filter-panel-demo">
    <tiny-filter-panel
      :popper-append-to-body="false"
      ref="filterPanelRef"
      label="编码编码"
      :tip="tip"
      clearable
      @handle-clear="handleClear"
    >
      <div class="tiny-filter-panel-textarea">
        <div class="tiny-filter-panel-title">支持输入多个值，用分号区隔</div>
        <tiny-input type="textarea" resize="none" v-model="inputVal" @change="handleChange"></tiny-input>
      </div>
      <tiny-button size="small" type="primary" class="tiny-filter-panel-button" @click="hide">确定</tiny-button>
    </tiny-filter-panel>
    <tiny-tag v-for="(tag, index) in tags" :key="tag" closable @close="handleClose(index)">{{ tag }}</tiny-tag>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FilterPanel as TinyFilterPanel, Input as TinyInput, Button as TinyButton, Tag as TinyTag } from '@opentiny/vue'

const tip = ref('请选择物品数量')
const inputVal = ref('')
const radioVal = ref('')
const filterPanelRef = ref()
const tags = ref([])

function handleClear() {
  radioVal.value = ''
  inputVal.value = ''
}
function hide() {
  filterPanelRef.value.hide()
}

const handleChange = () => {
  const newTags = inputVal.value.split(';')
  if (newTags.length) {
    tags.value.push(...newTags)
  }
}

const handleClose = (i) => {
  tags.value.splice(i, 1)
}
</script>

<style scoped>
.tiny-filter-panel-demo {
  display: flex;
  height: 194px;
}
.tiny-tag {
  margin-left: 4px;
}
:deep(.tiny-filter-panel__popover) > div {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.tiny-filter-panel-textarea :deep(.tiny-textarea__inner) {
  width: 276px;
  height: 112px;
  box-sizing: border-box;
  padding: 6px 10px;
}
.tiny-filter-panel-textarea :deep(.tiny-filter-panel-title) {
  font-size: 12px;
  line-height: 18px;
  color: #808080;
}
.tiny-filter-panel-textarea :deep(.tiny-textarea) {
  margin-top: 8px;
}
:deep(.tiny-filter-panel-button) {
  margin-top: 16px;
}
</style>

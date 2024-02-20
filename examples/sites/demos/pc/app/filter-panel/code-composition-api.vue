<template>
  <div class="tiny-filter-panel-demo">
    <tiny-filter-panel
      :popper-append-to-body="false"
      ref="filterPanel"
      label="编码编码"
      clearable
      :value="value"
      @handle-clear="handleClear"
    >
      <div class="tiny-filter-panel-textarea">
        <div class="tiny-filter-panel-title">支持输入多个值，用分号区隔</div>
        <tiny-input type="textarea" resize="none" v-model="inputVal"></tiny-input>
      </div>
      <tiny-button size="mini" type="primary" class="tiny-filter-panel-button" @click="hide">确定</tiny-button>
    </tiny-filter-panel>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { FilterPanel as TinyFilterPanel, Input as TinyInput, Button as TinyButton } from '@opentiny/vue'

const inputVal = ref('')
const radioVal = ref('')
const filterPanelRef = ref()
const value = computed(() => {
  return radioVal.value + inputVal.value
})

function handleClear() {
  radioVal.value = ''
  inputVal.value = ''
}
function hide() {
  filterPanelRef.value.hide()
}
</script>

<style scoped>
:deep(.tiny-filter-panel__popover) {
  height: 194px;
  padding-top: 8px !important;
}
:deep(.tiny-filter-panel-demo) {
  height: 194px;
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
}
.tiny-filter-panel-textarea :deep(.tiny-textarea) {
  margin-top: 8px;
}
:deep(.tiny-filter-panel-button) {
  margin: 12px 0;
  position: absolute;
  right: 12px;
}
</style>

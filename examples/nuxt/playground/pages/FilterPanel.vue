<template>
  <div>
    <div class="mb10">
      <tiny-switch v-model="disabled"></tiny-switch><span class="ml10">{{ disabled ? '禁用' : '非禁用' }}</span>
    </div>
    <tiny-filter-panel
      ref="filterPanelRef"
      label="物品数量"
      @handle-clear="handleClear"
      :value="value"
      :disabled="disabled"
    >
      <tiny-radio-group v-model="radioVal" size="mini">
        <tiny-radio label="大于">大于</tiny-radio>
        <tiny-radio label="等于">等于</tiny-radio>
        <tiny-radio label="小于">小于</tiny-radio>
      </tiny-radio-group>
      <tiny-input type="text" v-model="inputVal" style="margin-top: 20px"></tiny-input>
    </tiny-filter-panel>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  FilterPanel as TinyFilterPanel,
  Radio as TinyRadio,
  RadioGroup as TinyRadioGroup,
  Input as TinyInput,
  Switch as TinySwitch
} from '@opentiny/vue'

const inputVal = ref('')
const radioVal = ref('')
const disabled = ref(false)
const value = computed(() => {
  return radioVal.value + inputVal.value
})

function handleClear() {
  radioVal.value = ''
  inputVal.value = ''
}
</script>

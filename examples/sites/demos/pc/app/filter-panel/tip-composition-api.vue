<template>
  <div>
    <div class="mb10">
      <tiny-switch v-model="isBlank"></tiny-switch><span class="ml10">{{ isBlank ? '透明' : '非透明' }}</span>
    </div>
    <tiny-filter-panel ref="filterPanel" label="物品数量" :tip="tip" :value="value" :clearable="false" :blank="isBlank">
      <tiny-radio-group v-model="radioVal" size="mini">
        <tiny-radio label="大于">大于</tiny-radio>
        <tiny-radio label="等于">等于</tiny-radio>
        <tiny-radio label="小于">小于</tiny-radio>
      </tiny-radio-group>
      <tiny-input type="text" v-model="inputVal" style="margin-top: 16px"></tiny-input>
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

const tip = ref('请选择物品数量')
const inputVal = ref('')
const radioVal = ref('')
const isBlank = ref(false)

const value = computed(() => {
  return radioVal.value + inputVal.value
})
</script>

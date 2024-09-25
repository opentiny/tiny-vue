<template>
  <div>
    <div class="title">按钮形式尺寸：</div>
    <tiny-radio-group v-model="value" size="medium">
      <tiny-radio-button label="1">选项一</tiny-radio-button>
      <tiny-radio-button label="2">选项二</tiny-radio-button>
    </tiny-radio-group>

    <div class="mt-20">
      <tiny-radio-group v-model="value" size="small">
        <tiny-radio-button label="1">选项一</tiny-radio-button>
        <tiny-radio-button label="2">选项二</tiny-radio-button>
      </tiny-radio-group>
    </div>

    <div class="mt-20">
      <tiny-radio-group v-model="value" size="mini">
        <tiny-radio-button label="1">选项一</tiny-radio-button>
        <tiny-radio-button label="2">选项二</tiny-radio-button>
      </tiny-radio-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RadioButton as TinyRadioButton, RadioGroup as TinyRadioGroup } from '@opentiny/vue'

const value = ref('1')
</script>

<style scoped>
.mt-20 {
  margin-top: 20px;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>

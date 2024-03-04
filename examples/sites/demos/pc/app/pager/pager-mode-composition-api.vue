<template>
  <div class="content">
    显示模式：
    <tiny-radio-group v-model="mode">
      <tiny-radio-button label="number"></tiny-radio-button>
      <tiny-radio-button label="simple"></tiny-radio-button>
      <tiny-radio-button label="complete"></tiny-radio-button>
      <tiny-radio-button label="fixed"></tiny-radio-button>
    </tiny-radio-group>
    <tiny-pager :mode="mode" :total="100"></tiny-pager>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Pager as TinyPager, RadioButton as TinyRadioButton, RadioGroup as TinyRadioGroup } from '@opentiny/vue'

const mode = ref('number')
</script>

<style scoped>
.content {
  margin-bottom: 20px;
}
.tiny-radio-group {
  margin-bottom: 10px;
}
</style>

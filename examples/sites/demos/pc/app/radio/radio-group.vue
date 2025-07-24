<template>
  <div>
    <tiny-radio-group v-model="value1">
      <tiny-radio label="1">备选项 1</tiny-radio>
      <tiny-radio label="2">备选项 2</tiny-radio>
      <tiny-radio label="3">备选项 3</tiny-radio>
    </tiny-radio-group>
    <div class="mt-20">
      <tiny-radio-group v-model="value2">
        <tiny-radio-button label="1">备选项 1</tiny-radio-button>
        <tiny-radio-button label="2">备选项 2</tiny-radio-button>
        <tiny-radio-button label="3">备选项 3</tiny-radio-button>
      </tiny-radio-group>
    </div>
  </div>
</template>

<script>
import { TinyRadio, TinyRadioGroup, TinyRadioButton } from '@opentiny/vue'

export default {
  components: {
    TinyRadio,
    TinyRadioGroup,
    TinyRadioButton
  },
  data() {
    return {
      value1: '1',
      value2: '1'
    }
  }
}
</script>

<style scoped>
.mt-20 {
  margin-top: 20px;
}
</style>

<template>
  <div>
    <div style="position: relative">
      <p>颜色值：{{ color }}</p>
      <tiny-color-picker v-model="color" :visible="visible" @confirm="onConfirm" @cancel="onCancel" :format="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TinyColorPicker } from '@opentiny/vue'
import { ref } from 'vue'

const color = ref('rgb(102,204,255)')
const visible = ref(false)
const options = ref(['rgb', 'hex', 'hsv', 'hsl'])

const hidden = () => {
  visible.value = false
}
const onConfirm = () => {
  hidden()
}
const onCancel = () => {
  hidden()
}
</script>

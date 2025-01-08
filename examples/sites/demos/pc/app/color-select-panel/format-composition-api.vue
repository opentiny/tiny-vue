<template>
  <div>
    <p>颜色值：{{ color }}</p>
    <tiny-button @click="changeVisible"> Toggle </tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="onCancel"
        :format="options"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TinyColorSelectPanel, TinyButton } from '@opentiny/vue'
import { ref } from 'vue'

const color = ref('rgb(102,204,255)')
const visible = ref(false)
const options = ref(['rgb', 'hex', 'hsl', 'hsv'])
const value = ref('rgb')

const hidden = () => {
  visible.value = false
}

const onConfirm = () => {
  hidden()
}
const onCancel = () => {
  hidden()
}
const changeVisible = () => {
  visible.value = !visible.value
}
</script>

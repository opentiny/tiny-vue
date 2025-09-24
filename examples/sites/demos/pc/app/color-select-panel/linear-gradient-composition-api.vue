<script lang="ts" setup>
import { TinyColorSelectPanel, TinyButton } from '@opentiny/vue'
import { ref } from 'vue'

const color = ref('linear-gradient(120deg, hsla(334, 80%, 40%, 0.32) 0%,#F48FA2FF 96%)')
const visible = ref(false)
const history = ref(['linear-gradient(120deg, hsla(201, 80%, 40%, 0.32) 0%,#8FF2F4FF 96%)'])
const changeVisible = () => {
  visible.value = !visible.value
}
const onConfirm = () => {
  console.log(color)
  hidden()
}
const hidden = () => {
  visible.value = false
}
</script>

<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel
        alpha
        color-mode="linear-gradient"
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="hidden"
        enable-history
        :history="history"
      />
    </div>
  </div>
</template>

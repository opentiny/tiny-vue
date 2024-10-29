<template>
  <tiny-user v-model="user" multiple @change="change" @focus="handleFocus" @blur="handleBlur"></tiny-user>
</template>

<script setup>
import { ref } from 'vue'
import { TinyUser, TinyModal } from '@opentiny/vue'

const user = ref('441047913162396,702973890055088,421000103624183')

const change = (val) => {
  TinyModal.message({ message: `${val}`, status: 'info' })
}

const handleFocus = () => {
  TinyModal.message({
    message: '组件聚焦'
  })
}

const handleBlur = () => {
  TinyModal.message({
    message: '组件失焦'
  })
}
</script>

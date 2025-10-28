<template>
  <tiny-exception type="pagenoperm">
    <tiny-button type="primary" @click="test">自定义按钮</tiny-button>
  </tiny-exception>
</template>

<script setup>
import { TinyException, TinyModal, TinyButton } from '@opentiny/vue'

const test = () => {
  TinyModal.message({ status: 'info', message: '自定义按钮被点击' })
}
</script>

<template>
  <div>
    <tiny-button>默认按钮</tiny-button>
    <tiny-button autofocus>默认聚焦</tiny-button>
  </div>
</template>

<script setup>
import TinyButton from '@opentiny/vue-button'
</script>

<style scoped>
.tiny-button {
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 24px;
}
</style>

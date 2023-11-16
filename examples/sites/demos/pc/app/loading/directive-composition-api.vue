<template>
  <div class="tiny-demo-v-loading">
    <tiny-button @click="handleClick">open loading</tiny-button>
    <div
      v-loading="isLoading"
      tiny-loading__text="v-loadingText"
      tiny-loading__background="rgba(0,0,0,0.6)"
      tiny-loading__custom-class="tiny-demo-loading-custom"
    >
      <div class="tiny-demo-v-loading-bg">
        v-loading
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Loading, Button as TinyButton } from '@opentiny/vue'

const isLoading = ref(false)

const vLoading = Loading.directive

function handleClick() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 5000)
}
</script>

<style scoped>
.tiny-demo-v-loading-bg {
  height: 120px;
  line-height: 120px;
  text-align: center;
}
</style>

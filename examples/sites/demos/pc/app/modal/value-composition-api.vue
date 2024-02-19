<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0"> 默认插槽 </tiny-button>
    <tiny-modal v-model="value1" :lock-scroll="false" show-footer>
      <template #default>
        <p class="custom-content">test</p>
      </template>
    </tiny-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as TinyButton, Modal as TinyModal } from '@opentiny/vue'

const value1 = ref(false)
</script>

<style scoped>
.custom-content {
  color: #3168f1;
}
</style>

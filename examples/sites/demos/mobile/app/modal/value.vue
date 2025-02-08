<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">默认插槽</tiny-button>
    <tiny-modal v-model="value1" :lock-scroll="false" show-footer>
      <template #default>
        <p>test</p>
      </template>
    </tiny-modal>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

const value1 = ref(false)
</script>

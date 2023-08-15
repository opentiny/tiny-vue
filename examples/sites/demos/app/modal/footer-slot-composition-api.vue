<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">自定义脚部</tiny-button>
    <tiny-modal v-model="value1" show-footer>
      <template #footer>
        <tiny-button>自定义脚部信息</tiny-button>
      </template>
    </tiny-modal>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, Modal as TinyModal } from '@opentiny/vue'

const value1 = ref(false)
</script>

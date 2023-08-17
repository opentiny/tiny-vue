<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">点击关闭按钮时触发事件</tiny-button>
    <tiny-modal v-model="value1" type="confirm" show-footer @close="closeClick">
      <template #default>
        <p>test</p>
      </template>
    </tiny-modal>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Button as TinyButton, Modal as TinyModal } from '@opentiny/vue'

const value1 = ref(false)

function closeClick() {
  Modal.message({ message: '点击关闭按钮时触发事件' })
}
</script>

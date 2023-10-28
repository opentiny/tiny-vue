<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">在窗口关闭时会触发事件</tiny-button>
    <tiny-modal v-model="value1" type="confirm" show-footer @hide="hideClick">
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

function hideClick() {
  Modal.message({ message: '在窗口关闭时会触发事件' })
}
</script>

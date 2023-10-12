<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">在窗口显示时触发事件</tiny-button>
    <tiny-modal v-model="value1" type="confirm" show-footer @show="showClick">
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

function showClick() {
  Modal.message({ message: '在窗口显示时触发事件' })
}
</script>

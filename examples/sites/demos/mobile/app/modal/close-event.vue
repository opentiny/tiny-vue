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
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

const value1 = ref(false)

function closeClick() {
  TinyModal.message({ message: '点击关闭按钮时触发事件', tiny_mode: 'mobile' })
}
</script>

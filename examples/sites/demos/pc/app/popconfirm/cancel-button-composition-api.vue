<template>
  <div>
    <tiny-popconfirm :title="title" :message="message" :cancel-button="false">
      <template #reference>
        <tiny-button>悬浮我提示</tiny-button>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Popconfirm as TinyPopconfirm, Button as TinyButton } from '@opentiny/vue'

const title = ref('这是气泡标题')
const message = ref('这是气泡提示框内容。')
</script>

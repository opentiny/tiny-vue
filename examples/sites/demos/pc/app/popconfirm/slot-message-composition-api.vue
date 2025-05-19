<template>
  <div>
    <tiny-popconfirm :title="title" :message="message" ref="popconfirmRef">
      <template #reference>
        <tiny-button>悬浮我提示</tiny-button>
      </template>
      <template #message>
        <p>{{ customMessage }}</p>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyPopconfirm, TinyButton } from '@opentiny/vue'

const title = ref('这是气泡标题')
const message = ref('这是气泡确认框提示内容文本描述。')
const customMessage = ref('这是气泡确认框自定义提示内容文本描述。')
const popconfirmRef = ref()
</script>

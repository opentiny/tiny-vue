<template>
  <div>
    <tiny-popconfirm :title="title" :content="content" width="200">
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
const content = ref('这是气泡确认框提示内容。')
</script>

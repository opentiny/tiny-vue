<template>
  <div class="container">
    <tiny-popover
      placement="top-start"
      title="hover 激活"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <tiny-button>hover 激活</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover
      placement="bottom"
      title="click 激活"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <tiny-button>click 激活</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover
      ref="popoverRef"
      placement="right"
      title="focus 激活"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <tiny-button>focus 激活</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover
      placement="bottom"
      title="手动激活"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      v-model="visible"
    >
      <template #reference>
        <tiny-button @click="visible = !visible">手动激活</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Popover as TinyPopover, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)
</script>

<style scoped>
.container > span {
  margin-right: 100px;
}
</style>

<template>
  <div class="container">
    <div>
      <tiny-button @click="popverDisable = !popverDisable">{{ popverDisable ? '启用' : '禁用' }}弹出框</tiny-button>
    </div>
    <div>
      <tiny-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        :disabled="popverDisable"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <tiny-button>悬浮弹出</tiny-button>
        </template>
      </tiny-popover>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Popover as TinyPopover, Button as TinyButton } from '@opentiny/vue'

const popverDisable = ref(false)
</script>

<style scoped>
.container > div {
  display: inline-block;
  width: 100px;
  margin: 10px;
}
</style>

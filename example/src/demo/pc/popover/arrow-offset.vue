<template>
  <div class="container">
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="0">
      <template #reference>
        <button>提示</button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="100">
      <template #reference>
        <button>提示</button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="200">
      <template #reference>
        <button>提示</button>
      </template>
    </tiny-popover>
  </div>
</template>

<script>
import { Popover } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover
  }
}
</script>
<style>
.container button.tiny-popover__reference {
  margin: 0 20px;
}
</style>

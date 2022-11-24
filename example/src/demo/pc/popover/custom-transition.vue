<template>
  <div class="container">
    <div>
      <tiny-popover
        placement="top-start"
        title="标题"
        width="200"
        transition="fade-in-linear"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <button>悬浮看效果</button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover
        placement="top-start"
        title="标题"
        width="200"
        transition="fade-in"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <button>悬浮看效果</button>
        </template>
      </tiny-popover>
    </div>
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

<style scoped>
.container > div {
  display: inline-block;
  margin-right: 100px;
}
</style>

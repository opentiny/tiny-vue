<template>
  <div class="container">
    <div>
      <tiny-popover
        placement="top"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <button>悬浮有提示</button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <button>悬浮有提示</button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover
        placement="left"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <button>悬浮有提示</button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover
        placement="right"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <button>悬浮有提示</button>
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
.container {
  height: 200px;
}

.container > div {
  display: inline-block;
  margin-right: 100px;
}
</style>

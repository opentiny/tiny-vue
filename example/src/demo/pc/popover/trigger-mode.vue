<template>
  <div class="container">
    <tiny-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <button>hover 激活</button>
      </template>
    </tiny-popover>
    <tiny-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <button>click 激活</button>
      </template>
    </tiny-popover>
    <tiny-popover
      ref="popover"
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference>
        <button>focus 激活</button>
      </template>
    </tiny-popover>
    <tiny-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      v-model="visible"
    >
      <template #reference>
        <button @click="visible = !visible">手动激活</button>
      </template>
    </tiny-popover>
  </div>
</template>

<script>
import { Popover } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
.container > span {
  margin-right: 100px;
}
</style>

<template>
  <tiny-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    :open-delay="delayTimes"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference>
      <button>鼠标悬浮我两秒</button>
    </template>
  </tiny-popover>
</template>

<script>
import { Popover } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover
  },
  data() {
    return {
      delayTimes: 2000
    }
  }
}
</script>

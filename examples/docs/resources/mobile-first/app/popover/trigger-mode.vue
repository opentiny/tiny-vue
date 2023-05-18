<template>
  <div>
    <tiny-popover placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <template #reference>
        <tiny-button class="mr-32">hover 激活</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="bottom" title="标题" width="200" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <template #reference>
        <tiny-button class="mr-32">click 激活</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover ref="popover" placement="right" title="标题" width="200" trigger="focus" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <template #reference>
        <tiny-button class="mr-32">focus 激活</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="bottom" title="标题" width="200" trigger="manual" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。" v-model="visible">
      <template #reference>
        <tiny-button @click="visible = !visible" class="mr-32">手动激活</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script>
import { Popover, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

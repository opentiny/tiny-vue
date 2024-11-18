<template>
  <div>
    <div class="inline-block mr-32">
      <tiny-popover
        placement="top"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <tiny-button>悬浮有提示</tiny-button>
        </template>
      </tiny-popover>
    </div>
    <div class="inline-block mr-32">
      <tiny-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <tiny-button>悬浮有提示</tiny-button>
        </template>
      </tiny-popover>
    </div>
    <div class="inline-block mr-32">
      <tiny-popover
        placement="left"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <tiny-button>悬浮有提示</tiny-button>
        </template>
      </tiny-popover>
    </div>
    <div class="inline-block mr-32">
      <tiny-popover
        placement="right"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference>
          <tiny-button>悬浮有提示</tiny-button>
        </template>
      </tiny-popover>
    </div>
  </div>
</template>

<script>
import { TinyPopover, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyPopover,
    TinyButton
  }
}
</script>

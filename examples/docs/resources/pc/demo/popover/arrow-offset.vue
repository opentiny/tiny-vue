<template>
  <div class="container">
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="0">
      <template #reference>
        <tiny-button>默认</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="50">
      <template #reference>
        <tiny-button>偏移50</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="100">
      <template #reference>
        <tiny-button>偏移100</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script lang="jsx">
import { Popover, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  }
}
</script>

<style>
.container .reference-wrapper .tiny-button {
  margin: 0 20px;
}
</style>

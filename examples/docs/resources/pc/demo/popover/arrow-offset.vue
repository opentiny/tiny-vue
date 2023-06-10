<template>
  <div class="container">
    <tiny-popover placement="top-start" content="这是一段内容" trigger="manual" v-model="show">
      <template #reference>
        <tiny-button>默认</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="50" trigger="manual" v-model="show">
      <template #reference>
        <tiny-button>偏移50</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover placement="top-start" content="这是一段内容" :arrow-offset="100" trigger="manual" v-model="show">
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
  },
  data() {
    return { show: true }
  }
}
</script>

<style>
.container .reference-wrapper {
  display: block;
  margin-bottom: 80px;
}

.container .reference-wrapper button {
  width: 200px;
}
</style>

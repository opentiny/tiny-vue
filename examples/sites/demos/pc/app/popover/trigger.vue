<template>
  <div class="container">
    <tiny-popover title="click 激活" width="200" trigger="click" content="这是一段内容。">
      <template #reference>
        <tiny-button>click 激活</tiny-button>
      </template>
    </tiny-popover>

    <tiny-popover title="hover 激活" width="200" trigger="hover" content="这是一段内容。">
      <template #reference>
        <tiny-button>hover 激活</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover title="手动激活" width="200" trigger="manual" content="这是一段内容。" v-model="visible">
      <template #reference>
        <tiny-button @click="visible = !visible">手动激活</tiny-button>
      </template>
    </tiny-popover>
    <tiny-popover title="focus 激活" width="200" trigger="focus" content="这是一段内容。">
      <template #reference>
        <tiny-button>focus 激活</tiny-button>
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
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>

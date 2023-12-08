<template>
  <div class="container">
    <div style="margin-right: 16px">
      是否禁用：
      <tiny-switch v-model="disabled" show-text style="width: 80px">
        <template #open>
          <span>禁用</span>
        </template>
        <template #close>
          <span>正常</span>
        </template>
      </tiny-switch>
    </div>
    <tiny-popover title="标题" width="200" trigger="hover" :disabled="disabled" content="这是一段内容。">
      <template #reference>
        <tiny-button>鼠标悬浮在这里</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script lang="jsx">
import { Popover, Button, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button,
    TinySwitch: Switch
  },
  data() {
    return {
      disabled: false
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
}
</style>

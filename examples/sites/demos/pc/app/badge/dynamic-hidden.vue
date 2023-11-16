<template>
  <div>
    <tiny-badge :value="unread" :hidden="unread === 0">我的待办</tiny-badge>
    <br />
    <tiny-button :disabled="unread === 0" @click="read">读取一条消息</tiny-button>
  </div>
</template>

<script>
import { Badge, Button } from '@opentiny/vue'

export default {
  components: {
    TinyBadge: Badge,
    TinyButton: Button
  },
  data() {
    return {
      unread: 2
    }
  },
  methods: {
    read() {
      if (this.unread > 0) {
        this.unread = this.unread - 1
      }
    }
  }
}
</script>

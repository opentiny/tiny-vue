<template>
  <div class="badge-wrap">
    <tiny-badge :value="unread" :hidden="unread === 0">我的待办</tiny-badge>
    <br />
    <br />
    <tiny-button :disabled="unread === 0" @click="read">读取一条消息</tiny-button>
  </div>
</template>

<script lang="jsx">
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

<style>
.badge-wrap {
  padding: 20px;
}
</style>

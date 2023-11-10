<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">自定义内容</tiny-button>
  </div>
</template>

<script>
import { Button, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    baseClick() {
      Notify({
        type: 'info',
        title: '通知',
        message: '自定义内容',
        position: 'top-right'
      })
    }
  }
}
</script>

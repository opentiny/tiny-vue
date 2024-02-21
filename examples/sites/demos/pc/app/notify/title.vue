<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">自定义标题</tiny-button>
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
        title: '自定义标题',
        message: '自定义标题',
        position: 'top-right'
      })
    }
  }
}
</script>

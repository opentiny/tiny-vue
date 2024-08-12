<template>
  <tiny-button @click="customClick" :reset-time="0">自定义标题</tiny-button>
  <tiny-button @click="noTitleClick" :reset-time="0">无标题</tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    customClick() {
      Modal.alert({ message: '自定义标题', title: '自定义标题' })
    },

    noTitleClick() {
      Modal.alert({ message: '无标题', title: '' })
    }
  }
}
</script>

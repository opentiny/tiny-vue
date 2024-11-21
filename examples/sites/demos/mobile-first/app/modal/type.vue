<template>
  <div class="content">
    <tiny-button @click="alertClick" :reset-time="0">alert 弹框</tiny-button>
    <tiny-button @click="messageClick" :reset-time="0"> message 提示框 </tiny-button>
    <tiny-button @click="confirmClick" :reset-time="0"> confirm 确认提示框 </tiny-button>
  </div>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    alertClick() {
      TinyModal.alert('alert 弹框', '弹框')
    },
    messageClick() {
      TinyModal.message('message 提示框')
    },
    confirmClick() {
      TinyModal.confirm('您确定要删除吗？', '确定框')
    }
  }
}
</script>

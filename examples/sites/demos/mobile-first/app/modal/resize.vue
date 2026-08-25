<template>
  <div>
    <tiny-button @click="btnClick" :reset-time="0"> 命令式打开 </tiny-button>
    <tiny-button @click="mainVisible = true" :reset-time="0"> 标签式打开 </tiny-button>

    <tiny-modal v-model="mainVisible" title="Num.1标签式加函数弹窗" message="NO.1标签式加函数内容" resize show-footer>
    </tiny-modal>
  </div>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinyModal
  },
  data() {
    return {
      mainVisible: false
    }
  },
  methods: {
    btnClick() {
      TinyModal.alert({
        message: '可以拖动调整窗口大小',
        resize: true
      })
    }
  }
}
</script>

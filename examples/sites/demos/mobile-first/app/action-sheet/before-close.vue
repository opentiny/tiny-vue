<template>
  <div class="demo-action-sheet">
    <tiny-button @click="showFn" type="primary"> 动作面板 </tiny-button>
    <tiny-action-sheet title="标题" v-model:visible="boxVisibility" :before-close="beforeCloseFn">
      <div style="text-align: center">
        <p v-for="i in 20" style="height: 50px" :key="i">内容选项 {{ i }}</p>
      </div>
    </tiny-action-sheet>
  </div>
</template>

<script>
import { TinyActionSheet, TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyActionSheet,
    TinyButton
  },
  data() {
    return {
      boxVisibility: false,
      beforeCloseFn() {
        TinyModal.message('已拦截关闭动作!')
        return false
      }
    }
  },
  methods: {
    showFn() {
      this.boxVisibility = true
    }
  }
}
</script>

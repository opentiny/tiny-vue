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
import { ActionSheet, Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyActionSheet: ActionSheet,
    TinyButton: Button
  },
  data() {
    return {
      boxVisibility: false,
      beforeCloseFn() {
        Modal.message('已拦截关闭动作!')
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

<template>
  <div>
    <h2>函数式调用：</h2>
    <div class="content">
      <tiny-button @click="messageClick"> 函数式弹窗1 </tiny-button>
    </div>

    <h2>标签式调用</h2>
    <div class="content">
      <!-- 1：所有关闭操作都触发 beforeClose -->
      <tiny-modal
        v-model="mainVisible"
        :width="600"
        :height="300"
        :before-close="handleBeforeClose"
        title="Num.1标签式弹窗"
        message="NO.1标签式内容"
        show-footer
      >
      </tiny-modal>

      <!-- 2：关闭前确认弹窗 -->
      <tiny-modal
        v-model="confirmVisible"
        title="Num.2弹窗关闭前确认"
        message="NO.2---确定要关闭NO.1窗口吗？未保存的内容将丢失。"
        @confirm="onConfirmClose"
        @cancel="onCancelClose"
        show-footer
      >
      </tiny-modal>
      <tiny-button @click="mainVisible = true"> 标签式弹窗</tiny-button>
    </div>

    <h2>标签式 + 函数调用</h2>
    <div class="content">
      <tiny-modal
        v-model="mainVisible2"
        :width="600"
        :height="300"
        :before-close="handleBeforeClose1"
        title="Num.1标签式加函数弹窗"
        message="NO.1标签式加函数内容"
        show-footer
      >
      </tiny-modal>
      <tiny-button @click="mainVisible2 = true"> 标签式 + 函数式弹窗</tiny-button>
    </div>

    <h2>点击确认按钮 + 拦截弹窗</h2>
    <div class="content">
      <tiny-modal
        v-model="mainVisible1"
        :width="600"
        :height="300"
        :before-close="handleBeforeClose1"
        title="Num.1确认按钮加拦截弹窗"
        message="点击确认按钮，出现拦截弹窗"
        show-footer
      >
        <template #footer>
          <tiny-button type="primary" @click="onCancelClose1">取消</tiny-button>
          <tiny-button style="margin-left: 12px" @click="onConfirmClose1">确定</tiny-button>
        </template>
      </tiny-modal>
      <tiny-button @click="mainVisible1 = true"> 其他</tiny-button>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { Button as TinyButton, Modal } from '@opentiny/vue'
import { ref } from 'vue'

const TinyModal = Modal
const mainVisible = ref(false)
const mainVisible1 = ref(false)
const mainVisible2 = ref(false)
const confirmVisible = ref(false)
let pendingDone = null

const handleBeforeClose = (type, instance, done) => {
  confirmVisible.value = true
  pendingDone = done
  return false // 阻止原弹窗立即关闭
}

const onConfirmClose = () => {
  confirmVisible.value = false
  pendingDone && pendingDone() // 调用 done() 关闭原弹窗
  pendingDone = null
}

// 点击取消/关闭 -> 只关闭确认弹窗，保留原弹窗
const onCancelClose = () => {
  confirmVisible.value = false
  pendingDone = null // 不调用 done()，原弹窗保持打开
}

// 函数式调用：
const messageClick = () => {
  Modal.confirm({
    message: 'Num.1函数式弹窗内容',
    title: '函数式弹窗Num.1',
    status: 'warning',
    width: '600',
    height: '300',
    beforeClose: (type, instance, done) => {
      Modal.confirm({
        title: '关闭前确认Num.2',
        message: '确认弹窗关闭Num.1？',
        events: {
          confirm: () => done && done(), // 确认 -> 关闭所有弹窗
          cancel: () => {} // 取消 -> 保留原弹窗
        }
      })
      return false
    }
  })
}

const handleBeforeClose1 = (type, instance, done) => {
  Modal.confirm({
    title: '关闭前确认Num.2',
    message: '确认弹窗关闭Num.1？',
    events: {
      confirm: () => done && done(), // 确认 -> 关闭所有弹窗
      cancel: () => {} // 取消 -> 保留原弹窗
    }
  })
  return false // 阻止原弹窗立即关闭
}

// 其他
const onConfirmClose1 = () => {
  // 手动调用 beforeClose，传入关闭回调
  handleBeforeClose1('confirm', null, () => {
    mainVisible1.value = false
  })
}

const onCancelClose1 = () => {
  mainVisible1.value = false
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 12px;
}
.content {
  margin: 8px;
}
</style>

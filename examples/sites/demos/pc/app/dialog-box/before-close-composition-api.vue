<template>
  <div>
    <tiny-button @click="box1 = true" title="属性拦截 Dialog示例">属性拦截 Dialog</tiny-button>
    <tiny-button @click="box2 = true" title="事件拦截 Dialog示例">事件拦截 Dialog</tiny-button>

    <tiny-dialog-box ref="box1Ref" v-model:visible="box1" title="消息" width="30%" :before-close="beforeCloseProp">
      <span>当前窗口有50%的概率关闭</span>
      <template #footer>
        <tiny-button @click="handleBox1Close">取 消</tiny-button>
        <tiny-button type="primary" @click="handleBox1Close">确 定</tiny-button>
      </template>
    </tiny-dialog-box>

    <tiny-dialog-box ref="box2Ref" v-model:visible="box2" title="消息" width="30%" @before-close="onBeforeClose">
      <span>当前窗口有50%的概率关闭</span>
      <template #footer>
        <tiny-button @click="handleBox2Close">取 消</tiny-button>
        <tiny-button type="primary" @click="handleBox2Close">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyButton, TinyDialogBox, Modal } from '@opentiny/vue'

const box1 = ref(false)
const box2 = ref(false)
const box1Ref = ref()
const box2Ref = ref()

function beforeCloseProp(type) {
  // 模拟异步校验，是否需要手动关闭
  setTimeout(() => {
    if (Math.random() > 0.5) {
      box1Ref.value.hide(type) // 手动关闭，使用 box1.value = false 同样效果
    } else {
      Modal.alert('随机值过小，校验失败')
    }
  }, 1000)

  return false // 拦截关闭
}
function onBeforeClose(event, hideFn) {
  // 模拟异步校验，是否需要手动关闭
  setTimeout(() => {
    if (Math.random() > 0.5) {
      hideFn() // 手动关闭，使用 box2.value = false 同样效果
    } else {
      Modal.alert('随机值过小，校验失败')
    }
  }, 1000)

  event.preventDefault() // 拦截关闭
}

function handleBox1Close() {
  box1Ref.value.handleClose()
}

function handleBox2Close() {
  box2Ref.value.handleClose()
}
</script>

<template>
  <div>
    <h2>函数式调用</h2>
    <div class="content">
      <span>弹窗模式：</span>
      <tiny-button @click="baseClick"> 基本提示框 </tiny-button>
      <tiny-button @click="successClick"> 成功提示框 </tiny-button>
      <tiny-button @click="confirmClick"> 确认提示框 </tiny-button>
      <tiny-button @click="jsxClick"> 支持传入 jsx 提示框 </tiny-button>
    </div>
    <div class="content">
      <span>消息模式：</span>
      <tiny-button @click="messageClick"> 消息提示 </tiny-button>
    </div>

    <h2>标签式调用</h2>
    <div class="content">
      <tiny-modal v-model="show1" title="基本提示框" message="窗口内容1" show-footer> </tiny-modal>
      <tiny-modal v-model="show2" title="基本提示框" message="窗口内容2" status="success" show-footer> </tiny-modal>
      <tiny-button @click="show1 = true"> 打开弹窗1 </tiny-button>
      <tiny-button @click="show2 = true"> 打开弹窗2 </tiny-button>
    </div>
  </div>
</template>

<script setup lang="jsx">
import { TinyButton, TinyModal, TinyNotify } from '@opentiny/vue'
import { ref } from 'vue'

const show1 = ref(false)
const show2 = ref(false)

function baseClick() {
  const modal = TinyModal.alert('基本提示框', '标题')
  setTimeout(() => modal.vm.close(), 3000)
}

function successClick() {
  TinyModal.alert({ message: '成功提示框', status: 'success' })
}

function confirmClick() {
  TinyModal.confirm('您确定要删除吗？').then((res) => {
    TinyNotify({
      type: 'info',
      title: '触发回调事件',
      message: `点击${res}按钮`
    })
  })
}
function jsxClick() {
  TinyModal.alert({
    message: (
      <div>
        <button> some button </button>
        <b> some text </b>
      </div>
    ),

    status: 'success'
  })
}
function messageClick() {
  TinyModal.message('简单的消息')
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

<template>
  <div>
    <tiny-button @click="closeLoading">close Loading</tiny-button>
    <div id="tiny-basic-loading1"></div>
    <tiny-button @click="handleClick" :reset-time="0">弹出提示框</tiny-button>

    <h2>函数式调用</h2>
    <div class="content">
      <span>弹窗模式：</span>
      <tiny-button @click="baseClick"> 基本提示框 </tiny-button>
      <tiny-button @click="successClick"> 成功提示框 </tiny-button>
      <tiny-button @click="confirmClick"> 确认提示框 </tiny-button>
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

<script setup>
import { ref, onMounted } from 'vue'

const loadingInstance = ref(null)

const closeLoading = () => {
  loadingInstance.value.close()
}

onMounted(() => {
  loadingInstance.value = TinyLoading.service({
    target: document.getElementById('tiny-basic-loading1')
  })
})

function handleClick() {
  TinyNotify({
    type: 'info',
    title: '通知消息的标题',
    message: '通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文，通知消息的正文',
    position: 'top-right',
    duration: 5000,
    customClass: 'my-custom-cls'
  })
}

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
</script>

<template>
  <div>
    <h2>模态窗状态：</h2>
    <div class="content">
      <tiny-button @click="infoClick(1)">信息提示图标</tiny-button>
      <tiny-button @click="successClick(1)">成功提示图标</tiny-button>
      <tiny-button @click="warningClick(1)">警告提示图标</tiny-button>
      <tiny-button @click="errorClick(1)">错误提示图标</tiny-button>
      <tiny-button @click="loadingClick(1)">加载提示图标</tiny-button>
    </div>
    <h2>消息状态：</h2>
    <div class="content">
      <tiny-button @click="infoClick(2)">信息提示图标</tiny-button>
      <tiny-button @click="successClick(2)">成功提示图标</tiny-button>
      <tiny-button @click="warningClick(2)">警告提示图标</tiny-button>
      <tiny-button @click="errorClick(2)">错误提示图标</tiny-button>
      <tiny-button @click="loadingClick(2)">加载提示图标</tiny-button>
    </div>
    <h2>标签式调用：</h2>
    <div class="content">
      <tiny-button @click="infoClick(3)">信息提示图标</tiny-button>
      <tiny-button @click="successClick(3)">成功提示图标</tiny-button>
      <tiny-button @click="warningClick(3)">警告提示图标</tiny-button>
      <tiny-button @click="errorClick(3)">错误提示图标</tiny-button>
      <tiny-button @click="loadingClick(3)">加载提示图标</tiny-button>
      <tiny-modal v-model="show" :status="status" title="基本提示框" message="窗口内容1" show-footer> </tiny-modal>
    </div>
  </div>
</template>

<script setup>
import { Button as TinyButton, Modal } from '@opentiny/vue'
import { ref } from 'vue'

const TinyModal = Modal
const show = ref(false)
const status = ref('')

function infoClick(mode) {
  mode === 1 && Modal.alert({ message: '基本提示图标', status: 'info' })
  mode === 2 && Modal.message({ message: '基本提示图标', status: 'info' })
  if (mode === 3) {
    status.value = 'info'
    show.value = true
  }
}

function successClick(mode) {
  mode === 1 && Modal.alert({ message: '成功提示图标', status: 'success' })
  mode === 2 && Modal.message({ message: '成功提示图标', status: 'success' })
  if (mode === 3) {
    status.value = 'success'
    show.value = true
  }
}

function warningClick(mode) {
  mode === 1 && Modal.alert({ message: '警告提示图标', status: 'warning' })
  mode === 2 && Modal.message({ message: '警告提示图标', status: 'warning' })
  if (mode === 3) {
    status.value = 'warning'
    show.value = true
  }
}

function errorClick(mode) {
  mode === 1 && Modal.alert({ message: '错误提示图标', status: 'error' })
  mode === 2 && Modal.message({ message: '错误提示图标', status: 'error' })
  if (mode === 3) {
    status.value = 'error'
    show.value = true
  }
}

function loadingClick(mode) {
  mode === 1 && Modal.alert({ message: '加载提示图标', status: 'loading' })
  mode === 2 && Modal.message({ message: '加载提示图标', status: 'loading' })
  if (mode === 3) {
    status.value = 'loading'
    show.value = true
  }
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

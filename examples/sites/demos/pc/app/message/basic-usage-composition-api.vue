<template>
  <div>
    <h2>消息状态：</h2>
    <div class="content">
      <tiny-button @click="infoClick()">信息提示图标</tiny-button>
      <tiny-button @click="successClick()">成功提示图标</tiny-button>
      <tiny-button @click="warningClick()">警告提示图标</tiny-button>
      <tiny-button @click="errorClick()">错误提示图标</tiny-button>
      <tiny-button @click="loadingClick()">加载提示图标</tiny-button>
    </div>
  </div>
</template>

<script setup>
import { Button as TinyButton, Message } from '@opentiny/vue'

function infoClick() {
  console.log(Message, 18)
  Message.message({ message: '基本提示图标', status: 'info' })
}

function successClick() {
  Message.message({ message: '成功提示图标', status: 'success' })
}

function warningClick() {
  Message.message({ message: '警告提示图标', status: 'warning' })
}

function errorClick() {
  Message.message({ message: '错误提示图标', status: 'error' })
}

function loadingClick() {
  Message.message({ message: '加载提示图标', status: 'loading' })
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

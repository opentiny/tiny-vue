<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">基本提示图标</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">成功提示图标</tiny-button>
    <tiny-button @click="warningClick" :reset-time="0">警告提示图标</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">错误提示图标</tiny-button>
    <tiny-button @click="loadingClick" :reset-time="0">加载提示图标</tiny-button>
    <p>把<code>messageClosable</code>设置为true, 可显示关闭按钮</p>
    <tiny-button @click="hideCloseIcon" :reset-time="0">关闭按钮示例</tiny-button>
  </div>
</template>

<script lang="jsx">
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    baseClick() {
      Modal.message({ message: '基本提示图标', status: 'info' })
    },
    successClick() {
      Modal.message({ message: '成功提示图标', status: 'success' })
    },
    warningClick() {
      Modal.message({ message: '警告提示图标', status: 'warning' })
    },
    errorClick() {
      Modal.message({ message: '错误提示图标', status: 'error' })
    },
    loadingClick() {
      Modal.message({ message: '加载提示图标', status: 'loading' })
    },
    hideCloseIcon() {
      Modal.message({ message: '右侧显示关闭按钮', status: 'info', messageClosable: true })
    }
  }
}
</script>

<style scoped>
code {
  padding: 4px;
  background-color: var(--lightless);
}
</style>

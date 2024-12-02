<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">基本提示图标</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">成功提示图标</tiny-button>
    <tiny-button @click="warningClick" :reset-time="0">警告提示图标</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">错误提示图标</tiny-button>
    <tiny-button @click="loadingClick" :reset-time="0">加载提示图标</tiny-button>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyModal } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton
  },
  methods: {
    baseClick() {
      TinyModal.message({ message: '基本提示图标', status: 'info', tiny_mode: 'mobile' })
    },
    successClick() {
      TinyModal.message({ message: '成功提示图标', status: 'success', tiny_mode: 'mobile' })
    },
    warningClick() {
      TinyModal.message({ message: '警告提示图标', status: 'warning', tiny_mode: 'mobile' })
    },
    errorClick() {
      TinyModal.message({ message: '错误提示图标', status: 'error', tiny_mode: 'mobile' })
    },
    loadingClick() {
      TinyModal.message({ message: '加载提示图标', status: 'loading', tiny_mode: 'mobile' })
    }
  }
}
</script>

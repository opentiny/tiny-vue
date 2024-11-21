<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">基本提示图标</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">成功提示图标</tiny-button>
    <tiny-button @click="warningClick" :reset-time="0">警告提示图标</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">错误提示图标</tiny-button>
    <tiny-button @click="loadingClick" :reset-time="0">加载提示图标</tiny-button>
    <tiny-button @click="statusCommonpentClick" :reset-time="0">status 为自定义组件</tiny-button>
  </div>
</template>

<script>
import { TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    baseClick() {
      TinyModal.message({ message: '基本提示图标', status: 'info' })
    },
    successClick() {
      TinyModal.message({ message: '成功提示图标', status: 'success' })
    },
    warningClick() {
      TinyModal.message({ message: '警告提示图标', status: 'warning' })
    },
    errorClick() {
      TinyModal.message({ message: '错误提示图标', status: 'error' })
    },
    loadingClick() {
      TinyModal.message({ message: '加载提示图标', status: 'loading' })
    },
    statusCommonpentClick() {
      const IconComp = {
        name: 'icon',
        template: '<i style="color: red;"> i 错误提示</i>',
        data() {
          return {}
        }
      }
      TinyModal.message({ message: 'status 为自定义组件', status: IconComp })
    }
  }
}
</script>

<template>
  <div class="header">
    <div class="qr-code">
      <tiny-qr-code :value="sessionUrl" :size="100" color="#1677ff"></tiny-qr-code>
    </div>
  </div>
  <div class="app-container">
    <!-- 主体内容区域 -->
    <div class="main-content">
      <Demo />
    </div>
    <div class="right-panel" :class="{ collapsed: !appData.showTinyRobot }">
      <tiny-robot-chat />
    </div>
    <IconAi @click="appData.showTinyRobot = !appData.showTinyRobot" class="style-settings-icon"></IconAi>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import TinyRobotChat from '@/components/tiny-robot-chat.vue'
import { globalConversation } from '@/composable/utils'
import { IconAi } from '@opentiny/tiny-robot-svgs'
import CryptoJS from 'crypto-js'
import { TinyQrCode } from '@opentiny/vue'
import Demo from './demo.vue'
import { appData } from '@/tools/appData'

appData.showTinyRobot = true

const sessionUrl = ref('placeholder')

watch(
  () => globalConversation.sessionId,
  (newVal) => {
    if (newVal) {
      const encryptedId = CryptoJS.AES.encrypt(newVal, 'secret-session-id').toString()

      const secretId = encodeURIComponent(encryptedId)
      sessionUrl.value = 'http://39.108.160.245?id=' + secretId
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.header {
  width: calc(100% - 502px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
}

.qr-code {
  margin-right: 20px;
}

.app-container {
  display: flex;
  height: 100%;
  position: relative;
}

.main-content {
  padding: 10px 10px;
  height: 100%;
  width: calc(100% - 502px);
  position: relative;
}

.right-panel {
  width: 480px;
  height: 100%;
  position: relative;
  background: #fff;
  border-left: 1px solid #e4e7ed;
}

.right-panel.collapsed {
  width: 0;
  overflow: hidden;
}

.style-settings-icon {
  position: fixed;
  bottom: 100px;
  right: 100px;
  font-size: 24px;
  z-index: 30;
  cursor: pointer;
}
</style>

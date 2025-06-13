<template>
  <div class="header">
    <div class="qr-code-trigger" @click="showQrCode = true">
      <IconAi class="qr-icon" />
      <div class="qr-text-wrapper">
        <span class="qr-label">手机遥控</span>
        <span class="qr-desc">扫码体验移动端操作</span>
      </div>
    </div>
  </div>
  <div class="app-container">
    <!-- 主体内容区域 -->
    <div class="main-content">
      <Demo />
    </div>
    <div class="right-panel" :class="{ collapsed: !appData.showTinyRobot }">
      <tiny-robot-chat :prompt-items="promptItems" :suggestion-pill-items="suggestionPillItems" />
    </div>
    <IconAi @click="appData.showTinyRobot = !appData.showTinyRobot" class="style-settings-icon"></IconAi>
  </div>

  <!-- QR Code Modal -->
  <Teleport to="body">
    <div class="qr-modal" v-if="showQrCode" @click.self="showQrCode = false">
      <div class="qr-modal-content">
        <div class="qr-modal-header">
          <h3>手机遥控体验</h3>
        </div>
        <div class="qr-modal-body">
          <div class="qr-wrapper">
            <tiny-qr-code :value="sessionUrl" :size="200" color="#1677ff"></tiny-qr-code>
            <div class="qr-status">
              <div class="status-dot"></div>
              <span>链接已生成</span>
            </div>
          </div>
          <div class="qr-instructions">
            <p class="instruction-title">使用说明</p>
            <ol class="instruction-steps">
              <li>使用微信扫一扫，扫描上方二维码</li>
              <li>然后点击微信右上角的 "..." 图标</li>
              <li>选择在默认浏览器中打开</li>
              <li>可以选择直接语音交互也可使用AI对话框进行交互</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { watch, ref, h } from 'vue'
import TinyRobotChat from '@/components/tiny-robot-chat.vue'
import { globalConversation } from '@/composable/utils'
import { IconAi } from '@opentiny/tiny-robot-svgs'
import CryptoJS from 'crypto-js'
import { TinyQrCode } from '@opentiny/vue'
import Demo from './Demo.vue'
import { appData } from '@/tools/appData'

appData.showTinyRobot = true
const showQrCode = ref(false)
const sessionUrl = ref('placeholder')

const promptItems = [
  {
    label: '识别网页的内容',
    description: '帮我在商品列表中查询最贵的手机和最便宜的笔记本',
    icon: h('span', { style: { fontSize: '18px' } }, '💡')
  },
  {
    label: '智能操作网页',
    description: '帮我在商品列表中删除最贵的且分类为手机的商品',
    icon: h('span', { style: { fontSize: '18px' } }, '🕹')
  },
  {
    label: '智能操作网页',
    description: '帮我在商品列表中添加一个华为p60品牌的手机商品',
    icon: h('span', { style: { fontSize: '18px' } }, '🕹')
  }
]

const suggestionPillItems = [
  {
    id: '1',
    text: '商品列表',
    icon: h('span', { style: { fontSize: '18px' } }, '🏢')
  }
]

watch(
  () => globalConversation.sessionId,
  (newVal) => {
    if (newVal) {
      const encryptedId = CryptoJS.AES.encrypt(newVal, 'secret-session-id').toString()

      const secretId = encodeURIComponent(encryptedId)
      sessionUrl.value = `https://agent.icjs.ink?id=${secretId}`
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

.qr-code-trigger {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #1677ff 0%, #06b6d4 100%);
  position: relative;
  overflow: hidden;
}

.qr-code-trigger::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  transform: translateX(-100%);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.qr-code-trigger:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(22, 119, 255, 0.3);
}

.qr-code-trigger:hover::before {
  transform: translateX(100%);
}

.qr-icon {
  font-size: 24px;
  margin-right: 12px;
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  animation: float 3s ease-in-out infinite;
}

.qr-text-wrapper {
  display: flex;
  flex-direction: column;
}

.qr-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.qr-desc {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.qr-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.qr-modal-content {
  background: white;
  border-radius: 12px;
  padding: 32px;
  width: 460px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.qr-modal-header {
  margin-bottom: 32px;
}

.qr-modal-header h3 {
  font-size: 22px;
  font-weight: 600;
  color: #1f2937;
}

.close-icon {
  cursor: pointer;
  font-size: 20px;
  color: #999;
  transition: color 0.3s;
}

.close-icon:hover {
  color: #666;
}

.qr-modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-wrapper {
  background-color: #f8f9fa;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  position: relative;
  animation: glow 2s ease-in-out infinite;
}

.qr-wrapper::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #1677ff, #10b981, #1677ff);
  border-radius: 10px;
  z-index: -1;
  filter: blur(8px);
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.qr-wrapper:hover::before {
  opacity: 0.7;
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(22, 119, 255, 0.2), 0 0 10px rgba(22, 119, 255, 0.2), 0 0 15px rgba(22, 119, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(22, 119, 255, 0.3), 0 0 20px rgba(22, 119, 255, 0.3), 0 0 30px rgba(22, 119, 255, 0.3);
  }
  100% {
    box-shadow: 0 0 5px rgba(22, 119, 255, 0.2), 0 0 10px rgba(22, 119, 255, 0.2), 0 0 15px rgba(22, 119, 255, 0.2);
  }
}

.qr-status {
  display: flex;
  align-items: center;
  margin-top: 16px;
  background: #fff;
  padding: 6px 12px;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  margin-right: 8px;
  animation: pulse 2s infinite;
}

.qr-instructions {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
}

.instruction-title {
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 12px;
}

.instruction-steps {
  margin: 0;
  padding-left: 20px;
}

.instruction-steps li {
  color: #4b5563;
  margin-bottom: 8px;
  font-size: 14px;
}

.instruction-steps li:last-child {
  margin-bottom: 0;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

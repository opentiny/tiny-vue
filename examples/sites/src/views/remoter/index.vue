<script setup lang="ts">
// 导入 CryptoJS 库
import CryptoJS from 'crypto-js'
import { reactive } from 'vue'
import { TinyButton, TinyDrawer } from '@opentiny/vue'
import RobotChat from '../../components/tiny-robot-chat.vue'
import Sound from './sound.vue'
import { globalConversation } from '../../composable/utils'

// 加密密钥，需要和生成二维码的页面保持一致
const secretKey = 'secret-session-id'
// 获取 URL 参数
const urlParams = new URLSearchParams(window.location.search)
const encryptedId = urlParams.get('id')
const state = reactive({ isShow: true, showChat: false, showSound: false })

if (encryptedId) {
  // 解密 id
  const bytes = CryptoJS.AES.decrypt(encryptedId, secretKey)
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  // 存储解密后的 id 到 window.sessionId
  globalConversation.sessionId = originalText
}
const showMoter = (type) => {
  state.isShow = false
  state[type] = true
}
</script>

<template>
  <div>
    <RobotChat v-if="state.showChat" />
    <Sound v-if="state.showSound" />
    <tiny-drawer
      v-if="state.isShow"
      title="请选择控制器"
      placement="bottom"
      :mask-closable="false"
      :show-close="false"
      v-model:visible="state.isShow"
      height="400px"
    >
      <div class="link-box">
        <tiny-button @click="showMoter('showSound')" type="info" size="large">语音控制器</tiny-button>

        <tiny-button @click="showMoter('showChat')" type="info" size="large">综合控制器</tiny-button>
      </div>
    </tiny-drawer>
  </div>
</template>

<style scoped lang="less">
.link-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .tiny-button {
    margin-bottom: 20px;
  }
}
</style>

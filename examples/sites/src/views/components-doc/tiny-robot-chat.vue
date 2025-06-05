<template>
  <!-- mcp-robot弹窗 -->
  <tr-container v-model:show="appData.showTinyRobot" v-model:fullscreen="fullscreen">
    <div v-if="messages.length === 0">
      <tr-welcome title="智能助手" description="您好，我是Opentiny AI智能助手" :icon="welcomeIcon">
        <template #footer>
          <div class="welcome-footer">
            <!-- <span>根据相关法律法规要求，您需要先 <a>登录</a>，若没有帐号，您可前往 <a>注册</a></span> -->
          </div>
        </template>
      </tr-welcome>
      <tr-prompts
        :items="promptItems"
        :wrap="true"
        item-class="prompt-item"
        class="tiny-prompts"
        @item-click="handlePromptItemClick"
      ></tr-prompts>
    </div>
    <tr-bubble-list v-else :items="messages" :roles="roles" auto-scroll></tr-bubble-list>
    <template #footer>
      <div class="chat-input">
        <TrSuggestionPills :items="suggestionPillItems" @item-click="handleSuggestionPillItemClick" /><br />
        <tr-sender
          ref="senderRef"
          mode="single"
          v-model="inputMessage"
          :placeholder="GeneratingStatus.includes(messageState.status) ? '正在思考中...' : '请输入您的问题'"
          :clearable="true"
          :loading="GeneratingStatus.includes(messageState.status)"
          :showWordLimit="true"
          :maxLength="1000"
          :template="currentTemplate"
          @submit="handleSendMessage"
          @cancel="abortRequest"
          @keydown="handleMessageKeydown($event, onTrigger, onKeyDown)"
          @reset-template="clearTemplate"
        ></tr-sender>
      </div>
    </template>
  </tr-container>
  <div class="tr-toggle" v-if="!appData.showTinyRobot" title="AI智能助手" @click="appData.showTinyRobot = true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" xml:space="preserve" class="tiny-svg" isSvg="true">
      <path
        d="m5.84 8.78-.09-.1a1.06 1.06 0 0 1 .09-1.46L9.6 3.65l.07-.06c.21-.13.49-.12.67.06.21.2.21.51 0 .71L6.58 7.93l-.02.03c-.02.04-.01.08.02.11l3.76 3.57.06.07c.14.19.12.46-.06.64-.21.2-.54.2-.74 0L5.84 8.78z"
      ></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { TrBubbleList, TrContainer, TrPrompts, TrSender, TrWelcome, TrSuggestionPills } from '@opentiny/tiny-robot'
import { GeneratingStatus } from '@opentiny/tiny-robot-kit'
import { useTinyRobot } from './composition/useTinyRobot'
import { appData } from '../../tools/appData'

const {
  client,
  fullscreen,
  show,
  welcomeIcon,
  promptItems,
  computedMessages,
  messages,
  messageState,
  inputMessage,
  sendMessage,
  abortRequest,
  roles,
  handlePromptItemClick,
  senderRef,
  currentTemplate,
  clearTemplate,
  handleSendMessage,
  handleMessageKeydown,
  suggestionPillItems,
  handleSuggestionPillItemClick
} = useTinyRobot()
</script>

<style scoped lang="less">
.chat-input {
  margin-top: 8px;
  padding: 10px 15px;
}

.tr-container {
  top: 64px !important;

  container-type: inline-size;

  :deep(.tr-welcome__title-wrapper) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.welcome-footer {
  margin-top: 12px;
  color: rgb(128, 128, 128);
  font-size: 12px;
  line-height: 20px;
}

.tiny-prompts {
  padding: 16px 24px;

  :deep(.prompt-item) {
    width: 100%;
    box-sizing: border-box;

    @container (width >=64rem) {
      width: calc(50% - 8px);
    }

    .tr-prompt__content-label {
      font-size: 14px;
      line-height: 24px;
    }
  }
}

.tr-history-demo {
  position: absolute;
  right: 100%;
  top: 100%;
  z-index: 100;
  width: 300px;
  height: 600px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.tr-toggle {
  position: absolute;
  cursor: pointer;
  right: 30px;
  top: 50%;
  transform: translateX(50%) translateY(-50%);
  z-index: 9;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 18px;
  line-height: 18px;
  background-color: var(--tv-TreeMenu-toggle-button-background-color);
  box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--tv-TreeMenu-border-color);
  transform: translateX(100%) translateY(-50%);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  svg {
    margin-top: 2px;
    fill: #808080;
  }
}
</style>

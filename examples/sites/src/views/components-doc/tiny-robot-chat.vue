<template>
  <!-- mcp-robot弹窗 -->
  <tr-container v-model:show="appData.showTinyRobot" v-model:fullscreen="fullscreen">
    <div v-if="messages.length === 0">
      <tr-welcome title="智能助手" description="您好，我是Opentiny AI智能助手" :icon="welcomeIcon">
        <template #footer>
          <div class="welcome-footer"></div>
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
</style>

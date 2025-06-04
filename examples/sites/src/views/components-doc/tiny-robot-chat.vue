<template>
  <!-- mcp-robot弹窗 -->
  <tr-container v-model:show="show" v-model:fullscreen="fullscreen">
    <template #operations>
      <tr-icon-button :icon="IconNewSession" size="28" svgSize="20" @click="createConversation()" />
      <span style="display: inline-flex; line-height: 0; position: relative">
        <tr-icon-button :icon="IconHistory" size="28" svgSize="20" @click="showHistory = true" />
        <tr-history
          v-show="showHistory"
          class="tr-history-demo"
          tab-title="历史对话"
          :selected="currentMessageId"
          :search-bar="true"
          :data="historyData"
          @close="showHistory = false"
          @item-click="handleHistorySelect"
        ></tr-history>
      </span>
    </template>
    <div v-if="messages.length === 0">
      <tr-welcome title="盘古助手" description="您好，我是盘古助手，您专属的华为云专家" :icon="welcomeIcon">
        <template #footer>
          <div class="welcome-footer">
            <span>根据相关法律法规要求，您需要先 <a>登录</a>，若没有帐号，您可前往 <a>注册</a></span>
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
    <tr-bubble-list v-else :items="messages" :roles="roles" auto-scroll type="markdown"></tr-bubble-list>

    <template #footer>
      <div class="chat-input">
        <tr-suggestion
          v-model:open="suggestionOpen"
          :items="suggestionItems"
          :categories="categories"
          @fill-template="handleFillTemplate"
          :maxVisibleItems="5"
        >
          <template #trigger="{ onKeyDown, onTrigger }">
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
          </template>
        </tr-suggestion>
      </div>
    </template>
  </tr-container>
</template>

<script setup lang="ts">
import {
  TrBubbleList,
  TrContainer,
  TrHistory,
  TrIconButton,
  TrPrompts,
  TrSender,
  TrSuggestion,
  TrWelcome
} from '@opentiny/tiny-robot'
import { GeneratingStatus } from '@opentiny/tiny-robot-kit'
import { IconHistory, IconNewSession } from '@opentiny/tiny-robot-svgs'
import { useTinyRobot } from './composition/useTinyRobot'

const {
  client,
  fullscreen,
  show,
  aiAvatar,
  userAvatar,
  welcomeIcon,
  promptItems,
  templateSuggestions,
  templateCategories,
  messageManager,
  createConversation,
  messages,
  messageState,
  inputMessage,
  sendMessage,
  abortRequest,
  roles,
  showHistory,
  historyData,
  currentMessageId,
  handlePromptItemClick,
  handleHistorySelect,
  suggestionItems,
  categories,
  senderRef,
  currentTemplate,
  suggestionOpen,
  handleFillTemplate,
  clearTemplate,
  handleSendMessage,
  handleMessageKeydown
} = useTinyRobot()
</script>

<style scoped lang="less">
.chat-input {
  margin-top: 8px;
  padding: 10px 15px;
}

.tiny-container {
  top: 64px;

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

<template>
  <!-- mcp-robot弹窗 -->

  <tr-container v-model:show="showTinyRobot" v-model:fullscreen="fullscreen">
    <tr-bubble-provider :message-renderers="messageRenderers">
      <div v-if="showMessages.length === 0">
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
      <tr-bubble-list v-else :items="showMessages" :roles="roles" auto-scroll> </tr-bubble-list>
    </tr-bubble-provider>

    <template #footer>
      <div class="chat-input">
        <TrSuggestionPills :items="suggestionPillItems" @item-click="handleSuggestionPillItemClick" /><br />
        <tr-sender
          ref="senderRef"
          mode="single"
          v-model="inputMessage"
          :placeholder="GeneratingStatus.includes(messageState.status) ? '正在思考中...' : '请输入您的问题'"
          :clearable="!!inputMessage"
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
import {
  TrBubbleList,
  TrContainer,
  TrPrompts,
  TrSender,
  TrWelcome,
  TrSuggestionPills,
  TrBubbleProvider,
  BubbleMarkdownMessageRenderer,
  BubbleChainMessageRenderer
} from '@opentiny/tiny-robot'
import { GeneratingStatus, STATUS } from '@opentiny/tiny-robot-kit'
import { useTinyRobot } from '../composable/useTinyRobot'
import { showTinyRobot } from '../composable/utils'
import ReactiveMarkdown from './ReactiveMarkdown.vue'
import { computed, nextTick, watch } from 'vue'

const mdRenderer = new BubbleMarkdownMessageRenderer()
const messageRenderers = {
  markdown: ReactiveMarkdown,
  chain: {
    component: BubbleChainMessageRenderer,
    defaultProps: {
      contentRenderer: (content: string) => mdRenderer.md.render(content)
    }
  }
}

const {
  fullscreen,
  welcomeIcon,
  promptItems,
  messages,
  messageState,
  inputMessage,
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

const showMessages = computed(() => {
  if (messageState.status === STATUS.PROCESSING) {
    return [
      ...messages.value,
      {
        role: 'assistant',
        content: '正在思考中...',
        loading: true
      }
    ]
  }

  return messages.value
})

const scrollToBottom = () => {
  const containerBody = document.querySelector('div.ai-console-content-wrap')
  if (containerBody) {
    nextTick(() => {
      containerBody.scrollTo({
        top: containerBody.scrollHeight,
        behavior: 'smooth'
      })
    })
  }
}

// 最新消息滚动到底部
watch(() => messages.value[messages.value.length - 1]?.content, scrollToBottom)
</script>

<style scoped lang="less">
.chat-input {
  margin-top: 8px;
  padding: 10px 15px;
}

.tr-container {
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

<style>
.tr-chain-item__body .tr-chain-item__content {
  word-break: break-all;
}
</style>

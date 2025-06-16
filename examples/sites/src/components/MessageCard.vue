<template>
  <div class="message-card" :class="role">
    <div class="avatar">
      <component :is="avatarIcon" class="avatar-icon" />
    </div>
    <div class="content">
      <div class="role-name">{{ roleName }}</div>
      <div class="message">{{ message }}</div>
      <div class="time">{{ formatTime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { IconAi, IconUser } from '@opentiny/tiny-robot-svgs'

interface Props {
  role: 'user' | 'assistant'
  message: string
  timestamp: number
}

const props = defineProps<Props>()

const roleName = computed(() => (props.role === 'assistant' ? '智能助手' : '我'))

const avatarIcon = computed(() => (props.role === 'assistant' ? IconAi : IconUser))

const formatTime = computed(() => {
  const date = new Date(props.timestamp)
  return date.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
})
</script>

<style scoped lang="less">
.message-card {
  display: flex;
  margin: 16px;
  gap: 12px;
  max-width: 80%;

  &.assistant {
    margin-right: auto;

    .content {
      background-color: #f0f2f5;
    }

    .avatar-icon {
      color: #2080f0;
    }
  }

  &.user {
    margin-left: auto;
    flex-direction: row-reverse;

    .content {
      background-color: #e8f5e9;
    }

    .avatar-icon {
      color: #18a058;
    }
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f7fa;

    .avatar-icon {
      width: 24px;
      height: 24px;
    }
  }

  .content {
    padding: 12px;
    border-radius: 12px;
    position: relative;
    min-width: 120px;
    max-width: calc(100% - 60px);

    .role-name {
      font-size: 14px;
      color: #666;
      margin-bottom: 4px;
    }

    .message {
      font-size: 16px;
      line-height: 1.5;
      word-break: break-word;
      white-space: pre-wrap;
    }

    .time {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
      text-align: right;
    }
  }
}
</style>

<template>
  <div class="hp100 of-hidden">
    <tiny-config-provider :design="designConfig" :key="currentThemeKey">
      <router-view />
      <tiny-modal :show-header="false" :show-footer="false" v-model="modalSHow" width="1400px" height="900px" resize>
        <tiny-icon-close class="close-icon" @click="modalSHow = false"></tiny-icon-close>
        <iframe v-if="modalSHow" width="100%" height="100%" :src="previewUrl" frameborder="0"></iframe>
      </tiny-modal>
    </tiny-config-provider>
    <div class="right-panel" :class="{ collapsed: !showTinyRobot }">
      <tiny-robot-chat />
    </div>
    <IconAi @click="showTinyRobot = !showTinyRobot" class="style-settings-icon"></IconAi>
  </div>
</template>

<script setup>
import { onMounted, provide, ref } from 'vue'
import { TinyConfigProvider, TinyModal } from '@opentiny/vue'
import useTheme from './tools/useTheme'
import TinyRobotChat from './components/tiny-robot-chat.vue'
import { IconAi } from '@opentiny/tiny-robot-svgs'
import { showTinyRobot } from './composable/utils'
import { createServer, createInMemoryTransport } from '@opentiny/next-sdk'

const previewUrl = ref(import.meta.env.VITE_PLAYGROUND_URL)
const modalSHow = ref(false)

const server = createServer(
  {
    name: 'comprehensive-config',
    version: '1.0.0'
  },
  {
    capabilities: {
      logging: {},
      resources: { subscribe: true, listChanged: true }
    }
  }
)

server.use(createInMemoryTransport())

// 长任务示例
server.registerTool(
  'long-task',
  {
    title: 'long-task',
    description: '可以帮用户订机票'
  },
  async () => {
    // 执行一个长任务
    await new Promise((resolve) => setTimeout(resolve, 10000))
    return {
      content: [
        {
          type: 'text',
          text: '执行一个长任务，执行完成'
        }
      ]
    }
  }
)

onMounted(() => {
  server.connectTransport()
  // 加载header
  const common = new window.TDCommon(['#header'], {
    allowDarkTheme: true,
    searchConfig: {
      show: true
    },
    menuCollapse: {
      useCollapse: true, // 启用1024以下隐藏菜单
      menuId: '#layoutSider'
    }
  })
  common.renderHeader()
})
const { designConfig, currentThemeKey } = useTheme()

provide('showPreview', (url) => {
  previewUrl.value = url
  modalSHow.value = true
})
</script>

<style scoped lang="less">
.close-icon.tiny-svg {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 16px;
  cursor: pointer;
}
.tiny-modal {
  :deep(.tiny-modal__body) {
    padding: 34px 0 0;
  }
}
.right-panel {
  :deep(.tr-container) {
    z-index: 9999;
  }
}

.style-settings-icon {
  position: fixed;
  bottom: 100px;
  right: 100px;
  font-size: 24px;
  z-index: 19999;
  cursor: pointer;
}
</style>

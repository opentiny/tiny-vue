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
    <IconAi @click="handleShowTinyRobot" class="style-settings-icon"></IconAi>
    <tiny-dialog-box
      v-model:visible="boxVisibility"
      :close-on-click-modal="false"
      title="请填写您的LLM信息, 否则无法体验智能化能力"
      width="30%"
    >
      <div>
        <tiny-form ref="formRef" :model="createData" label-width="120px">
          <tiny-form-item label="LLM URL" prop="llmUrl" :rules="{ required: true, messages: '必填', trigger: 'blur' }">
            <tiny-input v-model="createData.llmUrl"></tiny-input>
          </tiny-form-item>
          <tiny-form-item
            label="API Key"
            prop="llmApiKey"
            :rules="{ required: true, messages: '必填', trigger: 'blur' }"
          >
            <tiny-input v-model="createData.llmApiKey"></tiny-input>
          </tiny-form-item>
          <tiny-form-item>
            <tiny-button @click="submit" type="primary">保存</tiny-button>
          </tiny-form-item>
        </tiny-form>
      </div>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref, reactive } from 'vue'
import {
  TinyConfigProvider,
  TinyModal,
  TinyDialogBox,
  TinyForm,
  TinyFormItem,
  TinyInput,
  TinyButton
} from '@opentiny/vue'
import useTheme from './tools/useTheme'
import TinyRobotChat from './components/tiny-robot-chat.vue'
import { IconAi } from '@opentiny/tiny-robot-svgs'
import { showTinyRobot } from './composable/utils'
import { createServer, createInMemoryTransport } from '@opentiny/next-sdk'
import { createGlobalMcpTool } from './tools/globalMcpTool'
import { $local, isEnvLLMDefined, isLocalLLMDefined } from './composable/utils'

const boxVisibility = ref(false)
const formRef = ref()
const createData = reactive({
  llmUrl: $local.llmUrl || import.meta.env.VITE_LLM_URL,
  llmApiKey: $local.llmApiKey || import.meta.env.VITE_LLM_API_KEY
})

const submit = () => {
  formRef.value.validate().then(() => {
    $local.llmUrl = createData.llmUrl
    $local.llmApiKey = createData.llmApiKey
    boxVisibility.value = false
    window.location.reload()
  })
}

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

createGlobalMcpTool(server)

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

const handleShowTinyRobot = () => {
  if (!isEnvLLMDefined && !isLocalLLMDefined) {
    boxVisibility.value = true
  } else {
    showTinyRobot.value = !showTinyRobot.value
  }
}
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

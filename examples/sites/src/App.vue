<template>
  <div class="hp100 of-hidden">
    <tiny-config-provider :design="designConfig" :key="currentThemeKey">
      <router-view />
      <tiny-modal :show-header="false" :show-footer="false" v-model="modalSHow" width="1400px" height="900px" resize>
        <tiny-icon-close class="close-icon" @click="modalSHow = false"></tiny-icon-close>
        <iframe v-if="modalSHow" width="100%" height="100%" :src="previewUrl" frameborder="0"></iframe>
      </tiny-modal>
      <tiny-remoter v-if="webMcpSessionId" :sessionId="webMcpSessionId"> </tiny-remoter>
    </tiny-config-provider>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import { TinyConfigProvider, TinyModal } from '@opentiny/vue'
import { iconClose } from '@opentiny/vue-icon'
import { TinyRemoter } from '@opentiny/next-remoter'
import '@opentiny/next-remoter/dist/style.css'
import { useTinyRemoter, webMcpSessionId } from './composable/useTinyRemoter'

import useTheme from './tools/useTheme'

useTinyRemoter()

const modalSHow = ref(false)
const previewUrl = ref(import.meta.env.VITE_PLAYGROUND_URL)
const tinyIconClose = iconClose()

onMounted(() => {
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

// 多端的预览图
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
</style>

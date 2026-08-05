<template>
  <div class="hp100 of-hidden">
    <tiny-config-provider :design="designConfig" :key="currentThemeKey">
      <router-view />
      <tiny-modal :show-header="false" :show-footer="false" v-model="modalSHow" width="1400px" height="900px" resize>
        <tiny-icon-close class="close-icon" @click="modalSHow = false"></tiny-icon-close>
        <iframe v-if="modalSHow" width="100%" height="100%" :src="previewUrl" frameborder="0"></iframe>
      </tiny-modal>
    </tiny-config-provider>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref } from 'vue'
import { TinyConfigProvider, TinyModal } from '@opentiny/vue'
import { iconClose } from '@opentiny/vue-icon'
import { isSaas } from './const'
import { i18n } from './i18n/index.js'
import { useRouter } from 'vue-router'

import useTheme from './tools/useTheme'

const modalSHow = ref(false)
const previewUrl = ref(import.meta.env.VITE_PLAYGROUND_URL)
const tinyIconClose = iconClose()

if (isSaas) {
  import('@opentiny/vue-theme-saas/index.less')
}

const router = useRouter()

const handleLangToggle = (e) => {
  const { name } = e.detail
  i18n.global.locale = name
}

onMounted(() => {
  // 加载header
  const common = new window.TDCommon(['#header'], {
    allowDarkTheme: !isSaas,
    searchConfig: {
      show: true
    },
    menuCollapse: {
      useCollapse: true, // 启用1024以下隐藏菜单
      menuId: '#layoutSider'
    }
  })
  common.renderHeader()
  
  window.addEventListener('tiny-toggle-lang', handleLangToggle)
})

onUnmounted(() => {
  window.removeEventListener('tiny-toggle-lang', handleLangToggle)
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

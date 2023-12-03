<template>
  <div class="hp100 of-hidden">
    <tiny-config-provider :design="designConfig">
      <router-view />
      <tiny-modal :show-header="false" :show-footer="false" v-model="modalSHow" width="1400px" height="900px" resize>
        <tiny-icon-close class="close-icon" @click="modalSHow = false"></tiny-icon-close>
        <iframe v-if="modalSHow" width="100%" height="100%" :src="previewUrl" frameborder="0"></iframe>
      </tiny-modal>
    </tiny-config-provider>
  </div>
</template>

<script>
import { defineComponent, onMounted, provide, ref } from 'vue'
import { ConfigProvider, Modal } from '@opentiny/vue'
import { iconClose } from '@opentiny/vue-icon'
import { appData } from './tools'
import useTheme from './tools/useTheme'
import { useBulletin } from './tools/useBulletin.jsx'

export default defineComponent({
  name: 'AppVue',
  props: [],
  components: {
    TinyConfigProvider: ConfigProvider,
    TinyModal: Modal,
    TinyIconClose: iconClose()
  },
  setup() {
    const previewUrl = ref(import.meta.env.VITE_PLAYGROUND_URL)
    const modalSHow = ref(false)
    onMounted(() => {
      // 加载header
      const common = new window.TDCommon(['#header'], {
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
    const { designConfig } = useTheme()
    useBulletin()

    provide('showPreview', (url) => {
      previewUrl.value = url
      modalSHow.value = true
    })
    return {
      appData,
      designConfig,
      previewUrl,
      modalSHow
    }
  }
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

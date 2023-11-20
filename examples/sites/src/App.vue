<template>
  <div class="hp100 of-hidden">
    <tiny-config-provider :design="designConfig">
      <router-view />
      <tiny-modal v-show="visible" :show-header="false" :show-footer="false" v-model="modalSHow" fullscreen>
        <tiny-icon-close class="close-icon" @click="visible = !visible"></tiny-icon-close>
        <iframe width="100%" height="100%" :src="previewUrl" frameborder="0"></iframe>
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

export default defineComponent({
  name: 'AppVue',
  props: [],
  components: {
    TinyConfigProvider: ConfigProvider,
    TinyModal: Modal,
    TinyIconClose: iconClose()
  },
  setup() {
    const visible = ref(false)
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
      modalSHow.value = true
    })
    const { designConfig } = useTheme()

    provide('showPreview', (url) => {
      previewUrl.value = url
      visible.value = true
    })
    return {
      appData,
      designConfig,
      visible,
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
}
.tiny-modal {
  :deep(.tiny-modal__body) {
    padding: 34px 0 0;
  }
}
</style>

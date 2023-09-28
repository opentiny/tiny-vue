<template>
  <div class="hp100 of-hidden">
    <tiny-config-provider :design="designConfig">
      <router-view />
    </tiny-config-provider>
  </div>
</template>

<script lang="jsx">
import { defineComponent, reactive, computed, onMounted, toRefs } from 'vue'
import { ConfigProvider } from '@opentiny/vue'
import { appData } from './tools'
import useTheme from './tools/useTheme'

export default defineComponent({
  name: 'AppVue',
  props: [],
  components: {
    TinyConfigProvider: ConfigProvider
  },
  setup() {
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
    return {
      appData,
      designConfig
    }
  }
})
</script>

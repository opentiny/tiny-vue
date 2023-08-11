<template>
  <div class="hp100 of-hidden">
    <router-view />
  </div>
</template>

<script lang="jsx">
import { defineComponent, reactive, computed, onMounted, toRefs } from 'vue'
import { appData } from './tools'

export default defineComponent({
  name: 'AppVue',
  props: [],
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
    return {
      appData
    }
  }
})
</script>

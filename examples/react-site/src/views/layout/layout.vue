<template>
  <n-config-provider class="main-layout hp100 f-c f-box-stretch" :theme-overrides="themeOverrides">
    <!-- tiny angular 菜单统一到一起  -->
    <n-layout class="content-layout fi-1" :has-sider="!isFrame">
      <n-layout-sider id="layoutSider" v-if="!isFrame" bordered :collapsedWidth="4" :width="250" showTrigger="arrow-circle" :native-scrollbar="true">
        <n-menu class="main-menu" :value="menuSideKey" :default-expand-all="true" :options="menuOptions" />
      </n-layout-sider>
      <n-layout
        id="doc-layout"
        ref="contentRef"
        :native-scrollbar="true"
        content-style="display: flex;  flex-direction: column; height:100%"
        :class="'md-' + appData.configType"
      >
        <router-view />
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>
<script lang="jsx">
import { defineComponent, reactive, computed, toRefs, watch, onMounted, onUnmounted } from 'vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';

import { genMenus } from '@/menus.jsx';
import { router } from '@/router.js';
import { $split, $t, appData, appFn } from '@/tools';
import { hiddenPanel, themeOverrides } from './layoutData.js';
export default defineComponent({
  name: 'Layout_vue',
  props: [],
  setup() {
    let state = reactive({
      menuOptions: genMenus(),
      hasHeader: true, // Header，当嵌入think时，无头。 所以预留变量
      menuTopKey: computed(() => router.currentRoute.value.name),
      menuTop: [
        {
          label: () => <router-link to={import.meta.env.VITE_CONTEXT + 'docs/introduction'}>{$t('doc')}</router-link>,
          key: 'docs',
        },
        {
          label: () => <router-link to={import.meta.env.VITE_CONTEXT + 'components/button'}>{$t('component')}</router-link>,
          key: 'components',
        },
      ],
      menuSideKey: computed(() => $split(router.currentRoute?.value?.path, '/', -1)),
      isFrame: computed(() => router.currentRoute.value.meta?.iframe),
      contentRef: null,
      themeOverrides: themeOverrides,
    });

    watch(
      () => appData.configType,
      () => {
        state.menuOptions = genMenus();
      }
    );
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('html', html);
    let routerCbDestory = null;
    onMounted(() => {
      hiddenPanel();
      // 每次切换路由，要导航到顶部
      routerCbDestory = router.afterEach(() => {
        state.contentRef.scrollTo({ top: 0, behavior: 'auto' });
      });
    });

    onUnmounted(() => {
      routerCbDestory();
    });
    return {
      ...toRefs(state),
      hljs,
      appData, // 使用到里面的lang / configMode
      ...appFn,
    };
  },
});
</script>
<style lang="less">
.main-layout > .n-layout-scroll-container {
  display: flex;
  flex-direction: column;
}

.content-layout > .n-layout-scroll-container,
#doc-layout > .n-layout-scroll-container {
  display: flex;
  flex-direction: row;
}

// hover时，右侧menu显示滚动条
.n-layout-sider-scroll-container {
  overflow: hidden !important;
  .n-menu-item-content {
    width: 240px;
  }
  &:hover {
    overflow: auto !important;
  }
}

@media (max-width: 1023px) {
  .n-layout-sider {
    display: none;
    position: fixed;
    height: 100%;
    .n-layout-sider-scroll-container {
      overflow-y: auto !important;
    }

    .n-layout-toggle-button {
      display: none;
    }
  }
}
</style>

<template>
  <n-config-provider class="hp100" :theme="nTheme" :locale="nuiLocal" :date-locale="nuiDateLocal" :hljs="hljs">
    <router-view />
  </n-config-provider>
</template>
<script lang="jsx">
import { defineComponent, reactive, computed, onMounted, toRefs } from 'vue';
import { darkTheme, lightTheme } from 'naive-ui';
import { zhCN, dateZhCN } from 'naive-ui';
import hljs from 'highlight.js/lib/core';
// 示例中代码高亮
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';

import { $t2 } from './i18n';
import { appData } from './tools';

export default defineComponent({
  name: 'AppVue',
  props: [],
  setup() {
    let state = reactive({
      nTheme: computed(() => (appData.theme === 'dark' ? darkTheme : lightTheme)),
      nuiLocal: computed(() => $t2(zhCN, null)),
      nuiDateLocal: computed(() => $t2(dateZhCN, null)),
    });
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('html', html);

    onMounted(() => {
      // 加载header
      const common = new window.TDCommon(['#header'], {
        searchConfig: {
          show: true
        },
        menuCollapse: {
        useCollapse: true, // 启用1024以下隐藏菜单
        menuId: '#layoutSider',
      },
      });
      common.renderHeader();
    });
    return {
      ...toRefs(state),
      hljs,
      appData,
    };
  },
});
</script>

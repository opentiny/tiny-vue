import { reactive, computed, watchEffect } from 'vue';

import { useAutoStore } from './storage';
import { useMediaQuery } from './useMediaQuery';

const appData = reactive({
  lang: useAutoStore('local', '_lang', 'zhCN'),
  theme: useAutoStore('local', '_theme', 'light'),
  configMode: false,
  configType: computed(() => 'tiny'),
  bpState: useMediaQuery([640, 1024, 1280]).matches, // 3点4区间， bp0,bp1,bp2,bp3
});
let appFn = {
  toggleLang() {
    appData.lang = appData.lang === 'zhCN' ? 'enUS' : 'zhCN';
    location.reload();
  },
  toggleTheme() {
    appData.theme = appData.theme === 'light' ? 'dark' : 'light';
  },
};
// 减少页面处理
watchEffect(() => {
  document.body.classList.remove('theme-light', 'theme-dark');
  document.body.classList.add('theme-' + appData.theme);
});
// 为了和tiny-vue共享同一个响应变量
window.appData = appData;
export { appData, appFn };

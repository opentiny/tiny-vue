import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import '@unocss/reset/eric-meyer.css';
// markdown文件内代码高亮
import 'prismjs/themes/prism.css';
import 'uno.css';
// markdown样式引用的是github-markdown.css
import 'github-markdown-css/github-markdown.css';
import './assets/index.less';
// 覆盖默认的github markdown样式
import './assets/custom-markdown.css';
import './assets/custom-block.less';
import { i18n } from './i18n/index';
import { router } from './router';
import App from './App.vue';
import { $t, $t2 } from './i18n';
import { $pub } from './tools';
import demoConfig from '@demos/config.js';

let app = createApp(App);
app.config.performance = true;
app
  .use(router)
  .use(i18n)
  .use(createHead()) // 支持md修改title
  .mixin({ methods: { $t, $t2, $pub } });

if (typeof demoConfig.initApp === 'function') {
  demoConfig.initApp(app);
}

app.mount('#app');

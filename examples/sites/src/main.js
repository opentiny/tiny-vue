import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import '@unocss/reset/eric-meyer.css'

// markdown文件内代码高亮
import 'prismjs/themes/prism.css'
import 'uno.css'

// 只使用markdown的亮色主题
import 'github-markdown-css/github-markdown.css'
import './assets/index.less'
import './style.css'

// 覆盖默认的github markdown样式
import './assets/custom-markdown.css'
import './assets/custom-block.less'
import './assets/md-preview.less'

import { i18n } from './i18n/index'
import { router } from './router'
import App from './App.vue'
import { appData } from './tools'
import { ZH_CN_LANG, EN_US_LANG, LANG_PATH_MAP, ES_LA_LANG, PT_BR_LANG } from './const'
import demoConfig from '@demos/config.js'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import html from 'highlight.js/lib/languages/xml'
import tsPath from 'highlight.js/lib/languages/typescript'
import docsearch from '@docsearch/js'
import '@docsearch/css'
import { doSearchEverySite } from './tools/docsearch'
import { getLocaleMode } from './tools/utils.js'
import '@opentiny/vue-theme/dark-theme-index.css'
import { createMcpTools, getTinyVueMcpConfig } from '@opentiny/tiny-vue-mcp'
import { t } from '@opentiny/vue-locale'
import { registerMcpConfig } from '@opentiny/vue-common'

const envTarget = import.meta.env.VITE_BUILD_TARGET || 'open'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('html', html)
hljs.registerLanguage('ts', tsPath)

if (!location.href.includes('tiny-vue-plus')) {
  docsearch({
    appId: 'AGPA5UXHMH',
    apiKey: '5fa09fc20270efa61d68e2c2eb0f56df',
    indexName: 'opentiny',
    container: '.search-box',
    debug: false
  })
}

if (envTarget !== 'open') {
  // 支持本地开发和内网使用全局搜索
  doSearchEverySite()
}

// 实验后发现，先调用一次预热一下，后续再调用会有速度的提示，因此在main中预热一下。
setTimeout(() => {
  hljs.highlightAuto(`<template>
    <tiny-button type="primary" plain> 主要按钮 </tiny-button>
  </template>
  <style scoped><style>`)
}, 0)

const zhPath = LANG_PATH_MAP[ZH_CN_LANG]
const enPath = LANG_PATH_MAP[EN_US_LANG]
const esPath = LANG_PATH_MAP[ES_LA_LANG]
const ptPath = LANG_PATH_MAP[PT_BR_LANG]
const isZhCn = location.href.includes(`/${zhPath}`)
const isEnUs = location.href.includes(`/${enPath}`)
const isEsLa = location.href.includes(`/${esPath}`)
const isPtBr = location.href.includes(`/${ptPath}`)
const notMatchLang =
  (isZhCn && appData.lang !== ZH_CN_LANG) ||
  (isEnUs && appData.lang !== EN_US_LANG) ||
  (isEsLa && appData.lang !== ES_LA_LANG) ||
  (isPtBr && appData.lang !== PT_BR_LANG)
if (notMatchLang) {
  appData.lang = getLocaleMode()
  i18n.global.locale = appData.lang
}

let app = createApp(App)
app.config.performance = true
// 注入全局的saas主题变量
app.config.globalProperties.tiny_theme = { value: import.meta.env.VITE_TINY_THEME }

if (import.meta.env.VITE_TINY_THEME === 'saas') {
  import('./tailwind.css')
}
// 注册TinyVue组件mcp配置
registerMcpConfig(getTinyVueMcpConfig({ t }), createMcpTools)

app.use(router).use(i18n).use(createHead()) // 支持md修改title

if (typeof demoConfig.initApp === 'function') {
  demoConfig.initApp(app)
}

app.mount('#app')

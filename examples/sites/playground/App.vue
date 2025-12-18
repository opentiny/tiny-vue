<script setup lang="jsx">
import { onMounted, reactive, nextTick, ref } from 'vue'
import { Repl, useStore, File } from '@opentiny/vue-repl'
import '@opentiny/vue-repl/dist/style.css'

import Editor from '@vue/repl/codemirror-editor'
import { TinyButton, TinySelect, TinyOption, Notify, TinyTooltip } from '@opentiny/vue'
import { staticDemoPath, getWebdocPath } from '@/views/components-doc/cmp-config'
import { fetchDemosFile } from '@/tools/utils'
import logoUrl from './assets/opentiny-logo.svg?url'
import GitHub from './icons/Github.vue'
import Share from './icons/Share.vue'
import Set from './icons/Set.vue'
import Layout from './icons/Layout.vue'
import Reverse from './icons/Reverse.vue'
import Vertical from './icons/Vertical.vue'

const VERSION = 'tiny-vue-version-3.27'
const NOTIFY_KEY = 'tiny-vue-playground-notify'
const LAYOUT = 'playground-layout'
const LAYOUT_REVERSE = 'playground-layout-reverse'

const searchObj = new URLSearchParams(location.search)
const tinyMode = searchObj.get('mode')
const tinyTheme = searchObj.get('theme')
const isMobileFirst = tinyMode === 'mobile-first'
const isSaas = tinyTheme === 'saas'
const isPreview = searchObj.get('openMode') === 'preview'
const versions = ['3.27', '3.26', '3.25']
const manualShow = ref(false)

const getVersion = () => {
  if (isPreview) {
    return versions[0]
  }
  if (versions.includes(localStorage.getItem(VERSION))) {
    return localStorage.getItem(VERSION)
  }
  return versions[0]
}
const latestVersion = getVersion()
const cdnHost = localStorage.getItem('setting-cdn')

const versionDelimiter = cdnHost.includes('npmmirror') ? '/' : '@'
const fileDelimiter = cdnHost.includes('npmmirror') ? 'files/' : ''

let notify
const showNotify = () => {
  if (localStorage.getItem(NOTIFY_KEY) !== 'true' && !notify) {
    const muteNotify = () => {
      notify.close()
      localStorage.setItem(NOTIFY_KEY, true)
    }
    notify = Notify({
      type: 'info',
      title: '温馨提示：',
      message: () => (
        <div>
          <div>演练场仅保留最新的三个版本可选。</div>
          <div style="text-align: right; margin-top: 12px;">
            <TinyButton onClick={muteNotify} type={'primary'}>
              不再提示
            </TinyButton>
          </div>
        </div>
      ),
      duration: -1,
      position: 'top-right',
      verticalOffset: 200
    })
  }
}

const getRuntime = (version) => `${cdnHost}/@opentiny/vue-runtime${versionDelimiter}${version}/${fileDelimiter}dist3/`

const createImportMap = (version) => {
  const imports = {
    'vue': `${cdnHost}/vue${versionDelimiter}3.4.27/${fileDelimiter}dist/vue.runtime.esm-browser.js`,
    'echarts': `${cdnHost}/echarts${versionDelimiter}5.4.1/${fileDelimiter}dist/echarts.esm.js`,
    '@vue/compiler-sfc': `${cdnHost}/@vue/compiler-sfc${versionDelimiter}3.4.27/${fileDelimiter}dist/compiler-sfc.esm-browser.js`,
    '@opentiny/vue': `${getRuntime(version)}tiny-vue-pc.mjs`,
    '@opentiny/vue-icon': `${getRuntime(version)}tiny-vue-icon.mjs`,
    '@opentiny/vue-locale': `${getRuntime(version)}tiny-vue-locale.mjs`,
    '@opentiny/vue-common': `${getRuntime(version)}tiny-vue-common.mjs`,
    '@opentiny/vue-directive': `${getRuntime(version)}tiny-vue-directive.mjs`,
    '@opentiny/vue-huicharts': `${getRuntime(version)}tiny-vue-huicharts.mjs`,
    '@opentiny/vue-theme/': `${cdnHost}/@opentiny/vue-theme${versionDelimiter}${version}/${fileDelimiter}`,
    '@opentiny/vue-theme-mobile/': `${cdnHost}/@opentiny/vue-theme-mobile${versionDelimiter}${version}/${fileDelimiter}`,
    '@opentiny/vue-renderless/': `${cdnHost}/@opentiny/vue-renderless${versionDelimiter}${version}/${fileDelimiter}`,
    'sortablejs': `${cdnHost}/sortablejs${versionDelimiter}1.15.0/${fileDelimiter}modular/sortable.esm.js`
  }
  if (['aurora', 'saas', 'smb'].includes(tinyTheme)) {
    imports[`@opentiny/vue-design-${tinyTheme}`] =
      `${cdnHost}/@opentiny/vue-design-${tinyTheme}${versionDelimiter}${version}/${fileDelimiter}index.js`
  }
  if (isSaas) {
    imports['@opentiny/vue-icon'] = `${getRuntime(version)}tiny-vue-icon-saas.mjs`
    imports['@opentiny/vue-common'] = `${getRuntime(version)}tiny-vue-saas-common.mjs`
    imports['@opentiny/vue'] = `${getRuntime(version)}tiny-vue-all.mjs`
  }
  return { imports }
}

const getTinyTheme = (version) => {
  if (isMobileFirst) {
    return `${getRuntime(version)}tailwind.css`
  }
  let theme = tinyTheme
  if (!['aurora', 'saas'].includes(theme)) theme = 'default'

  const tinyThemeMap = {
    default: `${cdnHost}/@opentiny/vue-theme${versionDelimiter}${version}/${fileDelimiter}index.css`,
    aurora: `${cdnHost}/@opentiny/vue-theme${versionDelimiter}${version}/${fileDelimiter}index.css`,
    saas: `${cdnHost}/@opentiny/vue-theme-saas${versionDelimiter}${version}/${fileDelimiter}index.css`
  }
  return tinyThemeMap[theme]
}

// 如果hash有效，它格式为： 3.8.4|eNqIVV9p............."
const hash = location.hash.slice(1)
const shareData = hash.split('|')

// eslint-disable-next-line new-cap
const store = new useStore({
  serializedState: shareData.length === 2 ? shareData[1] : '',
  showOutput: true,
  outputMode: 'preview',
  versions: {
    vue: '3.2.47',
    opentiny: '3.9.1',
    typescript: '5.1.3'
  }
})

// repl 属性
const state = reactive({
  layout: localStorage.getItem(LAYOUT) || 'horizon',
  layoutReverse: localStorage.getItem(LAYOUT_REVERSE) === 'true',
  layoutOptions: [
    { value: 'horizon', text: '水平' },
    { value: 'vertical', text: '垂直' }
  ],
  // 版本切换
  versions: versions.map((item) => ({ value: item })),
  selectVersion: shareData.length === 2 ? shareData[0] : latestVersion,
  previewOptions: {}
})

const designThemeMap = {
  aurora: 'tinyAuroraTheme',
  old: 'tinyOldTheme'
}

// 定义选项数据
const layoutItems = [
  {
    id: 1,
    text: '水平布局',
    iconPath: 'Layout'
  },
  {
    id: 2,
    text: '垂直布局',
    iconPath: 'Vertical'
  },
  {
    id: 3,
    text: '布局反转',
    iconPath: 'Reverse'
  }
]

// 选中状态管理
const selectedIndex = ref(0)

// 选择 item 函数
const selectItem = (index) => {
  selectedIndex.value = index
  if (index === 0) {
    changeLayout('horizon')
  } else if (index === 1) {
    changeLayout('vertical')
  } else {
    changeReserve()
  }
}

function setTinyDesign() {
  let importCode = ''
  let useCode = ''

  if (isMobileFirst) useCode += 'app.provide("TinyMode", "mobile-first");\n'

  if (['aurora', 'saas', 'smb'].includes(tinyTheme)) {
    importCode += `import designConfig from '@opentiny/vue-design-${tinyTheme}';
      import { design } from '@opentiny/vue-common';\n`
    useCode += 'app.provide(design.configKey, designConfig);\n'
  }

  if (['aurora', 'old'].includes(tinyTheme)) {
    const designTheme = designThemeMap[tinyTheme]
    importCode += `import TinyThemeTool from '@opentiny/vue-theme/theme-tool';
      import ${designTheme} from '@opentiny/vue-theme/${tinyTheme}-theme-index.js';\n`
    useCode += `const theme = new TinyThemeTool(${designTheme});\n`
  }

  state.previewOptions.customCode = { importCode, useCode }
}

function selectVersion(version) {
  versionChange(version)
  localStorage.setItem(VERSION, version)
}

function versionChange(version) {
  const importMap = createImportMap(version)
  store.state.files['import-map.json'] = new File('', JSON.stringify(importMap))
  insertStyleDom(version)
}

function insertStyleDom(version) {
  nextTick(() => {
    const iframe = document.querySelector('iframe')
    if (!iframe) return

    const iframeWin = iframe.contentWindow
    const link = iframeWin.document.createElement('link')
    link.id = 'tiny-theme'
    link.rel = 'stylesheet'
    link.href = getTinyTheme(version)

    iframeWin.addEventListener('DOMContentLoaded', () => {
      iframeWin.document.head.append(link)

      // 增加mobile支持，增加mobile的样式表
      const mobileLink = link.cloneNode(true)
      mobileLink.href = `${cdnHost}/@opentiny/vue-theme-mobile${versionDelimiter}${version}/${fileDelimiter}index.css`
      iframeWin.document.head.append(mobileLink)
    })
  })
}

function changeLayout(layout) {
  localStorage.setItem(LAYOUT, layout)
  state.layout = layout
}

function changeReserve() {
  state.layoutReverse = !state.layoutReverse
  localStorage.setItem(LAYOUT_REVERSE, state.layoutReverse)
  insertStyleDom(state.selectVersion)
}

function getDemoName(name, apiMode) {
  return name.replace(/\.vue$/, `${apiMode === 'Options' ? '' : '-composition-api'}.vue`)
}

const getDemoCode = async ({ cmpId, fileName, apiMode, mode }) => {
  const demoName = getDemoName(`${getWebdocPath(cmpId)}/${fileName}`, apiMode)
  const path = tinyMode === 'mobile-first' ? `@demos/mobile-first/app/${demoName}` : `${staticDemoPath}/${demoName}`
  const code = await fetchDemosFile(path)
    .then((code) => code)
    .catch(() => `${demoName}示例资源不存在，请检查文件名是否正确？`)
  return code
}

const loadFileCode = async ({ cmpId, fileName, apiMode, mode }) => {
  const code = await getDemoCode({ cmpId, fileName, apiMode, mode })
  store.state.mainFile = fileName
  store.state.activeFile = fileName
  store.addFile(new File(fileName, code, false))
  versionChange(latestVersion)
}

// 分享功能
const share = () => {
  const hash = store.serialize()
  const shareUrl = `${location.origin}${import.meta.env.VITE_PLAYGROUND_URL}?mode=${tinyMode}&theme=${tinyTheme}#${state.selectVersion}|${hash}`

  navigator.clipboard.writeText(shareUrl)
  Notify({
    type: 'success',
    title: '分享',
    message: '当前URL已被复制到剪贴板.',
    duration: 2000
  })
}

onMounted(() => {
  setTinyDesign()
  // 初始加载，有分享则加载分享，否则加载默认版本的默认文件
  if (shareData.length === 2) {
    const demoFile = Object.values(store.state.files).find(
      (file) =>
        file.filename.startsWith('src/') &&
        file.filename.endsWith('.vue') &&
        !['src/App.vue', 'src/PlaygroundMain.vue'].includes(file.filename)
    )
    if (demoFile) {
      store.state.mainFile = demoFile.filename
      store.state.activeFile = demoFile
      versionChange(shareData[0])
    }
  } else {
    const fileName = searchObj.get('fileName')
    const cmpId = searchObj.get('cmpId')
    const apiMode = searchObj.get('apiMode')
    const mode = searchObj.get('mode')
    if (fileName && cmpId && apiMode) {
      loadFileCode({ cmpId, fileName, apiMode, mode })
    }
  }
})
</script>

<template>
  <div class="header">
    <div class="title">
      <img class="logo" :src="logoUrl" />
      <span class="mobile-hide">OpenTiny Vue 演练场</span>
    </div>
    <div>
      <div class="select-opt">
        <tiny-select
          v-model="state.selectVersion"
          style="width: 200px"
          :disabled="isPreview"
          @change="selectVersion"
          @click="showNotify"
          size="medium"
        >
          <tiny-option
            v-for="item in state.versions"
            :key="item.value"
            :label="`版本：${item.value}`"
            :value="item.value"
          />
        </tiny-select>
      </div>
      <tiny-tooltip v-model="manualShow" placement="top" effect="light" manual>
        <template #content>
          <div class="tip-ctn">
            <p class="tip-ctn-title">设置布局</p>
            <div class="tip-container">
              <div
                v-for="(item, index) in layoutItems"
                :key="item.id"
                class="tip-element"
                :class="{ active: selectedIndex === index }"
                @click="selectItem(index)"
              >
                <span class="tip-element-text">{{ item.text }}</span>
                <span>
                  <Layout class="tip-element-icon" v-if="item.iconPath === 'Layout'" />
                </span>
                <span>
                  <Vertical class="tip-element-icon" v-if="item.iconPath === 'Vertical'" />
                </span>
                <span>
                  <Reverse class="tip-element-icon" v-if="item.iconPath === 'Reverse'" />
                </span>
              </div>
            </div>
          </div>
        </template>
        <div class="icon-wrapper">
          <Set title="设置" class="icon-ref" :class="{ active: manualShow }" @click="manualShow = !manualShow" />
        </div>
      </tiny-tooltip>
      <div class="icon-wrapper">
        <Share @click="share" title="分享" class="icon-ref" />
      </div>
      <a style="display: flex" href="https://github.com/opentiny/tiny-vue" target="_blank">
        <GitHub class="github" />
      </a>
    </div>
  </div>
  <Repl
    ref="replRef"
    :editor="Editor"
    :store="store"
    :preview-options="state.previewOptions"
    :clear-console="false"
    :layout="state.layout"
    :layout-reverse="state.layoutReverse"
  />
</template>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}

/** 小屏幕时隐藏 */
@media screen and (max-width: 640px) {
  .mobile-hide {
    display: none;
  }
}
#header {
  display: none;
}
#app {
  padding-top: 0;
}
.header {
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 6px;
  border-bottom: solid 1px #e1e1e1;
}

.header > div {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 10px;
}

.title {
  font-size: 20px;
}

.ml20 {
  margin-left: 20px;
}

.vue-repl {
  /* 16px 是body默认margin */
  height: calc(100vh - 36px - 16px) !important;
  transition: width 0.3s ease; /* 添加宽度过渡 */
}

.github {
  width: 32px;
  height: 32px;
  margin: 0 15px;
  cursor: pointer;
}

.share {
  width: 20px;
  height: 20px;
  margin: 0 15px;
  cursor: pointer;
}

.tip-ctn {
  background: #fff;
  padding: 8px 10px;

  &-title {
    margin: 0 0 10px 0;
  }
}

.split-line {
  width: 1px;
  height: 12px;
  background-color: #dbdbdb;
  margin: 0 15px;
}

.select-opt {
  margin-right: 15px;
  .tiny-select .tiny-input .tiny-input__inner {
    height: 32px;
  }
}

.icon-wrapper {
  padding: 9px;
  margin: 0 6px;

  &:hover {
    background-color: #f5f5f5;
    border-radius: 50%;
  }

  &:active {
    background-color: #f5f5f5;
    border-radius: 50%;
  }
}

.icon-ref {
  width: 14px;
  height: 14px;
  cursor: pointer;
  display: block;
}

/* 添加高亮样式 */
.header img {
  border: 2px solid transparent;
  border-radius: 4px;
  transition: all 0.3s ease;
  margin: 0 2px;
}

.header img.active {
  border-color: #1476ff;
  background-color: rgba(64, 158, 255, 0.1);
  box-shadow: 0 0 8px rgba(64, 158, 255, 0.5);
}

.screen-title {
  display: inline-block;
  vertical-align: top;
  margin-right: 4px;
}

.tip-container {
  display: flex;
  flex-direction: row;
  padding: 4px 2px;
  gap: 20px;
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.tip-element {
  width: 112px;
  height: 40px;
  background-color: #fafafa;
  border: 1px solid transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  user-select: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.tip-element:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

.tip-element.active {
  border: 1px solid #191919;
  background-color: #f5f5f5;
}

.tip-element-text {
  color: #191919;
  font-size: 12px;
  font-weight: 400;
  margin-right: 8px;
  letter-spacing: 0.2px;
}

.tip-element-icon {
  width: 24px;
  height: 24px;
  margin-top: 6px;
  transition: all 0.3s ease;
}

.tip-element.active .tip-element-icon {
  transform: scale(1.1);
}

.tip-element:active {
  transform: scale(0.98);
}

.tip-element.active:active {
  transform: scale(0.98);
}
</style>

<script setup lang="jsx">
import maxScreen from './assets/big.png'
import minScreen from './assets/small.png'
import { onMounted, reactive, nextTick, ref, watch } from 'vue'
import { Repl, useStore, File } from '@opentiny/vue-repl'
import '@opentiny/vue-repl/dist/style.css'

import Editor from '@vue/repl/codemirror-editor'
import { TinyButtonGroup, TinyButton, TinySelect, TinyOption, TinySwitch, Notify } from '@opentiny/vue'
import { staticDemoPath, getWebdocPath } from '@/views/components-doc/cmp-config'
import { fetchDemosFile } from '@/tools/utils'
import logoUrl from './assets/opentiny-logo.svg?url'
import GitHub from './icons/Github.vue'
import Share from './icons/Share.vue'

const VERSION = 'tiny-vue-version-3.27'
const NOTIFY_KEY = 'tiny-vue-playground-notify'
const LAYOUT = 'playground-layout'
const LAYOUT_REVERSE = 'playground-layout-reverse'
const SIZE_KEY = 'repl-panel-size' // 存储小屏状态

const searchObj = new URLSearchParams(location.search)
const tinyMode = searchObj.get('mode')
const tinyTheme = searchObj.get('theme')
const isMobileFirst = tinyMode === 'mobile-first'
const isSaas = tinyTheme === 'saas'
const isPreview = searchObj.get('openMode') === 'preview'
const replRef = ref()
const isSmallScreen = ref(false) // 添加响应式变量记录当前状态

const versions = ['3.27', '3.26', '3.25']
const getVersion = () => {
  if (isPreview) {
    return versions[0]
  }
  if (versions.includes(localStorage.getItem(VERSION))) {
    localStorage.getItem(VERSION)
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

function changeReserve(isReserve) {
  insertStyleDom(state.selectVersion)
  localStorage.setItem(LAYOUT_REVERSE, isReserve)
  // 切换反转时，根据当前大小屏状态重新设置尺寸
  setPanelSize(isSmallScreen.value)
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

// 设置面板尺寸（区分布局和大小屏模式）
const setPanelSize = (isSmall) => {
  // 添加判断：仅在mobile-first模式下执行
  if (!isMobileFirst) return

  nextTick(() => {
    const replEl = replRef.value?.$el
    if (!replEl) return

    const isVertical = state.layout === 'vertical'

    if (isVertical) {
      // 垂直布局：控制内部left和right宽度都为30%
      const splitPane = replEl.querySelector('.split-pane') || replEl
      if (!splitPane || splitPane.children.length < 2) return

      const panels = Array.from(splitPane.children).filter(
        (child) => child.nodeType === 1 && !child.classList.contains('dragger')
      )

      if (panels.length >= 2) {
        const panelA = panels[0] // 编辑器
        const panelB = panels[1] // 预览

        if (isSmall) {
          // 小屏：left和right都占30%
          panelA.style.width = '30%'
          panelB.style.width = '30%'
          panelA.style.flexBasis = '30%'
          panelB.style.flexBasis = '30%'
        } else {
          // 大屏：恢复默认平分
          panelA.style.width = '100%'
          panelB.style.width = '100%'
          panelA.style.flexBasis = '100%'
          panelB.style.flexBasis = '100%'
        }
        panelA.style.flexGrow = '0'
        panelB.style.flexGrow = '0'
      }
    } else {
      // 水平布局：控制内部面板比例
      const splitPane = replEl.querySelector('.split-pane') || replEl
      if (!splitPane || splitPane.children.length < 2) return

      const panels = Array.from(splitPane.children).filter(
        (child) => child.nodeType === 1 && !child.classList.contains('dragger')
      )

      if (panels.length >= 2) {
        const panelA = panels[0]
        const panelB = panels[1]

        if (isSmall) {
          // 小屏模式
          if (state.layoutReverse) {
            // 反转布局：左侧预览30%，右侧编辑器70%
            panelA.style.width = '30%'
            panelB.style.width = '70%'
            panelA.style.flexBasis = '30%'
            panelB.style.flexBasis = '70%'
          } else {
            // 默认布局：左侧编辑器70%，右侧预览30%
            panelA.style.width = '70%'
            panelB.style.width = '30%'
            panelA.style.flexBasis = '70%'
            panelB.style.flexBasis = '30%'
          }
        } else {
          // 大屏：恢复默认平分
          panelA.style.width = '50%'
          panelB.style.width = '50%'
          panelA.style.flexBasis = '50%'
          panelB.style.flexBasis = '50%'
        }
        panelA.style.flexGrow = '0'
        panelB.style.flexGrow = '0'
      }
    }

    localStorage.setItem(SIZE_KEY, isSmall ? 'small' : 'large')
  })
}

// 恢复保存的尺寸
const restorePanelSize = () => {
  // 添加判断：仅在mobile-first模式下执行
  if (!isMobileFirst) return

  nextTick(() => {
    const saved = localStorage.getItem(SIZE_KEY)
    if (saved === 'small') {
      isSmallScreen.value = true // 恢复状态
      setPanelSize(true)
    } else {
      isSmallScreen.value = false // 默认大屏
    }
  })
}

// 大小屏按钮点击事件
const maxClick = () => {
  isSmallScreen.value = false
  setPanelSize(false)
}

const minClick = () => {
  isSmallScreen.value = true
  setPanelSize(true)
}

// 监听布局变化和反转变化，自动恢复尺寸
watch([() => state.layout, () => state.layoutReverse], () => {
  restorePanelSize()
})

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

  // 初始化时恢复尺寸
  restorePanelSize()
})
</script>

<template>
  <div class="header">
    <div class="title">
      <img class="logo" :src="logoUrl" />
      <span class="mobile-hide">OpenTiny Vue 演练场</span>
    </div>
    <div>
      <!-- 添加判断：仅在mobile-first模式下显示 -->
      <span v-if="isMobileFirst" class="ml20 mobile-hide">
        <span class="screen-title">大小屏:</span>
        <img
          :src="maxScreen"
          :class="{ active: !isSmallScreen }"
          class="screen-btn"
          @click="maxClick"
          title="大屏（恢复默认）"
        />
        <img
          :src="minScreen"
          :class="{ active: isSmallScreen }"
          class="screen-btn"
          @click="minClick"
          title="小屏（水平：预览30% | 垂直：left/right各30%）"
        />
      </span>
      <span class="ml20 mobile-hide">
        布局方向:
        <tiny-button-group :data="state.layoutOptions" v-model="state.layout" @change="changeLayout" />
      </span>
      <span class="ml20 mobile-hide">
        布局反转:
        <tiny-switch v-model="state.layoutReverse" mini @change="changeReserve" />
      </span>
      <span class="ml20">
        <span class="mobile-hide">OpenTiny Vue 版本: </span>
        <tiny-select
          v-model="state.selectVersion"
          style="width: 150px"
          :disabled="isPreview"
          @change="selectVersion"
          @click="showNotify"
        >
          <tiny-option v-for="item in state.versions" :key="item.value" :label="item.value" :value="item.value" />
        </tiny-select>
      </span>
      <Share @click="share" title="分享" class="share" />
      <a style="display: flex" href="https://github.com/opentiny/tiny-vue   " target="_blank">
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

<style>
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

.github,
.share {
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
}

.share {
  margin-left: 10px;
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

.vue-repl .left,
.vue-repl .right,
.vue-repl .top,
.vue-repl .bottom {
  transition: all 0.3s ease;
}

.screen-btn {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.screen-title {
  display: inline-block;
  vertical-align: top;
  margin-right: 4px;
}
</style>

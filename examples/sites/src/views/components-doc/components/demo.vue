<template>
  <div ref="demoContainer" :id="demo.demoId" class="demo-container">
    <div
      v-if="isIntersecting"
      class="ti-br-sm ti-wp100"
      :class="currDemoId === demo.demoId ? 'b-a-success is-current' : ''"
    >
      <div class="demo-content">
        <!-- DEMO 的标题 + 说明desc + 示例wcTag -->
        <div class="ti-f-r ti-f-pos-between ti-f-box-end">
          <h2 class="demo-title">{{ demo.name[state.langKey] }}</h2>
          <div class="demo-options">
            <i
              v-auto-tip="{ content: state.copyTip, effect: 'light', always: true }"
              :class="state.copyIcon"
              class="ti-w16 ti-h16 ti-cur-hand"
              @click="copyCode(demo)"
              @mouseout="resetTip()"
            />
            <i
              v-auto-tip="{
                content: demo.isOpen ? i18nByKey('hideCode') : i18nByKey('showCode'),
                effect: 'light',
                always: true
              }"
              :class="!!demo.isOpen ? 'i-ti-codeslash' : 'i-ti-code'"
              class="ti-ml8 ti-w16 ti-h16 ti-cur-hand"
              @click="toggleDemoCode(demo)"
            />

            <i
              v-auto-tip="{ content: i18nByKey('playground'), effect: 'light', always: true }"
              class="i-ti-playground ml8 ti-w16 ti-h16 ti-cur-hand"
              @click="openPlayground(demo)"
            />
          </div>
        </div>
        <component :is="getDescMd(demo)" class="demo-desc" />

        <div v-if="isMobileFirst" class="pc-demo-container">
          <tiny-button @click="openPlayground(demo, false)">多端预览</tiny-button>
        </div>
        <div v-else-if="demoConfig.isMobile" class="pc-demo-container">
          <div class="mobile-view-btn">
            <tiny-button @click="openIframe(demo)">{{ i18nByKey('yan-shi') }}</tiny-button>
          </div>
        </div>
        <div v-else class="pc-demo-container">
          <div class="pc-demo">
            <component :is="cmp" />
          </div>
        </div>
      </div>
      <!-- demo 打开后的示例代码  细滚动时，width:fit-content; -->
      <div v-if="demo.isOpen" class="ti-px24 ti-py20 ti-b-t-lightless demo-code">
        <template v-if="files?.length">
          <tiny-tabs v-model="state.tabValue" class="code-tabs">
            <tiny-tab-item v-for="(file, idx) in files" :key="file.fileName" :name="'tab' + idx" :title="file.fileName">
              <async-highlight :code="file.code"></async-highlight>
            </tiny-tab-item>
          </tiny-tabs>
        </template>
        <div v-else-if="files[0]">
          <async-highlight :code="files[0].code"></async-highlight>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, shallowRef, onMounted, onBeforeUnmount, watch, nextTick, inject, h } from 'vue'
import { i18nByKey, getWord } from '@/i18n'
import { $split, fetchDemosFile } from '@/tools'
import { Tabs as TinyTabs, TabItem as TinyTabItem, Button as TinyButton } from '@opentiny/vue'
import { AutoTip as vAutoTip } from '@opentiny/vue-directive'
import { languageMap, vueComponents, getWebdocPath, staticDemoPath } from '../cmp-config'
import { router } from '@/router.js'
import demoConfig from '@demos/config.js'
import { useApiMode, useTemplateMode } from '@/tools'
import useTheme from '@/tools/useTheme'
import AsyncHighlight from './async-highlight.vue'

const props = defineProps({
  demo: {
    type: Object,
    default: () => ({})
  },
  currDemoId: {
    type: String,
    default: ''
  },
  observer: {
    type: Object,
    default: () => ({})
  },
  isIntersecting: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['mounted', 'get-iframe-demo'])

const { apiModeState, apiModeFn } = useApiMode()

defineOptions({
  name: 'Demo'
})

const demos = ref(props.demo)
const files = ref([])
const { templateModeState } = useTemplateMode()
const { currentThemeKey } = useTheme()
const isMobileFirst = computed(() => {
  return templateModeState.mode === 'mobile-first'
})
const demoContainer = ref(null)
const cmp = shallowRef(null)
const showPreview = inject('showPreview')
const state = reactive({
  tabValue: 'tab0',
  cmpId: router.currentRoute.value.params.cmpId,
  langKey: getWord('zh-CN', 'en-US'),
  copyTip: i18nByKey('copyCode'),
  copyIcon: 'i-ti-copy'
})

watch(
  () => props.isIntersecting,
  async () => {
    if (props.isIntersecting) {
      const demoName = apiModeFn.getDemoName(`${getWebdocPath(state.cmpId)}/${props.demo.codeFiles[0]}`)
      if (vueComponents[demoName]) {
        cmp.value = (await vueComponents[demoName]()).default
      } else {
        const log = `${demoName}示例资源不存在，请检查文件名是否正确？`
        cmp.value = h('div', {}, log)
      }
    }
  },
  { immediate: true }
)

watch(
  () => props.demo,
  () => {
    demos.value = props.demo
    if (props.demo.files) {
      files.value = props.demo.files
    }
  },
  { deep: true }
)

watch(
  () => apiModeState.apiMode,
  () => {
    if (props.demo.files?.length > 0) {
      getDemoCodeFn(props.demo, true).then((demoFiles) => {
        files.value = demoFiles
      })
    }
  }
)

const getDemoCodeFn = async (demo, forceUpdate?: boolean) => {
  // 获取code代码文本
  if (!demo.files || forceUpdate) {
    const cmpId = router.currentRoute.value.params.cmpId
    const promises = demo.codeFiles.map(async (fileName) => {
      // 切换option-api和composition-api
      const demoName = apiModeFn.getDemoName(`${getWebdocPath(cmpId)}/${fileName}`)
      let code = ''

      const path = isMobileFirst.value ? `@demos/mobile-first/app/${demoName}` : `${staticDemoPath}/${demoName}`
      code = await fetchDemosFile(path)
        .then((code) => {
          return code
        })
        .catch(() => {
          return `${demoName}示例资源不存在，请检查文件名是否正确？`
        })
      const ext = $split(fileName, '.', -1)
      const language = languageMap[ext] || ''
      return { code, fileName, language }
    })
    demo.files = await Promise.all(promises)
    return demo.files
  }
  return demo.files
}

const getDescMd = (demo) => {
  const desc = demo.desc[state.langKey].trim()
  const html = h('div', { class: 'demo-desc', innerHTML: desc })
  return html
}

const toggleDemoCode = async (demo) => {
  // 第一次打开时，要请求一下相应的codeFiles .存储到files属性下
  if (!demo.files) {
    await getDemoCode(demo)
    demo.isOpen = true
  } else {
    demo.isOpen = !demo.isOpen
  }
  await nextTick()
  window.dispatchEvent(new Event('resize'))
}

const copyCode = async (demo) => {
  if (demo.isOpen) {
    const idx = parseInt(state.tabValue.slice(3))

    navigator.clipboard.writeText(demo.files[idx].code)
  } else {
    await getDemoCode(demo)

    navigator.clipboard.writeText(demo.files[0].code)
  }
  state.copyTip = i18nByKey('copyCodeOk')
  state.copyIcon = 'i-ti-check'
}

const resetTip = () => {
  setTimeout(() => {
    state.copyTip = i18nByKey('copyCode')
    state.copyIcon = 'i-ti-copy'
  }, 300)
}

const getDemoCode = (demo) => {
  // 获取code代码文本
  return getDemoCodeFn(demo)
}

const openPlayground = (demo, open = true) => {
  const cmpId = router.currentRoute.value.params.cmpId
  const tinyTheme = templateModeState.isSaas ? 'saas' : currentThemeKey.value.split('-')[0]
  const openModeQuery = open ? '' : '&openMode=preview'
  // TODO: 目前mf只有Options写法，后续再放开compositon
  const url = `${import.meta.env.VITE_PLAYGROUND_URL}?cmpId=${cmpId}&fileName=${demo.codeFiles[0]}&apiMode=${
    isMobileFirst.value ? 'Options' : apiModeState.apiMode
  }&mode=${templateModeState.mode}&theme=${tinyTheme}${openModeQuery}`

  if (open) {
    window.open(url)
  } else {
    showPreview(url)
  }
}

const openIframe = (demo) => {
  emit('get-iframe-demo', demo)
}

onMounted(() => {
  if (demoContainer.value) {
    props.observer?.observe?.(demoContainer.value)
  }
  nextTick(() => {
    emit('mounted')
  })
})

onBeforeUnmount(() => {
  if (demoContainer.value) {
    props.observer?.unobserve?.(demoContainer.value)
  }
})
</script>

<style lang="less" scoped>
.demo-container {
  min-height: 200px;
  width: 100%;
}

.is-current {
  padding: 20px 24px;
}

.demo-desc {
  font-size: 16px;
  line-height: 1.7em;
  margin: 8px 0 24px;

  :deep(code) {
    color: #476582;
    padding: 4px 8px;
    margin: 0 4px;
    font-size: 0.85em;
    background-color: var(--tv-color-bg-header);
    border-radius: 3px;
  }

  a {
    text-decoration: none;
    color: #5e7ce0;
    cursor: pointer;
  }

  ul,
  ol {
    list-style: disc;
    list-style-position: inside;
  }
}

.b-a-success {
  animation: border-trans 3s;
}

@keyframes border-trans {
  0% {
    border: 1px solid #5073e5;
    background: none;
  }

  50% {
    background: rgba(255, 95, 85, 0.1);
    border: 1px solid rgba(255, 95, 88, 0.6);
  }

  100% {
    border: 1px solid #5073e5;
    background: none;
  }
}

@media screen and (max-width: 640px) {
  .pc-demo-container {
    overflow: auto;
  }
}

.pc-demo-container {
  display: flex;
  flex-direction: column;
  color: var(--tv-color-text);
  background: #fff;
  border-radius: 6px;
  border: 1px solid #dcdfe6;
  padding: 26px 18px 42px;

  .pc-demo {
    flex: 1;
    padding: 6px;
  }
}

.demo-content {
  position: relative;

  .demo-title {
    font-size: 20px;
    color: var(--tv-color-text);
    font-weight: bold;
  }

  .demo-desc {
    margin-bottom: 16px;
    font-size: 14px;
    color: #595959;
    line-height: 30px;
  }

  .demo-options {
    height: 16px;
    position: absolute;
    right: 32px;
    bottom: 16px;

    i {
      color: var(--tv-color-text);
      &:hover {
        color: var(--tv-color-act-success-text-hover);
      }
    }
  }
}

.demo-code {
  border: 1px solid #efeff4;
}

.code-tabs {
  .tiny-tabs__content {
    padding: 0;
  }
}

.code-preview-box {
  overflow: auto;
  padding: 20px 5px;
}
</style>

<style lang="less">
.dark .pc-demo-container.pc-demo-container {
  background-color: #1a1a1a;
  border: none;
}

.dark .demo-content.demo-content .demo-desc {
  color: #b3b3b3;
}
</style>

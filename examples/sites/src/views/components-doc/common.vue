<template>
  <!-- 一个组件的文档:  描述md + demos + apis -->
  <ComponentHeader :current-json="state.currJson" :md-string="state.mdString" class="flex-horizontal">
    <template #header-right>
      <slot name="header-right" />
    </template>
  </ComponentHeader>
  <div class="docs-content" id="doc-layout-scroller" ref="scrollRef" @scroll="onDocLayoutScroll">
    <div class="ti-rel cmp-container">
      <div class="flex-horizontal docs-content-main">
        <div class="docs-tabs-wrap">
          <tiny-tabs v-model="state.activeTab" ref="demoTabs" class="docs-content-tabs" @click="onTabsClick">
            <tiny-tab-item :title="i18nByKey('demos')" name="demos">
              <!-- demos列表 -->
              <template v-if="state.currJson?.demos?.length">
                <div class="all-demos-container" id="all-demos-container">
                  <div v-if="apiModeState.demoMode === 'default'" id="demo-list" class="ti-f-c ti-f-wrap demo-list">
                    <demo-box
                      v-for="demo in state.currJson.demos"
                      :key="demo.name"
                      :observer="state.observer"
                      :isIntersecting="demo.isIntersecting"
                      :demo="demo"
                      :curr-demo-id="state.currDemoId"
                      class="mb32"
                      @mounted="demoMounted"
                      @get-iframe-demo="getIframeDemo"
                    />
                  </div>
                  <div v-else>
                    <demo-box
                      v-if="state.singleDemo"
                      :isIntersecting="true"
                      :key="state.singleDemo.name"
                      :demo="state.singleDemo"
                      @get-iframe-demo="getIframeDemo"
                    />
                  </div>
                </div>
              </template>

              <!-- 贡献者 -->
              <component-contributor :componentId="state.cmpId" />
            </tiny-tab-item>
            <tiny-tab-item
              v-if="state.showApiTab && !isRunningTest && state.currJson.apis?.length"
              title="API"
              name="api"
            >
              <!-- api文档 -->
              <api-docs
                ref="apiDocsRef"
                :current-json="state.currJson"
                :chart-code="state.chartCode"
                :table-data="state.tableData"
                id="API"
                class="all-api-container"
                @jump-to-demo="jumpToDemo"
              ></api-docs>
            </tiny-tab-item>
          </tiny-tabs>
          <slot name="main-right" />
        </div>

        <!-- demo与api目录锚点 -->
        <aside-anchor
          :active-tab="state.activeTab"
          :current-json="state.currJson"
          :anchor-affix="state.anchorAffix"
          :api-types="state.currApiTypes"
          :lang-key="state.langKey"
          :key="anchorRefreshKey"
          @link-click="handleAnchorClick"
        ></aside-anchor>
      </div>

      <div v-if="state.currJson.owner" class="ti-abs ti-right24 ti-top24" @click="copyText(state.currJson.owner)">
        {{ i18nByKey('doc-owner') }} : {{ state.currJson.owner }}
      </div>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, watch, onMounted, nextTick, ref } from 'vue'
import { useRoute } from 'vue-router'
import { TinyTabs, TinyTabItem } from '@opentiny/vue'
import { debounce } from '@opentiny/utils'
import { i18nByKey, getWord, $clone, useApiMode } from '@/tools'
import { router } from '@/router.js'
import { getWebdocPath } from './cmp-config'
import DemoBox from './components/demo.vue'
import AsideAnchor from './components/anchor.vue'
import ComponentHeader from './components/header.vue'
import ComponentContributor from './components/contributor.vue'
import ApiDocs from './components/api-docs.vue'
import useTasksFinish from './composition/useTasksFinish'

const props = defineProps({ loadData: {}, appMode: {}, demoKey: {} })

const emit = defineEmits(['single-demo-change', 'load-page'])

defineOptions({
  name: 'CmpPageVue'
})

const scrollRef = ref()
const { apiModeState } = useApiMode()
const isRunningTest = localStorage.getItem('tiny-e2e-test') === 'true'
const anchorRefreshKey = ref(0)
const route = useRoute()
const state = reactive({
  langKey: getWord('zh-CN', 'en-US'),
  cmpId: '',
  observer: null,
  currJson: { column: 1, demos: [], apis: [], types: {} },
  mdString: '',
  currDemoId: '',
  iframeUrl: '',
  anchorAffix: true,
  // 单demo显示时
  singleDemo: null,
  activeTab: route.hash === '#api' ? 'api' : 'demos',
  tableData: {},
  currApiTypes: [],
  showApiTab: computed(() => state.currApiTypes.length),
  chartCode: false
})

watch(
  () => state.singleDemo,
  (val) => {
    emit('single-demo-change', val)
  }
)

watch(
  () => router.currentRoute.value.params.cmpId,
  (cmpId) => {
    if (!cmpId) {
      state.currJson = {}
    } else {
      loadPage()
      // 切换组件时tabs激活页变成demos
      state.activeTab = 'demos'
      // 每次切换组件都需要让锚点组件重新刷新
      anchorRefreshKey.value++
    }
  }
)

watch(
  () => apiModeState.demoMode,
  (value) => {
    if (value) {
      scrollToLayoutTop()
    }
  }
)

onMounted(() => {
  loadPage()
  // 加载公共尾部
  const common = new window.TDCommon(['#footer'], {})
  common.renderFooter()
  setScrollListener()
})

const getIframeDemo = (demo) => {
  state.singleDemo = demo
  state.currDemoId = demo.demoId
}

// 封装api表格数据
const parseApiData = () => {
  if (!state.currJson.apis?.length) {
    return {}
  }

  const tableData = {}
  const apis = state.currJson.apis || []
  for (const apiGroup of apis) {
    const apiDisplay = {}
    for (const apiType of Object.keys(apiGroup)) {
      if (Array.isArray(apiGroup[apiType]) && apiGroup[apiType].length) {
        const apiArr = apiGroup[apiType].map((i) => {
          const { name, type, defaultValue, desc, demoId, typeAnchorName, linkTo, meta, versionTipOption } = i
          const item = {
            name,
            type,
            defaultValue: defaultValue || '--',
            desc: desc[state.langKey],
            demoId,
            meta,
            versionTipOption,
            typeAnchorName: '',
            linkTo
          }
          if (typeAnchorName) {
            item.typeAnchorName = `${typeAnchorName?.includes('#') ? '' : '#'}${typeAnchorName}`
            item.code = state.currJson.types[i.typeAnchorName]?.code || ''
            item.depTypes = state.currJson.types[i.typeAnchorName]?.depTypes || []
          }
          return item
        })
        apiDisplay[apiType] = apiArr.sort((a, b) => a.name.localeCompare(b.name))
        state.currApiTypes = Array.from(new Set([...state.currApiTypes, apiType]))
      }
    }

    tableData[apiGroup.name] = apiDisplay
  }
  state.tableData = tableData
}

const apiDocsRef = ref()
const jumpToApi = (hash) => {
  state.activeTab = 'api'
  apiDocsRef.value.jumpToApi(hash)
}

// 页面加载/点击api中的链接，根据hash滚动。
const scrollByHash = (hash) => {
  setTimeout(() => {
    if (!hash) {
      scrollRef.value.scrollTo({
        top: 0,
        left: 0
      })
    } else if (state.currJson.types[hash]) {
      jumpToApi(hash)
    } else {
      let scrollTarget
      try {
        //  用户打开官网有时候会带一些特殊字符的hash，try catch一下防止js报错
        scrollTarget = document.querySelector(`#${hash}`)
      } catch (err) {}

      if (scrollTarget && !isRunningTest) {
        // doc-layout-scroller(滚动) > tabs > tab-content(relative)， 造成  scrollTarget.offsetTop 是相对于 tab-content的距离
        // 所以滚动需要修正 tab-title的占位高度才行
        scrollRef.value.scrollTo({
          top: scrollTarget.offsetTop,
          left: 0,
          behavior: 'smooth'
        })
      }
    }
  }, 0)
}

// 在singleDemo情况时，才需要滚动示例区域到顶
const scrollToLayoutTop = () => {
  let hash = router.currentRoute.value.hash?.slice(1)
  if (hash !== 'api') {
    setTimeout(() => {
      scrollRef.value.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }, 0)
  }
}

let finishMountTask
const demoMounted = () => {
  finishMountTask()
}

const loadPage = () => {
  const lang = getWord('cn', 'en')
  state.cmpId = router.currentRoute.value.params.cmpId

  state.chartCode = getWebdocPath(state.cmpId) === 'chart'

  // 将请求合并起来，这样页面更新一次，页面刷新的时机就固定了
  props.loadData({ cmpId: state.cmpId, lang }).then(({ mdString, apisJson, demosJson }) => {
    // 1、加载顶部md
    state.mdString = mdString

    if (demosJson) {
      // 默认设置每个实例demo都不和视图相交
      demosJson.demos?.forEach((item) => {
        item.isIntersecting = false
      })
      state.currJson = {
        ...demosJson,
        demos: $clone(demosJson.demos || []), // 克隆一下,避免保存上次的isOpen
        column: demosJson.column || '1' // columns可能为空
      }
    } else {
      state.activeTab = 'api'
    }

    const { finishTask, waitTasks: allDemoMounted } = useTasksFinish(state.currJson.demos.length)
    finishMountTask = finishTask

    if (apisJson) {
      state.currJson.apis = apisJson.apis.map((item) => {
        Object.keys(item).forEach((key) => {
          const apiItem = item[key]
          if (Array.isArray(apiItem)) {
            item[key] = apiItem
              .filter((i) => !i.mode || i.mode.includes(props.appMode))
              .map((filterItem) => ({ ...filterItem, demoId: filterItem[props.demoKey] }))
          }
        })
        return item
      })
      state.currJson.types =
        apisJson.types?.reduce((res, cur) => {
          res[cur.name] = cur
          return res
        }, {}) || {}
      parseApiData()
    }

    let hash = router.currentRoute.value.hash?.slice(1)

    // 如果有hash,取hash的demo, 没有hash, 取第1项
    state.singleDemo = state.currJson.demos.find((d) => d.demoId === hash)
    if (!state.singleDemo) {
      state.singleDemo = state.currJson.demos[0]
    }

    emit('load-page', state.singleDemo)

    // F5刷新加载时，跳到当前示例
    // 应当在所有demo渲染完毕后在滚动，否则滚动完位置后，demo渲染会使滚动位置错位
    return allDemoMounted().then(() => {
      scrollByHash(hash)
    })
  })
}

const onDocLayoutScroll = debounce(100, false, () => {
  const docLayout = scrollRef.value
  const { scrollTop, scrollHeight, clientHeight: layoutHeight } = docLayout
  const headerHeight = document.querySelector('.docs-header')?.clientHeight || 0
  const footerHeight = document.getElementById('footer')?.clientHeight || 0
  const anchorHeight = document.querySelector('#anchor')?.clientHeight || 0
  const remainHeight = scrollHeight - scrollTop - layoutHeight // doc-layout-scroller视口下隐藏的部分高度
  state.anchorAffix = layoutHeight - headerHeight - (footerHeight - remainHeight) > anchorHeight
})

const setScrollListener = () => {
  nextTick(() => {
    const docLayout = scrollRef.value

    const options = {
      root: docLayout,
      threshold: 0.2
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 当demo示例与视图相交才加载对应的vue组件
          const demoId = entry.target.id
          state.currJson.demos.forEach((item) => {
            if (item.demoId === demoId) {
              item.isIntersecting = true
            }
          })
        }
      })
    }

    state.observer = new IntersectionObserver(callback, options)
  })
}

const copyText = (text) => {
  navigator.clipboard.writeText(text)
}

const onTabsClick = (data) => {
  if (data.name) {
    router.push(`#${data.name}`)
    scrollToLayoutTop()
  }
}

// 点击 api区域的 name列时
const jumpToDemo = (demoId) => {
  state.activeTab = 'demos'
  if (demoId.startsWith('chart') || demoId.startsWith('grid')) {
    router.push(demoId)
  } else {
    if (demoId) {
      router.push(`#${demoId}`)
    }
    if (apiModeState.demoMode === 'single') {
      state.singleDemo = state.currJson.demos.find((d) => d.demoId === demoId)
    }
    scrollByHash(demoId)
  }
}

// 目录列表上的点击
const handleAnchorClick = (e, data) => {
  if (apiModeState.demoMode === 'single' && data.link.startsWith('#')) {
    e.preventDefault()
    const hash = data.link.slice(1)
    const singleDemo = state.currJson.demos.find((d) => d.demoId === hash)

    // 单示例模式下如果没有匹配到锚点对应的示例，则这不加载示例直接跳转锚点id
    if (singleDemo) {
      state.singleDemo = singleDemo
      scrollToLayoutTop()
    }

    router.push(data.link)
  } else if (apiModeState.demoMode === 'default' && data.link.startsWith('#')) {
    // 多示例模式，自动会切到相应的位置。只需要记录singleDemo就好了
    e.preventDefault()
    const hash = data.link.slice(1)
    state.currDemoId = hash
    state.singleDemo = state.currJson.demos.find((d) => d.demoId === hash)
    router.push(data.link)
    scrollByHash(hash)
  }
}

defineExpose({ loadPage })
</script>

<style lang="less" scoped>
.docs-content {
  flex: 1;
  overflow: hidden auto;
  margin-top: 16px;
  transition: all ease-in-out 0.3s;

  .docs-tabs-wrap {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 0 40px;
  }

  .docs-content-tabs {
    --tv-Tabs-heigh: 48px;
    --tv-Tabs-item-font-size: 18px;
    --tv-Tabs-header-font-active-text-color: #2f5bea;
    --tv-Tabs-item-active-border-color: #2f5bea;

    flex: 1;
    transition: all ease-in-out 0.3s;
    min-width: var(--layout-content-main-min-width);
    max-width: var(--layout-content-main-max-width);

    :deep(> .tiny-tabs__header) {
      position: sticky;
      top: 0;
      z-index: var(--docs-tabs-header-zindex);
      background-color: var(--docs-color-bg);

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 16px;
        background: linear-gradient(to bottom, var(--docs-color-bg), transparent);
        transform: translateY(100%);
      }

      .tiny-tabs__item__title {
        font-weight: bold;
      }
    }

    & > :deep(.tiny-tabs__content) {
      // 不能影响到tabs组件的样式
      margin: 0;
      overflow: visible;
    }
  }
}

.one-demo-col2 {
  display: grid;
  gap: 16px;
  grid-template-columns: minmax(0px, 1fr) minmax(0px, 1fr);
  align-items: flex-start;

  > div {
    display: grid;
    gap: 16px;
    grid-template-columns: 100%;
  }
}

.all-demos-container,
.all-api-container {
  flex: 1;
  padding: 32px 0;
  scroll-behavior: smooth;
}

.all-api-container {
  padding-top: 12px;
}

.flex-horizontal {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 16px;
}

.cmp-container {
  p {
    font-size: 16px;
    line-height: 1.7em;
    margin: 12px 0;
  }
}

@media (max-width: 1279px) {
  .catalog,
  .docs-header-spacer {
    display: none;
  }

  .cmp-container {
    padding-right: 0;
  }
}

@media (max-width: 767px) {
  .one-demo-col2 {
    grid-template-columns: 100%;
  }
}
</style>

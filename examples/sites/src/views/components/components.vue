<template>
  <!-- 一个组件的文档:  描述md + demos + apis -->
  <header class="flex-horizontal docs-header">
    <div class="docs-title-wrap">
      <div class="markdown-body markdown-top-body" size="medium" v-html="state.cmpTopMd"></div>
      <version-tip
        v-if="state.currJson.meta || state.currJson.versionTipOption"
        :meta="state.currJson.meta"
        v-bind="state.currJson.versionTipOption"
      >
      </version-tip>
    </div>
    <div v-if="templateModeState.isSaas" class="ti-pt20 ti-pl48 ti-mb-36">
      <span class="cmp-mode-title">文档类型： </span>
      <tiny-button-group :data="optionsList" v-model="templateModeState.mode"></tiny-button-group>
    </div>
    <span class="docs-header-spacer"></span>
  </header>
  <div class="docs-content" id="doc-layout-scroller">
    <div class="ti-rel cmp-container">
      <div class="flex-horizontal docs-content-main">
        <div class="docs-tabs-wrap">
          <tiny-tabs v-model="state.activeTab" ref="demoTabs" class="docs-content-tabs" @click="onTabsClick">
            <tiny-tab-item :title="i18nByKey('demos')" name="demos">
              <!-- demos列表 -->
              <template v-if="state.currJson?.demos?.length">
                <div class="all-demos-container" id="all-demos-container">
                  <div v-if="apiModeState.demoMode === 'default'" id="demo-list" class="ti-f-c ti-f-wrap demo-list">
                    <demo
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
                    <demo
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
              <div class="cmp-contributor" v-if="state.contributors.length">
                <h2 class="cmp-contributor-title">{{ i18nByKey('contributor') }}</h2>
                <template v-for="item in state.contributors" :key="item.id">
                  <tiny-tooltip popper-class="docs-tooltip" placement="top" effect="light">
                    <template #content>
                      <span class="cmp-contributor-tip">{{ item.nickname }}</span>
                    </template>
                    <a :href="item.homepage" class="cmp-contributor-item" rel="noopener noreferrer" target="_blank">
                      <img class="cmp-contributor-avatar" :src="item.avatar" :alt="item.nickname" />
                    </a>
                  </tiny-tooltip>
                </template>
              </div>
            </tiny-tab-item>
            <tiny-tab-item
              v-if="state.showApiTab && !isRunningTest && state.currJson.apis?.length"
              title="API"
              name="api"
            >
              <!-- api文档 -->
              <div id="API" class="all-api-container">
                <div class="ti-f-c ti-f-wrap api-list">
                  <!-- apis 是一个数组 {name,type,properties:[原table内容],events:[] ...........} -->
                  <div class="mt20 wp100" v-for="oneGroup in state.currJson.apis" :key="oneGroup.name">
                    <div class="ti-f-r ti-f-pos-start ti-fw-bold">
                      <h2 :id="`cmp-${oneGroup.name}`" class="ti-f18">
                        {{ oneGroup.name }}
                      </h2>
                      <div class="ti-ml12 ti-b-a-primary ti-c-primary ti-px8 ti-py4">
                        {{ oneGroup.type }}
                      </div>
                    </div>
                    <div v-for="(oneApiArr, key) in oneGroup" :key="key">
                      <template v-if="!['name', 'type'].includes(key) && oneApiArr.length > 0">
                        <h3 class="ti-f18 ti-py28" :id="`${oneGroup.name}--${key}`">
                          {{ key }}
                        </h3>
                        <div class="api-table-box">
                          <tiny-grid
                            ref="apiTableRef"
                            class="api-table"
                            :data="state.tableData[oneGroup.name][key]"
                            :expand-config="state.apiExpandConf"
                            row-id="name"
                          >
                            <tiny-grid-column class-name="api-table-expand-col" type="expand" width="32">
                              <template #default="{ row }">
                                <async-highlight
                                  v-if="row.code"
                                  :code="row.code.trim()"
                                  :types="state.chartCode ? 'html' : 'ts'"
                                ></async-highlight>
                                <div v-if="row.depTypes">
                                  <async-highlight
                                    v-for="(k, i) in row.depTypes"
                                    :key="i"
                                    :code="state.currJson.types[k]?.code"
                                    types="ts"
                                  ></async-highlight>
                                </div>
                              </template>
                            </tiny-grid-column>
                            <tiny-grid-column
                              field="name"
                              :title="i18nByKey('name')"
                              :width="state.columnWidth[key][0]"
                            >
                              <template #default="{ row }">
                                <span class="api-table-name">
                                  <a v-if="row.demoId" @click="jumpToDemo(row.demoId)">{{ row.name }}</a>
                                  <span v-else>{{ row.name }}</span>
                                </span>
                                <version-tip
                                  v-if="row.meta || row.versionTipOption"
                                  :meta="row.meta"
                                  v-bind="row.versionTipOption"
                                  render-type="tag"
                                  tip-subject="api"
                                >
                                </version-tip>
                              </template>
                            </tiny-grid-column>
                            <tiny-grid-column
                              v-if="state.tableData[oneGroup.name][key].find((i) => i.type)"
                              field="type"
                              :title="i18nByKey('propType')"
                              :width="state.columnWidth[key][1]"
                            >
                              <template #default="{ row }">
                                <span
                                  :class="{ 'type-link': row.typeAnchorName || row.linkTo }"
                                  :id="row.typeAnchorName ? row.type : ''"
                                  @click="toOuterType(row)"
                                  >{{ row.type }} <IconOuterLink v-if="row.linkTo"></IconOuterLink
                                ></span>
                              </template>
                            </tiny-grid-column>
                            <tiny-grid-column
                              v-if="key === 'props' || key === 'options'"
                              field="defaultValue"
                              :title="i18nByKey('defValue')"
                              :width="state.columnWidth[key][2]"
                            ></tiny-grid-column>
                            <tiny-grid-column field="desc" :title="i18nByKey('desc')">
                              <template #default="data">
                                <span v-html="data.row.desc"></span>
                              </template>
                            </tiny-grid-column>
                          </tiny-grid>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </tiny-tab-item>
          </tiny-tabs>
          <div v-if="demoConfig.isMobile" class="mobile-view-container">
            <!-- 移动端展示内容 -->
            <div class="phone-container">
              <div class="mobile-iframe-container">
                <iframe ref="iframeRef" width="100%" height="100%" :src="state.iframeUrl" frameborder="0"></iframe>
              </div>
            </div>
          </div>
        </div>

        <!-- demo与api目录锚点 -->
        <div class="cmp-page-anchor catalog" v-if="state.currAnchorLinks.length">
          <tiny-anchor
            id="anchor"
            :offset-top="56"
            :links="state.currAnchorLinks"
            :key="anchorRefreshKey"
            :is-affix="state.anchorAffix"
            type="dot"
            container-id="#doc-layout-scroller"
            @link-click="handleAnchorClick"
          >
          </tiny-anchor>
        </div>
      </div>

      <h2 id="FAQ" v-if="state.cmpFAQMd" class="ti-f30 ti-fw-normal ti-mt28 ti-mb20">FAQ</h2>
      <div class="markdown-body" v-html="state.cmpFAQMd"></div>
      <div v-if="state.currJson.owner" class="ti-abs ti-right24 ti-top24" @click="copyText(state.currJson.owner)">
        {{ i18nByKey('doc-owner') }} : {{ state.currJson.owner }}
      </div>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, watch, onMounted, onUnmounted, nextTick, ref } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import hljs from 'highlight.js'
import {
  Anchor as TinyAnchor,
  ButtonGroup as TinyButtonGroup,
  Grid as TinyGrid,
  GridColumn as TinyGridColumn,
  Tabs as TinyTabs,
  TabItem as TinyTabItem,
  Tooltip as TinyTooltip
} from '@opentiny/vue'
import { iconOuterLink } from '@opentiny/vue-icon'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'
import { i18nByKey, getWord, $clone, fetchDemosFile, useApiMode, useTemplateMode, getCmpContributors } from '@/tools'
import demo from '@/views/components/demo'
import demoConfig from '@demos/config.js'
import { router } from '@/router.js'
import { faqMdConfig, getWebdocPath } from './cmp-config'
import AsyncHighlight from './async-highlight.vue'
import VersionTip from './VersionTip.vue'

defineOptions({
  name: 'CmpPageVue'
})

const { apiModeState } = useApiMode()
const { templateModeState, staticPath, optionsList } = useTemplateMode()
const IconOuterLink = iconOuterLink()
const iframeRef = ref()
const isRunningTest = localStorage.getItem('tiny-e2e-test') === 'true'
const anchorRefreshKey = ref(0)
const apiTableRef = ref()
const route = useRoute()
const state = reactive({
  webDocPath: computed(() => ''),
  langKey: getWord('zh-CN', 'en-US'),
  cmpId: '',
  observer: null,
  currJson: { column: 1, demos: [], apis: [], types: {} },
  cmpTopMd: null,
  cmpFAQMd: null,
  currDemoId: '',
  demoAnchorLinks: computed(() => {
    const links =
      state.currJson?.demos?.map((demo) => ({
        key: demo.demoId,
        title: demo.name[state.langKey],
        link: `#${demo.demoId}`
      })) || []
    if (state.cmpFAQMd) {
      links.push({
        key: 'FAQ',
        title: 'FAQ',
        link: '#FAQ'
      })
    }
    return links
  }),
  iframeUrl: '',
  apiAnchorLinks: computed(() => getApiAnchorLinks()),
  anchorAffix: true,
  currAnchorLinks: computed(() => (state.activeTab === 'demos' ? state.demoAnchorLinks : state.apiAnchorLinks)),
  // 单demo显示时
  singleDemo: null,
  activeTab: route.hash === '#api' ? 'api' : 'demos',
  tableData: {},
  currApiTypes: [],
  showApiTab: computed(() => state.currApiTypes.length),
  columnWidth: {
    props: ['15%', '20%', '15%'],
    options: ['15%', '20%', '15%'],
    events: ['15%', '25%', 0],
    methods: ['15%', '20%', 0],
    slots: ['15%', 0, 0],
    format: ['15%', 0, 0]
  },
  apiExpandConf: {
    expandAll: false,
    trigger: 'row',
    expandRowKeys: [],
    accordion: false,
    activeMethod: (row) => row.typeAnchorName,
    showIcon: true // 配置是否显示展开图标
  },
  contributors: [], // 贡献者
  chartCode: false
})
let finishNum = ref(0)
let isAllMounted = ref(false)
let demoMountedResolve

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

watch(
  () => templateModeState.mode,
  () => {
    loadPage()
  }
)

onMounted(() => {
  loadPage()
  // 加载公共尾部
  const common = new window.TDCommon(['#footer'], {})
  common.renderFooter()
  setScrollListener()
})

onUnmounted(() => {
  removeScrollListener()
})

const demoMounted = () => {
  finishNum.value++
  if (finishNum.value === state.currJson.demos.length) {
    isAllMounted.value = true
    demoMountedResolve(true)
  }
}

const getIframeConetent = (demoId, demoName) => {
  const frameWindow = iframeRef.value.contentWindow
  frameWindow.postMessage({ from: 'tiny-vue-site', component: state.cmpId, demo: demoName })
  router.push(`#${demoId}`)
}

const getIframeDemo = (demo) => {
  if (demo?.codeFiles.length > 0) {
    getIframeConetent(demo.demoId, demo.codeFiles[0])
    jumpToMobileDemoAndHash(demo.demoId)
    state.currDemoId = demo.demoId
    state.currJson.demos.forEach((item) => {
      if (item.demoId === demo.demoId) {
        item.isIntersecting = true
      }
    })
  }
}

const jumpToMobileDemoAndHash = (hash) => {
  if (apiModeState.demoMode === 'single') {
    const singleDemo = state.currJson.demos.find((d) => d.demoId === hash)

    // 单示例模式下如果没有匹配到锚点对应的示例，则这不加载示例直接跳转锚点id
    if (singleDemo) {
      state.singleDemo = singleDemo
      scrollToLayoutTop()
    }
  } else if (apiModeState.demoMode === 'default') {
    // 多示例模式，自动会切到相应的位置。只需要记录singleDemo就好了
    state.singleDemo = state.currJson.demos.find((d) => d.demoId === hash)
    scrollByHash(hash)
  }
}

const allDemoMounted = async () => {
  if (isAllMounted.value) {
    return isAllMounted.value
  }
  return new Promise((resolve) => {
    demoMountedResolve = resolve
  })
}

const getApiAnchorLinks = () => {
  if (!state.currJson.apis?.length) {
    return []
  }

  const apiAnchorLinks = []
  state.currJson.apis?.forEach((apiGroup) => {
    const { name } = apiGroup
    const typeLinks = state.currApiTypes
      .filter((i) => apiGroup[i]?.length)
      .map((i) => ({
        key: i,
        link: `#${name}--${i}`,
        title: i
      }))

    const linkItem = {
      key: name,
      link: `#cmp-${name}`,
      title: name,
      children: typeLinks
    }
    apiAnchorLinks.push(linkItem)
  })

  return apiAnchorLinks
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

const getRowData = (type) => {
  const tableData = state.tableData
  let rowData
  for (const comp of Object.values(tableData)) {
    for (const apiGroup of Object.values(comp)) {
      rowData = apiGroup.find((i) => i.type === type)
      if (rowData) {
        return rowData
      }
    }
  }
}

const jumpToApi = (hash) => {
  state.activeTab = 'api'
  nextTick(() => {
    const rowData = getRowData(hash)
    const row = document.getElementById(hash).closest('.tiny-grid-body__row')
    if (row) {
      apiTableRef.value.forEach((i) => {
        i.setCurrentRow(rowData)
        i.setRowExpansion(rowData, true)
      })
    }
  })
}

// 页面加载/点击api中的链接，根据hash滚动。
const scrollByHash = (hash) => {
  setTimeout(() => {
    if (!hash) {
      document.getElementById('doc-layout-scroller').scrollTo({
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
        document.getElementById('doc-layout-scroller').scrollTo({
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
  if (hash !== 'API') {
    setTimeout(() => {
      document.getElementById('doc-layout-scroller').scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }, 0)
  }
}

// saas下切换mode和组价示例都会触发loadPage,需要防抖
const loadPage = debounce(templateModeState.isSaas ? 100 : 0, false, () => {
  const lang = getWord('cn', 'en')
  state.cmpId = router.currentRoute.value.params.cmpId

  // 将请求合并起来，这样页面更新一次，页面刷新的时机就固定了
  const promiseArr = [
    fetchDemosFile(`${staticPath.value}/${getWebdocPath(state.cmpId)}/webdoc/${state.cmpId}.${lang}.md`),
    null,
    fetchDemosFile(
      `@demos/apis/${getWebdocPath(state.cmpId) === 'chart' ? state.cmpId : getWebdocPath(state.cmpId)}.js`
    )
  ]

  state.chartCode = getWebdocPath(state.cmpId) === 'chart'

  // 兼容ts文档
  if (['interfaces', 'types', 'classes'].includes(state.cmpId)) {
    state.activeTab = 'api'
  } else {
    promiseArr[1] = fetchDemosFile(`${staticPath.value}/${getWebdocPath(state.cmpId)}/webdoc/${state.cmpId}.js`)
  }

  if (faqMdConfig[state.cmpId]) {
    promiseArr.push(
      fetchDemosFile(`${staticPath.value}/${getWebdocPath(state.cmpId)}/webdoc/${state.cmpId}.faq.${lang}.md`)
    )
  }

  Promise.all(promiseArr)
    .then(([mdData, jsData, apiData, faqData]) => {
      // 1、加载顶部md
      state.cmpTopMd = marked(mdData, {
        gfm: true,
        highlight(code, language) {
          const validLanguage = hljs.getLanguage(language) ? language : 'plaintext'
          return hljs.highlight(code, { language: validLanguage }).value
        }
      })

      // 2、加载faq.md
      if (faqData) {
        state.cmpFAQMd = marked(faqData)
      }

      // 3、加载cmpId.js 文件
      // eslint-disable-next-line no-eval
      const json = jsData ? eval('(' + jsData.slice(15) + ')') : {}

      // 默认设置每个实例demo都不和视图相交
      json.demos?.forEach((item) => {
        item.isIntersecting = false
      })

      state.currJson = {
        ...json,
        demos: $clone(json.demos || []), // 克隆一下,避免保存上次的isOpen
        column: json.column || '1' // columns可能为空
      }

      if (apiData) {
        // eslint-disable-next-line no-eval
        const apiJson = eval('(' + apiData.slice(15) + ')')
        // pc、mobile、mobile-first三种模式
        const demoMode = templateModeState.isSaas ? templateModeState.mode : import.meta.env.VITE_APP_MODE
        const demoKey = demoMode === 'mobile-first' ? 'mfDemo' : `${demoMode}Demo`
        state.currJson.apis = apiJson.apis.map((item) => {
          Object.keys(item).forEach((key) => {
            const apiItem = item[key]
            if (Array.isArray(apiItem)) {
              item[key] = apiItem
                .filter((i) => !i.mode || i.mode.includes(demoMode))
                .map((filterItem) => ({ ...filterItem, demoId: filterItem[demoKey] }))
            }
          })
          return item
        })
        state.currJson.types =
          apiJson.types?.reduce((res, cur) => {
            res[cur.name] = cur
            return res
          }, {}) || {}
        parseApiData()
      }

      let hash = router.currentRoute.value.hash?.slice(1)

      // 单demo处理，如果有hash,取hash的demo, 没有hash, 取第1项
      if (hash) {
        state.singleDemo = state.currJson.demos.find((d) => d.demoId === hash)
        if (!state.singleDemo) {
          state.singleDemo = state.currJson.demos[0]
        }
      } else {
        state.singleDemo = state.currJson.demos[0]
      }

      if (demoConfig.isMobile && !hash) {
        // 初始化iframe,当前组件第一个demo展示
        state.iframeUrl = `${import.meta.env.VITE_MOBILE_URL}?component=${state.cmpId}&demo=${
          state.currJson?.demos[0].codeFiles[0]
        }`
      } else {
        state.iframeUrl = `${import.meta.env.VITE_MOBILE_URL}?component=${state.cmpId}&demo=${hash}.vue`
      }

      // F5刷新加载时，跳到当前示例
      // 应当在所有demo渲染完毕后在滚动，否则滚动完位置后，demo渲染会使滚动位置错位
      return allDemoMounted().then(() => {
        scrollByHash(hash)
      })
    })
    .finally(() => {
      // 获取组件贡献者
      getContributors()
    })
})

/**
 * 获取贡献者
 */
const getContributors = () => {
  const cmpId = state.cmpId?.includes('grid') ? 'grid' : state.cmpId
  state.contributors = getCmpContributors(cmpId)
}

const onDocLayoutScroll = debounce(100, false, () => {
  const docLayout = document.getElementById('doc-layout-scroller')
  const { scrollTop, scrollHeight, clientHeight: layoutHeight } = docLayout
  const headerHeight = document.querySelector('.docs-header')?.clientHeight || 0
  const footerHeight = document.getElementById('footer')?.clientHeight || 0
  const anchorHeight = document.querySelector('#anchor')?.clientHeight || 0
  const remainHeight = scrollHeight - scrollTop - layoutHeight // doc-layout-scroller视口下隐藏的部分高度
  state.anchorAffix = layoutHeight - headerHeight - (footerHeight - remainHeight) > anchorHeight
})

const setScrollListener = () => {
  nextTick(() => {
    const docLayout = document.getElementById('doc-layout-scroller')
    if (docLayout) {
      docLayout.addEventListener('scroll', onDocLayoutScroll)
    }

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

const removeScrollListener = () => {
  const docLayout = document.getElementById('doc-layout-scroller')
  if (docLayout) {
    docLayout.removeEventListener('scroll', onDocLayoutScroll)
  }
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

// 跳转到其他组件的api
const toOuterType = (row) => {
  if (!row.linkTo) {
    return
  }

  router.push(row.linkTo)
}

// 目录列表上的点击
const handleAnchorClick = (e, data) => {
  if (demoConfig.isMobile) {
    // 点击目录列表更新iframe显示
    const hashId = data.link.slice(1)
    getIframeConetent(state.cmpId, hashId + '.vue')
  }

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
</script>

<style lang="less" scoped>
.docs-header {
  padding: 16px 40px;
  min-height: 102px;
  background-color: #fff;
  box-shadow: 12px 0 20px 6px rgba(0, 0, 0, 0.06);

  .docs-title-wrap {
    flex: 1;
    min-width: var(--layout-content-main-min-width);
    max-width: var(--layout-content-main-max-width);
    margin: 0 auto;
  }

  .markdown-top-body {
    z-index: var(--docs-markdown-top-body-zindex);
    font-size: 14px;
    transition: all ease-in-out 0.3s;

    :deep(h1) {
      margin: 0;
      padding: 0;
      font-size: 24px;
      line-height: 40px;
    }
  }

  .version-tip {
    width: 100%;
  }

  .docs-header-spacer {
    flex: none;
    width: 200px;
  }
}

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
      background-color: #fff;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 16px;
        background: linear-gradient(to bottom, #fff, transparent);
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

.api-table-box {
  border-left: 1px solid rgb(239, 239, 245);
  border-right: 1px solid rgb(239, 239, 245);
  overflow-x: auto;
  width: 100%;
}

.api-table {
  width: 100%;
  min-width: 640px;
  table-layout: fixed;
  border-collapse: collapse;

  a,
  .type-link {
    text-decoration: none;
    color: #5e7ce0;
    cursor: pointer;
    word-wrap: break-word;

    .tiny-svg {
      fill: #5e7ce0;
    }
  }

  &-name:has(+ .version-tip) {
    margin-right: 4px;
  }

  :deep(.api-table-expand-col) {
    padding-left: 16px;
  }

  :deep(.tiny-grid-body__expanded-cell) {
    background-color: #fafafa;
  }

  :deep(code) {
    color: #476582;
    padding: 4px 8px;
    margin: 0 4px;
    font-size: 0.85em;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
  }
}

.cmp-mode-title {
  font-size: 18px;
  vertical-align: middle;
  font-weight: 600;
}

.catalog {
  flex: none;
  width: 200px;
  height: calc(100vh - 280px);
  padding-top: 16px;
  overflow: hidden;

  .tiny-anchor__dot {
    max-height: calc(100vh - 300px);
    width: 200px;

    :deep(.tiny-anchor) {
      --ti-anchor-width: auto;
      background-color: transparent;
    }
  }
}

.catalog:hover {
  overflow-y: auto;
}

.catalog::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

.catalog::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #c1c1c1;
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

.cmp-page-anchor {
  :deep(.tiny-anchor__affix) {
    top: unset !important;
    overflow-y: auto;
    max-height: calc(100vh - 300px);
  }

  :deep(.tiny-anchor-link) {
    font-size: 12px;

    a {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

.cmp-contributor {
  margin-top: 48px;

  .cmp-contributor-title {
    margin-bottom: 32px;
    font-size: 20px;
    font-weight: Semibold;
    color: #191919;
  }

  .cmp-contributor-item {
    width: 42px;
    height: 42px;
    margin-right: 12px;
    margin-bottom: 20px;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    transition: all linear 0.2s;

    &:hover {
      transform: scale(110%);
    }
  }

  .cmp-contributor-avatar {
    width: 100%;
    height: 100%;
  }

  .cmp-contributor-tip {
    font-size: 14px;
    color: #191919;
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

.custom-block.tip {
  background-color: #f3f5f7;
  border-color: #42b983;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  border-left-width: 0.3rem;
  border-left-style: solid;
  margin: 1rem 0;
  font-size: 14px;
  color: #5e6d82;
  line-height: 2;

  .custom-block-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  ul {
    li {
      padding: 5px 0;
    }
  }
}

.phone-container {
  width: 394px;
  height: 770px;
  border: 0;
  position: fixed;
  top: 200px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYsAAAMFCAYAAACFxdoKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg3MTZDNTAwMTI1MzExRUE5Mzk1OTFBNjdDQ0JBNUQ5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg3MTZDNTAxMTI1MzExRUE5Mzk1OTFBNjdDQ0JBNUQ5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODcxNkM0RkUxMjUzMTFFQTkzOTU5MUE2N0NDQkE1RDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODcxNkM0RkYxMjUzMTFFQTkzOTU5MUE2N0NDQkE1RDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7YMDcrAAAcl0lEQVR42uzd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)
    no-repeat center top;
  background-size: contain;
  z-index: 1;
}

.mobile-view-container {
  width: 400px;
}

.mobile-iframe-container {
  position: relative;
  top: 79px;
  left: 10px;
  width: 360px;
  height: 612px;
}
</style>

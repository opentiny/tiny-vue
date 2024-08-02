<template>
  <div v-if="templateModeState.isSaas" class="ti-pt20 ti-pl48 ti-mb-36">
    <span class="cmp-mode-title">文档类型： </span>
    <tiny-button-group :data="optionsList" v-model="templateModeState.mode"></tiny-button-group>
  </div>
  <!-- 一个组件的文档:  描述md + demos + apis -->
  <header class="flex-horizontal docs-header">
    <div class="docs-title-wrap">
      <div class="markdown-body markdown-top-body" size="medium" v-html="cmpTopMd"></div>
      <version-tip
        v-if="currJson.metaData || currJson.versionTipOption"
        :meta-data="currJson.metaData"
        v-bind="currJson.versionTipOption"
      >
      </version-tip>
    </div>
    <span class="docs-header-spacer"></span>
  </header>
  <div class="docs-content">
    <div class="ti-fi-1 ti-rel cmp-container">
      <div class="flex-horizontal docs-content-main">
        <div class="docs-tabs-wrap">
          <div v-if="['interfaces', 'types', 'classes'].includes(cmpId)" id="TS" class="all-api-container">
            <div class="ti-f-c ti-f-wrap api-list">
              <div class="mt20" v-for="oneGroup in currJson.apis" :key="oneGroup.name">
                <div class="ti-f-r ti-f-pos-start ti-fw-bold">
                  <div :id="`cmp-${oneGroup.name}`" class="ti-f18">
                    {{ oneGroup.name }}
                  </div>
                  <div class="ti-ml12 ti-b-a-primary ti-c-primary ti-px8 ti-py4">
                    {{ oneGroup.type }}
                  </div>
                </div>
                <div v-for="(oneApiArr, key) in oneGroup" :key="key">
                  <template v-if="key !== 'name' && key !== 'type' && oneApiArr.length > 0">
                    <div class="ti-f18 ti-py28" :id="`${oneGroup.name}--${key}`">
                      {{ key }}
                    </div>
                    <tiny-grid class="api-table" :data="tableData[oneGroup.name][key]" :expand-config="apiExpandConf">
                      <tiny-grid-column
                        v-if="tableData[oneGroup.name][key][0]?.type"
                        class-name="api-table-expand-col"
                        type="expand"
                        width="32"
                      >
                        <template #default="{ row }">
                          <async-highlight v-if="row.code" :code="row.code.trim()" types="ts"></async-highlight>
                        </template>
                      </tiny-grid-column>
                      <tiny-grid-column field="name" :title="i18nByKey('name')" :width="columnWidth[key][0]">
                        <template #default="{ row }">
                          <span class="api-table-name">
                            <a v-if="row.demoId" @click="jumpToDemo(row.demoId)">{{ row.name }}</a>
                            <span v-else>{{ row.name }}</span>
                          </span>
                          <version-tip
                            v-if="row.metaData || row.versionTipOption"
                            :meta-data="row.metaData"
                            v-bind="row.versionTipOption"
                            render-type="tag"
                            tip-subject="api"
                          >
                          </version-tip>
                        </template>
                      </tiny-grid-column>
                      <tiny-grid-column
                        v-if="tableData[oneGroup.name][key][0]?.type"
                        field="type"
                        :title="i18nByKey('propType')"
                        :width="columnWidth[key][1]"
                      >
                        <template #default="{ row }">
                          <a
                            v-if="row.typeAnchorName"
                            :href="`${row.typeAnchorName.indexOf('#') === -1 ? '#' : ''}${row.typeAnchorName}`"
                            v-html="row.type"
                          ></a>
                          <span v-else v-html="row.type"></span>
                        </template>
                      </tiny-grid-column>
                      <tiny-grid-column
                        v-if="key === 'props'"
                        field="defaultValue"
                        :title="i18nByKey('defValue')"
                        :width="columnWidth[key][2]"
                      ></tiny-grid-column>
                      <tiny-grid-column field="desc" :title="i18nByKey('desc')"></tiny-grid-column>
                    </tiny-grid>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <tiny-tabs v-else v-model="activeTab" ref="demoTabs" class="docs-content-tabs" @click="onTabsClick">
            <tiny-tab-item :title="i18nByKey('demos')" name="demos">
              <!-- demos列表 -->
              <template v-if="currJson?.demos?.length">
                <div class="all-demos-container" id="all-demos-container">
                  <div v-if="apiModeState.demoMode === 'default'" id="demo-list" class="ti-f-c ti-f-wrap demo-list">
                    <demo
                      v-for="demo in currJson.demos"
                      :key="demo.name"
                      :demo="demo"
                      :curr-demo-id="currDemoId"
                      class="mb32"
                    />
                  </div>
                  <div v-else>
                    <demo v-if="singleDemo" :key="singleDemo.name" :demo="singleDemo" />
                  </div>
                </div>
              </template>

              <!-- 贡献者 -->
              <div class="cmp-contributor" v-if="contributors.length">
                <h2 class="cmp-contributor-title">{{ i18nByKey('contributor') }}</h2>
                <template v-for="item in contributors" :key="item.id">
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
            <tiny-tab-item v-if="showApiTab && !isRunningTest" title="API" name="api">
              <!-- api文档 -->
              <div id="API" class="all-api-container">
                <div class="ti-f-c ti-f-wrap api-list">
                  <!-- apis 是一个数组 {name,type,properties:[原table内容],events:[] ...........} -->
                  <div class="mt20" v-for="oneGroup in currJson.apis" :key="oneGroup.name">
                    <div class="ti-f-r ti-f-pos-start ti-fw-bold">
                      <div :id="`cmp-${oneGroup.name}`" class="ti-f18">
                        {{ oneGroup.name }}
                      </div>
                      <div class="ti-ml12 ti-b-a-primary ti-c-primary ti-px8 ti-py4">
                        {{ oneGroup.type }}
                      </div>
                    </div>
                    <div v-for="(oneApiArr, key) in oneGroup" :key="key">
                      <template v-if="!['name', 'type'].includes(key) && oneApiArr.length > 0">
                        <div class="ti-f18 ti-py28" :id="`${oneGroup.name}--${key}`">
                          {{ key }}
                        </div>
                        <tiny-grid
                          ref="apiTableRef"
                          class="api-table"
                          :data="tableData[oneGroup.name][key]"
                          :expand-config="apiExpandConf"
                          row-id="name"
                        >
                          <tiny-grid-column class-name="api-table-expand-col" type="expand" width="32">
                            <template #default="{ row }">
                              <async-highlight v-if="row.code" :code="row.code.trim()" types="ts"></async-highlight>
                              <div v-if="row.depTypes">
                                <async-highlight
                                  v-for="(k, i) in row.depTypes"
                                  :key="i"
                                  :code="currJson.types[k]?.code"
                                  types="ts"
                                ></async-highlight>
                              </div>
                            </template>
                          </tiny-grid-column>
                          <tiny-grid-column field="name" :title="i18nByKey('name')" :width="columnWidth[key][0]">
                            <template #default="{ row }">
                              <span class="api-table-name">
                                <a v-if="row.demoId" @click="jumpToDemo(row.demoId)">{{ row.name }}</a>
                                <span v-else>{{ row.name }}</span>
                              </span>
                              <version-tip
                                v-if="row.metaData || row.versionTipOption"
                                :meta-data="row.metaData"
                                v-bind="row.versionTipOption"
                                render-type="tag"
                                tip-subject="api"
                              >
                              </version-tip>
                            </template>
                          </tiny-grid-column>
                          <tiny-grid-column
                            v-if="tableData[oneGroup.name][key].find((i) => i.type)"
                            field="type"
                            :title="i18nByKey('propType')"
                            :width="columnWidth[key][1]"
                          >
                            <template #default="{ row }">
                              <span
                                :class="{ 'type-link': row.typeAnchorName || row.linkTo }"
                                :id="row.typeAnchorName ? row.type : ''"
                                @click="toOuterType(row)"
                                >{{ row.type }} <icon-outer-link v-if="row.linkTo"></icon-outer-link
                              ></span>
                            </template>
                          </tiny-grid-column>
                          <tiny-grid-column
                            v-if="key === 'props'"
                            field="defaultValue"
                            :title="i18nByKey('defValue')"
                            :width="columnWidth[key][2]"
                          ></tiny-grid-column>
                          <tiny-grid-column field="desc" :title="i18nByKey('desc')"></tiny-grid-column>
                        </tiny-grid>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </tiny-tab-item>
          </tiny-tabs>
        </div>
        <!-- demo与api目录锚点 -->
        <div class="cmp-page-anchor catalog" v-if="currAnchorLinks.length">
          <tiny-anchor
            id="anchor"
            :links="currAnchorLinks"
            :key="anchorRefreshKey"
            :is-affix="anchorAffix"
            type="dot"
            mask-class="custom-active-anchor"
            container-id="#doc-layout"
            @link-click="handleAnchorClick"
          >
          </tiny-anchor>
        </div>
      </div>

      <h2 id="FAQ" v-if="cmpFAQMd" class="ti-f30 ti-fw-normal ti-mt28 ti-mb20">FAQ</h2>
      <div class="markdown-body" v-html="cmpFAQMd"></div>
      <div v-if="currJson.owner" class="ti-abs ti-right24 ti-top24" @click="copyText(currJson.owner)">
        {{ i18nByKey('doc-owner') }} : {{ currJson.owner }}
      </div>
    </div>
  </div>
  <div id="footer"></div>
</template>

<script lang="jsx">
import { defineComponent, reactive, computed, toRefs, watch, onMounted, ref, onUnmounted, nextTick } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import { Anchor, ButtonGroup, Grid, GridColumn, Tabs, TabItem, Tooltip } from '@opentiny/vue'
import { iconOuterLink } from '@opentiny/vue-icon'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'
import { i18nByKey, getWord, $clone, fetchDemosFile, useApiMode, useTemplateMode, getCmpContributors } from '@/tools'
import demo from '@/views/components/demo'
import { router } from '@/router.js'
import { faqMdConfig, getWebdocPath } from './cmp-config'
import AsyncHighlight from './async-highlight.vue'
import VersionTip from './VersionTip.vue'

export default defineComponent({
  name: 'CmpPageVue',
  components: {
    Demo: demo,
    TinyAnchor: Anchor,
    TinyButtonGroup: ButtonGroup,
    TinyTabs: Tabs,
    TinyTabItem: TabItem,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyTooltip: Tooltip,
    IconOuterLink: iconOuterLink(),
    AsyncHighlight,
    VersionTip
  },
  setup() {
    const isRunningTest = localStorage.getItem('tiny-e2e-test') === 'true'
    const anchorRefreshKey = ref(0)
    const apiTableRef = ref()
    const state = reactive({
      webDocPath: computed(() => ''),
      langKey: getWord('zh-CN', 'en-US'),
      cmpId: '',
      currJson: { column: 1, demos: [], apis: [], types: {} },
      cmpTopMd: null,
      cmpFAQMd: null,
      evenDemo: computed(() => state.currJson.demos?.filter((d, i) => i % 2 === 0) || []),
      oddDemo: computed(() => state.currJson.demos?.filter((d, i) => i % 2 === 1) || []),
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
      apiAnchorLinks: computed(() => getApiAnchorLinks()),
      anchorAffix: true,
      currAnchorLinks: computed(() => (state.activeTab === 'demos' ? state.demoAnchorLinks : state.apiAnchorLinks)),
      // 单demo显示时
      singleDemo: null,
      activeTab: 'demos',
      tableData: {},
      currApiTypes: [],
      showApiTab: computed(() => state.currApiTypes.length),
      columnWidth: {
        props: ['15%', '20%', '15%'],
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
      contributors: [] // 贡献者
    })

    const { apiModeState } = useApiMode()
    const { templateModeState, staticPath, optionsList } = useTemplateMode()

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
              const { name, type, defaultValue, desc, demoId, typeAnchorName, linkTo, metaData, versionTipOption } = i
              const item = {
                name,
                type,
                defaultValue: defaultValue || '--',
                desc: desc[state.langKey],
                demoId,
                metaData,
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
          document.getElementById('doc-layout').scrollTo({
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
          } catch (err) {
            // eslint-disable-next-line no-console
            console.log('querySelector has special character:', err)
          }
          if (scrollTarget && !isRunningTest) {
            document.getElementById('doc-layout').scrollTo({
              top: scrollTarget.offsetTop,
              left: 0,
              behavior: 'smooth'
            })
          }
        }
      }, 600)
    }

    // 在singleDemo情况时，才需要滚动示例区域到顶
    const scrollToLayoutTop = () => {
      let hash = router.currentRoute.value.hash?.slice(1)
      if (hash !== 'API') {
        setTimeout(() => {
          document.getElementById('doc-layout').scrollTo({
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
      // 兼容ts文档
      if (['interfaces', 'types', 'classes'].includes(state.cmpId)) {
        state.activeTab = 'apis'
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

          // F5刷新加载时，跳到当前示例
          scrollByHash(hash)
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
      const docLayout = document.getElementById('doc-layout')
      const { scrollTop, scrollHeight, clientHeight: layoutHeight } = docLayout
      const headerHeight = document.querySelector('.docs-header')?.clientHeight || 0
      const footerHeight = document.getElementById('footer')?.clientHeight || 0
      const anchorHeight = document.querySelector('#anchor')?.clientHeight || 0
      const remainHeight = scrollHeight - scrollTop - layoutHeight // doc-layout视口下隐藏的部分高度
      state.anchorAffix = layoutHeight - headerHeight - (footerHeight - remainHeight) > anchorHeight
    })

    const setScrollListener = () => {
      nextTick(() => {
        const docLayout = document.getElementById('doc-layout')
        if (docLayout) {
          docLayout.addEventListener('scroll', onDocLayoutScroll)
        }
      })
    }

    const removeScrollListener = () => {
      const docLayout = document.getElementById('doc-layout')
      if (docLayout) {
        docLayout.removeEventListener('scroll', onDocLayoutScroll)
      }
    }

    const fn = {
      copyText: (text) => {
        navigator.clipboard.writeText(text)
      },
      onTabsClick: () => {
        scrollToLayoutTop()
      },
      // 点击 api区域的 name列时
      jumpToDemo: (demoId) => {
        state.activeTab = 'demos'
        if (demoId.startsWith('chart') || demoId.startsWith('grid')) {
          router.push(demoId)
        } else {
          router.push(`#${demoId}`)
          if (apiModeState.demoMode === 'single') {
            state.singleDemo = state.currJson.demos.find((d) => d.demoId === demoId)
          }
          scrollByHash(demoId)
        }
      },

      // 跳转到其他组件的api
      toOuterType(row) {
        if (!row.linkTo) {
          return
        }

        router.push(row.linkTo)
      },

      // 目录列表上的点击
      handleAnchorClick: (e, data) => {
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
          const hash = data.link.slice(1)
          state.currDemoId = hash
          state.singleDemo = state.currJson.demos.find((d) => d.demoId === hash)

          e.preventDefault()
        }
      }
    }

    watch(
      () => router.currentRoute.value.params.cmpId,
      (cmpId) => {
        if (!cmpId) {
          state.currJson = {}
        } else {
          loadPage()
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
      const common = new window.TDCommon(['#footer'], {})
      common.renderFooter()
      setScrollListener()
    })

    onUnmounted(() => {
      removeScrollListener()
    })

    const hasKey = (apiArr, key) => !apiArr.every((item) => item[key] === undefined)

    return {
      ...toRefs(state),
      ...fn,
      i18nByKey,
      anchorRefreshKey,
      apiModeState,
      templateModeState,
      optionsList,
      hasKey,
      isRunningTest,
      apiTableRef
    }
  }
})
</script>

<style lang="less" scoped>
.docs-header {
  position: sticky;
  top: 0;
  z-index: var(--docs-header-zindex);
  padding: var(--ti-common-space-4x) var(--ti-common-space-10x);
  background-color: #fff;
  box-shadow: var(--ti-common-space-3x) 0 var(--ti-common-space-5x) var(--ti-common-space-6) rgba(0, 0, 0, 0.06);

  .docs-title-wrap {
    flex: 1;
    min-width: var(--layout-content-main-min-width);
    max-width: var(--layout-content-main-max-width);
    margin: 0 auto;
  }

  .markdown-top-body {
    z-index: var(--docs-markdown-top-body-zindex);
    font-size: var(--ti-common-font-size-1);
    transition: all ease-in-out 0.3s;

    :deep(h1) {
      margin: 0;
      padding: 0;
      font-size: var(--ti-common-font-size-5);
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
  margin: var(--ti-common-space-4x) 0 120px;
  transition: all ease-in-out 0.3s;

  .docs-tabs-wrap {
    flex: 1;
    display: flex;
    justify-content: center;
    min-width: 680px;
    padding: 0 var(--ti-common-space-10x);
  }

  .docs-content-tabs {
    --ti-tabs-heigh: 48px;
    --ti-tabs-item-font-size: var(--ti-common-font-size-3);
    --ti-tabs-header-font-active-text-color: #2f5bea;
    --ti-tabs-item-active-border-color: #2f5bea;

    flex: 1;
    transition: all ease-in-out 0.3s;
    min-width: var(--layout-content-main-min-width);
    max-width: var(--layout-content-main-max-width);

    :deep(> .tiny-tabs__header) {
      position: sticky;
      top: 90px;
      z-index: var(--docs-tabs-header-zindex);
      background-color: #fff;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: block;
        width: 100%;
        height: var(--ti-common-size-4x);
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

.api-table {
  --ti-grid-font-size: var(--ti-common-font-size-1);
  --ti-grid-default-header-column-height: var(--ti-common-size-10x);

  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid rgb(239, 239, 245);

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
    padding-left: var(--ti-common-space-4x);
  }

  :deep(.tiny-grid-body__expanded-cell) {
    background-color: var(--ti-common-color-bg-gray);
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
  padding-top: var(--ti-common-space-4x);

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
  padding-top: var(--ti-common-space-8x);
  scroll-behavior: smooth;
}

.all-api-container {
  padding-top: var(--ti-common-space-3x);
}

.flex-horizontal {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: var(--ti-common-space-4x);
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
    max-height: calc(100vh - 230px);
  }

  :deep(.tiny-anchor-link) {
    margin-bottom: 10px;
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
    margin-bottom: var(--ti-common-size-8x);
    font-size: var(--ti-common-font-size-4);
    font-weight: Semibold;
    color: #191919;
  }

  .cmp-contributor-item {
    width: 42px;
    height: 42px;
    margin-right: var(--ti-common-space-3x);
    margin-bottom: var(--ti-common-space-5x);
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
    font-size: var(--ti-common-font-size-1);
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
</style>

<template>
  <div>
    <div class="f-r pt48 pl48 pr48">
      <div class="fi-1 w0 rel cmp-container">
        <!-- 一个组件的文档:  描述md + demos + apis -->

        <div class="markdown-body markdown-top-body" v-loading="cmpTopMdShow" size="medium" v-html="cmpTopMd"></div>

        <template v-if="currJson?.demos?.length > 0">
          <div v-loading="currJsonShow" class="all-demos-container">
            <h2 class="f30 fw-normal !mb20">{{ $t('yan-shi') }}</h2>
            <div class="f-c f-wrap">
              <template v-if="currJson.column === '2'">
                <div class="one-demo-col2">
                  <div>
                    <demo v-for="demo in evenDemo" :key="demo.name" :demo="demo" />
                  </div>
                  <div>
                    <demo v-for="demo in oddDemo" :key="demo.name" :demo="demo" />
                  </div>
                </div>
              </template>
              <template v-else>
                <demo v-for="demo in currJson.demos" :key="demo.name" :demo="demo" class="mb16" />
              </template>
            </div>
          </div>
        </template>
        <template v-if="currJson.apis?.length > 0">
          <div id="API" ref="apiDiv">
            <h2 v-if="cmpId !== 'interfaces'" class="f30 fw-normal mt28">API</h2>
            <!-- apis 是一个数组 {name,type,properties:[原table内容],events:[] ...........} -->
            <div class="mt20" v-for="(oneGroup, idx) in currJson.apis" :key="oneGroup.name">
              <div class="f-r f-pos-start fw-bold">
                <div :id="oneGroup.name" class="f18">{{ oneGroup.name }}</div>
                <div class="ml12 b-a-primary c-primary px8 py4">{{ oneGroup.type }}</div>
              </div>
              <div v-for="(oneApiArr, key) in oneGroup" :key="key">
                <template v-if="key !== 'name' && key !== 'type' && oneApiArr.length > 0">
                  <div class="f18 py28">{{ key }}</div>
                  <table class="api-table">
                    <thead>
                      <tr v-if="key.includes('slots')">
                        <th width="15%">{{ $t('name') }}</th>
                        <th width="85%">{{ $t('desc') }}</th>
                      </tr>
                      <tr v-else-if="key.includes('events')">
                        <th width="15%">{{ $t('name') }}</th>
                        <th width="20%">{{ $t('propType') }}</th>
                        <th width="65%">{{ $t('desc') }}</th>
                      </tr>
                      <tr v-else>
                        <th width="15%">{{ $t('name') }}</th>
                        <th width="20%">{{ $t('propType') }}</th>
                        <th width="20%">{{ $t('defValue') }}</th>
                        <th width="45%">{{ $t('desc') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="row in oneApiArr" :key="row.name">
                        <td>
                          <a v-if="row.demoId" @click="jumpToDemo(row.demoId)">{{ row.name }}</a>
                          <span v-else>{{ row.name }}</span>
                        </td>
                        <td v-if="!key.includes('slots')"><span class="route-anchor" v-html="row.type"></span></td>
                        <td v-if="!key.includes('slots') && !key.includes('events')">
                          <span class="route-anchor" v-html="row.defaultValue"></span>
                        </td>
                        <td><span v-html="row.desc[langKey]"></span></td>
                      </tr>
                    </tbody>
                  </table>
                </template>
              </div>
            </div>
          </div>
        </template>
        <!-- types表格 -->
        <template v-if="currJson.types">
          <table class="types-table mt20">
            <thead>
              <tr>
                <th width="20%">{{ $t('name') }}</th>
                <th width="40%">{{ $t('typeValue') }}</th>
                <th width="40%">{{ $t('desc') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in oneApiArr" :key="row.name">
                <td>
                  <span v-html="row.name"></span>
                </td>
                <td><span v-html="row.value"></span></td>
                <td><span v-html="row.desc[langKey]"></span></td>
              </tr>
            </tbody>
          </table>
        </template>
        <h2 id="FAQ" v-if="cmpFAQMd" class="f30 fw-normal mt28 mb20">FAQ</h2>
        <div class="markdown-body" v-html="cmpFAQMd"></div>
        <div v-if="currJson.owner" class="abs right24 top24" @click="copyText(currJson.owner)">
          {{ $t('doc-owner') }} : {{ currJson.owner }}
        </div>
      </div>
      <!-- 目录列表 -->
      <div class="cmp-page-anchor catalog w128 sticky top32" v-if="cmpId !== 'types' && anchorLinks.length > 0">
        <tiny-anchor :is-affix="true" :links="anchorLinks" mask-class="custom-active-anchor"> </tiny-anchor>
      </div>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script lang="jsx">
import { defineComponent, reactive, computed, toRefs, watch, onMounted, onUnmounted, effectScope, nextTick } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { Loading, Anchor } from '@opentiny/vue'
import { $t, $t2, $clone, $split, fetchDemosFile } from '@/tools'
import demo from '@/views/components/demo'
import { router } from '@/router.js'
import { faqMdConfig, staticDemoPath, getWebdocPath } from './cmpConfig'

const state = reactive({
  webDocPath: computed(() => ''),
  langKey: $t2('zh-CN', 'en-US'),
  cmpId: '',
  currJson: { column: 1, demos: [], apis: [] },
  currJsonShow: true,
  cmpTopMd: null,
  cmpTopMdShow: true,
  cmpFAQMd: null,
  evenDemo: computed(() => state.currJson.demos?.filter((d, i) => i % 2 === 0) || []),
  oddDemo: computed(() => state.currJson.demos?.filter((d, i) => i % 2 === 1) || []),
  anchorLinks: computed(() => {
    const links =
      state.currJson?.demos?.map((demo) => ({
        key: demo.demoId,
        title: demo.name[state.langKey],
        link: `#${demo.demoId}`
      })) || []
    if (state.cmpId !== 'interfaces') {
      links.push({
        key: 'API',
        title: 'API',
        link: '#API'
      })
    }
    if (state.cmpFAQMd) {
      links.push({
        key: 'FAQ',
        title: 'FAQ',
        link: '#FAQ'
      })
    }
    if (state.cmpId === 'interfaces') {
      state.currJson.apis.forEach((api) => {
        links.push({
          key: api.name,
          title: api.name,
          link: `#${api.name}`
        })
      })
    }
    return links
  }),
  apiDiv: null
})

const loadPage = () => {
  const lang = $t2('cn', 'en')

  state.cmpTopMdShow = state.currJsonShow = true
  state.cmpId = router.currentRoute.value.params.cmpId

  fetchDemosFile(`${staticDemoPath}/${getWebdocPath(state.cmpId)}/webdoc/${state.cmpId}.${lang}.md`)
    .then((data) => {
      state.cmpTopMd = marked(DOMPurify.sanitize(data))
      state.cmpTopMdShow = false
    })
    .catch((error) => {
      state.cmpTopMdShow = false
    })

  if (faqMdConfig[state.cmpId]) {
    fetchDemosFile(`${staticDemoPath}/${getWebdocPath(state.cmpId)}/webdoc/${state.cmpId}.faq.${lang}.md`)
      .then((data) => {
        state.cmpFAQMd = marked(DOMPurify.sanitize(data))
      })
      .catch((error) => {})
  } else {
    state.cmpFAQMd = null
  }

  fetchDemosFile(`${staticDemoPath}/${getWebdocPath(state.cmpId)}/webdoc/${state.cmpId}.js`)
    .then((data) => {
      const json = eval('(' + data.slice(15) + ')')
      state.currJson = {
        ...json,
        demos: $clone(json.demos || []), // 克隆一下,避免保存上次的isOpen
        column: json.column || '1' // columns可能为空
      }
      state.currJsonShow = false
      if (state.cmpId?.startsWith('grid-')) {
        fetchDemosFile(`${staticDemoPath}/grid/webdoc/grid.js`).then((data) => {
          const gridJson = eval('(' + data.slice(15) + ')')
          state.currJson.apis = gridJson.apis
        })
      } else if (state.cmpId?.startsWith('chart-')) {
        fetchDemosFile(`${staticDemoPath}/chart/webdoc/chart.js`).then((data) => {
          const chartJson = eval('(' + data.slice(15) + ')')
          state.currJson.apis = chartJson.apis
        })
      }

      // 兼容#hashName和/#hashName两种模式
      setTimeout(() => {
        let hash = router.currentRoute.value.hash?.slice(1)

        if (!hash) return

        if (hash.includes('/')) {
          hash = hash.slice(1)
        }

        const scrollTarget = document.querySelector(`#${hash}`)

        if (scrollTarget) {
          scrollTarget.scrollIntoView()
        }
      }, 0)
    })
    .catch((error) => {
      console.log(error)
      state.currJsonShow = false
    })
}

const handleApiAnchor = (ev) => {
  if (ev.target.tagName === 'A' && ev.target.closest('.route-anchor')) {
    ev.preventDefault()
    const href = ev.target.getAttribute('href')
    const hash = $split(href, '#', -1)
    router.push(href)
    setTimeout(() => {
      const scrollTarget = document.querySelector('#' + hash)
      if (scrollTarget) {
        scrollTarget.scrollIntoView()
      }
    }, 16)
  }
}

const fn = {
  copyText: (text) => {
    navigator.clipboard.writeText(text)
  },
  jumpToDemo: (demoId) => {
    if (demoId.startsWith('chart') || demoId.startsWith('grid')) {
      router.push(demoId)
    } else {
      router.push(`#${demoId}`)
    }
  }
}

export default defineComponent({
  name: 'CmpPageVue',
  components: { Demo: demo, TinyAnchor: Anchor },
  directives: {
    loading: Loading.directive
  },
  setup() {
    const scope = effectScope()
    scope.run(() => {
      watch(
        () => router.currentRoute.value.params.cmpId,
        (cmpId) => {
          if (!cmpId) {
            state.currJson = {}
          } else {
            state.cmpFAQMdShow = state.cmpTopMdShow = state.currJsonShow = true
            loadPage()
          }
        }
      )
    })

    onMounted(() => {
      loadPage()
      const common = new window.TDCommon(['#footer'], {})
      common.renderFooter()
      nextTick(() => {
        state.apiDiv?.addEventListener('click', handleApiAnchor)
      })
    })
    onUnmounted(() => {
      scope.stop()
      state.apiDiv?.removeEventListener('click', handleApiAnchor)
    })
    return {
      ...toRefs(state),
      ...fn,
      $t
    }
  }
})
</script>

<style lang="less">
.types-table,
.api-table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid rgb(239, 239, 245);

  a {
    text-decoration: none;
    color: #5e7ce0;
    cursor: pointer;
  }

  tbody tr:hover {
    background-color: rgb(250, 250, 252);
  }
  th {
    background-color: rgb(250, 250, 252);
    border-bottom: 1px solid rgb(239, 239, 245);
    padding: 12px;
    text-align: left;
    font-size: 14px;
    line-height: 1.5;
    word-break: break-word;
  }
  td {
    font-size: 14px;
    border-bottom: 1px solid rgb(239, 239, 245);
    padding: 12px;
    line-height: 1.5;
  }
}

.catalog {
  height: calc(100vh - 150px);
  overflow: hidden;
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

.cmp-container {
  padding-right: 24px;
  p {
    font-size: 16px;
    line-height: 1.7em;
    margin: 16px 0;
  }
}
.cmp-page-anchor {
  .tiny-anchor__affix {
    overflow-y: auto;
    max-height: 80vh;
  }
  .tiny-anchor-link {
    margin-bottom: 10px;
    max-width: 150px;
    font-size: 12px;
    a {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

@media (max-width: 1279px) {
  .catalog {
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

.markdown-top-body,
.all-demos-container {
  & > .tiny-loading svg {
    height: 36px;
    width: 36px;
  }
}
.all-demos-container {
  margin-top: 24px;
}

.custom-block.tip {
  background-color: #f3f5f7;
  border-color: #42b983;
  border-radius: 0;
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
  font-size: 14px;
  color: #5e6d82;
  .custom-block-title {
    font-weight: 600;
  }
  p {
    margin: 16px 0;
    font-size: 16px;
    line-height: 1.7em;
  }
}
</style>

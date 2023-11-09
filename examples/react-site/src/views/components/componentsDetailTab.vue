<template>
  <div class="f-r pt48 pl48 pr48">
    <div class="fi-1 w0 rel cmp-container" id="cmp-container">
      <n-tabs default-value="MarkDown" ref="tabInstRef" v-model:value="currTab" type="card" size="large" tab-style="{width:100%}">
        <n-tab-pane name="MarkDown" :tab="tabTitle">
          <!-- 一个组件的文档:  描述md + demos + apis -->
          <n-space vertical>
            <n-spin :show="cmpTopMdShow">
              <div class="markdown-body" v-html="cmpTopMd"></div>
            </n-spin>
          </n-space>
          <template v-if="currJson?.demos?.length > 0">
            <n-space vertical>
              <n-spin :show="currJsonShow">
                <h2 class="f30 fw-normal !mb20">{{ $t('yan-shi') }}</h2>
                <n-layout class="f-c f-wrap ofx-auto" :native-scrollbar="true">
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
                </n-layout>
              </n-spin>
            </n-space>
          </template>
          <template v-if="currJson.apis?.length > 0">
            <div ref="apiDiv">
              <h2 id="API" v-if="cmpId !== 'interfaces'" class="f30 fw-normal mt28">API</h2>
              <!-- apis 是一个数组 {name,type,properties:[原table内容],events:[] ...........} -->
              <div class="mt20" v-for="oneGroup in currJson.apis" :key="oneGroup.name">
                <div class="f-r f-pos-start fw-bold">
                  <div :id="oneGroup.name" class="f18">{{ oneGroup.name }}</div>
                  <div class="ml12 b-a-primary c-primary px8 py4">{{ oneGroup.type }}</div>
                </div>
                <div v-for="(oneApiArr, key) in oneGroup" :key="key">
                  <template v-if="key !== 'name' && key !== 'type' && oneApiArr.length > 0">
                    <div class="f18 py28">{{ key }}</div>
                    <n-data-table class="api-table" v-bind="getApiTableOpt(oneApiArr)" />
                  </template>
                </div>
              </div>
            </div>
          </template>
          <!-- types表格 -->
          <template v-if="currJson.types">
            <n-data-table class="types-table mt20" v-bind="getTypesTableOpt(currJson.types)" />
          </template>
          <h2 id="FAQ" v-if="cmpFAQMd" class="f30 fw-normal mt28 mb20">FAQ</h2>
          <div class="markdown-body" v-html="cmpFAQMd"></div>
          <div v-if="currJson.owner" class="abs right24 top24" @click="copyText(currJson.owner)">{{ $t('doc-owner') }} : {{ currJson.owner }}</div>
        </n-tab-pane>
        <n-tab-pane name="standard" display-directive="show:lazy" tab="规范示例">
          <n-space vertical>
            <div class="standard-md markdown-body mt24" v-if="standardMd" v-html="standardMd"></div>
            <div class="standard-link" v-else>
              点击查看规范说明：
              <a :href="standard ? standard[langKey].link : ''" target="_blank">{{ standard ? standard[langKey].link : '' }}</a>
            </div>
          </n-space>
        </n-tab-pane>
      </n-tabs>
    </div>
    <!-- 目录列表 -->
    <div class="cmp-page-anchor catalog w128 sticky top32" v-if="cmpId !== 'types'">
      <n-anchor :show-rail="true" offset-target="#doc-layout" :ignore-gap="true" :show-background="true">
        <n-anchor-link v-for="demo in currJson.demos || []" :key="demo.demoId" :title="demo.name[langKey]" :href="'#' + demo.demoId" />
        <n-anchor-link v-if="cmpId !== 'interfaces'" title="API" href="#API" />
        <n-anchor-link v-if="cmpFAQMd" title="FAQ" href="#FAQ" />
        <!-- 接口特殊的导航 -->
        <template v-if="cmpId === 'interfaces'">
          <n-anchor-link v-for="api in currJson.apis || []" :key="api.name" :title="api.name" :href="'#' + api.name" />
        </template>
      </n-anchor>
    </div>
  </div>
</template>
<script lang="jsx">
import { defineComponent, reactive, computed, toRefs, watch, onMounted, onUnmounted, effectScope, nextTick, h } from 'vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import demo from '@demo';
import { $t, $t2, $clone, $split, fetchDemosFile } from '@/tools';
import { router } from '@/router.js';
import { faqMdConfig } from './cmpConfig';

const state = reactive({
  langKey: $t2('zh-CN', 'en-US'),
  cmpId: '',
  currJson: { column: 1, demos: [], apis: [] },
  currJsonShow: true,
  cmpTopMd: null,
  cmpTopMdShow: true,
  cmpFAQMd: null,
  evenDemo: computed(() => state.currJson.demos?.filter((d, i) => i % 2 === 0) || []),
  oddDemo: computed(() => state.currJson.demos?.filter((d, i) => i % 2 === 1) || []),
  apiDiv: null,
  tabTitle: null,
  currTab: 'MarkDown',
  standard: {},
  standardMd: null,
});

const getTypesTableOptFn = typesArr => {
  return {
    columns: [
      {
        key: 'name',
        title: $t('name'),
        width: '20%',
        render: row => <div v-html={row.name}></div>,
      },
      {
        key: 'value',
        title: $t('typeValue'),
        width: '40%',
        render: row => <div v-html={row.value}></div>,
      },
      {
        key: 'desc',
        title: $t('desc'),
        width: '40%',
        render: row => <div v-html={row.desc[state.langKey]}> </div>,
      },
    ],
    data: typesArr,
  };
};

const getApiTableOptFn = oneApiArr => {
  return {
    columns: [
      {
        key: 'name',
        title: $t('name'),
        width: '20%',
        render: row => {
          return row.demoId ? <a href={'#' + row.demoId}> {row.name} </a> : <span> {row.name} </span>;
        },
      },
      {
        key: 'type',
        title: $t('propType'),
        width: '25%',
        render: row => <div class="route-anchor" v-html={row.type}></div>,
      },
      {
        key: 'defaultValue',
        title: $t('defValue'),
        width: '20%',
        render: row => <div class="route-anchor" v-html={typeof row.defaultValue === 'string' ? row.defaultValue : row.defaultValue[state.langKey]}></div>,
      },
      {
        key: 'desc',
        title: $t('desc'),
        width: '35%',
        render: row => <div class="route-anchor" v-html={row.desc[state.langKey]}></div>,
      },
    ],
    data: oneApiArr,
  };
};

const loadPage = () => {
  const lang = $t2('cn', 'en');

  state.cmpTopMdShow = state.currJsonShow = true;
  state.cmpId = router.currentRoute.value.params.cmpId;

  fetchDemosFile(`@demos/app/${state.cmpId}/webdoc/${state.cmpId}.${lang}.md`)
    .then(data => {
      state.cmpTopMd = marked(DOMPurify.sanitize(data));
      state.cmpTopMdShow = false;
      state.tabTitle = getTitleFromMd(data) || state.cmpId;
    })
    .catch(error => {
      state.cmpTopMdShow = false;
    });

  if (faqMdConfig[state.cmpId]) {
    fetchDemosFile(`@demos/app/${state.cmpId}/webdoc/${state.cmpId}.faq.${lang}.md`)
      .then(data => {
        state.cmpFAQMd = marked(DOMPurify.sanitize(data));
      })
      .catch(error => {
        return;
      });
  } else {
    state.cmpFAQMd = null;
  }

  fetchDemosFile(`@demos/app/${state.cmpId}/webdoc/${state.cmpId}.js`)
    .then(data => {
      const json = eval('(' + data.slice(15) + ')');

      state.currJson = {
        ...json,
        demos: $clone(json['demos'] || []), // 克隆一下,避免保存上次的isOpen
        column: json.column || '1', // columns可能为空
        title: json.title || state.cmpId,
      };
      if (json.standard) {
        state.standard = $clone(json['standard'] || []);
        if (state.standard[state.langKey].file) {
          fetchDemosFile(`@demos/app/${state.cmpId}/webdoc/${state.standard[state.langKey].file}`)
            .then(data => {
              state.standardMd = marked(DOMPurify.sanitize(data));
            })
            .catch(error => {
              return;
            });
        } else {
          state.standardMd = null;
        }
      } else {
        state.standard = null;
        state.standardMd = null;
      }
      state.currJsonShow = false;

      // 兼容#hashName和/#hashName两种模式
      setTimeout(() => {
        let hash = router.currentRoute.value.hash?.slice(1);

        if (!hash) return;

        if (hash.indexOf('/') > -1) {
          hash = hash.slice(1);
        }

        const scrollTarget = document.querySelector(`#${hash}`);

        if (scrollTarget) {
          scrollTarget.scrollIntoView();
        }
      }, 0);
    })
    .catch(error => {
      state.currJsonShow = false;
    });
};
const getTitleFromMd = markdown => {
  const titleRegex = /^#\s+(.*)/m;
  const match = titleRegex.exec(markdown);
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
};
const handleApiAnchor = ev => {
  if (ev.target.tagName === 'A' && ev.target.closest('.route-anchor')) {
    ev.preventDefault();
    const href = ev.target.getAttribute('href');
    const hash = $split(href, '#', -1);
    router.push(href);
    setTimeout(() => {
      const scrollTarget = document.querySelector('#' + hash);
      if (scrollTarget) {
        scrollTarget.scrollIntoView();
      }
    });
  }
};

const fn = {
  copyText: text => {
    navigator.clipboard.writeText(text);
  },
  getApiTableOpt: oneApiArr => {
    return getApiTableOptFn(oneApiArr);
  },
  getTypesTableOpt: typesArr => {
    return getTypesTableOptFn(typesArr);
  },
};

export default defineComponent({
  name: 'CmpDetailTab',
  components: { demo },
  setup() {
    const scope = effectScope();
    scope.run(() => {
      watch(
        () => router.currentRoute.value.params.cmpId,
        cmpId => {
          state.currTab = 'MarkDown';
          if (!cmpId) {
            state.currJson = {};
          } else {
            state.cmpFAQMdShow = state.cmpTopMdShow = state.currJsonShow = true;
            loadPage();
          }
        }
      );
      watch(
        () => router.currentRoute.value.hash,
        hash => {
          if (hash) {
            state.currTab = 'MarkDown';
          }
        }
      );
    });

    onMounted(() => {
      loadPage();
      nextTick(() => {
        state.apiDiv?.addEventListener('click', handleApiAnchor);
      });
    });
    onUnmounted(() => {
      scope.stop();
      state.apiDiv?.removeEventListener('click', handleApiAnchor);
    });
    return {
      ...toRefs(state),
      ...fn,
    };
  },
});
</script>
<style lang="less">
.doc-container {
  min-height: 600px;
}
.types-table a,
.api-table a {
  text-decoration: none;
  color: #5e7ce0;
  cursor: pointer;
}

.n-data-table-td {
  vertical-align: middle !important;
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

.n-anchor .n-anchor-link .n-anchor-link__title {
  font-size: 12px;
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
.n-tabs .ntabs-nav.n-tabs-nav--card-type .n-tabs-tab.n-tabs-tab--active {
  color: #5073e5;
}
.cmp-container {
  padding-right: 24px;
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
</style>

<template>
  <div class="wp100 hp100 f-r of-hidden">
    <div class="w230 pt20 of-auto">
      <tiny-tree-menu
        class="!w213"
        :data="menuData"
        :filter-node-method="fn.searchMenu"
        @current-change="fn.clickMenu"
      ></tiny-tree-menu>
    </div>
    <div class="fi-1 f-c px20 pb30 f-c pr200 of-auto" ref="rightRef">
      <!-- 标题 -->
      <div class="py20 f24 fw-bold text-center">
        <component :is="state.currMd" class="component-md"></component>
      </div>
      <div id="preview" class="bg-white f-c">
        <!-- 标题 + 组件说明  -->
        <div class="mb20 py10 pl16 child<code>p4 child<code>bg-lightless">
          <div class="mr20 fw-bold">
            {{ state.currDemo?.name['zh-CN'] }}
            (<span class="allselect">{{ state.currDemo?.codeFiles[0] }}</span
            >):
          </div>
          <div v-html="state.currDemo?.desc['zh-CN']"></div>
        </div>
        <!-- 预览  -->
        <div class="rel px20 py60 b-a bs-dotted">
          <div class="abs top10 right10">
            <span title="点击在vscode中打开">
              <IconOpeninVscode @click="fn.openInVscode(state.currDemo)" class="ml12 cur-hand" />
            </span>
          </div>
          <config-provider :design="design">
            <component :is="state.comp" v-loading="state.demoLoading"></component>
          </config-provider>
        </div>
      </div>
      <!-- API表格 -->
      <div v-if="state.currApi?.length" class="mt20 f24 fw-bold">组件API</div>
      <div v-for="(oneGroup, idx) in state.currApi" :key="idx">
        <div class="mt20 f-r f-pos-start fw-bold">
          <div :id="oneGroup.name" class="f18">
            {{ oneGroup.name }}
          </div>
          <div class="ml12 b-a-primary c-primary px8 py4">
            {{ oneGroup.type }}
          </div>
        </div>
        <div v-for="(oneApiArr, key) in oneGroup" :key="key">
          <div v-if="key !== 'name' && key !== 'type' && oneApiArr.length > 0">
            <div class="f18 py28">
              {{ key }}
            </div>
            <table class="api-table">
              <thead>
                <tr>
                  <th width="20%">名称</th>
                  <th width="15%">类型</th>
                  <th width="20%">默认值</th>
                  <th width="55%">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in oneApiArr" :key="row.name">
                  <td>
                    <a v-if="row.demoId" class="c-primary h:c-error cur-hand" @click="fn.selectDemo(row.demoId)">{{
                      row.name
                    }}</a>
                    <span v-else>{{ row.name }}</span>
                  </td>
                  <td>{{ row.type }}</td>
                  <td>{{ row.defaultValue?.['zh-CN'] || row.defaultValue }}</td>
                  <td v-html="row.desc['zh-CN']"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边浮动所有的demos -->
    <tiny-floatbar v-if="state.demos.length > 0" class="!top120 !z1 !right25">
      <div class="f12 ofy-auto" style="max-height: calc(100vh - 240px)">
        <div
          v-for="demo in state.demos"
          :key="demo.demoId"
          @click="fn.selectDemo(demo.demoId)"
          class="w130 px10 py4 bg-light f-r f-pos-between"
          :class="{ 'c-error': state.currDemo === demo }"
        >
          <div class="link-primary h:c-error h:td-under ellipsis">
            {{ demo.name['zh-CN'] }}
            <Icon-star-icon v-if="state.currDemo === demo" style="fill: #ee343f" />
          </div>
          <IconOpeninVscode @click.stop="fn.openInVscode(demo)" class="f18 cur-hand" />
        </div>
      </div>
    </tiny-floatbar>
    <!-- 切换主题 -->
    <tiny-dropdown class="!fixed bottom20 right140" :show-icon="false" @item-click="changeTheme">
      <span title="切换主题">
        <SvgTheme></SvgTheme>
      </span>
      <template #dropdown>
        <tiny-dropdown-menu placement="top">
          <tiny-dropdown-item
            label="tiny-default-theme"
            class="minw160"
            :class="{ '!c-primary': currThemeLabel === 'tiny-default-theme' }"
          >
            Default Theme
          </tiny-dropdown-item>
          <tiny-dropdown-item
            label="tiny-aurora-theme"
            class="minw160"
            :class="{ '!c-primary': currThemeLabel === 'tiny-aurora-theme' }"
          >
            Aurora Theme
          </tiny-dropdown-item>
          <tiny-dropdown-item
            label="tiny-smb-theme"
            class="minw160"
            :class="{ '!c-primary': currThemeLabel === 'tiny-smb-theme' }"
          >
            SMB Theme
          </tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
  </div>
</template>

<script>
import { hooks } from '@opentiny/vue-common'
import {
  Floatbar,
  TreeMenu,
  Button,
  Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  ConfigProvider
} from '@opentiny/vue'
import { iconStarActive, iconSelect } from '@opentiny/vue-icon'
import Loading from '@opentiny/vue-loading'
import designSmbConfig from '@opentiny/vue-design-smb'
import designAuroraConfig from '@opentiny/vue-design-aurora'
import { menuData, apis, demoStr, demoVue, mds } from './resourcePc.js'
import { useTheme, useModeCtx } from './uses'
import SvgTheme from './assets/theme.svg'

const getPath = (path) => {
  if (path.startsWith('grid-')) {
    return 'grid'
  } else if (path.startsWith('chart-')) {
    return 'chart'
  }
  return path
}

export default {
  components: {
    TinyFloatbar: Floatbar,
    TinyTreeMenu: TreeMenu,
    TinyButton: Button,
    TinyTooltip: Tooltip,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    SvgTheme,
    IconStarIcon: iconStarActive(),
    IconOpeninVscode: iconSelect(),
    ConfigProvider
  },
  directives: {
    loading: Loading.directive
  },
  setup() {
    const { state: modeState, fn: modeFn } = useModeCtx()
    const { changeTheme, currThemeLabel } = useTheme()
    const rightRef = hooks.ref('')
    const state = hooks.reactive({
      demos: [], // 组件的所有示例  {component,content,demoId,findIntroStr,link,title}[]
      currDemo: null, // 选中的demo
      currApi: [], // 当前path下的api
      comp: null, // 当前示例的组件实例
      currDemoSrc: '',
      currMd: hooks.computed(() => mds[`${modeState.pathName}.cn.md`]),
      demoLoading: false
    })
    const fn = {
      // 菜单搜索：忽略大小写
      searchMenu: (value, data) => {
        if (!value) return true
        return data.label.toLowerCase().includes(value.toLowerCase())
      },
      // 点击菜单：如果是二级菜单，根据path 刷新整个页面内容
      clickMenu: async (menu) => {
        if (menu.nameCn && menu.key !== state.key) {
          modeState.pathName = menu.key
          await _switchPath()
        }
      },
      // 点击示例
      selectDemo: async (demoId) => {
        const demo = state.demos.find((d) => d.demoId === demoId)
        if (state.currDemo !== demo) {
          state.currDemo = demo
          await _switchDemo()
        }
      },
      openInVscode: (demo) => {
        fetch(`/__open-in-editor?file=../sites/demos/pc/app/${getPath(modeState.pathName)}/${demo.codeFiles[0]}`)
      }
    }

    hooks.onMounted(() => {
      _switchPath()
    })

    // 以下私有方法，无须传递给vue模板的。
    async function _switchPath() {
      state.demoLoading = true
      // 查找API
      const apiModule = apis[`../../sites/demos/pc/app/${getPath(modeState.pathName)}/webdoc/${modeState.pathName}.js`]

      if (apiModule) {
        const module = await apiModule()
        const apiRoot = module.default
        state.currApi = apiRoot.apis
        state.demos = apiRoot.demos || []
        state.currDemo = state.demos.find((d) => d.demoId === modeState.demoId) || state.demos?.[0]
      } else {
        state.currApi = null
        state.currDemos = []
      }

      await _switchDemo()
    }
    async function _switchDemo() {
      modeState.demoId = state.currDemo.demoId
      const path = `../../sites/demos/pc/app/${getPath(modeState.pathName)}/${state.currDemo?.codeFiles[0]}`

      // 查找源码  查找组件
      state.currDemoSrc = await demoStr[path]()
      const comp = await demoVue[path]()

      state.demoLoading = false
      state.comp = hooks.markRaw(comp.default)
      modeFn.cacheCtx()
      modeFn.pushToUrl()
    }

    const designConfigMap = {
      'tiny-smb-theme': designSmbConfig,
      'tiny-aurora-theme': designAuroraConfig
    }

    const lastThemeKey = localStorage.getItem('tinyThemeToolkey')

    return {
      menuData,
      state,
      fn,
      changeTheme,
      currThemeLabel,
      modeState,
      modeFn,
      rightRef,
      design: designConfigMap[lastThemeKey] || {}
    }
  }
}
</script>

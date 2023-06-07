<template>
  <div class="wp100 hp100 f-r of-hidden">
    <div class="w230 pt20 of-auto">
      <tiny-tree-menu class="!w213" :data="menuData" :filter-node-method="fn.searchMenu" @current-change="fn.clickMenu"></tiny-tree-menu>
    </div>
    <div class="fi-1 f-c px20 pb30 f-c pr200 of-auto" ref="rightRef">
      <!-- 标题 -->
      <div class="py20 f24 fw-bold text-center">
        {{ state.demos[0]?.component }}
      </div>
      <div id="preview" class="bg-white f-c">
        <!-- 标题 + 组件说明  -->
        <div class="mb20 py10 pl16 child<code>p4 child<code>bg-lightless">
          <div class="mr20 fw-bold">
            {{ state.currDemo?.title }}({{ state.currDemo?.demoId }}.vue ):
          </div>
          <div v-html="state.currDemo?.content"></div>
        </div>
        <!-- 预览  -->
        <div class="rel px20 py60 of-auto b-a bs-dotted">
          <div class="abs top10 right10">
            <span title="点击在vscode中打开">
              <IconOpeninVscode @click="fn.openInVscode(state.currDemo)" class="ml12 cur-hand" />
            </span>
          </div>
          <config-provider :design="design">
            <component :is="state.comp"></component>
          </config-provider>
        </div>
      </div>
      <!-- API表格 -->
      <div v-if="state.currApi" class="mt20 f24 fw-bold">
        组件API
      </div>
      <div v-for="(apiTable, key) in state.currApi" :key="key">
        <div class="my8 f22 fw-bold">
          {{ key }}
        </div>
        <tiny-grid :data="apiTable" border auto-resize>
          <tiny-grid-column field="name" width="15%" title="名称">
            <template #default="data">
              <a v-if="data.row.sample" class="c-primary h:c-error" @click="fn.selectDemo(data.row.sample)">{{
                data.row.name
              }}</a>
              <span v-else>{{ data.row.name }}</span>
            </template>
          </tiny-grid-column>
          <tiny-grid-column field="type" width="20%" title="类型"></tiny-grid-column>
          <tiny-grid-column field="defaultValue" width="20%" title="默认值"></tiny-grid-column>
          <tiny-grid-column field="desc" title="说明"></tiny-grid-column>
        </tiny-grid>
      </div>
    </div>
    <!-- 右边浮动所有的demos -->
    <tiny-floatbar v-if="state.demos.length > 0" class="!top120 !z1 !right25">
      <div class="f12 ofy-auto" style="max-height: calc(100vh - 240px)">
        <div v-for="demo in state.demos" :key="demo.demoId" @click="fn.selectDemo(demo.demoId)" class="w130 px10 py4 bg-light f-r f-pos-between" :class="{ 'c-error': state.currDemo === demo }">
          <div class="link-primary h:c-error h:td-under ellipsis">
            {{ demo.title }}
            <Icon-star-icon v-if="state.currDemo === demo" style="fill: #ee343f" />
          </div>
          <IconOpeninVscode @click.stop="fn.openInVscode(demo)" class="f18 cur-hand" />
        </div>
      </div>
    </tiny-floatbar>
    <!-- 切换主题 -->
    <tiny-dropdown class="!fixed bottom20 right140" @item-click="changeTheme">
      <span title="切换主题">
        <SvgTheme></SvgTheme>
      </span>
      <template #dropdown>
        <tiny-dropdown-menu placement="top">
          <tiny-dropdown-item label="tiny-default-theme" class="minw160" :class="{ '!c-primary': currThemeLabel === 'tiny-default-theme' }">
            Default Theme
          </tiny-dropdown-item>
          <tiny-dropdown-item label="tiny-aurora-theme" class="minw160" :class="{ '!c-primary': currThemeLabel === 'tiny-aurora-theme' }">
            Aurora Theme
          </tiny-dropdown-item>
          <tiny-dropdown-item label="tiny-smb-theme" class="minw160" :class="{ '!c-primary': currThemeLabel === 'tiny-smb-theme' }">
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
  Grid,
  GridColumn,
  Tooltip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  ConfigProvider
} from '@opentiny/vue'
import { iconStarActive, iconSelect } from '@opentiny/vue-icon'
import { menuData, zhDemo, demoVue, demoStr, zhApi } from './resourcePc.js'
import { useTheme, useModeCtx } from './uses'
import SvgTheme from './assets/theme.svg'
import designSmbConfig from '@opentiny/vue-design-smb'

export default {
  components: {
    TinyFloatbar: Floatbar,
    TinyTreeMenu: TreeMenu,
    TinyButton: Button,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyTooltip: Tooltip,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    SvgTheme,
    IconStarIcon: iconStarActive(),
    IconOpeninVscode: iconSelect(),
    ConfigProvider
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
      currDemoSrc: ''
    })
    const fn = {
      // 菜单搜索：忽略大小写
      searchMenu: (value, data) => {
        if (!value) return true
        return data.label.toLowerCase().includes(value.toLowerCase())
      },
      // 点击菜单：如果是二级菜单，根据path 刷新整个页面内容
      clickMenu: async (menu) => {
        if (menu.path && menu.path !== modeState.pathName) {
          modeState.pathName = menu.path.slice(1)
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
        fetch(`/__open-in-editor?file=../docs/resources/pc/demo/${demo.link}.vue`)
      }
    }

    hooks.onMounted(() => {
      _switchPath()
    })

    // 以下私有方法，无须传递给vue模板的。
    async function _switchPath() {
      // 查找API
      const apiModule = zhApi[`../resources/pc/api/zh-CN/${modeState.pathName}.json`]
      if (apiModule) {
        const api = await apiModule()
        state.currApi = api.default
      } else {
        state.currApi = null
      }

      // 查找demo配置，并默认进入第一个 demo
      const demosJson = await zhDemo[`../resources/pc/demo-config/zh-CN/${modeState.pathName}.json`]()
      state.demos = demosJson.default
      state.currDemo = state.demos.find((d) => d.demoId === modeState.demoId) || state.demos[0]
      state.comp = null
      await _switchDemo()
    }
    async function _switchDemo() {
      modeState.demoId = state.currDemo.demoId
      // 查找源码
      state.currDemoSrc = await demoStr[`../resources/pc/demo/${state.currDemo.link}.vue`]()

      // 查找组件
      const comp = await demoVue[`../resources/pc/demo/${state.currDemo.link}.vue`]()
      state.comp = hooks.markRaw(comp.default)

      // 让内容区滚动到顶部
      setTimeout(() => rightRef.value && rightRef.value.scrollTo({ left: 0, top: 0, behavior: 'smooth' }), 0)

      modeFn.cacheCtx()
      modeFn.pushToUrl()
    }

    const designConfigMap = {
      'tiny-smb-theme': designSmbConfig
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

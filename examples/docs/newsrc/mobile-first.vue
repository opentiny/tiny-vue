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
    <div class="fi-1 f-c px20 pb30 f-c pr200 of-auto">
      <!-- 标题 -->
      <div class="py20 f24 fw-bold text-center">
        {{ modeState.pathName }}
      </div>
      <div id="preview" class="bg-white">
        <div class="mb20 py10 pl16 child<code>p4 child<code>bg-lightless">
          <div class="mr20 fw-bold">{{ state.currDemo?.name['zh-CN'] }}({{ state.currDemo?.codeFiles[0] }}):</div>
          <div v-html="state.currDemo?.desc['zh-CN']"></div>
        </div>
        <!-- 预览 -->
        <div class="rel px20">
          <component :is="state.comp"></component>
        </div>
      </div>
      <!-- API表格 -->
      <div v-if="state.currApi.length" class="my20 f24 fw-bold">组件API</div>

      <div v-for="(oneGroup, idx) in state.currApi" :key="idx">
        <div class="f-r f-pos-start fw-bold">
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
            <tiny-grid :data="oneApiArr" border auto-resize>
              <tiny-grid-column field="name" width="15%" title="名称">
                <template #default="data">
                  <a v-if="data.row.demoId" class="c-primary h:c-error" @click="fn.selectDemo(data.row.demoId)">{{
                    data.row.name
                  }}</a>
                  <span v-else>{{ data.row.name }}</span>
                </template>
              </tiny-grid-column>
              <tiny-grid-column field="type" width="20%" title="类型"></tiny-grid-column>
              <tiny-grid-column field="defaultValue" width="20%" title="默认值"></tiny-grid-column>
              <tiny-grid-column field="desc" title="说明">
                <template #default="{ row }">
                  <div v-html="row.desc['zh-CN']"></div>
                </template>
              </tiny-grid-column>
            </tiny-grid>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边浮动所有的demos -->
    <tiny-floatbar v-if="state.demos.length > 0" class="!top120 !z1 !right25">
      <div class="f12 ofy-auto">
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
  </div>
</template>

<script>
import { hooks } from '@opentiny/vue-common'
import { Floatbar, TreeMenu, Button, Grid, GridColumn, Tooltip } from '@opentiny/vue'
import { iconStarActive, iconSelect } from '@opentiny/vue-icon'
import { menuData, apis, demoStr, demoVue } from './resourceMobileFirst.js'
import { useModeCtx } from './uses'

export default {
  components: {
    TinyFloatbar: Floatbar,
    TinyTreeMenu: TreeMenu,
    TinyButton: Button,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyTooltip: Tooltip,
    IconStarIcon: iconStarActive(),
    IconOpeninVscode: iconSelect()
  },
  setup() {
    import('./tailwind.css')
    const { state: modeState, fn: modeFn } = useModeCtx()
    const state = hooks.reactive({
      demos: [], // 组件的所有示例
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
        fetch(`/__open-in-editor?file=../docs/resources/mobile-first/app/${modeState.pathName}/${demo.codeFiles[0]}`)
      }
    }

    hooks.onMounted(() => {
      _switchPath()
    })

    // 以下私有方法，无须传递给vue模板的。
    async function _switchPath() {
      // 查找API
      const apiModule = apis[`../resources/mobile-first/app/${modeState.pathName}/webdoc/${modeState.pathName}.js`]
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
      const path = `../resources/mobile-first/app/${modeState.pathName}/${state.currDemo?.codeFiles[0]}`

      // 查找源码  查找组件
      state.currDemoSrc = await demoStr[path]()
      const comp = await demoVue[path]()

      state.comp = hooks.markRaw(comp.default)
      modeFn.cacheCtx()
      modeFn.pushToUrl()
    }

    return {
      menuData,
      state,
      fn,
      modeState,
      modeFn
    }
  }
}
</script>

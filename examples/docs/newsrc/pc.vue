<template>
  <div class="wp100 hp100 f-r of-hidden">
    <div class="w230 hp100 pt20 of-auto">
      <tiny-tree-menu :data="menuData" :filter-node-method="fn.searchMenu" @current-change="fn.clickMenu"></tiny-tree-menu>
    </div>
    <div class="fi-1 f-c px20 pb30 f-c mr200 of-auto">
      <!-- 标题 -->
      <div class="py20 f24 fw-bold text-center">
        {{ state.demos[0]?.component }}
      </div>
      <div id="preview" class="bg-white">
        <div class="mb20 py10 pl16 child<code>p4 child<code>bg-lightless">
          <div class="mr20 fw-bold">
            {{ state.currDemo?.title }}({{ state.currDemo?.demoId }}.vue):
          </div>
          <div v-html="state.currDemo?.content"></div>
        </div>
        <!-- 预览 + 按钮 + 代码  -->
        <div class="p20 of-auto b-a bs-dotted">
          <component :is="state.comp"></component>
        </div>
        <div class="f-r f-pos-end mt40">
          <tiny-button @click="fn.format">
            格式化
          </tiny-button>
          <tiny-tooltip effect="dark" content="选择src/_.vue文件" placement="top">
            <tiny-button @click="fn.apply" type="primary">
              应用
            </tiny-button>
          </tiny-tooltip>
          <tiny-button @click="fn.saveCode" class="!ml40">
            保存
          </tiny-button>
          <tiny-button @click="fn.fullScreen">
            全屏
          </tiny-button>
        </div>
        <div id="editor" ref="editorRef" class="h300 mt10"></div>
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
              <a v-if="data.row.sample" class="c-primary h:c-error" @click="fn.selectDemo(data.row.sample)">{{ data.row.name }}</a>
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
    <tiny-floatbar v-if="state.demos.length > 0" class="!top120">
      <div class="f12 ofy-auto">
        <div v-for="demo in state.demos" :key="demo.demoId" @click="fn.selectDemo(demo.demoId)" class="w130 px10 py6 bg-light link-primary h:c-error h:td-under ellipsis cur-hand" :class="{ 'c-error': state.currDemo === demo }">
          {{ demo.title }}
          <Icon-star-icon v-if="state.currDemo === demo" style="fill: #ee343f" />
        </div>
      </div>
    </tiny-floatbar>
  </div>
</template>

<script>
import 'uno.css'
import './style.css'
import { hooks } from '@opentiny/vue-common'
import { Floatbar, TreeMenu, Button, Grid, GridColumn, Tooltip } from '@opentiny/vue'
import { iconStarActive } from '@opentiny/vue-icon'
import { menuData, zhDemo, demoVue, demoStr, zhApi } from './resource.js'
import { $local, useFileSaver, useMonaco, useFullScreen } from './uses'
import TmpDemo from './_.vue'

export default {
  components: {
    TinyFloatbar: Floatbar,
    TinyTreeMenu: TreeMenu,
    TinyButton: Button,
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyTooltip: Tooltip,
    IconStarIcon: iconStarActive()
  },
  setup() {
    const saver = useFileSaver() // 一个本地文件保存器
    const tmpSaver = useFileSaver() // 应用时，临时保存一个本地文件
    const fullScreener = useFullScreen('#preview')
    const editor = useMonaco('#editor')

    const state = hooks.reactive({
      pathName: $local.pathName || 'tiny-button', // 对应json中的 文件名， 每个文件有多个示例
      demos: [], // 组件的所有示例  {component,content,demoId,findIntroStr,link,title}[]
      currDemo: null, // 选中的demo
      currApi: [], // 当前path下的api
      comp: null // 当前示例的组件实例
    })
    const fn = {
      // 菜单搜索：忽略大小写
      searchMenu: (value, data) => {
        if (!value) return true
        return data.label.toLowerCase().includes(value.toLowerCase())
      },
      // 点击菜单：如果是二级菜单，根据path 刷新整个页面内容
      clickMenu: async (menu) => {
        if (menu.path && menu.path !== state.pathName) {
          state.pathName = menu.path.slice(1)
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
      saveCode: () => saver.save(editor.getCode()),
      fullScreen: () => fullScreener.toggle(),
      format: () => editor.format(),
      apply: async () => {
        await tmpSaver.save(editor.getCode())
        setTimeout(() => (state.comp = markRaw(TmpDemo)), 100)
      }
    }

    hooks.onMounted(() => {
      _switchPath()
    })

    // 以下私有方法，无须传递给vue模板的。
    async function _switchPath() {
      $local.pathName = state.pathName

      // 查找API
      const apiModule = zhApi[`../resources/pc/api/zh-CN/${state.pathName}.json`]
      if (apiModule) {
        const api = await apiModule()
        state.currApi = api.default
      } else {
        state.currApi = null
      }

      // 查找demo配置，并默认进入第一个 demo
      const demosJson = await zhDemo[`../resources/pc/demo-config/zh-CN/${state.pathName}.json`]()
      state.demos = demosJson.default
      state.currDemo = state.demos.find((d) => d.demoId === $local.demoId) || state.demos[0]
      state.comp = null
      await _switchDemo()
    }
    async function _switchDemo() {
      $local.demoId = state.currDemo.demoId
      saver.reset()
      // 查找源码
      const src = await demoStr[`../resources/pc/demo/${state.currDemo.link}.vue`]()
      editor.setCode(src)
      editor.scrollTop()
      // 查找组件
      const comp = await demoVue[`../resources/pc/demo/${state.currDemo.link}.vue`]()
      state.comp = hooks.markRaw(comp.default)
    }

    return {
      menuData,
      state,
      fn
    }
  }
}
</script>

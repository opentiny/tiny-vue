<template>
  <div class="main-layout ti-hp100 ti-f-c ti-f-box-stretch">
    <!-- 切换语言 -->
    <div class="lang-box">
      <tiny-tooltip :content="$t('changeLanguage')" placement="left">
        <span class="lang-btn" @click="changeLanguage">{{ $t('language') }}</span>
      </tiny-tooltip>
    </div>
    <!-- 切換主题样式 -->
    <tiny-dropdown v-if="!templateModeState.isSaas" class="theme-change-button" trigger="click">
      <tiny-tooltip :content="$t('changeTheme')" placement="left">
        <span>
          <img :src="themeSvg" :alt="$t('changeTheme')" />
        </span>
      </tiny-tooltip>
      <template #dropdown>
        <tiny-dropdown-menu :options="themeData">
          <tiny-dropdown-item
            v-for="(item, index) in themeData"
            :key="index"
            @click="themeItemClick(item)"
            :class="{ 'is-actived': item.value === currThemeLabel }"
          >
            {{ item.label }}
          </tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <div class="content-layout ti-fi-1" :has-sider="!isFrame">
      <div id="layoutSider" class="layout-sider" v-if="!isFrame">
        <div v-show="!isCollapsed" class="api-type-box" :class="{ 'is-collapsed': isCollapsed }">
          <div class="api-type">
            <div :class="{ 'api-mode': true, active: apiModeState.apiMode === 'Options' }">
              {{ $t2('选项式', 'Options') }}
            </div>
            <tiny-switch
              class="api-switch"
              true-value="Composition"
              false-value="Options"
              @change="apiModeFn.changeApiMode"
              v-model="apiModeState.apiMode"
            ></tiny-switch>
            <div :class="{ 'api-mode': true, active: apiModeState.apiMode === 'Composition' }">
              {{ $t2('组合式', 'Composition') }}
            </div>
            <tiny-tooltip :content="$t('apiType')" placement="right">
              <icon-help-circle></icon-help-circle>
            </tiny-tooltip>
          </div>

          <div class="api-type">
            <div :class="{ 'api-mode': true, active: apiModeState.demoMode === 'single' }">
              {{ $t2('单示例', 'Single') }}
            </div>
            <tiny-switch
              class="api-switch"
              true-value="default"
              false-value="single"
              @change="apiModeFn.changeDemoMode"
              v-model="apiModeState.demoMode"
            ></tiny-switch>
            <div :class="{ 'api-mode': true, active: apiModeState.demoMode === 'default' }">
              {{ $t2('多示例', 'Multiple') }}
            </div>
            <tiny-tooltip :content="$t2('切换demo的预览模式', 'Change demo preview mode')" placement="right">
              <icon-help-circle></icon-help-circle>
            </tiny-tooltip>
          </div>
        </div>
        <tiny-tree-menu
          ref="treeMenuRef"
          class="main-menu"
          :default-expanded-keys="expandKeys"
          node-key="id"
          ellipsis
          :data="menuOptions"
          :menu-collapsible="true"
          :filter-node-method="searchMenu"
          @current-change="clickMenu"
          @collapse-change="collapseChange"
        >
          <template #default="{ data }">
            <tiny-tag v-if="data?.mode?.includes('mobile-first')" effect="plain" class="ti-mr6">多端</tiny-tag>
            <span>{{ data.label }}</span>
          </template>
        </tiny-tree-menu>
      </div>
      <div
        id="doc-layout"
        ref="contentRef"
        :native-scrollbar="true"
        content-style="display: flex;  flex-direction: column; height:100%"
        class="md-tiny"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, computed, toRefs, onMounted, onUnmounted } from 'vue'
import { Switch, TreeMenu, Dropdown, DropdownMenu, DropdownItem, Tooltip, Tag } from '@opentiny/vue'
import { iconHelpCircle } from '@opentiny/vue-icon'
import { genMenus } from '@/menus.jsx'
import { router } from '@/router.js'
import { $t2, $t, appData, appFn, useApiMode, useTemplateMode } from '@/tools'
import themeSvg from '@/assets/images/theme.svg?url'
import useTheme from '@/tools/useTheme'

export default defineComponent({
  name: 'LayoutVue',
  components: {
    TinySwitch: Switch,
    TinyTreeMenu: TreeMenu,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    TinyTooltip: Tooltip,
    TinyTag: Tag,
    IconHelpCircle: iconHelpCircle()
  },
  props: [],
  setup() {
    const { getThemeData, changeTheme, currThemeLabel } = useTheme()
    const { apiModeState, apiModeFn } = useApiMode()
    const { templateModeState } = useTemplateMode()
    let state = reactive({
      menuOptions: genMenus(),
      hasHeader: true, // Header，当嵌入think时，无头。 所以预留变量
      isFrame: computed(() => router.currentRoute.value.meta?.iframe),
      contentRef: null,
      isCollapsed: false,
      treeMenuRef: null,
      expandKeys: []
    })

    const lang = $t2('zh-CN', 'en-US')
    const getTo = (route, key) => `${import.meta.env.VITE_CONTEXT}${lang}/os-theme/${route}${key}`

    const changeLanguage = () => {
      appFn.toggleLang()
    }

    const searchMenu = (value, data) => {
      if (!value) return true
      const trimValue = value.trim().toLowerCase()
      const isGird = (trimValue === 'grid' || trimValue === '表格') && data.key?.startsWith('grid-')
      return data.label.toLowerCase().includes(value.toLowerCase()) || isGird
    }

    const clickMenu = (menu) => {
      if (menu.type === 'overview') {
        router.push(`${import.meta.env.VITE_CONTEXT}${lang}/overview`)
      } else if (menu.type === 'docs') {
        router.push(getTo('docs/', menu.key))
      } else if (menu.type === 'components') {
        router.push(getTo('components/', menu.key))
      }
    }
    const collapseChange = (isCollapsed) => {
      state.isCollapsed = isCollapsed
    }
    let routerCbDestory = null

    // 主题切换功能
    const themeItemClick = (node) => {
      const val = node?.value || 'tiny-infinity-theme'

      changeTheme(val)
    }

    onMounted(() => {
      // 每次切换路由，有锚点则跳转到锚点，否则导航到顶部
      routerCbDestory = router.afterEach((to) => {
        if (to.hash) {
          const el = document.querySelector(to.hash)
          if (el) {
            return el.scrollIntoView()
          }
        }
        state.contentRef.scrollTo({ top: 0, behavior: 'auto' })
      })

      // 刷新后，高亮相应的菜单
      const cmpId = router.currentRoute.value?.params?.cmpId
      if (cmpId) {
        state.expandKeys = [cmpId]
        state.treeMenuRef.setCurrentKey(cmpId)
      }
    })

    onUnmounted(() => {
      routerCbDestory()
    })

    return {
      ...toRefs(state),
      appData,
      ...appFn,
      searchMenu,
      clickMenu,
      collapseChange,
      themeData: getThemeData(),
      themeItemClick,
      currThemeLabel,
      themeSvg,
      changeLanguage,
      apiModeState,
      apiModeFn,
      templateModeState
    }
  }
})
</script>

<style lang="less">
.content-layout {
  display: flex;
  --layout-tree-menu-input-height: 40px;
  --layout-api-mode-height: 106px;
}

.theme-change-button {
  position: fixed;
  top: 135px;
  right: 30px;
  z-index: 1999;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: transparent;
  img {
    display: block;
    width: 26px;
    height: 26px;
  }
  .tiny-svg {
    display: none;
  }
  &:hover {
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }
}

.lang-box {
  position: fixed;
  top: 80px;
  right: 30px;
  z-index: 1999;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: transparent;
  &:hover {
    background-color: #fff;
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 12%);
    cursor: pointer;
  }
  .lang-btn {
    font-weight: 600;
    font-size: 26px;
  }
}

.tiny-dropdown-item.is-actived {
  background-color: var(--ti-dropdown-item-hover-bg-color);
  color: var(--ti-dropdown-item-hover-text-color);
  border-radius: var(--ti-dropdown-item-border-radius);
}

.is-collapsed + .main-menu.tiny-tree-menu {
  height: 100%;
}

.main-menu.tiny-tree-menu {
  height: calc(100% - var(--layout-api-mode-height));
  .tiny-tree {
    height: calc(100% - var(--layout-tree-menu-input-height));
    overflow-y: auto;
  }
  .tree-node-name {
    line-height: 1.5;
  }
  & > .tiny-input .tiny-input__inner {
    height: var(--layout-tree-menu-input-height);
    font-size: 14px;
  }
  .tiny-tree-node__content {
    margin-top: 8px;
  }
}

#doc-layout {
  overflow-y: auto;
  height: calc(100vh - 60px);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.api-type-box {
  overflow: hidden;
  border-bottom: 1px solid var(--ti-common-color-line-dividing);
  border-right: 1px solid var(--ti-common-color-line-dividing);
  transition: width 0.5s;
  width: 100%;
  position: relative;
  font-size: 14px;

  .api-type {
    min-width: 220px;
    display: flex;
    align-items: center;
    padding: 16px;
    padding-left: 30px;
    background: #fff;
    overflow: hidden;
    .api-mode {
      color: rgba(60, 60, 60, 0.33);

      &.active {
        color: #213547;
      }
    }

    .api-switch {
      margin: 0 5px;
    }
    & > .tiny-svg {
      font-size: 18px;
      margin-left: 8px;
      fill: var(--ti-common-color-bg-emphasize);
    }
  }
}
#layoutSider {
  background: #fff;
  height: calc(100vh - 60px);
}

@media (max-width: 1023px) {
  .layout-sider {
    display: none;
    position: fixed;
    height: 100%;
    .tiny-tree-menu__toggle-button {
      display: none;
    }
  }
  #layoutSider.showMenu {
    display: block !important;
    z-index: 9;
  }
}
</style>

<template>
  <div class="main-layout ti-hp100 ti-f-c ti-f-box-stretch">
    <div class="content-layout ti-fi-1" :has-sider="!isFrame">
      <div id="layoutSider" class="layout-sider" :class="{ 'saas-border': templateModeState.isSaas }" v-if="!isFrame">
        <div style="padding: 10px 0; text-align: center">
          <tiny-button :reset-time="0" type="info" @click="toggleDark()">{{ isDark ? 'dark' : 'light' }}</tiny-button>
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
          :show-filter="isShowFilter"
          @current-change="clickMenu"
          @collapse-change="collapseChange"
        >
          <template #default="{ data }">
            <a @click="clickMenuLink" :href="getMenuLink(data)" class="node-name-container">
              <tiny-tag v-if="data?.mode?.includes('mobile-first')" size="mini" effect="plain" class="absolute-tag"
                >多端</tiny-tag
              >
              <!-- 分类图标 -->
              <component
                v-if="data.type === 'overview' || data.children"
                :is="menuIcons[data.key]"
                class="menu-type-icon"
              ></component>
              <span class="node-name-label">{{ data.label }}</span>
              <version-tip
                class="node-float-tip"
                v-if="data.meta || data.versionTipOption"
                :meta="data.meta"
                v-bind="data.versionTipOption"
                render-type="tag"
                :is-from-menu="true"
              >
              </version-tip>
            </a>
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

    <float-settings v-if="!isThemeSaas"></float-settings>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { defineComponent, reactive, computed, toRefs, watch, onMounted, onUnmounted } from 'vue'
import { TreeMenu, Dropdown, DropdownMenu, Tooltip, Tag, Radio, RadioGroup, Button } from '@opentiny/vue'
import { genMenus, getMenuIcons } from '@/menus.jsx'
import { router } from '@/router.js'
import { getWord, i18nByKey, appData, appFn, useApiMode, useTemplateMode } from '@/tools'
import useTheme from '@/tools/useTheme'
import FloatSettings from '@/views/components-doc/components/float-settings.vue'
import VersionTip from '@/views/components-doc/components/version-tip.vue'
import { useDark, useToggle } from '@vueuse/core'

export default defineComponent({
  name: 'LayoutVue',
  components: {
    TinyTreeMenu: TreeMenu,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyTooltip: Tooltip,
    TinyTag: Tag,
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup,
    TinyButton: Button,
    FloatSettings,
    VersionTip
  },
  props: [],
  setup() {
    const { defaultTheme } = useTheme()
    const { apiModeState, apiModeFn } = useApiMode()
    const { templateModeState } = useTemplateMode()
    const state = reactive({
      menuOptions: genMenus(),
      menuIcons: {},
      hasHeader: true, // Header，当嵌入think时，无头。 所以预留变量
      isFrame: computed(() => router.currentRoute.value.meta?.iframe),
      contentRef: null,
      isCollapsed: false,
      treeMenuRef: null,
      expandKeys: []
    })

    const lang = getWord('zh-CN', 'en-US')
    const route = useRoute()
    const { all: allPathParam, theme = defaultTheme } = useRoute().params
    const allPath = allPathParam ? allPathParam + '/' : ''
    const getTo = (route, key) => `${import.meta.env.VITE_CONTEXT}${allPath}${lang}/${theme}/${route}${key}`

    const isThemeSaas = import.meta.env.VITE_TINY_THEME === 'saas'
    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    const changeLanguage = () => {
      appFn.toggleLang()
    }

    const searchMenu = (value, data) => {
      if (!value) return true
      const trimValue = value.trim().toLowerCase()
      const isGird = (trimValue === 'grid' || trimValue === '表格') && data.key?.startsWith('grid')
      return data.label.toLowerCase().includes(value.toLowerCase()) || isGird
    }

    const clickMenu = (menu) => {
      if (menu.type === 'overview') {
        router.push(`${import.meta.env.VITE_CONTEXT}${allPath}${lang}/${theme}/overview`)
      } else if (menu.type === 'docs') {
        router.push(getTo('docs/', menu.key))
      } else if (menu.type === 'components') {
        router.push(getTo('components/', menu.key))
      }
    }

    const getMenuLink = (menu) => {
      if (menu.type === 'overview') {
        return `${import.meta.env.VITE_CONTEXT}${allPath}${lang}/${theme}/overview`
      } else if (menu.type === 'docs') {
        return getTo('docs/', menu.key)
      } else if (menu.type === 'components') {
        return getTo('components/', menu.key)
      }
    }

    const collapseChange = (isCollapsed) => {
      state.isCollapsed = isCollapsed
    }
    let routerCbDestroy = null

    const envTarget = import.meta.env.VITE_BUILD_TARGET || 'open'
    const isShowFilter = envTarget !== 'open'

    watch(
      () => route.path,
      (currentVal) => {
        // 监听路由变化，反作用与左侧列表菜单展开对应的列表
        const list = currentVal.split('/')
        if (list && list[list.length - 1]) {
          const key = list[list.length - 1]
          state.expandKeys = [key]
          state.treeMenuRef.setCurrentKey(key)
        }
      }
    )

    onMounted(async () => {
      // 刷新后，高亮相应的菜单
      const cmpId = router.currentRoute.value?.params?.cmpId
      if (cmpId) {
        state.expandKeys = [cmpId]
        state.treeMenuRef.setCurrentKey(cmpId)
      }

      state.menuIcons = await getMenuIcons()
    })

    onUnmounted(() => {
      routerCbDestroy()
    })

    const clickMenuLink = (e) => {
      e.preventDefault()
    }

    return {
      ...toRefs(state),
      appData,
      ...appFn,
      searchMenu,
      clickMenu,
      collapseChange,
      changeLanguage,
      apiModeState,
      apiModeFn,
      templateModeState,
      getMenuLink,
      clickMenuLink,
      getWord,
      i18nByKey,
      isThemeSaas,
      isDark,
      toggleDark,
      isShowFilter
    }
  }
})
</script>

<style lang="less">
.content-layout {
  display: flex;
  --layout-tree-menu-input-height: 32px;
  --layout-content-main-min-width: 200px;
  --layout-content-main-max-width: 1000px;
}
@media screen and (max-width: 640px) {
  --layout-content-main-min-width: 600px;
}

.tiny-tooltip.tiny-tooltip__popper.is-light.docs-tooltip {
  border: none;

  .popper__arrow {
    border: none;
  }
}

.theme-change-button {
  &.tiny-dropdown .tiny-dropdown__trigger .tiny-dropdown__title {
    margin-right: 0;
    line-height: 1;
  }

  &:hover {
    cursor: pointer;
  }
  .lang-btn {
    font-weight: 600;
    font-size: 26px;
  }
}

.is-collapsed + .main-menu.tiny-tree-menu {
  height: 100%;
}

.main-menu.tiny-tree-menu {
  height: 100%;
  padding-top: 30px;
  padding-left: 10px;
  width: 276px;

  &.is-collapsed {
    width: 0;
  }

  &::before {
    display: none;
  }

  .tiny-tree {
    padding-bottom: 30px;

    .tiny-tree-node__wrapper {
      padding-right: 10px;
    }

    .tiny-tree-node {
      &.is-current > .tiny-tree-node__content,
      .tiny-tree-node__content:hover {
        border-radius: 20px;
      }

      .tiny-tree-node__content {
        height: 40px;
        line-height: 40px;

        .tiny-tree-node__content-left {
          padding-left: 16px;
        }

        &::before {
          display: none;
        }
      }
    }

    .node-float-tip {
      border-radius: 0;
      margin-right: 8px;
    }
  }

  .tiny-tree-menu__toggle-button {
    transform: translateX(100%) translateY(-50%);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    .tiny-svg {
      margin-left: 0;
    }
  }

  .tiny-input {
    margin: 0 10px 16px;
    width: auto;
    max-width: unset;
  }

  .tiny-tree-node__content-box {
    min-width: 0;
  }

  .tiny-tree-node__content {
    position: relative;
  }
  .absolute-tag {
    position: absolute;
    right: 8px;
    top: 13px;
  }
  .tiny-tree {
    height: calc(100% - var(--layout-tree-menu-input-height));
    overflow-y: auto;
  }
  .tree-node-name {
    line-height: 1.5;

    .node-name-container {
      color: var(--tv-color-text-control);
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      gap: 6px;

      .node-name-label {
        flex-grow: 0;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .menu-type-icon {
        width: 12px;
        height: 12px;
        display: inline-block;
        fill: var(--tv-color-icon-control);
      }
    }
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden auto;
  width: 100%;
  height: calc(100vh - 60px);
}

.api-type-box {
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
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
      fill: var(--tv-color-text-control);
    }
  }
}

.dark #layoutSider {
  border-right: 1px solid #1a1a1a; // 没有常用变量
}

#layoutSider {
  height: calc(100vh - 60px);
  border-right: 1px solid #f0f0f0;

  &.saas-border {
    border-right: 1px solid #ddd;
  }

  .tiny-tree-menu .tiny-tree .tiny-tree-node.is-current > .tiny-tree-node__content .tiny-tree-node__content-left {
    --ti-tree-node-content-current-bg-color: transparent;

    border-radius: calc(var(--ti-tree-menu-node-height) * 0.5);

    &::before {
      display: none;
    }
  }
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
    z-index: var(--docs-layout-sider-zindex);
  }
}
</style>

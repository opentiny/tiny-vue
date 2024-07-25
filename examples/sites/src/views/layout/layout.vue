<template>
  <div class="main-layout ti-hp100 ti-f-c ti-f-box-stretch">
    <div class="content-layout ti-fi-1" :has-sider="!isFrame">
      <div id="layoutSider" class="layout-sider" :class="{ 'saas-border': templateModeState.isSaas }" v-if="!isFrame">
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
            <div class="node-name-container">
              <tiny-tag v-if="data?.mode?.includes('mobile-first')" effect="plain" class="absolute-tag">多端</tiny-tag>
              <!-- 分类图标 -->
              <component
                v-if="data.type === 'overview' || data.children"
                :is="menuIcons[data.key]"
                class="menu-type-icon"
              ></component>
              <span class="node-name-label">{{ data.label }}</span>
              <tiny-tag v-if="data.mark?.text" class="node-float-tip" effect="light" :type="data.mark?.type">
                {{ data.mark.text }}
              </tiny-tag>
            </div>
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

    <float-settings></float-settings>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { defineComponent, reactive, computed, toRefs, onMounted, onUnmounted } from 'vue'
import { TreeMenu, Dropdown, DropdownMenu, Tooltip, Tag, Radio, RadioGroup, Button } from '@opentiny/vue'
import { genMenus, getMenuIcons } from '@/menus.jsx'
import { router } from '@/router.js'
import { getWord, i18nByKey, appData, appFn, useApiMode, useTemplateMode } from '@/tools'
import useTheme from '@/tools/useTheme'
import FloatSettings from '@/views/components/float-settings'

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
    FloatSettings
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
    const { all: allPathParam, theme = defaultTheme } = useRoute().params
    const allPath = allPathParam ? allPathParam + '/' : ''
    const getTo = (route, key) => `${import.meta.env.VITE_CONTEXT}${allPath}${lang}/${theme}/${route}${key}`

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
        router.push(`${import.meta.env.VITE_CONTEXT}${allPath}${lang}/${theme}/overview`)
      } else if (menu.type === 'docs') {
        router.push(getTo('docs/', menu.key))
      } else if (menu.type === 'components') {
        router.push(getTo('components/', menu.key))
      }
    }

    const collapseChange = (isCollapsed) => {
      state.isCollapsed = isCollapsed
    }
    let routerCbDestroy = null

    onMounted(async () => {
      // 每次切换路由，有锚点则跳转到锚点，否则导航到顶部
      routerCbDestroy = router.afterEach((to) => {
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

      state.menuIcons = await getMenuIcons()
    })

    onUnmounted(() => {
      routerCbDestroy()
    })

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
      getWord,
      i18nByKey
    }
  }
})
</script>

<style lang="less">
.content-layout {
  display: flex;
  --layout-tree-menu-input-height: var(--ti-common-space-8x);
  --layout-content-main-min-width: 600px;
  --layout-content-main-max-width: 1000px;
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

.tiny-dropdown-item.is-actived {
  background-color: var(--ti-dropdown-item-hover-bg-color);
  color: var(--ti-dropdown-item-hover-text-color);
  border-radius: var(--ti-dropdown-item-border-radius);
}

.is-collapsed + .main-menu.tiny-tree-menu {
  height: 100%;
}

.main-menu.tiny-tree-menu {
  --ti-tree-menu-node-current-text-color: var(--ti-common-color-primary-normal);

  height: 100%;
  padding-top: 30px;
  padding-left: var(--ti-common-space-10);

  &::before {
    display: none;
  }

  .tiny-tree {
    padding-bottom: 30px;

    .tiny-tree-node__wrapper {
      padding-right: var(--ti-common-space-10);
    }

    .tiny-tree-node {
      &.is-current > .tiny-tree-node__content,
      .tiny-tree-node__content:hover {
        border-radius: var(--ti-common-space-5x);
      }

      &.is-current {
        > .tiny-tree-node__content .node-name-label {
          font-weight: 600;
        }

        .menu-type-icon {
          fill: var(--ti-common-color-primary-normal);
        }
      }
    }

    .node-float-tip {
      border-radius: 0;
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
    margin: 0 var(--ti-common-space-10) var(--ti-common-space-3x);
    width: auto;

    .tiny-input__inner {
      width: 100%;
      border: 1px solid var(--ti-tree-menu-border-color);
    }
  }

  .tiny-tree-node__content-box {
    min-width: 0;
  }

  .tiny-tree-node__content {
    position: relative;
  }
  .absolute-tag {
    position: absolute;
    right: 4px;
    top: 12px;
  }
  .tiny-tree {
    height: calc(100% - var(--layout-tree-menu-input-height));
    overflow-y: auto;
  }
  .tree-node-name {
    line-height: 1.5;

    .node-name-container {
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
        width: var(--ti-common-size-3x);
        height: var(--ti-common-size-3x);
        display: inline-block;
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
  width: 100%;
  height: calc(100vh - 60px);
  overflow: hidden auto;
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
  border-right: 1px solid var(--ti-common-color-line-dividing);

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
    z-index: var(--layout-sider-zindex);
  }
}
</style>

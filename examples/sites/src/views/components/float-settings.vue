<template>
  <div
    ref="floatSettings"
    :class="['float-settings', { 'float-settings--aside': isSettingsAside }]"
    :style="settingsStyle"
  >
    <!-- 切换主题样式 -->
    <tiny-dropdown trigger="click" :show-icon="false" @visible-change="(visible) => toggleMenuShow(visible, 'theme')">
      <tiny-tooltip
        :content="i18nByKey('changeTheme')"
        :placement="isSettingsAside ? 'left' : 'right'"
        popper-class="docs-tooltip"
        effect="light"
      >
        <div class="settings-btn theme-change-button">
          <theme-settings-icon
            :class="['settings-icon theme-settings-icon', { 'is-active': showThemeMenu }]"
          ></theme-settings-icon>
        </div>
      </tiny-tooltip>
      <template #dropdown>
        <tiny-dropdown-menu popper-class="opt-menu theme-settings-menu">
          <div v-for="(item, index) in themeData" :key="index" class="theme-option-list">
            <tiny-button
              ghost
              :class="['theme-option', { 'is-active': item.value === currentThemeKey }]"
              @click="themeItemClick(item)"
              >{{ item.text }}</tiny-button
            >
          </div>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>

    <!-- demo风格设置 -->
    <tiny-dropdown
      v-if="!templateModeState.isSaas"
      trigger="click"
      :show-icon="false"
      @visible-change="(visible) => toggleMenuShow(visible, 'style')"
    >
      <tiny-tooltip
        :content="i18nByKey('changeApiType')"
        :placement="isSettingsAside ? 'left' : 'right'"
        popper-class="docs-tooltip"
        effect="light"
      >
        <div class="settings-btn style-settings-btn">
          <style-settings-icon
            :class="['settings-icon style-settings-icon', { 'is-active': showStyleMenu }]"
          ></style-settings-icon>
        </div>
      </tiny-tooltip>
      <template #dropdown>
        <tiny-dropdown-menu popper-class="opt-menu style-settings-menu">
          <div v-for="(item, index) in styleSettings" :key="index" class="style-settings-item">
            <p class="style-settings-title">{{ item.title }}</p>
            <tiny-radio-group
              v-model="apiModeState[item.name]"
              class="style-settings-options-group"
              @change="onSettingsChange(item.name)"
            >
              <tiny-radio v-for="option in item.options" :key="option" :label="option.value">{{
                option.text
              }}</tiny-radio>
            </tiny-radio-group>
          </div>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>

    <!-- 返回顶部 -->
    <div v-show="showBackTop" @click="onBackTop">
      <tiny-tooltip
        :content="i18nByKey('backTop')"
        :placement="isSettingsAside ? 'left' : 'right'"
        popper-class="docs-tooltip"
        effect="light"
      >
        <div class="settings-btn back-top-btn">
          <icon-up-ward class="settings-icon"></icon-up-ward>
        </div>
      </tiny-tooltip>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, onUnmounted, watch, nextTick, ref } from 'vue'
import { Dropdown, DropdownMenu, Tooltip, Radio, RadioGroup, Button } from '@opentiny/vue'
import { iconUpWard } from '@opentiny/vue-icon'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'
import { i18nByKey, useApiMode, useTemplateMode } from '@/tools'
import useTheme from '@/tools/useTheme'
import { router } from '@/router'
import useStyleSettings from '@/tools/useStyleSettings'
import ThemeSettingsIcon from '@/assets/images/theme-settings.svg'
import StyleSettingsIcon from '@/assets/images/style-settings.svg'

export default defineComponent({
  name: 'FloatSettings',
  components: {
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyTooltip: Tooltip,
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup,
    TinyButton: Button,
    IconUpWard: iconUpWard(),
    ThemeSettingsIcon,
    StyleSettingsIcon
  },
  setup() {
    const DEFAULT_BOTTOM_VAL = '10vh'
    const { getThemeData, changeTheme, currentThemeKey } = useTheme()
    const { apiModeState, apiModeFn } = useApiMode()
    const { getStyleSettings } = useStyleSettings()
    const { templateModeState } = useTemplateMode()
    const floatSettings = ref(null)
    const isPlus = import.meta.env.VITE_APP_MODE === 'plus'

    const state = reactive({
      themeData: [],
      showThemeMenu: false,
      showStyleMenu: false,
      styleSettings: getStyleSettings(i18nByKey),
      settingsStyle: {
        bottom: DEFAULT_BOTTOM_VAL
      },
      showBackTop: false, // 是否显示返回顶部按钮
      initBottomVal: null, // 初始底部偏移
      isSettingsAside: false // 是否贴边
    })

    if (isPlus) {
      state.styleSettings = state.styleSettings.filter((item) => item.defaultValue === 'default')
      apiModeState.apiMode = 'Options'
    }

    const funcs = {
      onBackTop() {
        document.getElementById('doc-layout').scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      },
      onSettingsChange(modeType) {
        switch (modeType) {
          case 'apiMode': {
            apiModeFn.changeApiMode(apiModeState[modeType])
            break
          }
          case 'demoMode': {
            apiModeFn.changeDemoMode(apiModeState[modeType])
            break
          }
        }
      },

      // 主题切换功能
      themeItemClick(node) {
        const val = node?.value || 'tiny-smb-theme'
        changeTheme(val)
      },

      toggleMenuShow(visible, type) {
        if (type === 'theme') {
          state.showThemeMenu = visible
        } else if (type === 'style') {
          state.showStyleMenu = visible
        }
      }
    }

    const getThemeOptions = () => {
      const themeData = getThemeData().map((item) => ({
        value: item.value[0],
        text: item.label
      }))
      state.themeData = themeData
    }

    const setScrollListener = () => {
      nextTick(() => {
        const docLayout = document.getElementById('doc-layout')
        const nav = document.querySelector('.nav')
        if (docLayout) {
          docLayout.onscroll = debounce(100, false, () => {
            const {
              scrollTop: layoutScrollTop,
              scrollHeight: layoutScrollHeight,
              clientHeight: layoutHeight
            } = docLayout
            const headerHeight = docLayout.querySelector('header')?.clientHeight || 0
            const footerHeight = docLayout.querySelector('#footer')?.clientHeight || 0
            const footerTop = footer.getBoundingClientRect().top
            const navHeight = nav?.clientHeight || 0
            const currSettingsBottom = parseInt(window.getComputedStyle(floatSettings.value).getPropertyValue('bottom'))
            const footerVisibleHeight = footerHeight - (layoutScrollHeight - layoutScrollTop - layoutHeight)

            state.showBackTop = layoutScrollTop > 500
            state.showSettings = footerTop - navHeight - headerHeight > 220

            if (!state.initBottomVal) {
              state.initBottomVal = currSettingsBottom
            }
            if (footerVisibleHeight > state.initBottomVal - 40) {
              state.settingsStyle.bottom = `${footerVisibleHeight + 20}px`
            } else {
              state.settingsStyle.bottom = DEFAULT_BOTTOM_VAL
            }
          })
        }
      })
    }

    const removeScrollListener = () => {
      const docLayout = document.getElementById('doc-layout') || {}
      docLayout.onscroll = null
    }

    watch(
      () => router.currentRoute.value,
      (newVal) => {
        const { path } = newVal || {}
        state.isSettingsAside = ['overview', 'docs'].find((i) => path.includes(i))
      },
      {
        immediate: true
      }
    )

    onMounted(() => {
      getThemeOptions()
      setScrollListener()
    })

    onUnmounted(() => {
      removeScrollListener()
    })

    return {
      ...toRefs(state),
      ...funcs,
      templateModeState,
      i18nByKey,
      apiModeState,
      currentThemeKey,
      floatSettings
    }
  }
})
</script>

<style lang="less">
.float-settings {
  position: fixed;
  right: 200px;
  height: 140px;
  display: flex;
  flex-direction: column;
  column-gap: var(--ti-common-space-3x);
  z-index: var(--docs-float-settings-zindex);
  transition: all 0.3s linear;

  &.float-settings--aside {
    right: var(--ti-common-size-6x);
  }

  .tiny-dropdown__trigger .tiny-dropdown__title {
    line-height: 1;
    margin-right: 0;
  }

  .settings-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--ti-common-size-9x);
    height: var(--ti-common-size-9x);
    margin-bottom: var(--ti-common-space-2x);
    border: 1px solid var(--ti-common-color-line-dividing);
    border-radius: var(--ti-common-space-3x);
    background-color: var(--ti-common-color-bg-white-normal);
    cursor: pointer;

    &:hover {
      box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);

      .settings-icon {
        color: var(--ti-common-color-primary-normal);
        fill: var(--ti-common-color-primary-normal);
      }
    }

    &.style-settings-btn {
      margin-bottom: var(--ti-common-space-6x);
    }

    &.back-top-btn {
      margin-bottom: 0;
    }

    .settings-icon {
      width: var(--ti-common-size-4x);
      height: var(--ti-common-size-4x);
      color: #595959;

      &.is-active {
        color: var(--ti-common-color-primary-normal);
      }
    }
  }
}

.opt-menu {
  width: 154px;
  padding: var(--ti-common-size-3x) 0;
  border-radius: var(--ti-common-space-3x);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);

  &.theme-settings-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &.style-settings-menu {
    padding: 14px;

    .style-settings-item {
      padding-left: var(--ti-common-space-3x);

      .style-settings-title {
        margin-bottom: 2px;
        font-size: var(--ti-common-font-size-base);
        line-height: var(--ti-common-line-height-6);
        font-weight: 600;
      }

      .style-settings-options-group {
        padding-left: var(--ti-common-space-base);
        margin-bottom: var(--ti-common-space-6);
        display: flex;
        flex-direction: column;

        .tiny-radio .tiny-radio__label {
          font-size: var(--ti-common-font-size-base);
          line-height: var(--ti-common-line-height-6);
        }
      }

      &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }
    }
  }

  .theme-option-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 154px;

    .theme-option {
      display: inline-block;
      width: 126px;
      border: none;
      border-radius: var(--ti-common-space-2x);

      &.is-active {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
}

@media (max-width: 1279px) {
  .float-settings {
    right: var(--ti-common-space-3x);
  }
}
</style>

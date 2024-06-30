<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<script lang="tsx">
import { $prefix, setup, h, defineComponent } from '@opentiny/vue-common'

// 此处引入 h 是为了防止打包后 h 被重命名导致组件报错的问题
import { renderless, api } from '@opentiny/vue-renderless/tab-nav/vue'
import { iconClose, iconChevronDown } from '@opentiny/vue-icon'
import type { ITabNavApi } from '@opentiny/vue-renderless/types/tab-nav.type'
import { tabNavMobileProps } from './index'

export default defineComponent({
  name: $prefix + 'TabNav',
  components: {
    IconClose: iconClose(),
    IconChevronDown: iconChevronDown()
  },
  props: tabNavMobileProps,
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true, h }) as unknown as ITabNavApi
  },
  render() {
    const {
      state,
      panes,
      onTabClick,
      onTabRemove,
      showExpandTabs,
      expandTabShow,
      activeColor,
      expandPanesWidth,
      currentName,
      expandTabsTitle,
      expandTabsMode,
      stretch
    } = this
    const tabsExpandIcon = showExpandTabs ? (
      <div class="tiny-mobile-tabs__expand-icon">
        <span
          slot="reference"
          class="tiny-mobile-tabs__expand"
          onClick={() => {
            expandTabShow()
          }}>
          <icon-chevron-down></icon-chevron-down>
        </span>
      </div>
    ) : null

    const tabsExpandContent = (
      <div
        class="tiny-mobile-tabs__expand-content"
        style={
          state.showExpandItem
            ? { display: 'block', width: expandPanesWidth ? expandPanesWidth + 'px' : '' }
            : { display: 'none' }
        }>
        <div class="tiny-mobile-tabs__expand-mask"></div>
        <div class="tiny-mobile-tabs__expand-header">
          <label class="tiny-mobile-tabs__expand-header-title" style={state.expandHeaderStyle}>
            {expandTabsTitle}
          </label>
          <span slot="reference" class="tiny-mobile-tabs__expand" style={{ transform: 'rotate(180deg)' }}>
            <icon-chevron-down></icon-chevron-down>
          </span>
        </div>
        <div class="tiny-mobile-tabs__expand-list">
          {panes.map((pane, index) => {
            const tabName = pane.name || pane.state.index || index
            const tabTitle = pane.$slots.title || pane.title

            return (
              <div
                class={{
                  'tiny-mobile-tabs__expand-item': true,
                  [`tiny-mobile-tabs__expand-mode-${expandTabsMode}`]: expandTabsMode === 'columns'
                }}>
                <div
                  class={{
                    'tiny-mobile-tabs__expand-item-title': true,
                    'is-current': currentName === tabName
                  }}
                  onClick={(e) => {
                    onTabClick(pane, tabName, e)
                  }}>
                  {tabTitle}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )

    const navStyle = {}
    const tabs = panes.map((pane, index) => {
      let tabName = pane.name || pane.state.index || index
      const withClose = pane.state.isClosable

      pane.state.index = `${index}`

      const btnClose =
        withClose && panes.length > 1 ? (
          <span class="tiny-mobile-tabs__icon-close">
            <icon-close
              onClick={(e) => {
                onTabRemove(pane, e)
              }}
            />
          </span>
        ) : null

      const tabTitle = pane.$slots.title || pane.title
      const tabItemStyle = {}

      if (!stretch) {
        tabItemStyle.flex = 0
        navStyle.justifyContent = 'center'
      }

      if (index === panes.length - 1) {
        tabItemStyle.marginRight = 0
      }

      return (
        <div
          class={{
            'tiny-mobile-tabs__item': true,
            [`is-${state.rootTabs.position}`]: true,
            'is-active': pane.state.active,
            'is-disabled': pane.disabled,
            'is-closable': withClose
          }}
          style={tabItemStyle}
          role="tab"
          ref="tabs"
          id={`tab-${tabName}`}
          key={`tab-${tabName}`}
          aria-controls={`pane-${tabName}`}
          aria-selected={pane.state.active}
          onClick={(e) => {
            onTabClick(pane, tabName, e)
          }}>
          <span class="tiny-mobile-tabs__name" style={activeColor && pane.state.active ? { color: activeColor } : {}}>
            {tabTitle}
            {btnClose}
          </span>
        </div>
      )
    })

    return (
      <div
        style={showExpandTabs ? { paddingRight: '46px' } : {}}
        class={[
          'tiny-mobile-tabs__nav-wrap',
          state.scrollable ? 'is-scrollable' : '',
          panes.length > 4 ? 'tiny-mobile-tabs__wrap-scrollable' : '',
          showExpandTabs ? 'is-show-expand' : '',
          `is-${state.rootTabs.position}`
        ]}>
        <div class={['tiny-mobile-tabs__nav-scroll']} ref="navScroll">
          <div
            class={['tiny-mobile-tabs__nav', `is-${state.rootTabs.position}`]}
            style={navStyle}
            ref="nav"
            role="tablist">
            {tabs}
            <div
              class="tiny-mobile-tabs__line"
              style={[state.navStyle, activeColor ? { backgroundColor: activeColor } : {}]}></div>
          </div>
        </div>
        {[tabsExpandIcon, tabsExpandContent]}
      </div>
    )
  }
})
</script>

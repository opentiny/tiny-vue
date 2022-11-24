<script lang="jsx">
import { $prefix, setup, h } from '@opentiny/vue-common' // 此处引入 h 是为了防止打包后 h 被重命名导致组件报错的问题
import { renderless, api } from '@opentiny/vue-renderless/tab-nav/vue'
import { t } from '@opentiny/vue-locale'
import { iconClose } from '@opentiny/vue-icon'

export default {
  name: $prefix + 'TabNav',
  components: {
    IconClose: iconClose()
  },
  props: {
    panes: {
      type: Array,
      default: () => []
    },
    currentName: String,
    activeColor: {
      type: String,
      default: ''
    },
    onTabClick: {
      type: Function,
      default: () => {}
    },
    onTabRemove: {
      type: Function,
      default: () => {}
    },
    showMoreTabs: Boolean,
    showPanesCount: Number
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true, h })
  },
  render() {
    const { state, panes, onTabClick, onTabRemove, showMoreTabs, moreTabShow, showPanesCount, activeColor } = this

    const moreTabs = showMoreTabs ? (
      <div class="tiny-mobile-tabs__more-container">
        <div popper-class="tiny-mobile-tabs__more-popover" placement="bottom-start" trigger="hover" width="200" offset={-70} visible-arrow>
          <span
            slot="reference"
            class="tiny-mobile-tabs__more"
            onClick={() => {
              moreTabShow()
            }}
          >
            {t('ui.tabs.moreItem')}
          </span>
          <ul style={state.showMoreItem ? { display: 'block' } : { display: 'none' }}>
            {state.showMoreItem && ~showPanesCount
              ? panes.slice(showPanesCount).map((pane, index) => {
                  const tabName = pane.name || pane.state.index || index
                  const tabLabelContent = pane.$slots.title || pane.title

                  return (
                    <li
                      class="tiny-mobile-tabs__more-item"
                      onClick={(e) => {
                        onTabClick(pane, tabName, e)
                        moreTabShow()
                      }}
                    >
                      {tabLabelContent}
                    </li>
                  )
                })
              : null}
          </ul>
        </div>
      </div>
    ) : null

    const tabs = panes.map((pane, index) => {
      let tabName = pane.name || pane.state.index || index
      const withClose = pane.state.isClosable

      pane.state.index = `${index}`

      const btnClose =
        withClose && panes.length > 1 ? (
          <span class="tiny-mobile-tabs__icon-close">
            <icon-close
              onClick={(e) => {
                /* eslint-disable  no-useless-call */
                onTabRemove(pane, e)
              }}
            />
          </span>
        ) : null

      const tabLabelContent = pane.$slots.title || pane.title

      return (
        <div
          class={{
            'tiny-mobile-tabs__item': true,
            [`is-${state.rootTabs.position}`]: true,
            'is-active': pane.state.active,
            'is-disabled': pane.disabled,
            'is-closable': withClose
          }}
          role="tab"
          ref="tabs"
          id={`tab-${tabName}`}
          key={`tab-${tabName}`}
          aria-controls={`pane-${tabName}`}
          aria-selected={pane.state.active}
          onClick={(e) => {
            onTabClick(pane, tabName, e)
          }}
        >
          <span class="tiny-mobile-tabs__name" style={activeColor && pane.state.active ? { color: activeColor } : {}}>
            {tabLabelContent}
            {btnClose}
          </span>
        </div>
      )
    })

    return (
      <div
        style={showMoreTabs ? { paddingRight: '46px' } : {}}
        class={[
          'tiny-mobile-tabs__nav-wrap',
          state.scrollable ? 'is-scrollable' : '',
          panes.length > 4 ? 'tiny-mobile-tabs__wrap-scrollable' : '',
          showMoreTabs ? 'is-show-more' : '',
          `is-${state.rootTabs.position}`
        ]}
      >
        <div class={['tiny-mobile-tabs__nav-scroll']} ref="navScroll">
          <div class={['tiny-mobile-tabs__nav', `is-${state.rootTabs.position}`]} ref="nav" role="tablist">
            {tabs}
            <div class="tiny-mobile-tabs__line" style={[state.navStyle, activeColor ? { backgroundColor: activeColor } : {}]}></div>
          </div>
        </div>
        {[moreTabs]}
      </div>
    )
  }
}
</script>

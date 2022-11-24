<script lang="jsx">
import { renderless, api } from '@opentiny/vue-renderless/tabs/vue'
import { props, setup, h } from '@opentiny/vue-common'
import TabNav from './tab-nav/mb.vue'
import { iconPlus } from '@opentiny/vue-icon'
import { touchStart, touchMove } from '@opentiny/vue-renderless/common/deps/touch'
import '@opentiny/vue-theme-mobile/tabs/index.css'

const MIN_SWIPE_DISTANCE = 50

export default {
  props: [
    ...props,
    'activeName',
    'position',
    'withClose',
    'withAdd',
    'activeColor',
    'modelValue',
    'beforeLeave',
    'editable',
    'showMoreTabs',
    'childrenTabs',
    'swipeable'
  ],
  components: {
    TabNav,
    IconPlus: iconPlus()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
  methods: {
    getCurIndex() {
      let current = 0

      this.state.panes.filter((node, index) => node.name === this.state.currentName && (current = index))

      return current
    },
    onTouchEnd() {
      const { direction, deltaX } = this.state
      const currentIndex = this.getCurIndex()

      if (direction === 'horizontal' && this.state.offsetX >= MIN_SWIPE_DISTANCE) {
        if (deltaX > 0 && currentIndex !== 0) {
          const name = this.state.panes[currentIndex - 1].name

          this.$emit('swipeLeft', name)
          this.setCurrentName(name)
          this.$refs.nav.scrollToActiveTab()
        } else if (deltaX < 0 && currentIndex !== this.state.panes.length - 1) {
          const name = this.state.panes[currentIndex + 1].name

          this.$emit('swipeRight', name)
          this.setCurrentName(name)
          this.$refs.nav.scrollToActiveTab()
        }
      }
    }
  },
  render() {
    let { state, position, handleTabClick, handleTabRemove, handleTabAdd, editable, withAdd, showMoreTabs, swipeable, activeColor } = this

    const newButton =
      editable || withAdd ? (
        <span
          class="tiny-mobile-tabs__new-tab"
          onClick={handleTabAdd}
          tabindex="0"
          onKeydown={(ev) => {
            if (ev.keyCode === 13) {
              handleTabAdd()
            }
          }}
        >
          <icon-plus />
        </span>
      ) : null

    const navData = {
      props: {
        currentName: state.currentName,
        panes: state.panes,
        activeColor,
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
        showPanesCount: state.showPanesCount,
        showMoreTabs
      },
      ref: 'nav'
    }

    const TabNavComponent = h(TabNav, { ...navData })

    const header = (
      <div class={['tiny-mobile-tabs__header', `is-${position}`, withAdd ? 'is-double-border' : '']}>
        {newButton}
        {TabNavComponent}
      </div>
    )

    const listeners = swipeable
      ? {
          touchstart: touchStart(state),
          touchmove: touchMove(state),
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        }
      : {}

    const panels = (
      <div class="tiny-mobile-tabs__content" {...{ on: listeners }}>
        {this.slots.default()}
      </div>
    )

    return (
      <div
        class={{
          'tiny-mobile-tabs': true,
          [`tiny-mobile--${position}`]: true
        }}
      >
        {[header, panels]}
      </div>
    )
  }
}
</script>

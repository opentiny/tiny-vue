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
<script lang="jsx">
import { renderless, api } from '@opentiny/vue-renderless/tabs/vue'
import { props, setup, h } from '@opentiny/vue-common'
import TabNav from './tab-nav/index.vue'
import { iconPlus } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/tabs/index.css'

export default {
  emits: ['add', 'click', 'close', 'edit', 'update:modelValue'],
  props: [
    ...props,
    'tabStyle',
    'activeName',
    'withClose',
    'withAdd',
    'size',
    'modelValue',
    'editable',
    'position',
    'beforeLeave',
    'stretch',
    'showMoreTabs',
    'popperClass',
    'popperAppendToBody',
    'dropConfig'
  ],
  components: {
    TabNav,
    IconPlus: iconPlus()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
  render() {
    let {
      state,
      tabStyle,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      handleTabDragStart,
      handleTabDragOver,
      handleTabDragEnd,
      editable,
      withAdd,
      position,
      size,
      stretch,
      showMoreTabs,
      popperClass,
      popperAppendToBody,
      dropConfig
    } = this

    const newButton =
      editable || withAdd ? (
        <span
          class="tiny-tabs__new-tab"
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
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
        showPanesCount: state.showPanesCount,
        editable,
        tabStyle,
        size,
        stretch,
        showMoreTabs,
        popperClass,
        popperAppendToBody,
        dropConfig
      },
      on: {
        'tab-drag-start': handleTabDragStart,
        'tab-drag-over': handleTabDragOver,
        'tab-drag-end': handleTabDragEnd
      },
      ref: 'nav'
    }

    const TabNavComponent = h(TabNav, { ...navData })

    this.$nextTick(() => {
      this.$refs.nav && this.$refs.nav.$forceUpdate()
    })

    const header = (
      <div class={['tiny-tabs__header', `is-${position}`]}>
        {newButton}
        {TabNavComponent}
      </div>
    )

    const panels = <div class="tiny-tabs__content">{this.slots.default && this.slots.default()}</div>

    return (
      <div
        class={{
          'tiny-tabs': true,
          'tiny-tabs--card': tabStyle === 'card',
          [`tiny-tabs--${position}`]: true,
          'tiny-tabs--border-card': tabStyle === 'border-card',
          'tiny-tabs--small': size === 'small'
        }}
      >
        {position !== 'bottom' ? [header, panels] : [panels, header]}
      </div>
    )
  }
}
</script>

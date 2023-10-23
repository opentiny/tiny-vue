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
<template>
  <div class="tiny-nav-menu" ref="navMenu">
    <div
      class="more-button"
      :class="{ mobile: slots['mobile-menu'] }"
      v-if="/^(retract|fixed)$/.test(overflow)"
      @mouseenter="showSubMenu(state.data[0].children, { more: true })"
      @mouseleave="willHideSubMenu"
    >
      <component :is="state.showMore ? 'IconSandwichExpand' : 'IconSandwichCollapse'"></component>
    </div>
    <div v-if="slots.logo" class="slot-logo">
      <slot name="logo"></slot>
    </div>
    <div class="menu-container">
      <ul v-if="state.data && state.data.length" :style="state.isSaaSTheme ? {} : state.menuStyle" class="menu">
        <li v-for="(item, index) in state.data" :key="index + (item.title || '')">
          <component
            :is="getTag(item)"
            :to="getRoute(item)"
            :class="{
              active: index === state.activeIndex,
              selected: index === state.selectedIndex
            }"
            @mouseenter="showSubMenu(item.children, { index }, $event)"
            @mouseleave="willHideSubMenu"
            @click="clickMenu(item, index)"
            >{{ item.title }}</component
          >
        </li>
      </ul>
    </div>
    <div
      v-show="state.isShowMore"
      :style="{ marginLeft: state.marginLeft + 'px' }"
      class="more"
      @mouseenter="showSubMenu(state.more[0].children, { more: true })"
      @mouseleave="willHideSubMenu"
    >
      {{ t('ui.navMenu.moreText') }}
    </div>
    <div v-if="slots.toolbar" class="slot-toolbar">
      <slot name="toolbar"></slot>
    </div>
    <div v-if="slots['mobile-menu']" class="slot-mobile-menu">
      <slot name="mobile-menu"></slot>
    </div>
    <transition name="tiny-transition-zoom-in-top" mode="out-in">
      <div
        v-show="state.showPopmenu"
        :class="[state.popClass, { slide: state.showPopmenu }, { 'show-left-menu': state.showMore }]"
        :style="state.popStyle"
        class="popmenu tiny-min-scrollbar"
        @mouseenter="stopHideSubMenu"
        @mouseleave="willHideSubMenu"
      >
        <div v-if="state.showMore" class="more-menu">
          <ul>
            <li
              v-for="(item, index) in state.more"
              :key="index + (item.title || '')"
              :class="{ active: index === state.subActiveIndex, selected: index === state.moreItemSelectedIndex }"
            >
              <component
                :is="getTag(item)"
                :to="getRoute(item)"
                :class="{ showicon: item.children }"
                @mouseenter="setSubMenu(item.children, index)"
                @mouseleave="leaveMoreMune"
                @click="clickMenu(item, index)"
              >
                {{ item.title }}
              </component>
              <icon-chevron-right v-if="item.children" class="more-icon"></icon-chevron-right>
            </li>
          </ul>
        </div>
        <div v-if="state.subMenus && state.subMenus.length" :class="{ 'full-width': !state.showMore }" class="sub-menu">
          <ul class="sub-menu-ul">
            <li
              v-for="(group, index) in state.subMenus"
              :key="index + (group.title || '')"
              class="sub-menu-li"
              :class="{
                'col-xs-24 col-sm-12 col-md-8 col-lg-6 col-xl-4':
                  !state.isSaaSTheme && !state.popClass.includes('single')
              }"
            >
              <ul class="group">
                <li
                  class="tiny-nav-menu__sub-menu-title"
                  :class="!!group.title ? '' : 'tiny-nav-menu__sub-menu-title-blank'"
                >
                  <component
                    :is="getTag(group)"
                    :to="getRoute(group)"
                    @click="clickMenu(group, -1, index)"
                    @mouseenter="handleTitleMouseenter($event)"
                    @mouseleave="handleTitleMouseleave"
                    :class="{ selected: index === state.subIndex && state.subItemSelectedIndex === -1 }"
                  >
                    {{ group.title }}
                  </component>
                  <icon-chevron-right v-if="group.url" class="go-to-icon"></icon-chevron-right>
                </li>
                <li
                  v-for="(item, i) in group.children"
                  :key="i + (item.title || '')"
                  class="sub-item"
                  :class="{
                    'only-secondary-title': !group.title && !state.subMenu[i].children,
                    'third-title': item.children && item.children.length
                  }"
                >
                  <component
                    :is="getTag(item)"
                    :to="getRoute(item)"
                    @click="clickMenu(item, i, index)"
                    :class="{ selected: i === state.subItemSelectedIndex && index === state.subIndex }"
                  >
                    {{ item.title }}
                  </component>

                  <ul v-if="item.children && item.children.length">
                    <li v-for="(subItem, j) in item.children" :key="j + (subItem.title || '')" class="sub-item">
                      <component :is="getTag(subItem)" :to="getRoute(subItem)" @click="clickMenu(subItem)">
                        {{ subItem.title }}
                      </component>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <tiny-tooltip
      ref="tooltip"
      v-model="state.tooltipVisible"
      :manual="true"
      effect="light"
      :content="state.tooltipContent"
      placement="top"
    >
    </tiny-tooltip>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/nav-menu/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconSetting, iconChevronRight, iconSandwichCollapse, iconSandwichExpand } from '@opentiny/vue-icon'
import Tooltip from '@opentiny/vue-tooltip'

export default defineComponent({
  props: [
    ...props,
    'data',
    'parentKey',
    'overflow',
    'beforeSkip',
    'fetchMenuData',
    'fields',
    'prevent',
    'allowFullUrl'
  ],
  components: {
    TinyTooltip: Tooltip,
    IconSetting: iconSetting(),
    IconChevronRight: iconChevronRight(),
    IconSandwichCollapse: iconSandwichCollapse(),
    IconSandwichExpand: iconSandwichExpand()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>

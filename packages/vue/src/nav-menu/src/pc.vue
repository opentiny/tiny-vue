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
  <div class="tiny-nav-menu">
    <div
      class="more-button"
      :class="{ mobile: slots.mobileMenu }"
      v-if="/^(retract|fixed)$/.test(overflow)"
      @mouseenter="showSubMenu(state.data[0].children, { more: true })"
      @mouseleave="willHideSubMenu"
    >
      <component :is="state.showMore ? 'IconSandwichExpand' : 'IconSandwichCollapse'"></component>
    </div>
    <div v-if="slots.logo" class="slot-logo">
      <slot name="logo"></slot>
    </div>
    <ul v-if="state.data && state.data.length" :style="state.menuStyle" class="menu">
      <li v-for="(item, index) in state.data" :key="index">
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
    <div v-if="slots.mobileMenu" class="slot-mobile-menu">
      <slot name="mobileMenu"></slot>
    </div>
    <transition name="tiny-transition-zoom-in-top" mode="out-in">
      <ul
        v-show="state.showPopmenu"
        :class="[state.popClass, { slide: state.showPopmenu }]"
        :style="state.popStyle"
        class="popmenu tiny-min-scrollbar"
        @mouseenter="stopHideSubMenu"
        @mouseleave="willHideSubMenu"
      >
        <li v-if="state.showMore" class="more-menu">
          <ul>
            <li v-for="(item, index) in state.more" :key="index" :class="{ active: index === state.subActiveIndex }">
              <component
                :is="getTag(item)"
                :to="getRoute(item)"
                :class="{ showicon: item.children }"
                @mouseenter="setSubMenu(item.children, index)"
                @click="clickMenu(item)"
              >
                {{ item.title }}
              </component>
              <icon-chevron-right v-if="item.children" class="more-icon"></icon-chevron-right>
            </li>
          </ul>
        </li>
        <li v-if="state.subMenus && state.subMenus.length" :class="{ 'full-width': !state.showMore }" class="sub-menu">
          <ul>
            <li
              v-for="(group, index) in state.subMenus"
              :key="index"
              :class="{
                'col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2': state.popClass !== 'single'
              }"
            >
              <ul class="group">
                <li
                  class="tiny-nav-menu__sub-menu-title"
                  :class="!!group.title ? '' : 'tiny-nav-menu__sub-menu-title-blank'"
                >
                  <component :is="getTag(group)" :to="getRoute(group)" @click="clickMenu(group)">{{
                    group.title
                  }}</component>
                </li>
                <li v-for="(item, i) in group.children" :key="i" class="sub-item">
                  <component :is="getTag(item)" :to="getRoute(item)" @click="clickMenu(item)">{{
                    item.title
                  }}</component>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/nav-menu/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconSetting, iconChevronRight, iconSandwichCollapse, iconSandwichExpand } from '@opentiny/vue-icon'

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

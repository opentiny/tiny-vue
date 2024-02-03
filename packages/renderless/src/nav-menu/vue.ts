/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import type {
  INavMenuApi,
  INavMenuProps,
  INavMenuState,
  ISharedRenderlessParamHooks,
  INavMenuRenderlessParamUtils
} from '@/types'
import {
  computedIsShowMore,
  computedPopClass,
  computedSubMenus,
  computedMenuStyle,
  computedPopStyle,
  watchWidth,
  initData,
  mounted,
  unMounted,
  getSelectedIndex,
  showSetting,
  willHideSetting,
  showSubMenu,
  hideSubMenu,
  willHideSubMenu,
  stopHideSubMenu,
  setSubMenu,
  leaveMoreMune,
  isHide,
  hidePopmenu,
  clickMenu,
  skip,
  getPoint,
  classify,
  calcWidth,
  getTag,
  getUrl,
  getRoute,
  setActiveMenu,
  initService,
  handleTitleMouseenter,
  handleTitleMouseleave
} from './index'

export const api = [
  'state',
  'getSelectedIndex',
  'showSetting',
  'willHideSetting',
  'showSubMenu',
  'hideSubMenu',
  'willHideSubMenu',
  'stopHideSubMenu',
  'setSubMenu',
  'leaveMoreMune',
  'isHide',
  'hidePopmenu',
  'clickMenu',
  'skip',
  'getPoint',
  'classify',
  'calcWidth',
  'getTag',
  'getUrl',
  'getRoute',
  'setActiveMenu',
  'handleTitleMouseenter',
  'handleTitleMouseleave'
]

const initState = ({ reactive, api, computed, vm }): INavMenuState =>
  reactive({
    data: [],
    more: [],
    width: -1,
    enterMenu: false,
    popMenuTop: 0,
    subMenu: [],
    showMore: false,
    showPopmenu: false,
    enterMoreMenu: false,
    timer: null,
    activeIndex: -1,
    subActiveIndex: -1,
    selectedIndex: -1,
    subItemSelectedIndex: -1,
    moreItemSelectedIndex: -1,
    subIndex: -1,
    isShowSetting: false,
    tooltipVisible: false,
    tooltipContent: '',
    marginLeft: 0,
    isSaaSTheme: vm.theme === 'saas',
    menuClass: '',
    isShowMore: computed(() => api.computedIsShowMore()),
    popClass: computed(() => api.computedPopClass()),
    subMenus: computed(() => api.computedSubMenus()),
    menuStyle: computed(() => api.computedMenuStyle()),
    popStyle: computed(() => api.computedPopStyle())
  })

const initApi = ({ api, state, props, parent, fetchMenuData, fields, router, route, nextTick, vm }) => {
  Object.assign(api, {
    state,
    getUrl: getUrl(),
    getTag: getTag(props),
    getRoute: getRoute(props),
    setSubMenu: setSubMenu(state),
    leaveMoreMune: leaveMoreMune(state),
    isHide: isHide({ parent, state }),
    setActiveMenu: setActiveMenu(state),
    willHideSetting: willHideSetting(state),
    stopHideSubMenu: stopHideSubMenu(state),
    calcWidth: calcWidth({ parent, props, state }),
    getSelectedIndex: getSelectedIndex(state),
    showSetting: showSetting({ parent, state }),
    initData: initData({ fetchMenuData, fields, props, state }),
    computedIsShowMore: computedIsShowMore({ props, state }),
    computedPopClass: computedPopClass(state),
    computedSubMenus: computedSubMenus(state),
    computedMenuStyle: computedMenuStyle({ props, state }),
    computedPopStyle: computedPopStyle(state),
    skip: skip({ api, router, fields }),
    hidePopmenu: hidePopmenu(api),
    getPoint: getPoint({ api, parent }),
    clickMenu: clickMenu({ api, props, state }),
    unMounted: unMounted({ api, state, router }),
    mounted: mounted({ api, props, router, route, state }),
    classify: classify({ api, props, state }),
    watchWidth: watchWidth({ api, nextTick }),
    willHideSubMenu: willHideSubMenu({ api, state }),
    hideSubMenu: hideSubMenu({ api, parent, state }),
    showSubMenu: showSubMenu({ api, nextTick, parent, state, vm }),
    handleTitleMouseenter: handleTitleMouseenter({ state, vm }),
    handleTitleMouseleave: handleTitleMouseleave({ state })
  })
}

export const renderless = (
  props: INavMenuProps,
  { computed, onMounted, onUnmounted, reactive, watch }: ISharedRenderlessParamHooks,
  { parent, nextTick, service, router, route, vm }: INavMenuRenderlessParamUtils
): INavMenuApi => {
  const api = {} as INavMenuApi
  const { fetchMenuData, fields } = initService({ props, service })
  const state = initState({ reactive, api, computed, vm })

  initApi({ api, state, props, parent, fetchMenuData, fields, router, route, nextTick, vm })

  api.initData()

  watch(() => state.width, api.watchWidth, { deep: true, immediate: true })

  watch(() => state.data, api.watchWidth)

  onMounted(api.mounted)
  onUnmounted(api.unMounted)

  return api
}

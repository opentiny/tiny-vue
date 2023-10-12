import type { ComputedRef, ExtractPropTypes } from 'vue'
import { navMenuProps } from '@/nav-menu/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type INavMenuProps = ExtractPropTypes<typeof navMenuProps>

export interface menuItemType {
    id: number,
    isFullUrl: boolean,
    pid: string,
    route: string,
    title: string,
    url: string,
    children?: menuItemType[],
    target?: string
}

export interface whitchSubMenuType {
    index: number,
    more: boolean
}

export interface INavMenuState {
    data: Array<menuItemType>,
    more: Array<menuItemType>,
    width: number,
    enterMenu: boolean,
    popMenuTop: number,
    subMenu: Array<menuItemType>,
    showMore: boolean,
    showPopmenu: boolean,
    enterMoreMenu: boolean,
    timer: number,
    activeIndex: number,
    subActiveIndex: number,
    selectedIndex: number,
    subItemSelectedIndex: number,
    moreItemSelectedIndex: number,
    subIndex: number,
    isShowSetting: boolean,
    marginLeft: number,
    isShowMore: ComputedRef<boolean>,
    popClass: ComputedRef<boolean>,
    subMenus: ComputedRef<Array<menuItemType>>,
    menuStyle: ComputedRef<boolean>,
    popStyle: ComputedRef<boolean>,
    afterEach: (() => void) | null
}

export interface INavMenuApi {
    state: INavMenuState,
    getUrl: (item: menuItemType) => string,
    getTag: (item: menuItemType) => string,
    getRoute: (item: menuItemType) => string,
    setSubMenu: (value: Array<menuItemType>, index: number) => void,
    leaveMoreMune: () => void,
    isHide: (event: HTMLElement) => boolean,
    setActiveMenu: (index: number) => void,
    willHideSetting: () => void,
    stopHideSubMenu: () => void,
    calcWidth: () => void,
    getSelectedIndex: (path: string) => number,
    showSetting: () => void,
    initData: () => void,
    computedIsShowMore: () => void,
    computedPopClass: () => void,
    computedSubMenus: () => void,
    computedMenuStyle: () => void,
    computedPopStyle: () => void,
    skip: (item: menuItemType, flag: boolean) => void,
    hidePopmenu: (item: menuItemType) => void,
    getPoint: () => number,
    clickMenu: (item: menuItemType, index: number, parentIndex: number) => void,
    unMounted: () => void,
    mounted: () => void,
    classify: () => void,
    watchWidth: () => void,
    willHideSubMenu: () => void,
    hideSubMenu: () => void,
    showSubMenu: (list: Array<menuItemType>, { more, index }: whitchSubMenuType, event: MouseEvent) => void

}
export interface fieldsType {
    textField: string,
    urlField: string,
    key: string
}
export type INavMenuRenderlessParams = ISharedRenderlessFunctionParams<never> & {
    api: INavMenuApi
    state: INavMenuState
    props: INavMenuProps
    fields: fieldsType
    fetchMenuData: () => void
}


export type INavMenuRenderlessParamUtils = ISharedRenderlessParamUtils<never>

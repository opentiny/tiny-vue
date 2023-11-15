export interface NavItem {
  visible?: boolean
  title?: string
  name: string
  selected?: boolean
  slotSetting?: Function
  slotTitle?: Function
}

export interface TabNavItemState {
  withClose: boolean
  tabSize: string,
  separator: boolean
}

export interface TabNavItemInstance {
  name: string
  title: string
  selected: boolean
  navItem: NavItem
  handleNavItemClose: Function
  handleNavItemClick: Function
  state: TabNavItemState
}

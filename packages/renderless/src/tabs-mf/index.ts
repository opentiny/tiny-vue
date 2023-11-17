import { random } from '../common/string'
import debounce from '../common/deps/debounce'
import { fastdom } from '../common/deps/fastdom'

// --- tabs ---
export const setActive = ({ emit, state, props }) => (name) => {
  const current = state.currentItem ? state.currentItem.name : ''

  if (current && current !== name && props.beforeLeave && !props.beforeLeave(name, current)) {
    return
  }

  state.items.forEach((item) => (item.selected = item.name === name))

  emit('update:activeName', name)
  emit('update:modelValue', name)
}

export const addItem = (state) => (item) => {
  state.items = [...state.items, item]
}

export const addNav = (state) => (nav) => {
  state.navs = [...state.navs, nav]
}

export const scrollTo = ({ vm, state }) => (name) => {
  const { navs } = state
  const { $refs } = vm
  const { tabbar } = $refs
  const { scroll } = tabbar.$refs

  fastdom.measure(() => {
    const { clientWidth, scrollWidth } = scroll

    if (name && scrollWidth > clientWidth) {
      const total = navs.length
      const index = navs.findIndex((nav) => nav.name === name)
      const max = scrollWidth - clientWidth

      if (~index) {
        fastdom.mutate(() => {
          scroll.scrollLeft = (max / (total - 1)) * index
          tabbar.wheelListener()
        })
      }
    }
  })
}

export const clickMore = (api) => (name) => {
  api.setActive(name)
  api.scrollTo(name)
}

export const removeItem = ({ state, emit }) => (name) => {
  const itemIndex = state.items.findIndex((item) => item.name === name)
  const navIndex = state.navs.findIndex((item) => item.name === name)

  if (~itemIndex) {
    state.items.splice(itemIndex, 1)
    state.items = [...state.items]

    state.navs.splice(navIndex, 1)
    state.navs = [...state.navs]

    emit('edit', name, 'remove')
    emit('close', name)
  }
}

// --- tab-bar ---
export const wheelListener = ({ vm, api, tabs, state }) =>
  debounce(10, (e) => {
    const { $refs } = vm
    const { getBoundRect } = api

    e && e.stopPropagation()

    $refs.scroll && ($refs.scroll.scrollLeft += ((e || {}).deltaY || 0) / 3)

    state.tabMoreWidth = ($refs.tabMore && $refs.tabMore.offsetWidth) || 0
    state.navPaddingRight = state.tabMoreWidth + 1

    const { left, width } = getBoundRect()
    const barRange = { left, width, reserve: state.tabMoreWidth }
    let { moreList = [], moreLeft = false, moreRight = false } = {}

    tabs.state.navs.forEach((nav) => {
      const { name, rect } = nav.getBoundRect()
      const { left, width } = rect
      const navRange = { name, left, width }

      if (
        navRange.left < barRange.left ||
        navRange.left + navRange.width > barRange.left + barRange.width - barRange.reserve
      ) {
        moreList.push(navRange.name)
      }
    })

    if (tabs.state.items.length) {
      moreLeft = ~moreList.indexOf(tabs.state.items[0].name)
      moreRight = ~moreList.indexOf(tabs.state.items[tabs.state.items.length - 1].name)
    }

    Object.assign(state, { moreList, moreLeft, moreRight })
  })

export const getBoundRect = (vm) => () => vm.$el.getBoundingClientRect()

export const handleClickDropdownItem = (tabs) => (name) => tabs.clickMore(name)

export const key = (opt) => opt.name + '-' + random()

export const emitAdd = (tabs) => () => {
  tabs.$emit('edit', null, 'add')
  tabs.$emit('add')
}

// --- tab-nav-item ---
export const handleNavItemClick = ({ tabs, props }) => () => {
  tabs.setActive(props.navItem.name)
  tabs.$emit('click', props.navItem)
}

export const getBoundRectNV = ({ vm, props }) => () => ({
  name: props.navItem.name,
  rect: vm.$el.getBoundingClientRect()
})

export const handleNavItemClose = ({ tabs, props }) => (e) => {
  e.stopPropagation()
  tabs.removeItem(props.navItem.name)
}

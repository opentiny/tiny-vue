import { omitText } from '../common/string'

export const api = ['dataStore', 'handleClick', 'dataStore', 'mouseEnter', 'mouseLeave']

export const renderless = (props, { reactive, inject }, { dispatch, vm }) => {
  const api = {}
  const dropdownMenuVm = inject('dropdownMenuVm')
  const multiStage = inject('multiStage')
  let dataStore = reactive({
    checkedStatus: dropdownMenuVm.checkedStatus,
    multiStageMenu: '',
    multiStage: '',
    itemData: '',
    itemLabel: '',
    showContent: false,
    dropdownMenuVm,
    currentIndex: props.currentIndex,
    level: props.level
  })

  if (multiStage) {
    dataStore.multiStageMenu = true
  }

  const handleClick = ({ dataStore, props, vm }) => () => {
    if (props.disabled) {
      dataStore.checkedStatus = false
      return
    }

    dataStore.itemData = props.itemData

    dataStore.itemLabel = ''
    dataStore.showContent = false

    if (props.level === '2') {
      dataStore.currentIndex = `${props.level}-${props.currentIndex}`
    } else {
      dataStore.currentIndex = `${props.currentIndex}`
    }

    dispatch('TinyDropdown', 'selectedIndex', [dataStore.currentIndex])

    dispatch('TinyDropdownMenu', 'menu-item-click', [
      dataStore.itemData,
      vm,
      dataStore.itemLabel,
      dataStore.showContent,
      dataStore.currentIndex
    ])
  }

  const mouseLeave = ({ dataStore }) => () => {
    dataStore.itemLabel = ''
    dataStore.showContent = false

    dispatch('TinyDropdownMenu', 'mouseleave-tips', [dataStore.showContent, dataStore.itemLabel])
  }

  const mouseEnter = ({ vm, dataStore }) => (e) => {
    const dom = e.target
    const text = dom.textContent
    const font = window.getComputedStyle(dom).font
    const rect = dom.getBoundingClientRect()
    const res = omitText(text, font, rect.width)
    const tooltip = dataStore.dropdownMenuVm.$refs.tooltip
    if (res.o) {
      tooltip.state.referenceElm = dom
      tooltip.state.popperElm && (tooltip.state.popperElm.style.display = 'none')
      tooltip.doDestroy()

      dataStore.itemLabel = text
      if (vm.$refs.level.scrollWidth > vm.$refs.level.offsetWidth) {
        dataStore.showContent = true
      }

      setTimeout(tooltip.updatePopper, 20)
    }

    dispatch('TinyDropdownMenu', 'mouseenter-tips', [dataStore.showContent, dataStore.itemLabel])
  }

  Object.assign(api, {
    dataStore,
    handleClick: handleClick({ dataStore, props, vm }),
    mouseEnter: mouseEnter({ dataStore, vm, props }),
    mouseLeave: mouseLeave({ dataStore, props })
  })

  return api
}

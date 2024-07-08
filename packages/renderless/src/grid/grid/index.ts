import debounce from '@opentiny/vue-renderless/common/deps/debounce'

export const getviewCls =
  ({ constants, vm }) =>
  (module) => {
    const GlobalConfig = constants?.GLOBAL_CONFIG
    return GlobalConfig.viewConfig[module][vm.viewType] || ''
  }

export const connect =
  ({ state, vm }) =>
  (name) => {
    if (name && typeof name === 'string' && vm) {
      state.vmStore[name] = vm
    }
  }

export const getVm =
  ({ state }) =>
  (name) => {
    // 从缓存获取实例
    if (name && typeof name === 'string' && state.vmStore) {
      return state.vmStore[name]
    }
  }

export const updateParentHeight =
  ({ state, vm }) =>
  () => {
    if (!state.tasks.updateParentHeight) {
      state.tasks.updateParentHeight = debounce(10, () => {
        const { $el, $refs } = vm
        const { tinyTable } = $refs
        const toolbarVm = vm.getVm('toolbar')

        if (tinyTable) {
          tinyTable.parentHeight =
            $el.parentNode.clientHeight -
            (toolbarVm ? toolbarVm.$el.clientHeight : 0) -
            ($refs.pager ? $refs.pager.$el.clientHeight : 0)
        }
      })
    }

    state.tasks.updateParentHeight()
  }

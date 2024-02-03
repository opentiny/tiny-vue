import { handelNodeClick } from './index'

export const api = ['state', 'handelNodeClick']

export const renderless = (props, { reactive, watch, computed }, { dispatch, nextTick }) => {
  const api = {}

  const state = reactive({
    renderNodes: false,
    showNodes: false,
    activeNodeId: null,
    allExpandedKeysPath: computed(() => [...props.expandedKeysPath, ...props.activedKeysPath])
  })

  Object.assign(api, {
    state,
    handelNodeClick: handelNodeClick({ state, dispatch })
  })

  watch(
    () => props.activedKeys,
    () => {
      if (props.activedKeys && props.nodes.id === props.activedKeys && state.activeNodeId !== props.activedKeys) {
        nextTick(() => {
          state.activeNodeId = props.activedKeys
          dispatch('Menu', 'node-changed', { id: props.activedKeys })
        })
      }
    },
    { immediate: true }
  )

  watch(
    () => state.allExpandedKeysPath,
    () => {
      if (state.allExpandedKeysPath.length) {
        state.showNodes = state.allExpandedKeysPath.includes(props.nodes.id)
      }
    },
    { deep: true, immediate: true }
  )

  return api
}

import { handleNodeResize } from './index'

export const api = ['state']

export const renderless = (props, { reactive, computed, inject, onBeforeUnmount }, { vm }) => {
  const { node, config } = props
  const state = reactive({
    nodeName: node.name,
    nodeLayout: computed(() => node.layout || config.nodeLayout || 'up-down'),
    nodeSize: computed(() => config.nodeSize || 'small'),
    nodeStatus: computed(() => config.status[node.info.status] || 'not-started'),
    title: computed(() => ({
      show: config.showOnly && config.showOnly === 'icon' ? false : !!node.info.other.title,
      text: node.info.other.title
    })),
    subtitle: computed(() => ({
      show: config.showOnly ? false : !!node.info.other.subtitle,
      text: node.info.other.subtitle
    })),
    auxi: computed(() => ({
      show: config.showOnly ? false : !!node.info.other.auxi,
      text: node.info.other.auxi
    })),
    titleMaxWidth: computed(() => config.titleMaxWidth || 80),
    posLeft: 0,
    nodeWidth: 0,
    nodeHeight: 0,
    isSmall: false,
    isActive: false,
    layUpdown: computed(() => state.nodeLayout === 'up-down'),
    sizeMini: computed(() => state.nodeSize === 'mini'),
    sizeSmall: computed(() => state.nodeSize === 'small'),
    sizeMedium: computed(() => state.nodeSize === 'medium'),
    statCompleted: computed(() => state.nodeStatus === 'completed'),
    statOngoing: computed(() => state.nodeStatus === 'ongoing'),
    statFail: computed(() => state.nodeStatus === 'fail'),
    statNotStarted: computed(() => state.nodeStatus === 'not-started')
  })

  state.temporary = { padding: 8, height: 24, graphEmitter: inject('graphEmitter') }

  const api = {
    state,
    handleNodeResize: handleNodeResize({ state, vm })
  }

  state.temporary.graphEmitter.on('after-graph-refresh', api.handleNodeResize)

  onBeforeUnmount(() => {
    state.temporary.graphEmitter.off('after-graph-refresh', api.handleNodeResize)
  })

  return api
}

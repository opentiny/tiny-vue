export const updateStartIndex = ({ state, props }) => () => {
  const { visibleNum, active } = props
  const maxStartIndex = Math.min(props.data.length - visibleNum, active - Math.floor(visibleNum / 2))

  state.startIndex = Math.max(0, maxStartIndex)
}

export const isVisibleHandler = ({ state, props }) => (index) => {
  if (index < state.startIndex) {
    return 'hidden-left'
  } else if (index >= state.startIndex + props.visibleNum) {
    return 'hidden-right'
  } else {
    return 'visible'
  }
}

export const computedRightNodePos = ({ state, props }) => () => {
  const { data } = props
  const { endIndex } = state
  const dataLength = data.length
  const nodesLength = dataLength - 1 - endIndex

  return Array.from({ length: nodesLength }).map((item, index) => ({
    zIndex: dataLength - index,
    right: -(index + 1) * 4 + 'px'
  }))
}

export const computedSpace = ({ props }) => {
  const { space } = props
  if (/^\d+$/.test(space)) {
    return `${space}px`
  }

  return space
}

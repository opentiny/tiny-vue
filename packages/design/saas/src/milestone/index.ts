export default {
  renderless: (props, hooks, { constants }, api) => {
    return {
      getMileIcon: (node) => {
        const status = node[props.statusField]
        const statusColor = props.milestonesStatus[status]
        const isCompleted = status === constants.STATUS_COMPLETED

        if (statusColor) {
          return {
            background: props.solid ? statusColor : '',
            color: props.solid && !isCompleted ?  '#ffffff' : statusColor,
            'border-color': statusColor
          }
        }
      },
      getFlagStyle: ({ index, idx }) => {
        return {
          left: `calc(${
            (100 / (props.data[props.flagBefore ? index : index + 1][props.flagField].length + 1)) * (idx + 1)
          }% - 29px)`
        }
      }
    }
  }
}

export default {
  renderless: (props, hooks, { constants }, api) => {
    return {
      getMileIcon: (node) => {
        const status = props.milestonesStatus[node[props.statusField]] || constants.DEFAULT_COLOR

        const isCompleted = node[props.statusField] === props.completedField
        const switchColor = isCompleted && !props.solid
        const { r, g, b } = api.hexToRgb(status)

        return {
          background: (switchColor ? constants.DEFAULT_BACK_COLOR : status) + '!important',
          color: (switchColor ? status : constants.DEFAULT_BACK_COLOR) + '!important',
          boxShadow: `rgba(${r},${g},${b},.4) ${constants.BOX_SHADOW_PX}`
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

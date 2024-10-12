export default {
  renderless: (props, hooks, { emit, constants }, api) => {
    const state = api.state
    const smbConstants = {
      STATUS_COLOR_MAP: {
        DEFAULT: {
          BORDER_COLOR: '#C2C2C2',
          BACKGROUND_COLOR: '#FFFFFF',
          COLOR: '#191919',
          BOX_SHADOW_PX: '0px 0px 0px 4px',
          FLAG_CONTENT_CLS: '.content'
        },
        COMPLETED: {
          BORDER_COLOR: '#191919',
          BACKGROUND_COLOR: '#FFFFFF',
          COLOR: '#191919',
          BOX_SHADOW_PX: '0px 0px 0px 4px',
          FLAG_CONTENT_CLS: '.content'
        },
        DOING: {
          BORDER_COLOR: '#191919',
          BACKGROUND_COLOR: '#191919',
          COLOR: '#FFFFFF',
          BOX_SHADOW_PX: '0px 0px 0px 4px',
          FLAG_CONTENT_CLS: '.content'
        }
      }
    }

    return {
      getMileIcon: (node) => {
        const status = node[props.statusField]
        // 状态色
        const statusColor = props.milestonesStatus[status]

        if (props.solid || status === constants.STATUS_MAP.DOING) {
          return {
            'background-color': statusColor || smbConstants.STATUS_COLOR_MAP.DOING.BACKGROUND_COLOR + '!important',
            color: smbConstants.STATUS_COLOR_MAP.DOING.COLOR + '!important',
            'border-color': statusColor || smbConstants.STATUS_COLOR_MAP.DOING.BORDER_COLOR,
            boxShadow: 'unset'
          }
        }

        if (status === constants.STATUS_MAP.COMPLETED) {
          return {
            'background-color': smbConstants.STATUS_COLOR_MAP.COMPLETED.BACKGROUND_COLOR + '!important',
            color: statusColor || smbConstants.STATUS_COLOR_MAP.COMPLETED.COLOR + '!important',
            'border-color': statusColor || smbConstants.STATUS_COLOR_MAP.COMPLETED.BORDER_COLOR,
            boxShadow: 'unset'
          }
        }

        return {
          background: smbConstants.STATUS_COLOR_MAP.DEFAULT.BACKGROUND_COLOR + '!important',
          color: statusColor || smbConstants.STATUS_COLOR_MAP.DEFAULT.COLOR + '!important',
          'border-color': statusColor || smbConstants.STATUS_COLOR_MAP.DEFAULT.BORDER_COLOR,
          boxShadow: 'unset'
        }
      },
      getFlagStyle: ({ index, idx }) => {
        return {
          left: `calc(${(100 / props.data[props.flagBefore ? index : index + 1][props.flagField].length) * idx}%  + ${
            idx * 8
          }px)`
        }
      }
    }
  }
}

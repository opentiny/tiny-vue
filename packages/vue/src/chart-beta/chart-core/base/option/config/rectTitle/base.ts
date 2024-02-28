import Theme from '../../../feature/token'

// 直角坐标系中的title用于y轴名称
function getBaseOption() {
  return {
    text: '',
    textStyle: {
      fontWeight: 'normal',
      color: Theme.config.yAxisNameColor,
      fontSize: Theme.config.yAxisNameFontSize
    },
    padding: [0, 0, 0, 0]
  }
}

function base() {
  return getBaseOption()
}

export default base

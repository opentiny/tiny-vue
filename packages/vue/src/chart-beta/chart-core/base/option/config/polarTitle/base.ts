import Theme from '../../../feature/theme'

function getBaseTitle() {
  return {
    text: '',
    subtext: '',
    top: 'center',
    left: 'center',
    itemGap: Theme.config.titleItemGap,
    textStyle: {
      color: Theme.config.titleTextColor,
      fontSize: Theme.config.titleTextFontSize,
      lineHeight: 28,
      fontWeight: 'normal'
    },
    subtextStyle: {
      color: Theme.config.titleSubTextColor,
      fontSize: Theme.config.titleSubtextFontSize,
      lineHeight: 24,
      fontWeight: 'normal'
    }
  }
}

function base() {
  return getBaseTitle()
}

export default base

import Theme from '../../../feature/theme'

function getBaseOption() {
  return {
    data: [],
    icon: 'circle',
    left: 'center',
    bottom: 12,
    inactiveColor: Theme.config.legendInactiveColor,
    inactiveBorderColor: Theme.config.legendInactiveBorderColor,
    inactiveBorderWidth: Theme.config.legendInactiveBorderWidth,
    borderWidth: Theme.config.legendBorderWidth,
    formatter: undefined,
    textStyle: {
      fontSize: Theme.config.legendTextFontSize,
      color: Theme.config.legendTextColor,
      align: 'left',
      verticalAlign: 'top',
      padding: Theme.config.legendTextPadding,
      rich: {
        a: {
          fontSize: Theme.config.legendTextRichFontSize,
          color: Theme.config.legendTextRichColor,
          align: 'left',
          verticalAlign: 'top',
          padding: Theme.config.legendTextRichPadding
        },
        b: {
          fontSize: Theme.config.legendTextRichFontSize,
          color: Theme.config.legendTextRichColor,
          align: 'left',
          verticalAlign: 'top',
          padding: Theme.config.legendTextRichPadding
        }
      },
      overflow: 'none',
      width: undefined
    },
    width: undefined,
    pageTextStyle: {
      color: Theme.config.legendPageTextColor
    },
    pageIconColor: undefined,
    pageIconInactiveColor: Theme.config.legendPageIconInactiveColor,
    selectedMode: true,
    align: 'left',
    itemGap: Theme.config.legendItemGap,
    itemWidth: Theme.config.legendCircleItemWidth,
    itemHeight: Theme.config.legendCircleItemHeight,
    itemStyle: {
      borderWidth: Theme.config.legendItemStyleBorderWidth
    }
  }
}

function base() {
  return getBaseOption()
}

export default base

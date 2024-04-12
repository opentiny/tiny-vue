import Theme from '../../../feature/token'
import { pageIconArr } from './pageIcon'

function getBaseOption() {
  return {
    data: [],
    icon: 'circle',
    left: 'center',
    bottom: 12,
    padding: Theme.config.legendPadding,
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
    pageIconColor: Theme.config.legendPageIconColor,
    pageIconInactiveColor: Theme.config.legendPageIconInactiveColor,
    pageIcons: {
      horizontal: pageIconArr,
      vertical: pageIconArr
    },
    selectedMode: true,
    align: 'left',
    itemGap: Theme.config.legendItemGap,
    itemWidth: Theme.config.legendCircleItemWidth,
    itemHeight: Theme.config.legendCircleItemHeight,
    itemStyle: {
      borderWidth: Theme.config.legendItemBorderWidth
    }
  }
}

function base() {
  return getBaseOption()
}

export default base

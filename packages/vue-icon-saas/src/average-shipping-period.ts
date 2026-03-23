import { svg } from '@opentiny/vue-common'
import AverageShippingPeriod from '@opentiny/vue-theme-saas/svgs/average-shipping-period.svg'

const iconFn = () =>
  svg({ name: 'IconAverageShippingPeriod', component: AverageShippingPeriod, filledComponent: AverageShippingPeriod })()

iconFn.__flag = { 'svgName': 'average-shipping-period', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import LocationNumber from '@opentiny/vue-theme-saas/svgs/location-number.svg'
import LocationNumberFilled from '@opentiny/vue-theme-saas/svgs/location-number-filled.svg'

const iconFn = () =>
  svg({ name: 'IconLocationNumber', component: LocationNumber, filledComponent: LocationNumberFilled })()
iconFn.__flag = { 'svgName': 'location-number', 'hasFill': true }
export default iconFn

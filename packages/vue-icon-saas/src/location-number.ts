import { svg } from '@opentiny/vue-common'
import LocationNumber from '@opentiny/vue-theme-saas/svgs/location-number.svg'
import LocationNumberFilled from '@opentiny/vue-theme-saas/svgs/location-number-filled.svg'

export default () =>
  svg({ name: 'IconLocationNumber', component: LocationNumber, filledComponent: LocationNumberFilled })()

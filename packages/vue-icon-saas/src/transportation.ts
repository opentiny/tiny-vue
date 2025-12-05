import { svg } from '@opentiny/vue-common'
import Transportation from '@opentiny/vue-theme-saas/svgs/transportation.svg'
import TransportationFilled from '@opentiny/vue-theme-saas/svgs/transportation-filled.svg'

export default () =>
  svg({ name: 'IconTransportation', component: Transportation, filledComponent: TransportationFilled })()

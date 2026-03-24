import { svg } from '@opentiny/vue-common'
import Transportation from '@opentiny/vue-theme-saas/svgs/transportation.svg'
import TransportationFilled from '@opentiny/vue-theme-saas/svgs/transportation-filled.svg'

const iconFn = () =>
  svg({ name: 'IconTransportation', component: Transportation, filledComponent: TransportationFilled })()
iconFn.__flag = { 'svgName': 'transportation', 'hasFill': true }
export default iconFn

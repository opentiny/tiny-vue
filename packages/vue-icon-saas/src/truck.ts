import { svg } from '@opentiny/vue-common'
import Truck from '@opentiny/vue-theme-saas/svgs/truck.svg'
import TruckFilled from '@opentiny/vue-theme-saas/svgs/truck-filled.svg'

const iconFn = () => svg({ name: 'IconTruck', component: Truck, filledComponent: TruckFilled })()
iconFn.__flag = { 'svgName': 'truck', 'hasFill': true }
export default iconFn

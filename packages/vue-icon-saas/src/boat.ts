import { svg } from '@opentiny/vue-common'
import Boat from '@opentiny/vue-theme-saas/svgs/boat.svg'
import BoatFilled from '@opentiny/vue-theme-saas/svgs/boat-filled.svg'

const iconFn = () => svg({ name: 'IconBoat', component: Boat, filledComponent: BoatFilled })()
iconFn.__flag = { 'svgName': 'boat', 'hasFill': true }
export default iconFn

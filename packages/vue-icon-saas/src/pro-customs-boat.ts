import { svg } from '@opentiny/vue-common'
import ProCustomsBoat from '@opentiny/vue-theme-saas/svgs/pro-customs-boat.svg'

const iconFn = () => svg({ name: 'IconProCustomsBoat', component: ProCustomsBoat, filledComponent: ProCustomsBoat })()

iconFn.__flag = { 'svgName': 'pro-customs-boat', 'hasFill': false }
export default iconFn

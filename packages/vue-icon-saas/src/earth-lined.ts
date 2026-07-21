import { svg } from '@opentiny/vue-common'
import EarthLined from '@opentiny/vue-theme-saas/svgs/earth-lined.svg'
import EarthLinedFilled from '@opentiny/vue-theme-saas/svgs/earth-lined-filled.svg'

const iconFn = () => svg({ name: 'IconEarthLined', component: EarthLined, filledComponent: EarthLinedFilled })()
iconFn.__flag = { 'svgName': 'earth-lined', 'hasFill': true }
export default iconFn

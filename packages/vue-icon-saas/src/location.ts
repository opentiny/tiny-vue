import { svg } from '@opentiny/vue-common'
import Location from '@opentiny/vue-theme-saas/svgs/location.svg'

const iconFn = () => svg({ name: 'IconLocation', component: Location, filledComponent: Location })()

iconFn.__flag = { 'svgName': 'location', 'hasFill': false }
export default iconFn

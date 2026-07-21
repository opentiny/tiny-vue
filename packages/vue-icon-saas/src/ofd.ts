import { svg } from '@opentiny/vue-common'
import Ofd from '@opentiny/vue-theme-saas/svgs/ofd.svg'
import OfdFilled from '@opentiny/vue-theme-saas/svgs/ofd-filled.svg'

const iconFn = () => svg({ name: 'IconOfd', component: Ofd, filledComponent: OfdFilled })()
iconFn.__flag = { 'svgName': 'ofd', 'hasFill': true }
export default iconFn

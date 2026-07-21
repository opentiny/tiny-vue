import { svg } from '@opentiny/vue-common'
import HideTopleft from '@opentiny/vue-theme-saas/svgs/hide-topleft.svg'

const iconFn = () => svg({ name: 'IconHideTopleft', component: HideTopleft, filledComponent: HideTopleft })()

iconFn.__flag = { 'svgName': 'hide-topleft', 'hasFill': false }
export default iconFn

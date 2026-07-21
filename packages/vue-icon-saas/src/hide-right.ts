import { svg } from '@opentiny/vue-common'
import HideRight from '@opentiny/vue-theme-saas/svgs/hide-right.svg'

const iconFn = () => svg({ name: 'IconHideRight', component: HideRight, filledComponent: HideRight })()

iconFn.__flag = { 'svgName': 'hide-right', 'hasFill': false }
export default iconFn

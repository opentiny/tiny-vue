import { svg } from '@opentiny/vue-common'
import HideLeft from '@opentiny/vue-theme-saas/svgs/hide-left.svg'

const iconFn = () => svg({ name: 'IconHideLeft', component: HideLeft, filledComponent: HideLeft })()

iconFn.__flag = { 'svgName': 'hide-left', 'hasFill': false }
export default iconFn

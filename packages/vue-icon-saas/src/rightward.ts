import { svg } from '@opentiny/vue-common'
import Rightward from '@opentiny/vue-theme-saas/svgs/rightward.svg'

const iconFn = () => svg({ name: 'IconRightward', component: Rightward, filledComponent: Rightward })()

iconFn.__flag = { 'svgName': 'rightward', 'hasFill': false }
export default iconFn

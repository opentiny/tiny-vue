import { svg } from '@opentiny/vue-common'
import Right from '@opentiny/vue-theme-saas/svgs/right.svg'

const iconFn = () => svg({ name: 'IconRight', component: Right, filledComponent: Right })()

iconFn.__flag = { 'svgName': 'right', 'hasFill': false }
export default iconFn

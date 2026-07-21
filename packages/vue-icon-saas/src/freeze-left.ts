import { svg } from '@opentiny/vue-common'
import FreezeLeft from '@opentiny/vue-theme-saas/svgs/freeze-left.svg'
import FreezeLeftFilled from '@opentiny/vue-theme-saas/svgs/freeze-left-filled.svg'

const iconFn = () => svg({ name: 'IconFreezeLeft', component: FreezeLeft, filledComponent: FreezeLeftFilled })()
iconFn.__flag = { 'svgName': 'freeze-left', 'hasFill': true }
export default iconFn

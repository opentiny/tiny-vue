import { svg } from '@opentiny/vue-common'
import FreezeRight from '@opentiny/vue-theme-saas/svgs/freeze-right.svg'
import FreezeRightFilled from '@opentiny/vue-theme-saas/svgs/freeze-right-filled.svg'

const iconFn = () => svg({ name: 'IconFreezeRight', component: FreezeRight, filledComponent: FreezeRightFilled })()
iconFn.__flag = { 'svgName': 'freeze-right', 'hasFill': true }
export default iconFn

import { svg } from '@opentiny/vue-common'
import RightFrozen from '@opentiny/vue-theme-saas/svgs/right-frozen.svg'
import RightFrozenFilled from '@opentiny/vue-theme-saas/svgs/right-frozen-filled.svg'

const iconFn = () => svg({ name: 'IconRightFrozen', component: RightFrozen, filledComponent: RightFrozenFilled })()
iconFn.__flag = { 'svgName': 'right-frozen', 'hasFill': true }
export default iconFn

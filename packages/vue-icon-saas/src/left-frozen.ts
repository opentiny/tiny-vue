import { svg } from '@opentiny/vue-common'
import LeftFrozen from '@opentiny/vue-theme-saas/svgs/left-frozen.svg'
import LeftFrozenFilled from '@opentiny/vue-theme-saas/svgs/left-frozen-filled.svg'

const iconFn = () => svg({ name: 'IconLeftFrozen', component: LeftFrozen, filledComponent: LeftFrozenFilled })()
iconFn.__flag = { 'svgName': 'left-frozen', 'hasFill': true }
export default iconFn

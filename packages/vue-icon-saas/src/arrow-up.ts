import { svg } from '@opentiny/vue-common'
import ArrowUp from '@opentiny/vue-theme-saas/svgs/arrow-up.svg'
import ArrowUpFilled from '@opentiny/vue-theme-saas/svgs/arrow-up-filled.svg'

const iconFn = () => svg({ name: 'IconArrowUp', component: ArrowUp, filledComponent: ArrowUpFilled })()
iconFn.__flag = { 'svgName': 'arrow-up', 'hasFill': true }
export default iconFn

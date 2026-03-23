import { svg } from '@opentiny/vue-common'
import ArrowDown from '@opentiny/vue-theme-saas/svgs/arrow-down.svg'
import ArrowDownFilled from '@opentiny/vue-theme-saas/svgs/arrow-down-filled.svg'

const iconFn = () => svg({ name: 'IconArrowDown', component: ArrowDown, filledComponent: ArrowDownFilled })()
iconFn.__flag = { 'svgName': 'arrow-down', 'hasFill': true }
export default iconFn

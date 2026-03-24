import { svg } from '@opentiny/vue-common'
import ChevronDown from '@opentiny/vue-theme-saas/svgs/chevron-down.svg'
import ChevronDownFilled from '@opentiny/vue-theme-saas/svgs/chevron-down-filled.svg'

const iconFn = () => svg({ name: 'IconChevronDown', component: ChevronDown, filledComponent: ChevronDownFilled })()
iconFn.__flag = { 'svgName': 'chevron-down', 'hasFill': true }
export default iconFn

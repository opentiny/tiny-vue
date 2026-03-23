import { svg } from '@opentiny/vue-common'
import ChevronUp from '@opentiny/vue-theme-saas/svgs/chevron-up.svg'
import ChevronUpFilled from '@opentiny/vue-theme-saas/svgs/chevron-up-filled.svg'

const iconFn = () => svg({ name: 'IconChevronUp', component: ChevronUp, filledComponent: ChevronUpFilled })()
iconFn.__flag = { 'svgName': 'chevron-up', 'hasFill': true }
export default iconFn

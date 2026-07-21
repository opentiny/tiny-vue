import { svg } from '@opentiny/vue-common'
import ChevronRight from '@opentiny/vue-theme-saas/svgs/chevron-right.svg'
import ChevronRightFilled from '@opentiny/vue-theme-saas/svgs/chevron-right-filled.svg'

const iconFn = () => svg({ name: 'IconChevronRight', component: ChevronRight, filledComponent: ChevronRightFilled })()
iconFn.__flag = { 'svgName': 'chevron-right', 'hasFill': true }
export default iconFn

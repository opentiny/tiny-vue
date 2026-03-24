import { svg } from '@opentiny/vue-common'
import ChevronLeft from '@opentiny/vue-theme-saas/svgs/chevron-left.svg'
import ChevronLeftFilled from '@opentiny/vue-theme-saas/svgs/chevron-left-filled.svg'

const iconFn = () => svg({ name: 'IconChevronLeft', component: ChevronLeft, filledComponent: ChevronLeftFilled })()
iconFn.__flag = { 'svgName': 'chevron-left', 'hasFill': true }
export default iconFn

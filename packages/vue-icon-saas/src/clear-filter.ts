import { svg } from '@opentiny/vue-common'
import ClearFilter from '@opentiny/vue-theme-saas/svgs/clear-filter.svg'
import ClearFilterFilled from '@opentiny/vue-theme-saas/svgs/clear-filter-filled.svg'

const iconFn = () => svg({ name: 'IconClearFilter', component: ClearFilter, filledComponent: ClearFilterFilled })()
iconFn.__flag = { 'svgName': 'clear-filter', 'hasFill': true }
export default iconFn

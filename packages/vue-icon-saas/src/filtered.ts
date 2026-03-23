import { svg } from '@opentiny/vue-common'
import Filtered from '@opentiny/vue-theme-saas/svgs/filtered.svg'
import FilteredFilled from '@opentiny/vue-theme-saas/svgs/filtered-filled.svg'

const iconFn = () => svg({ name: 'IconFiltered', component: Filtered, filledComponent: FilteredFilled })()
iconFn.__flag = { 'svgName': 'filtered', 'hasFill': true }
export default iconFn

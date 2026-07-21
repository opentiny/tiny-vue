import { svg } from '@opentiny/vue-common'
import FilterView from '@opentiny/vue-theme-saas/svgs/filter-view.svg'
import FilterViewFilled from '@opentiny/vue-theme-saas/svgs/filter-view-filled.svg'

const iconFn = () => svg({ name: 'IconFilterView', component: FilterView, filledComponent: FilterViewFilled })()
iconFn.__flag = { 'svgName': 'filter-view', 'hasFill': true }
export default iconFn

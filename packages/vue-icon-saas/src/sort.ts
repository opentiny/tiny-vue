import { svg } from '@opentiny/vue-common'
import Sort from '@opentiny/vue-theme-saas/svgs/sort.svg'
import SortFilled from '@opentiny/vue-theme-saas/svgs/sort-filled.svg'

const iconFn = () => svg({ name: 'IconSort', component: Sort, filledComponent: SortFilled })()
iconFn.__flag = { 'svgName': 'sort', 'hasFill': true }
export default iconFn

import { svg } from '@opentiny/vue-common'
import SortO from '@opentiny/vue-theme-saas/svgs/sort-o.svg'
import SortOFilled from '@opentiny/vue-theme-saas/svgs/sort-o-filled.svg'

const iconFn = () => svg({ name: 'IconSortO', component: SortO, filledComponent: SortOFilled })()
iconFn.__flag = { 'svgName': 'sort-o', 'hasFill': true }
export default iconFn

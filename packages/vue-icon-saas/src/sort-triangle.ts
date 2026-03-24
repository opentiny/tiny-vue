import { svg } from '@opentiny/vue-common'
import SortTriangle from '@opentiny/vue-theme-saas/svgs/sort-triangle.svg'

const iconFn = () => svg({ name: 'IconSortTriangle', component: SortTriangle, filledComponent: SortTriangle })()

iconFn.__flag = { 'svgName': 'sort-triangle', 'hasFill': false }
export default iconFn

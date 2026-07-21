import { svg } from '@opentiny/vue-common'
import SortTriangleAscending from '@opentiny/vue-theme-saas/svgs/sort-triangle-ascending.svg'

const iconFn = () =>
  svg({ name: 'IconSortTriangleAscending', component: SortTriangleAscending, filledComponent: SortTriangleAscending })()

iconFn.__flag = { 'svgName': 'sort-triangle-ascending', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import SortTriangleDescending from '@opentiny/vue-theme-saas/svgs/sort-triangle-descending.svg'

const iconFn = () =>
  svg({
    name: 'IconSortTriangleDescending',
    component: SortTriangleDescending,
    filledComponent: SortTriangleDescending
  })()

iconFn.__flag = { 'svgName': 'sort-triangle-descending', 'hasFill': false }
export default iconFn

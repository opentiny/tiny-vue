import { svg } from '@opentiny/vue-common'
import SortDefault from '@opentiny/vue-theme-saas/svgs/sort-default.svg'

const iconFn = () => svg({ name: 'IconSortDefault', component: SortDefault, filledComponent: SortDefault })()

iconFn.__flag = { 'svgName': 'sort-default', 'hasFill': false }
export default iconFn

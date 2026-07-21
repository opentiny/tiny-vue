import { svg } from '@opentiny/vue-common'
import Filter from '@opentiny/vue-theme-saas/svgs/filter.svg'

const iconFn = () => svg({ name: 'IconFilter', component: Filter, filledComponent: Filter })()

iconFn.__flag = { 'svgName': 'filter', 'hasFill': false }
export default iconFn

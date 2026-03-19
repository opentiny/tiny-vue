import { svg } from '@opentiny/vue-common'
import Pager from '@opentiny/vue-theme-saas/svgs/pager.svg'
import PagerFilled from '@opentiny/vue-theme-saas/svgs/pager-filled.svg'

const iconFn = () => svg({ name: 'IconPager', component: Pager, filledComponent: PagerFilled })()
iconFn.__flag = { 'svgName': 'pager', 'hasFill': true }
export default iconFn

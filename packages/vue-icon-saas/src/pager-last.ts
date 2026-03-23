import { svg } from '@opentiny/vue-common'
import PagerLast from '@opentiny/vue-theme-saas/svgs/pager-last.svg'
import PagerLastFilled from '@opentiny/vue-theme-saas/svgs/pager-last-filled.svg'

const iconFn = () => svg({ name: 'IconPagerLast', component: PagerLast, filledComponent: PagerLastFilled })()
iconFn.__flag = { 'svgName': 'pager-last', 'hasFill': true }
export default iconFn

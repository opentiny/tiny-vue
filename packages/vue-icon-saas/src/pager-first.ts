import { svg } from '@opentiny/vue-common'
import PagerFirst from '@opentiny/vue-theme-saas/svgs/pager-first.svg'
import PagerFirstFilled from '@opentiny/vue-theme-saas/svgs/pager-first-filled.svg'

const iconFn = () => svg({ name: 'IconPagerFirst', component: PagerFirst, filledComponent: PagerFirstFilled })()
iconFn.__flag = { 'svgName': 'pager-first', 'hasFill': true }
export default iconFn

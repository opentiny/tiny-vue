import { svg } from '@opentiny/vue-common'
import PagerPrev from '@opentiny/vue-theme-saas/svgs/pager-prev.svg'

const iconFn = () => svg({ name: 'IconPagerPrev', component: PagerPrev, filledComponent: PagerPrev })()

iconFn.__flag = { 'svgName': 'pager-prev', 'hasFill': false }
export default iconFn

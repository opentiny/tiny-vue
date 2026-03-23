import { svg } from '@opentiny/vue-common'
import PagerNext from '@opentiny/vue-theme-saas/svgs/pager-next.svg'

const iconFn = () => svg({ name: 'IconPagerNext', component: PagerNext, filledComponent: PagerNext })()

iconFn.__flag = { 'svgName': 'pager-next', 'hasFill': false }
export default iconFn

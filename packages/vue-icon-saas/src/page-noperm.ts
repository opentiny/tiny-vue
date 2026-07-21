import { svg } from '@opentiny/vue-common'
import PageNoperm from '@opentiny/vue-theme-saas/svgs/page-noperm.svg'

const iconFn = () => svg({ name: 'IconPageNoperm', component: PageNoperm, filledComponent: PageNoperm })()

iconFn.__flag = { 'svgName': 'page-noperm', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import PageServererror from '@opentiny/vue-theme-saas/svgs/page-servererror.svg'

const iconFn = () =>
  svg({ name: 'IconPageServererror', component: PageServererror, filledComponent: PageServererror })()

iconFn.__flag = { 'svgName': 'page-servererror', 'hasFill': false }
export default iconFn

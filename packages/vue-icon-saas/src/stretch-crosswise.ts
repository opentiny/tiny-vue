import { svg } from '@opentiny/vue-common'
import StretchCrosswise from '@opentiny/vue-theme-saas/svgs/stretch-crosswise.svg'

const iconFn = () =>
  svg({ name: 'IconStretchCrosswise', component: StretchCrosswise, filledComponent: StretchCrosswise })()

iconFn.__flag = { 'svgName': 'stretch-crosswise', 'hasFill': false }
export default iconFn

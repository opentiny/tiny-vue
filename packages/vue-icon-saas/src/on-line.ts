import { svg } from '@opentiny/vue-common'
import OnLine from '@opentiny/vue-theme-saas/svgs/on-line.svg'
import OnLineFilled from '@opentiny/vue-theme-saas/svgs/on-line-filled.svg'

const iconFn = () => svg({ name: 'IconOnLine', component: OnLine, filledComponent: OnLineFilled })()
iconFn.__flag = { 'svgName': 'on-line', 'hasFill': true }
export default iconFn

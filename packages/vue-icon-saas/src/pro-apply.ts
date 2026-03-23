import { svg } from '@opentiny/vue-common'
import ProApply from '@opentiny/vue-theme-saas/svgs/pro-apply.svg'

const iconFn = () => svg({ name: 'IconProApply', component: ProApply, filledComponent: ProApply })()

iconFn.__flag = { 'svgName': 'pro-apply', 'hasFill': false }
export default iconFn

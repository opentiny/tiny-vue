import { svg } from '@opentiny/vue-common'
import DotIpv4 from '@opentiny/vue-theme-saas/svgs/dot-ipv4.svg'
import DotIpv4Filled from '@opentiny/vue-theme-saas/svgs/dot-ipv4-filled.svg'

const iconFn = () => svg({ name: 'IconDotIpv4', component: DotIpv4, filledComponent: DotIpv4Filled })()
iconFn.__flag = { 'svgName': 'dot-ipv4', 'hasFill': true }
export default iconFn

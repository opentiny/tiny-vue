import { svg } from '@opentiny/vue-common'
import Ellipsis from '@opentiny/vue-theme-saas/svgs/ellipsis.svg'
import EllipsisFilled from '@opentiny/vue-theme-saas/svgs/ellipsis-filled.svg'

const iconFn = () => svg({ name: 'IconEllipsis', component: Ellipsis, filledComponent: EllipsisFilled })()
iconFn.__flag = { 'svgName': 'ellipsis', 'hasFill': true }
export default iconFn

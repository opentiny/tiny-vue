import { svg } from '@opentiny/vue-common'
import ProGeography from '@opentiny/vue-theme-saas/svgs/pro-geography.svg'

const iconFn = () => svg({ name: 'IconProGeography', component: ProGeography, filledComponent: ProGeography })()

iconFn.__flag = { 'svgName': 'pro-geography', 'hasFill': false }
export default iconFn

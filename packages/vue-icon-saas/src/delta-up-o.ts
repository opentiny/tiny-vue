import { svg } from '@opentiny/vue-common'
import DeltaUpO from '@opentiny/vue-theme-saas/svgs/delta-up-o.svg'
import DeltaUpOFilled from '@opentiny/vue-theme-saas/svgs/delta-up-o-filled.svg'

const iconFn = () => svg({ name: 'IconDeltaUpO', component: DeltaUpO, filledComponent: DeltaUpOFilled })()
iconFn.__flag = { 'svgName': 'delta-up-o', 'hasFill': true }
export default iconFn

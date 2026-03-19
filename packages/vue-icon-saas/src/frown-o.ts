import { svg } from '@opentiny/vue-common'
import FrownO from '@opentiny/vue-theme-saas/svgs/frown-o.svg'
import FrownOFilled from '@opentiny/vue-theme-saas/svgs/frown-o-filled.svg'

const iconFn = () => svg({ name: 'IconFrownO', component: FrownO, filledComponent: FrownOFilled })()
iconFn.__flag = { 'svgName': 'frown-o', 'hasFill': true }
export default iconFn

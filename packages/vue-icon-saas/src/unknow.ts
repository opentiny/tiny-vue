import { svg } from '@opentiny/vue-common'
import Unknow from '@opentiny/vue-theme-saas/svgs/unknow.svg'
import UnknowFilled from '@opentiny/vue-theme-saas/svgs/unknow-filled.svg'

const iconFn = () => svg({ name: 'IconUnknow', component: Unknow, filledComponent: UnknowFilled })()
iconFn.__flag = { 'svgName': 'unknow', 'hasFill': true }
export default iconFn

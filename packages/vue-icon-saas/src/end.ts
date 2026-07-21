import { svg } from '@opentiny/vue-common'
import End from '@opentiny/vue-theme-saas/svgs/end.svg'
import EndFilled from '@opentiny/vue-theme-saas/svgs/end-filled.svg'

const iconFn = () => svg({ name: 'IconEnd', component: End, filledComponent: EndFilled })()
iconFn.__flag = { 'svgName': 'end', 'hasFill': true }
export default iconFn

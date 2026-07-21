import { svg } from '@opentiny/vue-common'
import Flag from '@opentiny/vue-theme-saas/svgs/flag.svg'
import FlagFilled from '@opentiny/vue-theme-saas/svgs/flag-filled.svg'

const iconFn = () => svg({ name: 'IconFlag', component: Flag, filledComponent: FlagFilled })()
iconFn.__flag = { 'svgName': 'flag', 'hasFill': true }
export default iconFn

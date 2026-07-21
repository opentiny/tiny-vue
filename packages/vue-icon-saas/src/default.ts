import { svg } from '@opentiny/vue-common'
import Default from '@opentiny/vue-theme-saas/svgs/default.svg'
import DefaultFilled from '@opentiny/vue-theme-saas/svgs/default-filled.svg'

const iconFn = () => svg({ name: 'IconDefault', component: Default, filledComponent: DefaultFilled })()
iconFn.__flag = { 'svgName': 'default', 'hasFill': true }
export default iconFn

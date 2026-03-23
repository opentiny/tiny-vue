import { svg } from '@opentiny/vue-common'
import Exclamation from '@opentiny/vue-theme-saas/svgs/exclamation.svg'

const iconFn = () => svg({ name: 'IconExclamation', component: Exclamation, filledComponent: Exclamation })()

iconFn.__flag = { 'svgName': 'exclamation', 'hasFill': false }
export default iconFn

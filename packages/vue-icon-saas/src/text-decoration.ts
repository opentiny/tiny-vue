import { svg } from '@opentiny/vue-common'
import TextDecoration from '@opentiny/vue-theme-saas/svgs/text-decoration.svg'

const iconFn = () => svg({ name: 'IconTextDecoration', component: TextDecoration, filledComponent: TextDecoration })()

iconFn.__flag = { 'svgName': 'text-decoration', 'hasFill': false }
export default iconFn

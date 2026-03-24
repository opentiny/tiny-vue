import { svg } from '@opentiny/vue-common'
import Separate from '@opentiny/vue-theme-saas/svgs/separate.svg'

const iconFn = () => svg({ name: 'IconSeparate', component: Separate, filledComponent: Separate })()

iconFn.__flag = { 'svgName': 'separate', 'hasFill': false }
export default iconFn

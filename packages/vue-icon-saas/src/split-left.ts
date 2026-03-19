import { svg } from '@opentiny/vue-common'
import SplitLeft from '@opentiny/vue-theme-saas/svgs/split-left.svg'

const iconFn = () => svg({ name: 'IconSplitLeft', component: SplitLeft, filledComponent: SplitLeft })()

iconFn.__flag = { 'svgName': 'split-left', 'hasFill': false }
export default iconFn

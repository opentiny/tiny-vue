import { svg } from '@opentiny/vue-common'
import SplitRight from '@opentiny/vue-theme-saas/svgs/split-right.svg'

const iconFn = () => svg({ name: 'IconSplitRight', component: SplitRight, filledComponent: SplitRight })()

iconFn.__flag = { 'svgName': 'split-right', 'hasFill': false }
export default iconFn

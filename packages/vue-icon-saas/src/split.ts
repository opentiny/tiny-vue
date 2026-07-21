import { svg } from '@opentiny/vue-common'
import Split from '@opentiny/vue-theme-saas/svgs/split.svg'
import SplitFilled from '@opentiny/vue-theme-saas/svgs/split-filled.svg'

const iconFn = () => svg({ name: 'IconSplit', component: Split, filledComponent: SplitFilled })()
iconFn.__flag = { 'svgName': 'split', 'hasFill': true }
export default iconFn

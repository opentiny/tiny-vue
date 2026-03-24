import { svg } from '@opentiny/vue-common'
import Anchor from '@opentiny/vue-theme-saas/svgs/anchor.svg'
import AnchorFilled from '@opentiny/vue-theme-saas/svgs/anchor-filled.svg'

const iconFn = () => svg({ name: 'IconAnchor', component: Anchor, filledComponent: AnchorFilled })()
iconFn.__flag = { 'svgName': 'anchor', 'hasFill': true }
export default iconFn

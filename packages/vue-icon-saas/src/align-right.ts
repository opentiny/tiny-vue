import { svg } from '@opentiny/vue-common'
import AlignRight from '@opentiny/vue-theme-saas/svgs/align-right.svg'

const iconFn = () => svg({ name: 'IconAlignRight', component: AlignRight, filledComponent: AlignRight })()

iconFn.__flag = { 'svgName': 'align-right', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import AlignBaseline from '@opentiny/vue-theme-saas/svgs/align-baseline.svg'

const iconFn = () => svg({ name: 'IconAlignBaseline', component: AlignBaseline, filledComponent: AlignBaseline })()

iconFn.__flag = { 'svgName': 'align-baseline', 'hasFill': false }
export default iconFn

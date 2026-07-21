import { svg } from '@opentiny/vue-common'
import CueLO from '@opentiny/vue-theme-saas/svgs/cue-l-o.svg'

const iconFn = () => svg({ name: 'IconCueLO', component: CueLO, filledComponent: CueLO })()

iconFn.__flag = { 'svgName': 'cue-l-o', 'hasFill': false }
export default iconFn

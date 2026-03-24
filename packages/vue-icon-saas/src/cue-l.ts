import { svg } from '@opentiny/vue-common'
import CueL from '@opentiny/vue-theme-saas/svgs/cue-l.svg'
import CueLFilled from '@opentiny/vue-theme-saas/svgs/cue-l-filled.svg'

const iconFn = () => svg({ name: 'IconCueL', component: CueL, filledComponent: CueLFilled })()
iconFn.__flag = { 'svgName': 'cue-l', 'hasFill': true }
export default iconFn

import { svg } from '@opentiny/vue-common'
import Progress from '@opentiny/vue-theme-saas/svgs/progress.svg'
import ProgressFilled from '@opentiny/vue-theme-saas/svgs/progress-filled.svg'

const iconFn = () => svg({ name: 'IconProgress', component: Progress, filledComponent: ProgressFilled })()
iconFn.__flag = { 'svgName': 'progress', 'hasFill': true }
export default iconFn

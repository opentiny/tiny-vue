import { svg } from '@opentiny/vue-common'
import NotStarted from '@opentiny/vue-theme-saas/svgs/not-started.svg'

const iconFn = () => svg({ name: 'IconNotStarted', component: NotStarted, filledComponent: NotStarted })()

iconFn.__flag = { 'svgName': 'not-started', 'hasFill': false }
export default iconFn

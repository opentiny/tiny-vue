import { svg } from '@opentiny/vue-common'
import OnGoing from '@opentiny/vue-theme-saas/svgs/on-going.svg'

const iconFn = () => svg({ name: 'IconOnGoing', component: OnGoing, filledComponent: OnGoing })()

iconFn.__flag = { 'svgName': 'on-going', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import Unknown from '@opentiny/vue-theme-saas/svgs/unknown.svg'

const iconFn = () => svg({ name: 'IconUnknown', component: Unknown, filledComponent: Unknown })()

iconFn.__flag = { 'svgName': 'unknown', 'hasFill': false }
export default iconFn

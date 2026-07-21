import { svg } from '@opentiny/vue-common'
import SmileO from '@opentiny/vue-theme-saas/svgs/smile-o.svg'

const iconFn = () => svg({ name: 'IconSmileO', component: SmileO, filledComponent: SmileO })()

iconFn.__flag = { 'svgName': 'smile-o', 'hasFill': false }
export default iconFn

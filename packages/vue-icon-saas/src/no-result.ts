import { svg } from '@opentiny/vue-common'
import NoResult from '@opentiny/vue-theme-saas/svgs/no-result.svg'

const iconFn = () => svg({ name: 'IconNoResult', component: NoResult, filledComponent: NoResult })()

iconFn.__flag = { 'svgName': 'no-result', 'hasFill': false }
export default iconFn

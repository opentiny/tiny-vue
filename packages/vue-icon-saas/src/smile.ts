import { svg } from '@opentiny/vue-common'
import Smile from '@opentiny/vue-theme-saas/svgs/smile.svg'
import SmileFilled from '@opentiny/vue-theme-saas/svgs/smile-filled.svg'

const iconFn = () => svg({ name: 'IconSmile', component: Smile, filledComponent: SmileFilled })()
iconFn.__flag = { 'svgName': 'smile', 'hasFill': true }
export default iconFn

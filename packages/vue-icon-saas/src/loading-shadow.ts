import { svg } from '@opentiny/vue-common'
import LoadingShadow from '@opentiny/vue-theme-saas/svgs/loading-shadow.svg'

const iconFn = () => svg({ name: 'IconLoadingShadow', component: LoadingShadow, filledComponent: LoadingShadow })()

iconFn.__flag = { 'svgName': 'loading-shadow', 'hasFill': false }
export default iconFn

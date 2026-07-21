import { svg } from '@opentiny/vue-common'
import PutAway from '@opentiny/vue-theme-saas/svgs/put-away.svg'

const iconFn = () => svg({ name: 'IconPutAway', component: PutAway, filledComponent: PutAway })()

iconFn.__flag = { 'svgName': 'put-away', 'hasFill': false }
export default iconFn

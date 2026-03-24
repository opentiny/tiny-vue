import { svg } from '@opentiny/vue-common'
import Time from '@opentiny/vue-theme-saas/svgs/time.svg'

const iconFn = () => svg({ name: 'IconTime', component: Time, filledComponent: Time })()

iconFn.__flag = { 'svgName': 'time', 'hasFill': false }
export default iconFn

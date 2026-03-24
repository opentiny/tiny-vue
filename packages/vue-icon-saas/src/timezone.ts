import { svg } from '@opentiny/vue-common'
import Timezone from '@opentiny/vue-theme-saas/svgs/timezone.svg'
import TimezoneFilled from '@opentiny/vue-theme-saas/svgs/timezone-filled.svg'

const iconFn = () => svg({ name: 'IconTimezone', component: Timezone, filledComponent: TimezoneFilled })()
iconFn.__flag = { 'svgName': 'timezone', 'hasFill': true }
export default iconFn

import { svg } from '@opentiny/vue-common'
import MetAlert from '@opentiny/vue-theme-saas/svgs/met-alert.svg'
import MetAlertFilled from '@opentiny/vue-theme-saas/svgs/met-alert-filled.svg'

const iconFn = () => svg({ name: 'IconMetAlert', component: MetAlert, filledComponent: MetAlertFilled })()
iconFn.__flag = { 'svgName': 'met-alert', 'hasFill': true }
export default iconFn

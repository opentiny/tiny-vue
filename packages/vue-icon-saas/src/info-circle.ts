import { svg } from '@opentiny/vue-common'
import InfoCircle from '@opentiny/vue-theme-saas/svgs/info-circle.svg'
import InfoCircleFilled from '@opentiny/vue-theme-saas/svgs/info-circle-filled.svg'

const iconFn = () => svg({ name: 'IconInfoCircle', component: InfoCircle, filledComponent: InfoCircleFilled })()
iconFn.__flag = { 'svgName': 'info-circle', 'hasFill': true }
export default iconFn

import { svg } from '@opentiny/vue-common'
import StartCircle from '@opentiny/vue-theme-saas/svgs/start-circle.svg'
import StartCircleFilled from '@opentiny/vue-theme-saas/svgs/start-circle-filled.svg'

const iconFn = () => svg({ name: 'IconStartCircle', component: StartCircle, filledComponent: StartCircleFilled })()
iconFn.__flag = { 'svgName': 'start-circle', 'hasFill': true }
export default iconFn

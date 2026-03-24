import { svg } from '@opentiny/vue-common'
import CloseCircle from '@opentiny/vue-theme-saas/svgs/close-circle.svg'
import CloseCircleFilled from '@opentiny/vue-theme-saas/svgs/close-circle-filled.svg'

const iconFn = () => svg({ name: 'IconCloseCircle', component: CloseCircle, filledComponent: CloseCircleFilled })()
iconFn.__flag = { 'svgName': 'close-circle', 'hasFill': true }
export default iconFn

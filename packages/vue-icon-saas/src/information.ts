import { svg } from '@opentiny/vue-common'
import Information from '@opentiny/vue-theme-saas/svgs/information.svg'
import InformationFilled from '@opentiny/vue-theme-saas/svgs/information-filled.svg'

const iconFn = () => svg({ name: 'IconInformation', component: Information, filledComponent: InformationFilled })()
iconFn.__flag = { 'svgName': 'information', 'hasFill': true }
export default iconFn

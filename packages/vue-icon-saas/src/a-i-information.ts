import { svg } from '@opentiny/vue-common'
import AIInformation from '@opentiny/vue-theme-saas/svgs/a-i-information.svg'
import AIInformationFilled from '@opentiny/vue-theme-saas/svgs/a-i-information-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAIInformation', component: AIInformation, filledComponent: AIInformationFilled })()
iconFn.__flag = { 'svgName': 'a-i-information', 'hasFill': true }
export default iconFn

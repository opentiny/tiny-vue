import { svg } from '@opentiny/vue-common'
import PersonalInformation from '@opentiny/vue-theme-saas/svgs/personal-information.svg'
import PersonalInformationFilled from '@opentiny/vue-theme-saas/svgs/personal-information-filled.svg'

const iconFn = () =>
  svg({ name: 'IconPersonalInformation', component: PersonalInformation, filledComponent: PersonalInformationFilled })()
iconFn.__flag = { 'svgName': 'personal-information', 'hasFill': true }
export default iconFn

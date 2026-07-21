import { svg } from '@opentiny/vue-common'
import PrivacyCreation from '@opentiny/vue-theme-saas/svgs/privacy-creation.svg'
import PrivacyCreationFilled from '@opentiny/vue-theme-saas/svgs/privacy-creation-filled.svg'

const iconFn = () =>
  svg({ name: 'IconPrivacyCreation', component: PrivacyCreation, filledComponent: PrivacyCreationFilled })()
iconFn.__flag = { 'svgName': 'privacy-creation', 'hasFill': true }
export default iconFn

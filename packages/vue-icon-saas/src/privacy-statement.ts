import { svg } from '@opentiny/vue-common'
import PrivacyStatement from '@opentiny/vue-theme-saas/svgs/privacy-statement.svg'
import PrivacyStatementFilled from '@opentiny/vue-theme-saas/svgs/privacy-statement-filled.svg'

const iconFn = () =>
  svg({ name: 'IconPrivacyStatement', component: PrivacyStatement, filledComponent: PrivacyStatementFilled })()
iconFn.__flag = { 'svgName': 'privacy-statement', 'hasFill': true }
export default iconFn

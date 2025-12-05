import { svg } from '@opentiny/vue-common'
import PrivacyStatement from '@opentiny/vue-theme-saas/svgs/privacy-statement.svg'
import PrivacyStatementFilled from '@opentiny/vue-theme-saas/svgs/privacy-statement-filled.svg'

export default () =>
  svg({ name: 'IconPrivacyStatement', component: PrivacyStatement, filledComponent: PrivacyStatementFilled })()

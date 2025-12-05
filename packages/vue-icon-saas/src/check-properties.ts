import { svg } from '@opentiny/vue-common'
import CheckProperties from '@opentiny/vue-theme-saas/svgs/check-properties.svg'
import CheckPropertiesFilled from '@opentiny/vue-theme-saas/svgs/check-properties-filled.svg'

export default () =>
  svg({ name: 'IconCheckProperties', component: CheckProperties, filledComponent: CheckPropertiesFilled })()

import { svg } from '@opentiny/vue-common'
import ServiceSubscription from '@opentiny/vue-theme-saas/svgs/service-subscription.svg'
import ServiceSubscriptionFilled from '@opentiny/vue-theme-saas/svgs/service-subscription-filled.svg'

export default () =>
  svg({ name: 'IconServiceSubscription', component: ServiceSubscription, filledComponent: ServiceSubscriptionFilled })()

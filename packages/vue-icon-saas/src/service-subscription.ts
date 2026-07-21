import { svg } from '@opentiny/vue-common'
import ServiceSubscription from '@opentiny/vue-theme-saas/svgs/service-subscription.svg'
import ServiceSubscriptionFilled from '@opentiny/vue-theme-saas/svgs/service-subscription-filled.svg'

const iconFn = () =>
  svg({ name: 'IconServiceSubscription', component: ServiceSubscription, filledComponent: ServiceSubscriptionFilled })()
iconFn.__flag = { 'svgName': 'service-subscription', 'hasFill': true }
export default iconFn

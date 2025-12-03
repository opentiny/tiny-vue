import { svg } from '@opentiny/vue-common'
import CustomerService from '@opentiny/vue-theme-saas/svgs/customer-service.svg'
import CustomerServiceFilled from '@opentiny/vue-theme-saas/svgs/customer-service-filled.svg'

export default () =>
  svg({ name: 'IconCustomerService', component: CustomerService, filledComponent: CustomerServiceFilled })()

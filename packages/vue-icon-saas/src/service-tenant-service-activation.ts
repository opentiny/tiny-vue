import { svg } from '@opentiny/vue-common'
import ServiceTenantServiceActivation from '@opentiny/vue-theme-saas/svgs/service-tenant-service-activation.svg'
import ServiceTenantServiceActivationFilled from '@opentiny/vue-theme-saas/svgs/service-tenant-service-activation-filled.svg'

export default () =>
  svg({
    name: 'IconServiceTenantServiceActivation',
    component: ServiceTenantServiceActivation,
    filledComponent: ServiceTenantServiceActivationFilled
  })()

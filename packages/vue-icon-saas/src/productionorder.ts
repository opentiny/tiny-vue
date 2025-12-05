import { svg } from '@opentiny/vue-common'
import Productionorder from '@opentiny/vue-theme-saas/svgs/productionorder.svg'
import ProductionorderFilled from '@opentiny/vue-theme-saas/svgs/productionorder-filled.svg'

export default () =>
  svg({ name: 'IconProductionorder', component: Productionorder, filledComponent: ProductionorderFilled })()

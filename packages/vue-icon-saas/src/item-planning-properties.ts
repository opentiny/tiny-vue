import { svg } from '@opentiny/vue-common'
import ItemPlanningProperties from '@opentiny/vue-theme-saas/svgs/item-planning-properties.svg'
import ItemPlanningPropertiesFilled from '@opentiny/vue-theme-saas/svgs/item-planning-properties-filled.svg'

export default () =>
  svg({
    name: 'IconItemPlanningProperties',
    component: ItemPlanningProperties,
    filledComponent: ItemPlanningPropertiesFilled
  })()

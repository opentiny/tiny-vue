import { svg } from '@opentiny/vue-common'
import ItemPlanningProperties from '@opentiny/vue-theme-saas/svgs/item-planning-properties.svg'
import ItemPlanningPropertiesFilled from '@opentiny/vue-theme-saas/svgs/item-planning-properties-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconItemPlanningProperties',
    component: ItemPlanningProperties,
    filledComponent: ItemPlanningPropertiesFilled
  })()
iconFn.__flag = { 'svgName': 'item-planning-properties', 'hasFill': true }
export default iconFn

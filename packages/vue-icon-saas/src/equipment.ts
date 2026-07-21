import { svg } from '@opentiny/vue-common'
import Equipment from '@opentiny/vue-theme-saas/svgs/equipment.svg'
import EquipmentFilled from '@opentiny/vue-theme-saas/svgs/equipment-filled.svg'

const iconFn = () => svg({ name: 'IconEquipment', component: Equipment, filledComponent: EquipmentFilled })()
iconFn.__flag = { 'svgName': 'equipment', 'hasFill': true }
export default iconFn

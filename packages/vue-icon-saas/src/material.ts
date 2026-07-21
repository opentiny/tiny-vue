import { svg } from '@opentiny/vue-common'
import Material from '@opentiny/vue-theme-saas/svgs/material.svg'
import MaterialFilled from '@opentiny/vue-theme-saas/svgs/material-filled.svg'

const iconFn = () => svg({ name: 'IconMaterial', component: Material, filledComponent: MaterialFilled })()
iconFn.__flag = { 'svgName': 'material', 'hasFill': true }
export default iconFn

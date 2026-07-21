import { svg } from '@opentiny/vue-common'
import SubstituteMaterial from '@opentiny/vue-theme-saas/svgs/substitute-material.svg'
import SubstituteMaterialFilled from '@opentiny/vue-theme-saas/svgs/substitute-material-filled.svg'

const iconFn = () =>
  svg({ name: 'IconSubstituteMaterial', component: SubstituteMaterial, filledComponent: SubstituteMaterialFilled })()
iconFn.__flag = { 'svgName': 'substitute-material', 'hasFill': true }
export default iconFn

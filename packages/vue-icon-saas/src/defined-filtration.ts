import { svg } from '@opentiny/vue-common'
import DefinedFiltration from '@opentiny/vue-theme-saas/svgs/defined-filtration.svg'
import DefinedFiltrationFilled from '@opentiny/vue-theme-saas/svgs/defined-filtration-filled.svg'

const iconFn = () =>
  svg({ name: 'IconDefinedFiltration', component: DefinedFiltration, filledComponent: DefinedFiltrationFilled })()
iconFn.__flag = { 'svgName': 'defined-filtration', 'hasFill': true }
export default iconFn

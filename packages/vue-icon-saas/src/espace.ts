import { svg } from '@opentiny/vue-common'
import Espace from '@opentiny/vue-theme-saas/svgs/espace.svg'

const iconFn = () => svg({ name: 'IconEspace', component: Espace, filledComponent: Espace })()

iconFn.__flag = { 'svgName': 'espace', 'hasFill': false }
export default iconFn

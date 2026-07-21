import { svg } from '@opentiny/vue-common'
import Peography from '@opentiny/vue-theme-saas/svgs/peography.svg'
import PeographyFilled from '@opentiny/vue-theme-saas/svgs/peography-filled.svg'

const iconFn = () => svg({ name: 'IconPeography', component: Peography, filledComponent: PeographyFilled })()
iconFn.__flag = { 'svgName': 'peography', 'hasFill': true }
export default iconFn

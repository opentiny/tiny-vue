import { svg } from '@opentiny/vue-common'
import StarO from '@opentiny/vue-theme-saas/svgs/star-o.svg'

const iconFn = () => svg({ name: 'IconStarO', component: StarO, filledComponent: StarO })()

iconFn.__flag = { 'svgName': 'star-o', 'hasFill': false }
export default iconFn

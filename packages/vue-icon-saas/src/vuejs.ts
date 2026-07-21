import { svg } from '@opentiny/vue-common'
import Vuejs from '@opentiny/vue-theme-saas/svgs/vuejs.svg'

const iconFn = () => svg({ name: 'IconVuejs', component: Vuejs, filledComponent: Vuejs })()

iconFn.__flag = { 'svgName': 'vuejs', 'hasFill': false }
export default iconFn

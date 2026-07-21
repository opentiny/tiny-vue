import { svg } from '@opentiny/vue-common'
import None from '@opentiny/vue-theme-saas/svgs/none.svg'

const iconFn = () => svg({ name: 'IconNone', component: None, filledComponent: None })()

iconFn.__flag = { 'svgName': 'none', 'hasFill': false }
export default iconFn

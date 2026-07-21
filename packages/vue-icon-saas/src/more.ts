import { svg } from '@opentiny/vue-common'
import More from '@opentiny/vue-theme-saas/svgs/more.svg'

const iconFn = () => svg({ name: 'IconMore', component: More, filledComponent: More })()

iconFn.__flag = { 'svgName': 'more', 'hasFill': false }
export default iconFn

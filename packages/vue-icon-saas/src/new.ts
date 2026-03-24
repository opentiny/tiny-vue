import { svg } from '@opentiny/vue-common'
import New from '@opentiny/vue-theme-saas/svgs/new.svg'

const iconFn = () => svg({ name: 'IconNew', component: New, filledComponent: New })()

iconFn.__flag = { 'svgName': 'new', 'hasFill': false }
export default iconFn

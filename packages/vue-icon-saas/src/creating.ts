import { svg } from '@opentiny/vue-common'
import Creating from '@opentiny/vue-theme-saas/svgs/creating.svg'

const iconFn = () => svg({ name: 'IconCreating', component: Creating, filledComponent: Creating })()

iconFn.__flag = { 'svgName': 'creating', 'hasFill': false }
export default iconFn

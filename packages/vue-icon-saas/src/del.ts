import { svg } from '@opentiny/vue-common'
import Del from '@opentiny/vue-theme-saas/svgs/del.svg'

const iconFn = () => svg({ name: 'IconDel', component: Del, filledComponent: Del })()

iconFn.__flag = { 'svgName': 'del', 'hasFill': false }
export default iconFn

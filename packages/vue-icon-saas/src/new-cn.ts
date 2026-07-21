import { svg } from '@opentiny/vue-common'
import NewCn from '@opentiny/vue-theme-saas/svgs/new-cn.svg'
import NewCnFilled from '@opentiny/vue-theme-saas/svgs/new-cn-filled.svg'

const iconFn = () => svg({ name: 'IconNewCn', component: NewCn, filledComponent: NewCnFilled })()
iconFn.__flag = { 'svgName': 'new-cn', 'hasFill': true }
export default iconFn

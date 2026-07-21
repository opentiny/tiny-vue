import { svg } from '@opentiny/vue-common'
import Cascader from '@opentiny/vue-theme-saas/svgs/cascader.svg'
import CascaderFilled from '@opentiny/vue-theme-saas/svgs/cascader-filled.svg'

const iconFn = () => svg({ name: 'IconCascader', component: Cascader, filledComponent: CascaderFilled })()
iconFn.__flag = { 'svgName': 'cascader', 'hasFill': true }
export default iconFn

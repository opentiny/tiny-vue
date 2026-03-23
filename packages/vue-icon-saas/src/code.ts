import { svg } from '@opentiny/vue-common'
import Code from '@opentiny/vue-theme-saas/svgs/code.svg'

const iconFn = () => svg({ name: 'IconCode', component: Code, filledComponent: Code })()

iconFn.__flag = { 'svgName': 'code', 'hasFill': false }
export default iconFn

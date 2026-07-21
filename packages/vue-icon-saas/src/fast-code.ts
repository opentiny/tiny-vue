import { svg } from '@opentiny/vue-common'
import FastCode from '@opentiny/vue-theme-saas/svgs/fast-code.svg'
import FastCodeFilled from '@opentiny/vue-theme-saas/svgs/fast-code-filled.svg'

const iconFn = () => svg({ name: 'IconFastCode', component: FastCode, filledComponent: FastCodeFilled })()
iconFn.__flag = { 'svgName': 'fast-code', 'hasFill': true }
export default iconFn

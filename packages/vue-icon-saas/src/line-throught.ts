import { svg } from '@opentiny/vue-common'
import LineThrought from '@opentiny/vue-theme-saas/svgs/line-throught.svg'

const iconFn = () => svg({ name: 'IconLineThrought', component: LineThrought, filledComponent: LineThrought })()

iconFn.__flag = { 'svgName': 'line-throught', 'hasFill': false }
export default iconFn

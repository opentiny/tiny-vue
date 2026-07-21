import { svg } from '@opentiny/vue-common'
import LineHeight from '@opentiny/vue-theme-saas/svgs/line-height.svg'

const iconFn = () => svg({ name: 'IconLineHeight', component: LineHeight, filledComponent: LineHeight })()

iconFn.__flag = { 'svgName': 'line-height', 'hasFill': false }
export default iconFn

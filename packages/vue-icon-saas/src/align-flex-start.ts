import { svg } from '@opentiny/vue-common'
import AlignFlexStart from '@opentiny/vue-theme-saas/svgs/align-flex-start.svg'

const iconFn = () => svg({ name: 'IconAlignFlexStart', component: AlignFlexStart, filledComponent: AlignFlexStart })()

iconFn.__flag = { 'svgName': 'align-flex-start', 'hasFill': false }
export default iconFn

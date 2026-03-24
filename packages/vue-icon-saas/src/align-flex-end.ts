import { svg } from '@opentiny/vue-common'
import AlignFlexEnd from '@opentiny/vue-theme-saas/svgs/align-flex-end.svg'

const iconFn = () => svg({ name: 'IconAlignFlexEnd', component: AlignFlexEnd, filledComponent: AlignFlexEnd })()

iconFn.__flag = { 'svgName': 'align-flex-end', 'hasFill': false }
export default iconFn

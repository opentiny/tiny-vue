import { svg } from '@opentiny/vue-common'
import AlignLeft from '@opentiny/vue-theme-saas/svgs/align-left.svg'

const iconFn = () => svg({ name: 'IconAlignLeft', component: AlignLeft, filledComponent: AlignLeft })()

iconFn.__flag = { 'svgName': 'align-left', 'hasFill': false }
export default iconFn

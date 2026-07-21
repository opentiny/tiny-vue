import { svg } from '@opentiny/vue-common'
import Copy from '@opentiny/vue-theme-saas/svgs/copy.svg'
import CopyFilled from '@opentiny/vue-theme-saas/svgs/copy-filled.svg'

const iconFn = () => svg({ name: 'IconCopy', component: Copy, filledComponent: CopyFilled })()
iconFn.__flag = { 'svgName': 'copy', 'hasFill': true }
export default iconFn

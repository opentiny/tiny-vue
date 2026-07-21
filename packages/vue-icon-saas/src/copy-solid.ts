import { svg } from '@opentiny/vue-common'
import CopySolid from '@opentiny/vue-theme-saas/svgs/copy-solid.svg'

const iconFn = () => svg({ name: 'IconCopySolid', component: CopySolid, filledComponent: CopySolid })()

iconFn.__flag = { 'svgName': 'copy-solid', 'hasFill': false }
export default iconFn

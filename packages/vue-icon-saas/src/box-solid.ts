import { svg } from '@opentiny/vue-common'
import BoxSolid from '@opentiny/vue-theme-saas/svgs/box-solid.svg'

const iconFn = () => svg({ name: 'IconBoxSolid', component: BoxSolid, filledComponent: BoxSolid })()

iconFn.__flag = { 'svgName': 'box-solid', 'hasFill': false }
export default iconFn

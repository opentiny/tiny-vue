import { svg } from '@opentiny/vue-common'
import Redo from '@opentiny/vue-theme-saas/svgs/redo.svg'

const iconFn = () => svg({ name: 'IconRedo', component: Redo, filledComponent: Redo })()

iconFn.__flag = { 'svgName': 'redo', 'hasFill': false }
export default iconFn

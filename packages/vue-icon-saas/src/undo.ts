import { svg } from '@opentiny/vue-common'
import Undo from '@opentiny/vue-theme-saas/svgs/undo.svg'

const iconFn = () => svg({ name: 'IconUndo', component: Undo, filledComponent: Undo })()

iconFn.__flag = { 'svgName': 'undo', 'hasFill': false }
export default iconFn

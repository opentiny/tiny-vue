import { svg } from '@opentiny/vue-common'
import PlusSquare from '@opentiny/vue-theme-saas/svgs/plus-square.svg'

const iconFn = () => svg({ name: 'IconPlusSquare', component: PlusSquare, filledComponent: PlusSquare })()

iconFn.__flag = { 'svgName': 'plus-square', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import PlusCircle from '@opentiny/vue-theme-saas/svgs/plus-circle.svg'
import PlusCircleFilled from '@opentiny/vue-theme-saas/svgs/plus-circle-filled.svg'

const iconFn = () => svg({ name: 'IconPlusCircle', component: PlusCircle, filledComponent: PlusCircleFilled })()
iconFn.__flag = { 'svgName': 'plus-circle', 'hasFill': true }
export default iconFn

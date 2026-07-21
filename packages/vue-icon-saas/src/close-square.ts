import { svg } from '@opentiny/vue-common'
import CloseSquare from '@opentiny/vue-theme-saas/svgs/close-square.svg'
import CloseSquareFilled from '@opentiny/vue-theme-saas/svgs/close-square-filled.svg'

const iconFn = () => svg({ name: 'IconCloseSquare', component: CloseSquare, filledComponent: CloseSquareFilled })()
iconFn.__flag = { 'svgName': 'close-square', 'hasFill': true }
export default iconFn

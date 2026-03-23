import { svg } from '@opentiny/vue-common'
import ConnectSquare from '@opentiny/vue-theme-saas/svgs/connect-square.svg'
import ConnectSquareFilled from '@opentiny/vue-theme-saas/svgs/connect-square-filled.svg'

const iconFn = () =>
  svg({ name: 'IconConnectSquare', component: ConnectSquare, filledComponent: ConnectSquareFilled })()
iconFn.__flag = { 'svgName': 'connect-square', 'hasFill': true }
export default iconFn

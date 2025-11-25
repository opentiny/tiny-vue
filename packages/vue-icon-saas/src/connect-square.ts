import { svg } from '@opentiny/vue-common'
import ConnectSquare from '@opentiny/vue-theme-saas/svgs/connect-square.svg'
import ConnectSquareFilled from '@opentiny/vue-theme-saas/svgs/connect-square-filled.svg'

export default () =>
  svg({ name: 'IconConnectSquare', component: ConnectSquare, filledComponent: ConnectSquareFilled })()

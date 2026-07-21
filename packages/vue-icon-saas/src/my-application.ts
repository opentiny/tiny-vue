import { svg } from '@opentiny/vue-common'
import MyApplication from '@opentiny/vue-theme-saas/svgs/my-application.svg'
import MyApplicationFilled from '@opentiny/vue-theme-saas/svgs/my-application-filled.svg'

const iconFn = () =>
  svg({ name: 'IconMyApplication', component: MyApplication, filledComponent: MyApplicationFilled })()
iconFn.__flag = { 'svgName': 'my-application', 'hasFill': true }
export default iconFn

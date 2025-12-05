import { svg } from '@opentiny/vue-common'
import MyApplication from '@opentiny/vue-theme-saas/svgs/my-application.svg'
import MyApplicationFilled from '@opentiny/vue-theme-saas/svgs/my-application-filled.svg'

export default () =>
  svg({ name: 'IconMyApplication', component: MyApplication, filledComponent: MyApplicationFilled })()

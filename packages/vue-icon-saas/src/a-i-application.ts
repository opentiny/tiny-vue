import { svg } from '@opentiny/vue-common'
import AIApplication from '@opentiny/vue-theme-saas/svgs/a-i-application.svg'
import AIApplicationFilled from '@opentiny/vue-theme-saas/svgs/a-i-application-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAIApplication', component: AIApplication, filledComponent: AIApplicationFilled })()
iconFn.__flag = { 'svgName': 'a-i-application', 'hasFill': true }
export default iconFn

import { svg } from '@opentiny/vue-common'
import AIITServiceQA from '@opentiny/vue-theme-saas/svgs/a-i-i-t-service-q-a.svg'
import AIITServiceQAFilled from '@opentiny/vue-theme-saas/svgs/a-i-i-t-service-q-a-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAIITServiceQA', component: AIITServiceQA, filledComponent: AIITServiceQAFilled })()
iconFn.__flag = { 'svgName': 'a-i-i-t-service-q-a', 'hasFill': true }
export default iconFn

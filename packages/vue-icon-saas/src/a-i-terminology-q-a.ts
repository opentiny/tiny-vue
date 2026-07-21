import { svg } from '@opentiny/vue-common'
import AITerminologyQA from '@opentiny/vue-theme-saas/svgs/a-i-terminology-q-a.svg'
import AITerminologyQAFilled from '@opentiny/vue-theme-saas/svgs/a-i-terminology-q-a-filled.svg'

const iconFn = () =>
  svg({ name: 'IconAITerminologyQA', component: AITerminologyQA, filledComponent: AITerminologyQAFilled })()
iconFn.__flag = { 'svgName': 'a-i-terminology-q-a', 'hasFill': true }
export default iconFn

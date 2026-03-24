import { svg } from '@opentiny/vue-common'
import AIProcessQA from '@opentiny/vue-theme-saas/svgs/a-i-process-q-a.svg'
import AIProcessQAFilled from '@opentiny/vue-theme-saas/svgs/a-i-process-q-a-filled.svg'

const iconFn = () => svg({ name: 'IconAIProcessQA', component: AIProcessQA, filledComponent: AIProcessQAFilled })()
iconFn.__flag = { 'svgName': 'a-i-process-q-a', 'hasFill': true }
export default iconFn

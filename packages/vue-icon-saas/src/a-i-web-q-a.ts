import { svg } from '@opentiny/vue-common'
import AIWebQA from '@opentiny/vue-theme-saas/svgs/a-i-web-q-a.svg'
import AIWebQAFilled from '@opentiny/vue-theme-saas/svgs/a-i-web-q-a-filled.svg'

const iconFn = () => svg({ name: 'IconAIWebQA', component: AIWebQA, filledComponent: AIWebQAFilled })()
iconFn.__flag = { 'svgName': 'a-i-web-q-a', 'hasFill': true }
export default iconFn

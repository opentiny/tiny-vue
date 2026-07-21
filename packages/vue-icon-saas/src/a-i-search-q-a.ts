import { svg } from '@opentiny/vue-common'
import AISearchQA from '@opentiny/vue-theme-saas/svgs/a-i-search-q-a.svg'
import AISearchQAFilled from '@opentiny/vue-theme-saas/svgs/a-i-search-q-a-filled.svg'

const iconFn = () => svg({ name: 'IconAISearchQA', component: AISearchQA, filledComponent: AISearchQAFilled })()
iconFn.__flag = { 'svgName': 'a-i-search-q-a', 'hasFill': true }
export default iconFn

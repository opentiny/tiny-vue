import { svg } from '@opentiny/vue-common'
import AIPosting from '@opentiny/vue-theme-saas/svgs/a-i-posting.svg'
import AIPostingFilled from '@opentiny/vue-theme-saas/svgs/a-i-posting-filled.svg'

const iconFn = () => svg({ name: 'IconAIPosting', component: AIPosting, filledComponent: AIPostingFilled })()
iconFn.__flag = { 'svgName': 'a-i-posting', 'hasFill': true }
export default iconFn

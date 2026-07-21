import { svg } from '@opentiny/vue-common'
import AIQuestion from '@opentiny/vue-theme-saas/svgs/a-i-question.svg'
import AIQuestionFilled from '@opentiny/vue-theme-saas/svgs/a-i-question-filled.svg'

const iconFn = () => svg({ name: 'IconAIQuestion', component: AIQuestion, filledComponent: AIQuestionFilled })()
iconFn.__flag = { 'svgName': 'a-i-question', 'hasFill': true }
export default iconFn

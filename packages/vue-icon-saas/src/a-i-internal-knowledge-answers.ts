import { svg } from '@opentiny/vue-common'
import AIInternalKnowledgeAnswers from '@opentiny/vue-theme-saas/svgs/a-i-internal-knowledge-answers.svg'
import AIInternalKnowledgeAnswersFilled from '@opentiny/vue-theme-saas/svgs/a-i-internal-knowledge-answers-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconAIInternalKnowledgeAnswers',
    component: AIInternalKnowledgeAnswers,
    filledComponent: AIInternalKnowledgeAnswersFilled
  })()
iconFn.__flag = { 'svgName': 'a-i-internal-knowledge-answers', 'hasFill': true }
export default iconFn

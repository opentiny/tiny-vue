import { svg } from '@opentiny/vue-common'
import AIExternalKnowledgeAnswer from '@opentiny/vue-theme-saas/svgs/a-i-external-knowledge-answer.svg'
import AIExternalKnowledgeAnswerFilled from '@opentiny/vue-theme-saas/svgs/a-i-external-knowledge-answer-filled.svg'

const iconFn = () =>
  svg({
    name: 'IconAIExternalKnowledgeAnswer',
    component: AIExternalKnowledgeAnswer,
    filledComponent: AIExternalKnowledgeAnswerFilled
  })()
iconFn.__flag = { 'svgName': 'a-i-external-knowledge-answer', 'hasFill': true }
export default iconFn

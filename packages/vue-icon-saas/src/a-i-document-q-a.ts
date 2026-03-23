import { svg } from '@opentiny/vue-common'
import AIDocumentQA from '@opentiny/vue-theme-saas/svgs/a-i-document-q-a.svg'
import AIDocumentQAFilled from '@opentiny/vue-theme-saas/svgs/a-i-document-q-a-filled.svg'

const iconFn = () => svg({ name: 'IconAIDocumentQA', component: AIDocumentQA, filledComponent: AIDocumentQAFilled })()
iconFn.__flag = { 'svgName': 'a-i-document-q-a', 'hasFill': true }
export default iconFn

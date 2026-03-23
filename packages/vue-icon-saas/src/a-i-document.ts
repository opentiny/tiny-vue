import { svg } from '@opentiny/vue-common'
import AIDocument from '@opentiny/vue-theme-saas/svgs/a-i-document.svg'
import AIDocumentFilled from '@opentiny/vue-theme-saas/svgs/a-i-document-filled.svg'

const iconFn = () => svg({ name: 'IconAIDocument', component: AIDocument, filledComponent: AIDocumentFilled })()
iconFn.__flag = { 'svgName': 'a-i-document', 'hasFill': true }
export default iconFn

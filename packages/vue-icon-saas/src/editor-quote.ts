import { svg } from '@opentiny/vue-common'
import EditorQuote from '@opentiny/vue-theme-saas/svgs/editor-quote.svg'
import EditorQuoteFilled from '@opentiny/vue-theme-saas/svgs/editor-quote-filled.svg'

const iconFn = () => svg({ name: 'IconEditorQuote', component: EditorQuote, filledComponent: EditorQuoteFilled })()
iconFn.__flag = { 'svgName': 'editor-quote', 'hasFill': true }
export default iconFn

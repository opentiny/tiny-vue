import { svg } from '@opentiny/vue-common'
import RichTextUndo from '@opentiny/vue-theme-saas/svgs/rich-text-undo.svg'

const iconFn = () => svg({ name: 'IconRichTextUndo', component: RichTextUndo, filledComponent: RichTextUndo })()

iconFn.__flag = { 'svgName': 'rich-text-undo', 'hasFill': false }
export default iconFn

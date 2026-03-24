import { svg } from '@opentiny/vue-common'
import RichTextRedo from '@opentiny/vue-theme-saas/svgs/rich-text-redo.svg'

const iconFn = () => svg({ name: 'IconRichTextRedo', component: RichTextRedo, filledComponent: RichTextRedo })()

iconFn.__flag = { 'svgName': 'rich-text-redo', 'hasFill': false }
export default iconFn

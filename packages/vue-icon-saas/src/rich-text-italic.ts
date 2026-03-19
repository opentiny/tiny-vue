import { svg } from '@opentiny/vue-common'
import RichTextItalic from '@opentiny/vue-theme-saas/svgs/rich-text-italic.svg'

const iconFn = () => svg({ name: 'IconRichTextItalic', component: RichTextItalic, filledComponent: RichTextItalic })()

iconFn.__flag = { 'svgName': 'rich-text-italic', 'hasFill': false }
export default iconFn

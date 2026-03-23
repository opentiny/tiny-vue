import { svg } from '@opentiny/vue-common'
import RichTextParagraph from '@opentiny/vue-theme-saas/svgs/rich-text-paragraph.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextParagraph', component: RichTextParagraph, filledComponent: RichTextParagraph })()

iconFn.__flag = { 'svgName': 'rich-text-paragraph', 'hasFill': false }
export default iconFn

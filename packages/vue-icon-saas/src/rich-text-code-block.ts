import { svg } from '@opentiny/vue-common'
import RichTextCodeBlock from '@opentiny/vue-theme-saas/svgs/rich-text-code-block.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextCodeBlock', component: RichTextCodeBlock, filledComponent: RichTextCodeBlock })()

iconFn.__flag = { 'svgName': 'rich-text-code-block', 'hasFill': false }
export default iconFn

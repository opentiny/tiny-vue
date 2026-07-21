import { svg } from '@opentiny/vue-common'
import RichTextAlignLeft from '@opentiny/vue-theme-saas/svgs/rich-text-align-left.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextAlignLeft', component: RichTextAlignLeft, filledComponent: RichTextAlignLeft })()

iconFn.__flag = { 'svgName': 'rich-text-align-left', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import RichTextAlignRight from '@opentiny/vue-theme-saas/svgs/rich-text-align-right.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextAlignRight', component: RichTextAlignRight, filledComponent: RichTextAlignRight })()

iconFn.__flag = { 'svgName': 'rich-text-align-right', 'hasFill': false }
export default iconFn

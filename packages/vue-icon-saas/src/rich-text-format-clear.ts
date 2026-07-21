import { svg } from '@opentiny/vue-common'
import RichTextFormatClear from '@opentiny/vue-theme-saas/svgs/rich-text-format-clear.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextFormatClear', component: RichTextFormatClear, filledComponent: RichTextFormatClear })()

iconFn.__flag = { 'svgName': 'rich-text-format-clear', 'hasFill': false }
export default iconFn

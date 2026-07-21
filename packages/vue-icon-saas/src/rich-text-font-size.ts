import { svg } from '@opentiny/vue-common'
import RichTextFontSize from '@opentiny/vue-theme-saas/svgs/rich-text-font-size.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextFontSize', component: RichTextFontSize, filledComponent: RichTextFontSize })()

iconFn.__flag = { 'svgName': 'rich-text-font-size', 'hasFill': false }
export default iconFn

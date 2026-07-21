import { svg } from '@opentiny/vue-common'
import RichTextUnderline from '@opentiny/vue-theme-saas/svgs/rich-text-underline.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextUnderline', component: RichTextUnderline, filledComponent: RichTextUnderline })()

iconFn.__flag = { 'svgName': 'rich-text-underline', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import RichTextSuperscript from '@opentiny/vue-theme-saas/svgs/rich-text-superscript.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextSuperscript', component: RichTextSuperscript, filledComponent: RichTextSuperscript })()

iconFn.__flag = { 'svgName': 'rich-text-superscript', 'hasFill': false }
export default iconFn

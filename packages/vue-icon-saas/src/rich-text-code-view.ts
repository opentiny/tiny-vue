import { svg } from '@opentiny/vue-common'
import RichTextCodeView from '@opentiny/vue-theme-saas/svgs/rich-text-code-view.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextCodeView', component: RichTextCodeView, filledComponent: RichTextCodeView })()

iconFn.__flag = { 'svgName': 'rich-text-code-view', 'hasFill': false }
export default iconFn

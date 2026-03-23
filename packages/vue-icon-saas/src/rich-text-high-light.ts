import { svg } from '@opentiny/vue-common'
import RichTextHighLight from '@opentiny/vue-theme-saas/svgs/rich-text-high-light.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextHighLight', component: RichTextHighLight, filledComponent: RichTextHighLight })()

iconFn.__flag = { 'svgName': 'rich-text-high-light', 'hasFill': false }
export default iconFn

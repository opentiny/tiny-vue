import { svg } from '@opentiny/vue-common'
import RichTextLineHeight from '@opentiny/vue-theme-saas/svgs/rich-text-line-height.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextLineHeight', component: RichTextLineHeight, filledComponent: RichTextLineHeight })()

iconFn.__flag = { 'svgName': 'rich-text-line-height', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import RichTextDeleteColumn from '@opentiny/vue-theme-saas/svgs/rich-text-delete-column.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextDeleteColumn', component: RichTextDeleteColumn, filledComponent: RichTextDeleteColumn })()

iconFn.__flag = { 'svgName': 'rich-text-delete-column', 'hasFill': false }
export default iconFn

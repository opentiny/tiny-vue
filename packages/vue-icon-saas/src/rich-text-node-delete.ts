import { svg } from '@opentiny/vue-common'
import RichTextNodeDelete from '@opentiny/vue-theme-saas/svgs/rich-text-node-delete.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextNodeDelete', component: RichTextNodeDelete, filledComponent: RichTextNodeDelete })()

iconFn.__flag = { 'svgName': 'rich-text-node-delete', 'hasFill': false }
export default iconFn

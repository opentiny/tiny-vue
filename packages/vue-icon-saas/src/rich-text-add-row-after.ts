import { svg } from '@opentiny/vue-common'
import RichTextAddRowAfter from '@opentiny/vue-theme-saas/svgs/rich-text-add-row-after.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextAddRowAfter', component: RichTextAddRowAfter, filledComponent: RichTextAddRowAfter })()

iconFn.__flag = { 'svgName': 'rich-text-add-row-after', 'hasFill': false }
export default iconFn

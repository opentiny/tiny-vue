import { svg } from '@opentiny/vue-common'
import RichTextDeleteRow from '@opentiny/vue-theme-saas/svgs/rich-text-delete-row.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextDeleteRow', component: RichTextDeleteRow, filledComponent: RichTextDeleteRow })()

iconFn.__flag = { 'svgName': 'rich-text-delete-row', 'hasFill': false }
export default iconFn

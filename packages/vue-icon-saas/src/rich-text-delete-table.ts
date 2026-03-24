import { svg } from '@opentiny/vue-common'
import RichTextDeleteTable from '@opentiny/vue-theme-saas/svgs/rich-text-delete-table.svg'

const iconFn = () =>
  svg({ name: 'IconRichTextDeleteTable', component: RichTextDeleteTable, filledComponent: RichTextDeleteTable })()

iconFn.__flag = { 'svgName': 'rich-text-delete-table', 'hasFill': false }
export default iconFn

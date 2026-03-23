import { svg } from '@opentiny/vue-common'
import RichTextTable from '@opentiny/vue-theme-saas/svgs/rich-text-table.svg'

const iconFn = () => svg({ name: 'IconRichTextTable', component: RichTextTable, filledComponent: RichTextTable })()

iconFn.__flag = { 'svgName': 'rich-text-table', 'hasFill': false }
export default iconFn

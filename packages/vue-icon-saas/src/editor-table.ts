import { svg } from '@opentiny/vue-common'
import EditorTable from '@opentiny/vue-theme-saas/svgs/editor-table.svg'
import EditorTableFilled from '@opentiny/vue-theme-saas/svgs/editor-table-filled.svg'

const iconFn = () => svg({ name: 'IconEditorTable', component: EditorTable, filledComponent: EditorTableFilled })()
iconFn.__flag = { 'svgName': 'editor-table', 'hasFill': true }
export default iconFn

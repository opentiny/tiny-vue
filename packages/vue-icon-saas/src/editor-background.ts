import { svg } from '@opentiny/vue-common'
import EditorBackground from '@opentiny/vue-theme-saas/svgs/editor-background.svg'

const iconFn = () =>
  svg({ name: 'IconEditorBackground', component: EditorBackground, filledComponent: EditorBackground })()

iconFn.__flag = { 'svgName': 'editor-background', 'hasFill': false }
export default iconFn

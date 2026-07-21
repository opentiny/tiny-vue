import { svg } from '@opentiny/vue-common'
import Editor from '@opentiny/vue-theme-saas/svgs/editor.svg'

const iconFn = () => svg({ name: 'IconEditor', component: Editor, filledComponent: Editor })()

iconFn.__flag = { 'svgName': 'editor', 'hasFill': false }
export default iconFn

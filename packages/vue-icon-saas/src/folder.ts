import { svg } from '@opentiny/vue-common'
import Folder from '@opentiny/vue-theme-saas/svgs/folder.svg'

const iconFn = () => svg({ name: 'IconFolder', component: Folder, filledComponent: Folder })()

iconFn.__flag = { 'svgName': 'folder', 'hasFill': false }
export default iconFn

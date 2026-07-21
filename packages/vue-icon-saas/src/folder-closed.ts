import { svg } from '@opentiny/vue-common'
import FolderClosed from '@opentiny/vue-theme-saas/svgs/folder-closed.svg'
import FolderClosedFilled from '@opentiny/vue-theme-saas/svgs/folder-closed-filled.svg'

const iconFn = () => svg({ name: 'IconFolderClosed', component: FolderClosed, filledComponent: FolderClosedFilled })()
iconFn.__flag = { 'svgName': 'folder-closed', 'hasFill': true }
export default iconFn

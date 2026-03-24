import { svg } from '@opentiny/vue-common'
import FolderClosedSolid from '@opentiny/vue-theme-saas/svgs/folder-closed-solid.svg'

const iconFn = () =>
  svg({ name: 'IconFolderClosedSolid', component: FolderClosedSolid, filledComponent: FolderClosedSolid })()

iconFn.__flag = { 'svgName': 'folder-closed-solid', 'hasFill': false }
export default iconFn

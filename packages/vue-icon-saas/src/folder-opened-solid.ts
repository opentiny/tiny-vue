import { svg } from '@opentiny/vue-common'
import FolderOpenedSolid from '@opentiny/vue-theme-saas/svgs/folder-opened-solid.svg'

const iconFn = () =>
  svg({ name: 'IconFolderOpenedSolid', component: FolderOpenedSolid, filledComponent: FolderOpenedSolid })()

iconFn.__flag = { 'svgName': 'folder-opened-solid', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import FolderOpened from '@opentiny/vue-theme-saas/svgs/folder-opened.svg'

const iconFn = () => svg({ name: 'IconFolderOpened', component: FolderOpened, filledComponent: FolderOpened })()

iconFn.__flag = { 'svgName': 'folder-opened', 'hasFill': false }
export default iconFn

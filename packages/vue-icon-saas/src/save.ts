import { svg } from '@opentiny/vue-common'
import Save from '@opentiny/vue-theme-saas/svgs/save.svg'
import SaveFilled from '@opentiny/vue-theme-saas/svgs/save-filled.svg'

const iconFn = () => svg({ name: 'IconSave', component: Save, filledComponent: SaveFilled })()
iconFn.__flag = { 'svgName': 'save', 'hasFill': true }
export default iconFn

import { svg } from '@opentiny/vue-common'
import Shortcut from '@opentiny/vue-theme-saas/svgs/shortcut.svg'
import ShortcutFilled from '@opentiny/vue-theme-saas/svgs/shortcut-filled.svg'

const iconFn = () => svg({ name: 'IconShortcut', component: Shortcut, filledComponent: ShortcutFilled })()
iconFn.__flag = { 'svgName': 'shortcut', 'hasFill': true }
export default iconFn

import { svg } from '@opentiny/vue-common'
import Help from '@opentiny/vue-theme-saas/svgs/help.svg'

const iconFn = () => svg({ name: 'IconHelp', component: Help, filledComponent: Help })()

iconFn.__flag = { 'svgName': 'help', 'hasFill': false }
export default iconFn

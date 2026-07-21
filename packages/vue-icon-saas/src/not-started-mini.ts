import { svg } from '@opentiny/vue-common'
import NotStartedMini from '@opentiny/vue-theme-saas/svgs/not-started-mini.svg'

const iconFn = () => svg({ name: 'IconNotStartedMini', component: NotStartedMini, filledComponent: NotStartedMini })()

iconFn.__flag = { 'svgName': 'not-started-mini', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import Application from '@opentiny/vue-theme-saas/svgs/application.svg'

const iconFn = () => svg({ name: 'IconApplication', component: Application, filledComponent: Application })()

iconFn.__flag = { 'svgName': 'application', 'hasFill': false }
export default iconFn

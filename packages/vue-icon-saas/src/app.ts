import { svg } from '@opentiny/vue-common'
import App from '@opentiny/vue-theme-saas/svgs/app.svg'

const iconFn = () => svg({ name: 'IconApp', component: App, filledComponent: App })()

iconFn.__flag = { 'svgName': 'app', 'hasFill': false }
export default iconFn

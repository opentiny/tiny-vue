import { svg } from '@opentiny/vue-common'
import Update from '@opentiny/vue-theme-saas/svgs/update.svg'

const iconFn = () => svg({ name: 'IconUpdate', component: Update, filledComponent: Update })()

iconFn.__flag = { 'svgName': 'update', 'hasFill': false }
export default iconFn

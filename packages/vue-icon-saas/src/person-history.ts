import { svg } from '@opentiny/vue-common'
import PersonHistory from '@opentiny/vue-theme-saas/svgs/person-history.svg'

const iconFn = () => svg({ name: 'IconPersonHistory', component: PersonHistory, filledComponent: PersonHistory })()

iconFn.__flag = { 'svgName': 'person-history', 'hasFill': false }
export default iconFn

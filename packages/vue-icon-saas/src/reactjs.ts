import { svg } from '@opentiny/vue-common'
import Reactjs from '@opentiny/vue-theme-saas/svgs/reactjs.svg'

const iconFn = () => svg({ name: 'IconReactjs', component: Reactjs, filledComponent: Reactjs })()

iconFn.__flag = { 'svgName': 'reactjs', 'hasFill': false }
export default iconFn

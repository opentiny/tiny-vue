import { svg } from '@opentiny/vue-common'
import Text from '@opentiny/vue-theme-saas/svgs/text.svg'

const iconFn = () => svg({ name: 'IconText', component: Text, filledComponent: Text })()

iconFn.__flag = { 'svgName': 'text', 'hasFill': false }
export default iconFn

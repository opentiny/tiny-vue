import { svg } from '@opentiny/vue-common'
import GoBack from '@opentiny/vue-theme-saas/svgs/go-back.svg'

const iconFn = () => svg({ name: 'IconGoBack', component: GoBack, filledComponent: GoBack })()

iconFn.__flag = { 'svgName': 'go-back', 'hasFill': false }
export default iconFn

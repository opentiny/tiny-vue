import { svg } from '@opentiny/vue-common'
import Publish from '@opentiny/vue-theme-saas/svgs/publish.svg'
import PublishFilled from '@opentiny/vue-theme-saas/svgs/publish-filled.svg'

const iconFn = () => svg({ name: 'IconPublish', component: Publish, filledComponent: PublishFilled })()
iconFn.__flag = { 'svgName': 'publish', 'hasFill': true }
export default iconFn

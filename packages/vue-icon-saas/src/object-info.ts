import { svg } from '@opentiny/vue-common'
import ObjectInfo from '@opentiny/vue-theme-saas/svgs/object-info.svg'
import ObjectInfoFilled from '@opentiny/vue-theme-saas/svgs/object-info-filled.svg'

const iconFn = () => svg({ name: 'IconObjectInfo', component: ObjectInfo, filledComponent: ObjectInfoFilled })()
iconFn.__flag = { 'svgName': 'object-info', 'hasFill': true }
export default iconFn

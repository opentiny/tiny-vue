import { svg } from '@opentiny/vue-common'
import Service from '@opentiny/vue-theme-saas/svgs/service.svg'
import ServiceFilled from '@opentiny/vue-theme-saas/svgs/service-filled.svg'

const iconFn = () => svg({ name: 'IconService', component: Service, filledComponent: ServiceFilled })()
iconFn.__flag = { 'svgName': 'service', 'hasFill': true }
export default iconFn

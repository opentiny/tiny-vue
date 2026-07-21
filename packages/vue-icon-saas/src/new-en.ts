import { svg } from '@opentiny/vue-common'
import NewEn from '@opentiny/vue-theme-saas/svgs/new-en.svg'
import NewEnFilled from '@opentiny/vue-theme-saas/svgs/new-en-filled.svg'

const iconFn = () => svg({ name: 'IconNewEn', component: NewEn, filledComponent: NewEnFilled })()
iconFn.__flag = { 'svgName': 'new-en', 'hasFill': true }
export default iconFn

import { svg } from '@opentiny/vue-common'
import GeneralPageIndigo from '@opentiny/vue-theme-saas/svgs/general-page-indigo.svg'
import GeneralPageIndigoFilled from '@opentiny/vue-theme-saas/svgs/general-page-indigo-filled.svg'

const iconFn = () =>
  svg({ name: 'IconGeneralPageIndigo', component: GeneralPageIndigo, filledComponent: GeneralPageIndigoFilled })()
iconFn.__flag = { 'svgName': 'general-page-indigo', 'hasFill': true }
export default iconFn

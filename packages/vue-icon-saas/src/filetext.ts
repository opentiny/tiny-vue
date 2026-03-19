import { svg } from '@opentiny/vue-common'
import Filetext from '@opentiny/vue-theme-saas/svgs/filetext.svg'
import FiletextFilled from '@opentiny/vue-theme-saas/svgs/filetext-filled.svg'

const iconFn = () => svg({ name: 'IconFiletext', component: Filetext, filledComponent: FiletextFilled })()
iconFn.__flag = { 'svgName': 'filetext', 'hasFill': true }
export default iconFn

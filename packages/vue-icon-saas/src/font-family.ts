import { svg } from '@opentiny/vue-common'
import FontFamily from '@opentiny/vue-theme-saas/svgs/font-family.svg'

const iconFn = () => svg({ name: 'IconFontFamily', component: FontFamily, filledComponent: FontFamily })()

iconFn.__flag = { 'svgName': 'font-family', 'hasFill': false }
export default iconFn

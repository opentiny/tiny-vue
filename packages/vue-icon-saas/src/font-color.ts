import { svg } from '@opentiny/vue-common'
import FontColor from '@opentiny/vue-theme-saas/svgs/font-color.svg'

const iconFn = () => svg({ name: 'IconFontColor', component: FontColor, filledComponent: FontColor })()

iconFn.__flag = { 'svgName': 'font-color', 'hasFill': false }
export default iconFn

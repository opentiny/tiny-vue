import { svg } from '@opentiny/vue-common'
import Radio from '@opentiny/vue-theme-saas/svgs/radio.svg'
import RadioFilled from '@opentiny/vue-theme-saas/svgs/radio-filled.svg'

const iconFn = () => svg({ name: 'IconRadio', component: Radio, filledComponent: RadioFilled })()
iconFn.__flag = { 'svgName': 'radio', 'hasFill': true }
export default iconFn

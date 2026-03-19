import { svg } from '@opentiny/vue-common'
import SliderButton from '@opentiny/vue-theme-saas/svgs/slider-button.svg'
import SliderButtonFilled from '@opentiny/vue-theme-saas/svgs/slider-button-filled.svg'

const iconFn = () => svg({ name: 'IconSliderButton', component: SliderButton, filledComponent: SliderButtonFilled })()
iconFn.__flag = { 'svgName': 'slider-button', 'hasFill': true }
export default iconFn

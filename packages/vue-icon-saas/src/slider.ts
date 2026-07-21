import { svg } from '@opentiny/vue-common'
import Slider from '@opentiny/vue-theme-saas/svgs/slider.svg'
import SliderFilled from '@opentiny/vue-theme-saas/svgs/slider-filled.svg'

const iconFn = () => svg({ name: 'IconSlider', component: Slider, filledComponent: SliderFilled })()
iconFn.__flag = { 'svgName': 'slider', 'hasFill': true }
export default iconFn

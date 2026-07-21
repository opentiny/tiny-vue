import { svg } from '@opentiny/vue-common'
import Carousel from '@opentiny/vue-theme-saas/svgs/carousel.svg'
import CarouselFilled from '@opentiny/vue-theme-saas/svgs/carousel-filled.svg'

const iconFn = () => svg({ name: 'IconCarousel', component: Carousel, filledComponent: CarouselFilled })()
iconFn.__flag = { 'svgName': 'carousel', 'hasFill': true }
export default iconFn

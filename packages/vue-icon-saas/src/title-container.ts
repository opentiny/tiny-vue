import { svg } from '@opentiny/vue-common'
import TitleContainer from '@opentiny/vue-theme-saas/svgs/title-container.svg'
import TitleContainerFilled from '@opentiny/vue-theme-saas/svgs/title-container-filled.svg'

const iconFn = () =>
  svg({ name: 'IconTitleContainer', component: TitleContainer, filledComponent: TitleContainerFilled })()
iconFn.__flag = { 'svgName': 'title-container', 'hasFill': true }
export default iconFn

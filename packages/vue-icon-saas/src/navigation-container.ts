import { svg } from '@opentiny/vue-common'
import NavigationContainer from '@opentiny/vue-theme-saas/svgs/navigation-container.svg'
import NavigationContainerFilled from '@opentiny/vue-theme-saas/svgs/navigation-container-filled.svg'

const iconFn = () =>
  svg({ name: 'IconNavigationContainer', component: NavigationContainer, filledComponent: NavigationContainerFilled })()
iconFn.__flag = { 'svgName': 'navigation-container', 'hasFill': true }
export default iconFn

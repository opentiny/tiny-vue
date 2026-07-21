import { svg } from '@opentiny/vue-common'
import ProjectProperty from '@opentiny/vue-theme-saas/svgs/project-property.svg'
import ProjectPropertyFilled from '@opentiny/vue-theme-saas/svgs/project-property-filled.svg'

const iconFn = () =>
  svg({ name: 'IconProjectProperty', component: ProjectProperty, filledComponent: ProjectPropertyFilled })()
iconFn.__flag = { 'svgName': 'project-property', 'hasFill': true }
export default iconFn

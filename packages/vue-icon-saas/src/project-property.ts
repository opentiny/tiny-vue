import { svg } from '@opentiny/vue-common'
import ProjectProperty from '@opentiny/vue-theme-saas/svgs/project-property.svg'
import ProjectPropertyFilled from '@opentiny/vue-theme-saas/svgs/project-property-filled.svg'

export default () =>
  svg({ name: 'IconProjectProperty', component: ProjectProperty, filledComponent: ProjectPropertyFilled })()

import { svg } from '@opentiny/vue-common'
import ProjectTemplate from '@opentiny/vue-theme-saas/svgs/project-template.svg'
import ProjectTemplateFilled from '@opentiny/vue-theme-saas/svgs/project-template-filled.svg'

export default () =>
  svg({ name: 'IconProjectTemplate', component: ProjectTemplate, filledComponent: ProjectTemplateFilled })()

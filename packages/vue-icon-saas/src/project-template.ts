import { svg } from '@opentiny/vue-common'
import ProjectTemplate from '@opentiny/vue-theme-saas/svgs/project-template.svg'
import ProjectTemplateFilled from '@opentiny/vue-theme-saas/svgs/project-template-filled.svg'

const iconFn = () =>
  svg({ name: 'IconProjectTemplate', component: ProjectTemplate, filledComponent: ProjectTemplateFilled })()
iconFn.__flag = { 'svgName': 'project-template', 'hasFill': true }
export default iconFn

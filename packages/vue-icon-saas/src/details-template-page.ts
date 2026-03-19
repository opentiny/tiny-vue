import { svg } from '@opentiny/vue-common'
import DetailsTemplatePage from '@opentiny/vue-theme-saas/svgs/details-template-page.svg'
import DetailsTemplatePageFilled from '@opentiny/vue-theme-saas/svgs/details-template-page-filled.svg'

const iconFn = () =>
  svg({ name: 'IconDetailsTemplatePage', component: DetailsTemplatePage, filledComponent: DetailsTemplatePageFilled })()
iconFn.__flag = { 'svgName': 'details-template-page', 'hasFill': true }
export default iconFn

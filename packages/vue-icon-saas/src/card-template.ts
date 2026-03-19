import { svg } from '@opentiny/vue-common'
import CardTemplate from '@opentiny/vue-theme-saas/svgs/card-template.svg'
import CardTemplateFilled from '@opentiny/vue-theme-saas/svgs/card-template-filled.svg'

const iconFn = () => svg({ name: 'IconCardTemplate', component: CardTemplate, filledComponent: CardTemplateFilled })()
iconFn.__flag = { 'svgName': 'card-template', 'hasFill': true }
export default iconFn

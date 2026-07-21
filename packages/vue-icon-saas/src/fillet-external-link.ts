import { svg } from '@opentiny/vue-common'
import FilletExternalLink from '@opentiny/vue-theme-saas/svgs/fillet-external-link.svg'

const iconFn = () =>
  svg({ name: 'IconFilletExternalLink', component: FilletExternalLink, filledComponent: FilletExternalLink })()

iconFn.__flag = { 'svgName': 'fillet-external-link', 'hasFill': false }
export default iconFn

import { svg } from '@opentiny/vue-common'
import ProjectContract from '@opentiny/vue-theme-saas/svgs/project-contract.svg'
import ProjectContractFilled from '@opentiny/vue-theme-saas/svgs/project-contract-filled.svg'

const iconFn = () =>
  svg({ name: 'IconProjectContract', component: ProjectContract, filledComponent: ProjectContractFilled })()
iconFn.__flag = { 'svgName': 'project-contract', 'hasFill': true }
export default iconFn

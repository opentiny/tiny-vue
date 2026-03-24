import { svg } from '@opentiny/vue-common'
import Repository from '@opentiny/vue-theme-saas/svgs/repository.svg'
import RepositoryFilled from '@opentiny/vue-theme-saas/svgs/repository-filled.svg'

const iconFn = () => svg({ name: 'IconRepository', component: Repository, filledComponent: RepositoryFilled })()
iconFn.__flag = { 'svgName': 'repository', 'hasFill': true }
export default iconFn

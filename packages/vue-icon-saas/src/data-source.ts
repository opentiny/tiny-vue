import { svg } from '@opentiny/vue-common'
import DataSource from '@opentiny/vue-theme-saas/svgs/data-source.svg'

const iconFn = () => svg({ name: 'IconDataSource', component: DataSource, filledComponent: DataSource })()

iconFn.__flag = { 'svgName': 'data-source', 'hasFill': false }
export default iconFn

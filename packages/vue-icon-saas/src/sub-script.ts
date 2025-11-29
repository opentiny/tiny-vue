import { svg } from '@opentiny/vue-common'
import SubScript from '@opentiny/vue-theme-saas/svgs/sub-script.svg'
import SubScriptFilled from '@opentiny/vue-theme-saas/svgs/sub-script-filled.svg'

// TODO: 文件名和组件名已统一改为 subscript，此文件应该删除
export default () => svg({ name: 'IconSubScript', component: SubScript, filledComponent: SubScriptFilled })()

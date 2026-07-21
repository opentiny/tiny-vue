import { svg } from '@opentiny/vue-common'
import RecruitmentServices from '@opentiny/vue-theme-saas/svgs/recruitment-services.svg'
import RecruitmentServicesFilled from '@opentiny/vue-theme-saas/svgs/recruitment-services-filled.svg'

const iconFn = () =>
  svg({ name: 'IconRecruitmentServices', component: RecruitmentServices, filledComponent: RecruitmentServicesFilled })()
iconFn.__flag = { 'svgName': 'recruitment-services', 'hasFill': true }
export default iconFn

import { svg } from '@opentiny/vue-common'
import ComputingJob from '@opentiny/vue-theme-saas/svgs/computing-job.svg'
import ComputingJobFilled from '@opentiny/vue-theme-saas/svgs/computing-job-filled.svg'

const iconFn = () => svg({ name: 'IconComputingJob', component: ComputingJob, filledComponent: ComputingJobFilled })()
iconFn.__flag = { 'svgName': 'computing-job', 'hasFill': true }
export default iconFn

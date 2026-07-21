import { svg } from '@opentiny/vue-common'
import Course from '@opentiny/vue-theme-saas/svgs/course.svg'
import CourseFilled from '@opentiny/vue-theme-saas/svgs/course-filled.svg'

const iconFn = () => svg({ name: 'IconCourse', component: Course, filledComponent: CourseFilled })()
iconFn.__flag = { 'svgName': 'course', 'hasFill': true }
export default iconFn

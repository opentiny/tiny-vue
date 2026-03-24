import { svg } from '@opentiny/vue-common'
import Xml from '@opentiny/vue-theme-saas/svgs/xml.svg'
import XmlFilled from '@opentiny/vue-theme-saas/svgs/xml-filled.svg'

const iconFn = () => svg({ name: 'IconXml', component: Xml, filledComponent: XmlFilled })()
iconFn.__flag = { 'svgName': 'xml', 'hasFill': true }
export default iconFn

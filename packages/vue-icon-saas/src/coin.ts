import { svg } from '@opentiny/vue-common'
import Coin from '@opentiny/vue-theme-saas/svgs/coin.svg'
import CoinFilled from '@opentiny/vue-theme-saas/svgs/coin-filled.svg'

const iconFn = () => svg({ name: 'IconCoin', component: Coin, filledComponent: CoinFilled })()
iconFn.__flag = { 'svgName': 'coin', 'hasFill': true }
export default iconFn

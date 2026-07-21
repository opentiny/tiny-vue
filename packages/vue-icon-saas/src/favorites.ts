import { svg } from '@opentiny/vue-common'
import Favorites from '@opentiny/vue-theme-saas/svgs/favorites.svg'
import FavoritesFilled from '@opentiny/vue-theme-saas/svgs/favorites-filled.svg'

const iconFn = () => svg({ name: 'IconFavorites', component: Favorites, filledComponent: FavoritesFilled })()
iconFn.__flag = { 'svgName': 'favorites', 'hasFill': true }
export default iconFn

// eager = true，可以校验vue,json等文件错误。
// eager = false, 可以懒加载，优化速度

// demo源码
// 同web-doc的菜单资源
import { cmpMenus } from '../resources/mobile/menus.js'

export const demoStr = import.meta.glob('../resources/mobile/app/**/*.vue', { eager: false, as: 'raw' })
export const demoVue = import.meta.glob('../resources/mobile/app/**/*.vue', { eager: false })

// api属性
export const apis = import.meta.glob('../resources/mobile/app/*/webdoc/*.js', { eager: false })

const menuData = cmpMenus.slice(0)
function processMenu(menu) {
  menu.id = menu.key
  menu.label = menu.nameCn || menu.label
  if (menu.children && menu.children.length > 0) {
    menu.children.forEach((m) => processMenu(m, false))
  }
}
menuData.forEach((m) => processMenu(m))

export { menuData }

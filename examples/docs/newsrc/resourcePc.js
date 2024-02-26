// eager = true，可以校验vue,json等文件错误。
// eager = false, 可以懒加载，优化速度

// demo源码
// 同web-doc的菜单资源
import { cmpMenus } from '../../sites/demos/pc/menus.js'

export const demoStr = import.meta.glob('../../sites/demos/pc/app/**/*.vue', { eager: false, as: 'raw' })
export const demoVue = import.meta.glob('../../sites/demos/pc/app/**/*.vue', { eager: false })

// demos配置
export const demos = import.meta.glob('../../sites/demos/pc/app/*/webdoc/*.js', { eager: false })

// 组件的md
const allMD = import.meta.glob('../../sites/demos/pc/app/*/webdoc/*.cn.md', { eager: true })
export const mds = {}
for (const path in allMD) {
  let key = path.split('/').slice(-1)[0]
  mds[key] = allMD[path].default
}

const menuData = cmpMenus.slice(0)
function processMenu(menu, isTop) {
  menu.id = menu.key
  menu.label = isTop ? menu.label : `${menu.nameCn} ${menu.name}`
  if (menu.children && menu.children.length > 0) {
    menu.children.forEach((m) => processMenu(m, false))
  }
}
menuData.forEach((m) => processMenu(m, true))

export { menuData }

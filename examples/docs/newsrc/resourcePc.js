// eager = true，可以校验vue,json等文件错误。
// eager = false, 可以懒加载，优化速度

// demo源码
// 同web-doc的菜单资源
import originMenuData from '../resources/pc/menus.js'

export const demoStr = import.meta.glob('../resources/pc/demo/**/*.vue', { eager: false, as: 'raw' })
export const demoVue = import.meta.glob('../resources/pc/demo/**/*.vue', { eager: false })

// api属性
export const zhApi = import.meta.glob('../resources/pc/api/zh-CN/**/*.json', { eager: false })
// export const enApi = import.meta.glob('@resources/api/en-US/**/*.json', { eager: false })

// // json, demo的配置文件
export const zhDemo = import.meta.glob('../resources/pc/demo-config/zh-CN/**/*.json', { eager: false })
// 格式：{zh,en,enSuffix,path}
// path: '/breadcrumb' 对应着【 demo的配置文件】。每个path有多个示例
const menuData = originMenuData.slice(0)
function processMenu(menu, isTop) {
  menu.id = menu.en
  menu.label = isTop ? menu.zh : `${menu.zh} ${menu.en}`
  if (menu.children && menu.children.length > 0) {
    menu.children.forEach((m) => processMenu(m, false))
  }
}
menuData.forEach((m) => processMenu(m, true))

export { menuData }

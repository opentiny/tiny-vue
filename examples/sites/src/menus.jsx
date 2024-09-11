import { cmpMenus } from '@menu/menus.js'
import { appData, $split } from './tools'

/**
 * 聚合doc  / cmp 两个页面的所有菜单.
 * 根据menus,生成总的menuOptions,  doc的路由指向docs/:docId,  组件的路由指向components/:cmpId
 * 1、docId 必须匹配doc_md中的文件名 ，  cmpId必须匹配 cmp_md 中的文件名
 */

const getChildrenStr = (menu) => {
  if (menu?.children?.length > 0) {
    return ` (${menu.children.length})`
  } else {
    return ''
  }
}

// 生成所有的菜单
function genMenus() {
  const standaloneOptions = [
    {
      id: 'overview',
      label: appData.lang === 'zhCN' ? '组件总览' : 'overview',
      type: 'overview',
      key: 'overview'
    }
  ]

  const cmpOptions = cmpMenus.map((menu) => ({
    ...menu,
    label: `${appData.lang === 'zhCN' ? menu.label : menu.labelEn}${getChildrenStr(menu)}`,
    children: menu.children.map((page) => ({
      ...page,
      id: page.key,
      label: `${page.name} ${appData.lang === 'zhCN' ? page.nameCn : ''}`,
      type: 'components'
    }))
  }))
  return [...standaloneOptions, ...cmpOptions]
}

// 获取菜单的类别图标
async function getMenuIcons() {
  const modules = import.meta.glob('@/assets/images/leftMenu/*.svg', { eager: true })
  const icons = {}
  for (const path of Object.keys(modules)) {
    const iconName = $split(path, '/', -1).replace('.svg', '')
    icons[iconName] = modules[path]
  }

  return icons
}

const getAllComponents = () =>
  cmpMenus.reduce((acc, current) => {
    return acc.concat(current.children)
  }, [])
export { genMenus, getAllComponents, getMenuIcons }

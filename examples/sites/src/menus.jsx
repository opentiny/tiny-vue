import { docMenus, cmpMenus } from '@menu/menus.js'

import { appData } from './tools'

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
      type: 'overview'
    }
  ]

  const docOptions = docMenus.map((menu) => ({
    ...menu,
    label: `${appData.lang === 'zhCN' ? menu.label : menu.labelEn}${getChildrenStr(menu)}`,
    children: menu.children.map((page) => ({
      ...page,
      id: page.key,
      label: appData.lang === 'zhCN' ? page.title : page.titleEn,
      type: 'docs'
    }))
  }))
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
  return [...standaloneOptions, ...docOptions, ...cmpOptions]
}

const getAllComponents = () =>
  cmpMenus.reduce((acc, current) => {
    return acc.concat(current.children)
  }, [])
export { genMenus, getAllComponents }

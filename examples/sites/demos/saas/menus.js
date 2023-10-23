// 合并mobile-first和pc的菜单，作为saas官网的菜单
import { docMenus, cmpMenus as pcCmpMenus } from '../pc/menus'
import { cmpMenus as mfCmpMenus } from '../mobile-first/menus'

// mobile-first上所有分类，pc上都有，因此可以用pc端menu分类进行合并
const cmpMenus = pcCmpMenus.map((pcMenusitem) => {
  const mfMenusItem = mfCmpMenus.find((i) => i.key === pcMenusitem.key)
  pcMenusitem.children = pcMenusitem.children.map((i) => ({ ...i, mode: ['saas'] }))
  if (mfMenusItem?.children) {
    mfMenusItem.children.forEach((mfMenusChild) => {
      const matchChild = pcMenusitem.children.find((pcMenusChild) => pcMenusChild.key === mfMenusChild.key)
      if (matchChild) {
        matchChild.mode.push('mobile-first')
      } else {
        pcMenusitem.children.push({ ...mfMenusChild, mode: ['mobile-first'] })
      }
    })
  }
  return pcMenusitem
})

export { docMenus, cmpMenus }

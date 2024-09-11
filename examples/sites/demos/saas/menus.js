// 合并mobile-first和pc的菜单，作为saas官网的菜单
import { docMenus, cmpMenus as pcCmpMenus } from '../pc/menus'
import { cmpMenus as mfCmpMenus } from '../mobile-first/menus'

const noSaasComponents = [
  'ActionMenu',
  'ColorPicker',
  'ColorSelectPanel',
  'ConfigProvider',
  'DatePickerMobileFirst',
  'Divider',
  'IndexBar',
  'IndexBarAnchor',
  'Label',
  'Mask',
  'MindMap',
  'MultiSelect',
  'MultiSelectItem',
  'QrCode',
  'RichTextEditor',
  'TimelineItem',
  'Toast',
  'TopBox',
  'Watermark',
  'Wheel',
  'Skeleton',
  'Statistic'
]

// mobile-first上所有分类，pc上都有，因此可以用pc端menu分类进行合并
const cmpMenus = pcCmpMenus.map((pcMenusitem) => {
  const mfMenusItem = mfCmpMenus.find((i) => i.key === pcMenusitem.key)
  pcMenusitem.children = pcMenusitem.children.map((i) => ({ ...i, mode: ['pc'] }))
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
  pcMenusitem.children = pcMenusitem.children.filter((item) => !noSaasComponents.includes(item.name))

  // 插入 queryBuild 的菜单。 pc 文档下线该组件，仅在saas文档展示
  if (pcMenusitem.label === '表单组件') {
    pcMenusitem.children.push({ 'nameCn': '查询生成器', 'name': 'QueryBuilder ', 'key': 'query-builder' })
  }
  return pcMenusitem
})

export { docMenus, cmpMenus }

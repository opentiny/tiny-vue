import { isVue2 } from './adapter'

export const GRADIENT_ICONS_LIST = ['IconLoadingShadow', 'IconNoData']
let uniqueId = 0

const generateId = (vnode, idMaps) => {
  if (isVue2) {
    if (vnode.data?.attrs?.id) {
      const newId = `${vnode.data.attrs.id}${uniqueId}`
      idMaps[vnode.data.attrs.id] = newId
      vnode.data.attrs.id = newId
    }
  } else {
    if (vnode.props?.id) {
      const newId = `${vnode.props.id}${uniqueId}`
      idMaps[vnode.props.id] = newId
      vnode.props.id = newId
    }
  }

  if (Array.isArray(vnode?.children)) {
    vnode.children.forEach((item) => {
      generateId(item, idMaps)
    })
  }
}

const generateUrl = (vnode, idMaps) => {
  const checkList = ['fill', 'mask', 'filter']

  checkList.forEach((item) => {
    if (isVue2) {
      if (vnode.data?.attrs?.[item]?.includes('url(#')) {
        const oldId = vnode.data.attrs[item].replace('url(#', '').replace(')', '')
        const newId = idMaps[oldId]
        if (newId) {
          vnode.data.attrs[item] = `url(#${newId})`
        }
      }
    } else {
      if (vnode.props?.[item]?.includes('url(#')) {
        const oldId = vnode.props[item].replace('url(#', '').replace(')', '')
        const newId = idMaps[oldId]
        if (newId) {
          vnode.props[item] = `url(#${newId})`
        }
      }
    }
  })

  if (Array.isArray(vnode?.children)) {
    vnode.children.forEach((item) => {
      generateUrl(item, idMaps)
    })
  }
}

export const generateIcon = (vnode) => {
  if (!vnode) {
    return
  }
  // 映射老的id和新id的哈希表
  const idMaps = {}

  generateId(vnode, idMaps)
  generateUrl(vnode, idMaps)
  uniqueId++
}

export const GRADIENT_ICONS_LIST = ['IconLoadingShadow']
let uniqueId = 0

const generateId = (vnode, idMaps) => {
  if (vnode.props?.id) {
    const newId = `${vnode.props.id}${uniqueId}`
    idMaps[vnode.props.id] = newId
    vnode.props.id = newId
  }

  if (vnode?.children) {
    vnode?.children.forEach((item) => {
      generateId(item, idMaps)
    })
  }
}

const generateUrl = (vnode, idMaps) => {
  const checkList = ['fill', 'mask']

  checkList.forEach((item) => {
    if (vnode.props?.[item]?.includes('url(#')) {
      const oldId = vnode.props[item].replace('url(#', '').replace(')', '')
      const newId = idMaps[oldId]
      vnode.props[item] = `url(#${newId})`
    }
  })

  if (vnode.children) {
    vnode.children.forEach((item) => {
      generateUrl(item, idMaps)
    })
  }
}

export const generateIcon = (vnode, idMaps) => {
  if (!vnode) {
    return
  }
  generateId(vnode, idMaps)
  generateUrl(vnode, idMaps)
  uniqueId++
}

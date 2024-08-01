import { on, off, preventDefault } from '@opentiny/vue-renderless/common/deps/dom'

export const initDrag = (dndProxyElement, dndElements, config = {}) => {
  if (dndElements instanceof NodeList) {
    dndElements = Array.from(dndElements)
  }

  // dragstart 事件处理
  const onDragStart = (e) => {
    if (canDrag(e)) {
      e.dataTransfer.effectAllowed = 'move'
      startDrag(e, config.dragStart)
    }
  }

  // dragover 事件处理
  const onDragOver = (e) => preventDefault(e)

  // dragenter 事件处理
  const onDragEnter = (e) => {
    if (canDrop(e)) {
      addDropClass(e)
    }
  }

  // dragend 事件处理
  const onDragEnd = () => {
    removeDropClass()
  }

  // drop 事件处理
  const onDrop = (e) => {
    if (canDrop(e)) {
      startDrop(e, config.drop)
    }
  }

  let groupNames = [] // 拖拽分组名称列表
  let elGroups = [] // 拖拽分组对应的元素列表
  let elNodes = [] // 平铺的元素、id和pid，临时变量
  let parentMap = new WeakMap() // 父级映射
  let childrenMap = new WeakMap() // 子级映射

  if (dndProxyElement) {
    if (Array.isArray(dndElements) && dndElements.length > 0) {
      dndElements.forEach((el) => {
        if (dndProxyElement.contains(el)) {
          // 可拖拽属性必选 draggable='true'
          const draggable = el.getAttribute('draggable') === 'true'
          // 拖拽分组属性可选
          const groupName = (el.dataset && el.dataset[config.groupKey || 'dndGroup']) || ''
          // 拖拽ID属性必选
          const dndId = el.dataset && el.dataset[config.idKey || 'dndId']
          // 拖拽PID属性必选, 顶级为空字符串
          const dndPid = el.dataset && el.dataset[config.pidKey || 'dndPid']

          if (draggable) {
            const index = groupNames.indexOf(groupName)

            if (index === -1) {
              groupNames.push(groupName)
              elGroups.push([el])
            } else {
              elGroups[index].push(el)
            }

            elNodes.push({ dndId, dndPid, el })
            childrenMap.set(el, [])
          }
        }
      })

      elNodes.forEach(({ dndId, dndPid, el }) => {
        if (dndPid) {
          const parent = elNodes.find((elNode) => elNode.dndId === dndPid).el

          parentMap.set(el, parent)
          childrenMap.get(parent).push(el)
        } else {
          parentMap.set(el, null)
        }
      })

      elNodes.splice(0, elNodes.length)
    }

    on(dndProxyElement, 'dragstart', onDragStart)
    on(dndProxyElement, 'dragover', onDragOver)
    on(dndProxyElement, 'dragenter', onDragEnter)
    on(dndProxyElement, 'dragend', onDragEnd)
    on(dndProxyElement, 'drop', onDrop)
  }

  let dragTarget // 被拖拽元素
  let dndGroup // 被拖拽元素所在的分组
  let dropTarget // 被放置元素

  // 判断 el1 是否是 el2 的父级
  const isParent = (el1, el2) => {
    const parents = []
    let p = parentMap.get(el2)

    if (p) {
      parents.push(p)

      while (true) {
        p = parentMap.get(p)

        if (p) {
          parents.push(p)
        } else {
          break
        }
      }
    }

    return parents.includes(el1)
  }

  // 判断 el1 是否是 el2 的子级
  const isChild = (el1, el2) => isParent(el2, el1)

  // 判断两个元素是否是兄弟
  const isSibling = (el1, el2) => {
    const p1 = parentMap.get(el1)
    const p2 = parentMap.get(el2)
    // 都不存在父级或者具有相同的父级
    return (!p1 && !p2) || (p1 && p2 && p1 === p2)
  }

  // 判断两个元素是否位于不同的子树
  const isOther = (el1, el2) => {
    // 不是父子关系或者兄弟关系，就认为处于不同的子树
    return !isParent(el1, el2) && !isChild(el1, el2) && !isSibling(el1, el2)
  }

  // 获取最近的父级可拖拽可放置元素，如果不存在就返回其自身
  const getClosestEl = (el) => {
    for (let i = 0; i < elGroups.length; i++) {
      for (let j = 0; j < elGroups[i].length; j++) {
        const target = elGroups[i][j]

        if (target === el || target.contains(el)) {
          return target
        }
      }
    }

    return el
  }

  // 判断是否可拖拽，参数 e 是 ondragstart 事件
  const canDrag = (e) => {
    let found = false
    const dragTarget = getClosestEl(e.target)

    for (let i = 0; i < elGroups.length; i++) {
      if (elGroups[i].includes(dragTarget)) {
        found = true
        break
      }
    }

    return found
  }

  // 开始拖拽，参数 e 是 ondragstart 事件
  const startDrag = (e, callback) => {
    dragTarget = getClosestEl(e.target)

    for (let i = 0; i < elGroups.length; i++) {
      if (elGroups[i].includes(dragTarget)) {
        dndGroup = elGroups[i]
        break
      }
    }

    if (typeof callback === 'function') {
      callback(dragTarget, dndGroup, e)
    }
  }

  // 判断目标是否可放置，参数 e 是 ondrop/ondragenter 事件
  const canDrop = (e) => {
    if (!dragTarget || !dndGroup) {
      return false
    }

    const dropTarget = getClosestEl(e.target)

    return (
      dragTarget &&
      dropTarget &&
      dragTarget !== dropTarget &&
      // 必须在同一个组内
      dndGroup.includes(dropTarget) &&
      // 不允许从父级向子级拖拽
      !isParent(dragTarget, dropTarget)
    )
  }

  // 开始放置元素，参数 e 是 ondrop 事件
  const startDrop = (e, callback) => {
    dropTarget = getClosestEl(e.target)

    if (typeof callback === 'function') {
      let type = ''

      if (isChild(dragTarget, dropTarget)) {
        type = 'child' // 子级向父级拖拽
      } else if (isSibling(dragTarget, dropTarget)) {
        type = 'sibling' // 兄弟节点之间的拖拽
      } else if (isOther(dragTarget, dropTarget)) {
        type = 'other' // 向其他子树的拖拽
      }

      callback(type, dragTarget, dropTarget, e)
    }

    dragTarget = dropTarget = dndGroup = null
  }

  let enterTarget // 进入的可放置节点

  // 增加可放置样式，参数 e 是 ondragenter 事件
  const addDropClass = (e) => {
    if (!config.dropClass) return

    removeDropClass()

    enterTarget = getClosestEl(e.target)

    if (enterTarget) {
      enterTarget.classList.add(config.dropClass)
    }
  }

  // 移除可放置样式
  const removeDropClass = () => {
    if (!config.dropClass) return

    if (enterTarget) {
      enterTarget.classList.remove(config.dropClass)
      enterTarget = null
    }
  }

  // 移除事件代理和内部状态引用
  const destroy = () => {
    if (dndProxyElement) {
      off(dndProxyElement, 'dragstart', onDragStart)
      off(dndProxyElement, 'dragover', onDragOver)
      off(dndProxyElement, 'dragenter', onDragEnter)
      off(dndProxyElement, 'dragend', onDragEnd)
      off(dndProxyElement, 'drop', onDrop)
    }

    removeDropClass()

    dndProxyElement = dndElements = null
    groupNames = elGroups = null
    parentMap = childrenMap = null
  }

  return { destroy }
}

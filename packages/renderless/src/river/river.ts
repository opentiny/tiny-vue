import { omitText } from '../common/string'

const isArr = Array.isArray
const some = (arr, predicate) => arr.some(predicate)
const filter = (arr, predicate) => arr.filter(predicate)
const lower = (string) => string.toLowerCase()

export const layout = (data, config, el) => {
  const { nodes, links } = data
  const { iconSpacing, iconRadius, iconPadding, labelOffset, nameField, cols, rows } = config
  const { heightStart, heightStep, nodeAnchor, posOffsetX, posOffsetY, riverColor, riverSpacing } = config
  const { statusColor, statusName, endOpacity, backOpacity, nameSplit, legend, showLegend, legendPosY } = config
  // 初始化河流节点
  const riverNodes = initRiverNodes(nodes)
  // 计算河流节点的宽度
  calcRiverNodeWidth({ iconSpacing, riverNodes })
  // 计算河流节点的高度
  calcRiverNodeHeight({ links, riverNodes })
  const heightMap = calcHeightMap({ riverNodes, links, heightStart, heightStep })
  // 计算河流节点的位置
  calcRiverNodePos({ cols, el, riverNodes, rows, posOffsetX, posOffsetY })
  // 计算河流路径
  const nameInfo = calcRiverPath({ links, nodes, nameField, nameSplit })
  // 初始化河流连线
  const { dataLinkRiverLinkMap, riverLinks } = initRiverLinks(links)
  // 计算河流连线的位置
  calcRiverLinkPos({ dataLinkRiverLinkMap, links, riverNodes, heightMap, nodeAnchor, riverSpacing })
  calcRiverLinkPath(riverLinks)
  // 计算河流节点上图标的位置
  const riverIcons = calcRiverIcons({ iconRadius, iconSpacing, riverNodes })
  // 计算河流节点名称文本位置（x，y，width）
  riverNodes.forEach((riverNode) => (riverNode.lp = [riverNode.x, riverNode.y - labelOffset, riverNode.width]))
  // 计算河流节点上图标名称文本位置（x，y，width）
  riverIcons.forEach((riverIcon) => {
    riverIcon.lp = [
      riverIcon.x - iconSpacing / 2 + iconPadding,
      riverIcon.y + labelOffset,
      iconSpacing - iconPadding * 2
    ]
  })
  // 计算渐变色
  calcGradient({ riverNodes, riverLinks, riverColor, statusColor, endOpacity, backOpacity })
  // 计算图例
  const leges = showLegend
    ? calcLegend({ statusColor, statusName, cols, rows, legend, posOffsetX, el, iconPadding, legendPosY })
    : []

  return riverNodes.concat(riverLinks).concat(riverIcons).concat(nameInfo).concat(leges)
}

const calcHeightMap = ({ riverNodes, links, heightStart, heightStep }) => {
  const set = new Set()

  riverNodes.forEach((riverNode) => set.add(riverNode.height))
  links.forEach((dataLink) => set.add(dataLink.value))

  const arr = [...set].sort()
  const map = new Map()
  const start = heightStart
  const step = heightStep

  arr.forEach((v, i) => map.set(v, start + step * i))

  return map
}

const initRiverNodes = (nodes) =>
  nodes.map((dataNode) => {
    return { type: 'node', x: 0, y: 0, width: 0, height: 0, level: 0, data: dataNode }
  })

const calcRiverNodeWidth = ({ iconSpacing, riverNodes }) =>
  riverNodes.forEach((riverNode) => {
    const { data: dataNode } = riverNode
    const { nodes: icons } = dataNode

    riverNode.width = isArr(icons) && icons.length > 1 ? iconSpacing * icons.length : iconSpacing
  })

const calcRiverNodeHeight = ({ links, riverNodes }) => {
  riverNodes.forEach((riverNode) => {
    let heightRatio = 0

    const { data: dataNode } = riverNode
    const prdc = (type) => (dataLink) => dataLink[type] === dataNode.name
    const targetPrdc = prdc('target')
    const sourcePrdc = prdc('source')
    const accumulator = (dataLink) => (heightRatio += dataLink.value)

    if (some(links, targetPrdc)) {
      filter(links, targetPrdc).forEach(accumulator)
    } else if (some(links, sourcePrdc)) {
      filter(links, sourcePrdc).forEach(accumulator)
    }

    if (heightRatio > 0) {
      riverNode.height = heightRatio
    }
  })
}

const calcRiverNodePos = ({ cols, el, riverNodes, rows, posOffsetX, posOffsetY }) => {
  if (cols && rows) {
    calcRiverNodePosUser({ cols, el, riverNodes, rows, posOffsetX, posOffsetY })
  }
}

const calcRiverPath = ({ links, nodes, nameField = '$$name', nameSplit = ';' }) => {
  const names = []
  const iconNames = []

  nodes.forEach((dataNode) => {
    names.push((dataNode[nameField] = lower(`n${dataNode.name}`)))

    const { nodes: icons } = dataNode

    icons.forEach((icon, i) => iconNames.push((icon[nameField] = `${dataNode[nameField]}/${i}`)))
  })

  links.forEach((dataLink) => names.push((dataLink[nameField] = lower(`l${dataLink.source}t${dataLink.target}`))))

  const nodesCopy = JSON.parse(JSON.stringify(nodes))

  links.forEach(({ source, target }) => {
    let sourceDataNode, targetDataNode

    nodesCopy.forEach((dataNode) => {
      if (dataNode.name === source) sourceDataNode = dataNode

      if (dataNode.name === target) targetDataNode = dataNode
    })

    if (sourceDataNode._children) {
      sourceDataNode._children.push(targetDataNode)
    } else {
      sourceDataNode._children = [targetDataNode]
    }

    if (targetDataNode._parent) {
      targetDataNode._parent.push(sourceDataNode)
    } else {
      targetDataNode._parent = [sourceDataNode]
    }
  })

  let parent = nodesCopy[0]

  while (parent._parent) parent = parent._parent

  const paths = []

  const travel = (node, str = '') => {
    if (str) str += nameSplit

    str += node[nameField]

    if (node._children) {
      node._children.forEach((child) => {
        const dataLink = links.find(({ source, target }) => source === node.name && target === child.name)
        travel(child, str + nameSplit + dataLink[nameField])
      })
    } else {
      paths.push(str)
    }
  }

  travel(parent)

  return { type: 'name', names, iconNames, paths, nameField, nameSplit }
}

const calcRiverNodePosUser = ({ cols, el, riverNodes, rows, posOffsetX, posOffsetY }) => {
  const { clientWidth, clientHeight } = el
  const areaWidth = clientWidth / cols
  const areaHeight = clientHeight / rows

  riverNodes.forEach((riverNode) => {
    const { data: dataNode } = riverNode
    const { col, row } = dataNode
    const areaPosX = areaWidth * col
    const areaPosY = areaHeight * row

    riverNode.x = areaPosX + posOffsetX
    riverNode.y = areaPosY + posOffsetY
  })
}

const initRiverLinks = (links) => {
  const dataLinkRiverLinkMap = new WeakMap()
  const riverLinks = links.map((dataLink) => {
    const value = { type: 'link', lt: [0, 0], lb: [0, 0], rt: [0, 0], rb: [0, 0], data: dataLink }

    dataLinkRiverLinkMap.set(dataLink, value)

    return value
  })

  return { dataLinkRiverLinkMap, riverLinks }
}

const calcRiverLinkPos1 = ({ links, riverNodes, heightMap, nodeAnchor }) => {
  riverNodes.forEach((riverNode) => {
    const { data: dataNode } = riverNode
    const prdc = (type) => (dataLink) => dataLink[type] === dataNode.name
    const targetPrdc = prdc('target')
    const sourcePrdc = prdc('source')
    let offset1 = 0
    let offset2 = 0

    if (some(links, targetPrdc)) {
      filter(links, targetPrdc).forEach((dataLink) => {
        offset1 += heightMap.get(dataLink.value)
      })
    }

    if (some(links, sourcePrdc)) {
      filter(links, sourcePrdc).forEach((dataLink) => {
        offset2 += heightMap.get(dataLink.value)
      })
    }

    riverNode.height = offset1 > offset2 ? offset1 : offset2

    if (nodeAnchor === 'left-middle') {
      riverNode.y = riverNode.y - riverNode.height / 2
    }
  })
}

const adjustRiverPos = ({ riverNodes, nodeAnchor, riverSpacing }) => {
  if (riverSpacing > 0) {
    let posx = new Set()

    riverNodes.forEach((riverNode) => posx.add(riverNode.x))

    posx = [...posx].sort()

    posx.forEach((x) => {
      const group = riverNodes.filter((riverNode) => riverNode.x === x)

      if (group.length > 1) {
        group.sort((riverNode1, riverNode2) => riverNode1.y - riverNode2.y)

        for (let i = 0; i < group.length - 1; i++) {
          const riverNode0 = group[i]
          const riverNode1 = group[i + 1]
          const nodePart = nodeAnchor === 'left-top' ? riverNode0.height : (riverNode0.height + riverNode1.height) / 2

          riverNode1.y = riverNode0.y + nodePart + (riverNode1.data.row - riverNode0.data.row) * riverSpacing
        }
      }
    })
  }
}

const calcRiverLinkPos2 = ({ dataLinkRiverLinkMap, links, riverNodes, heightMap }) => {
  riverNodes.forEach((riverNode) => {
    const { data: dataNode, x, width } = riverNode
    const prdc = (type) => (dataLink) => dataLink[type] === dataNode.name
    const targetPrdc = prdc('target')
    const sourcePrdc = prdc('source')
    const { y } = riverNode
    let offset1 = 0
    let offset2 = 0

    if (some(links, targetPrdc)) {
      filter(links, targetPrdc).forEach((dataLink) => {
        const riverLink = dataLinkRiverLinkMap.get(dataLink)

        riverLink.rt[0] = x
        riverLink.rt[1] = y + offset1

        offset1 += heightMap.get(dataLink.value)

        riverLink.rb[0] = x
        riverLink.rb[1] = y + offset1
      })
    }

    if (some(links, sourcePrdc)) {
      filter(links, sourcePrdc).forEach((dataLink) => {
        const riverLink = dataLinkRiverLinkMap.get(dataLink)

        riverLink.lt[0] = x + width
        riverLink.lt[1] = y + offset2

        offset2 += heightMap.get(dataLink.value)

        riverLink.lb[0] = x + width
        riverLink.lb[1] = y + offset2
      })
    }
  })
}

const calcRiverLinkPos = ({ dataLinkRiverLinkMap, links, riverNodes, heightMap, nodeAnchor, riverSpacing }) => {
  calcRiverLinkPos1({ links, riverNodes, heightMap, nodeAnchor })
  adjustRiverPos({ riverNodes, nodeAnchor, riverSpacing })
  calcRiverLinkPos2({ dataLinkRiverLinkMap, links, riverNodes, heightMap })
}

const calcRiverLinkPath = (riverLinks) => {
  riverLinks.forEach((riverLink) => {
    riverLink.p = []
  })
}

const parse = (hexStr) => parseInt(hexStr, 16)

export const hexToRgba = (hexStr, opcity = 1) => {
  const twice = (str) => str + str

  if (hexStr.length === 7) {
    return `rgba(${parse(hexStr.slice(1, 3))},${parse(hexStr.slice(3, 5))},${parse(hexStr.slice(5, 7))},${opcity})`
  } else if (hexStr.length === 4) {
    const r = parse(twice(hexStr.slice(1, 2)))
    const g = parse(twice(hexStr.slice(2, 3)))
    const b = parse(twice(hexStr.slice(3, 4)))

    return `rgba(${r},${g},${b},${opcity})`
  }
}

const calcGradient = ({ riverNodes, riverLinks, riverColor, statusColor, endOpacity, backOpacity }) => {
  riverNodes.forEach((riverNode) => {
    const { data: dataNode } = riverNode
    const { nodes: icons } = dataNode
    const g = []

    if (!icons || !icons.length) {
      const endColor = hexToRgba(riverColor, endOpacity)

      g.push([0, 1])
      g.push([endColor, endColor])
    } else {
      const seg = 1 / (icons.length + 1)
      const segs = []
      const colors = []

      icons.forEach((icon, i) => {
        const { skip } = icon
        const color = statusColor[String(icon.status)]

        if (i === 0) {
          segs.push(0)
          colors.push(hexToRgba(color, endOpacity))
        }

        !skip && segs.push(seg * (i + 1))
        !skip && colors.push(hexToRgba(color, backOpacity))

        if (i === icons.length - 1) {
          segs.push(1)
          colors.push(hexToRgba(color, endOpacity))
        }
      })

      g.push(segs)
      g.push(colors)
    }

    riverNode.g = g
  })

  riverLinks.forEach((riverLink) => {
    const { data: dataLink } = riverLink
    const { source, target } = dataLink
    const sourceRiverNode = riverNodes.find((riverNode) => riverNode.data.name === source)
    const targetRiverNode = riverNodes.find((riverNode) => riverNode.data.name === target)
    const last = (arr) => arr[arr.length - 1]
    const first = (arr) => arr[0]

    riverLink.g = [
      [0, 1],
      [last(sourceRiverNode.g[1]), first(targetRiverNode.g[1])]
    ]
  })
}

const calcLegend = ({ statusColor, statusName, cols, rows, legend = {}, posOffsetX, el, iconPadding, legendPosY }) => {
  const { dotRadius = 8, itemWidth = 80, itemHeight = 30, col = 0, row = rows - 1, offsetY = 100 } = legend
  const { clientWidth, clientHeight } = el
  const areaWidth = clientWidth / cols
  const areaHeight = clientHeight / rows
  const posx = col * areaWidth + posOffsetX
  const posy = typeof legendPosY === 'number' ? legendPosY : (row + 0.5) * areaHeight - itemHeight / 2 + offsetY
  const legends = []

  Object.keys(statusColor).forEach((statusKey, i) => {
    const cx = posx + itemWidth * i + dotRadius
    const cy = posy
    const color = statusColor[statusKey]
    const x = cx + dotRadius + iconPadding
    const y = posy
    const t = statusName[statusKey]
    const tw = itemWidth - 2 * (dotRadius + iconPadding)

    legends.push({ type: 'lege', cx, cy, radius: dotRadius, color, x, y, t, tw })
  })

  return legends
}

const calcRiverIcons = ({ iconRadius, iconSpacing, riverNodes }) => {
  const riverIcons = []

  riverNodes.forEach((riverNode) => {
    const { x, y, height, data: dataNode } = riverNode
    const { nodes: icons } = dataNode
    const iconPosY = y + height / 2

    icons.forEach((icon, i) => {
      const iconPosX = (i + 0.5) * iconSpacing + x

      riverIcons.push({ type: 'icon', x: iconPosX, y: iconPosY, radius: iconRadius, data: icon })
    })
  })

  return riverIcons
}

export const bpath = ({ lt, lb, rt, rb }) => {
  const w = (rt[0] - lt[0]) * 0.42
  const tune = 0.1
  const [offsetX, offsetY] = lb
  const _lb = [0 - tune, 0]
  const _lt = [lt[0] - offsetX - tune, lt[1] - offsetY]
  const _rt = [rt[0] - offsetX + tune, rt[1] - offsetY]
  const _rb = [rb[0] - offsetX + tune, rb[1] - offsetY]
  let path = `M${_lb[0]},${_lb[1]} `

  path += `C${_lb[0] + w},${_lb[1]} ${_rb[0] - w},${_rb[1]} ${_rb[0]},${_rb[1]} `
  path += `L${_rt[0]},${_rt[1]} `
  path += `C${_rt[0] - w},${_rt[1]} ${_lt[0] + w},${_lt[1]} ${_lt[0]},${_lt[1]} `
  path += `L${_lb[0]},${_lb[1]} z`

  return path
}

export const bc = (p0, p1, p2, p3) => (t) => {
  const ip = (t, p1, p2) => [(1 - t) * p1[0] + t * p2[0], (1 - t) * p1[1] + t * p2[1]]

  const tmp0 = ip(t, p0, p1)
  const tmp1 = ip(t, p1, p2)
  const tmp2 = ip(t, p2, p3)

  const tmp3 = ip(t, tmp0, tmp1)
  const tmp4 = ip(t, tmp1, tmp2)

  return ip(t, tmp3, tmp4)
}

export const txt = omitText

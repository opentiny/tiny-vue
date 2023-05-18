import debounce from '../common/deps/debounce'
import { omitText as omit } from '../common/string'

export const compute = ({ api, markRaw, props, state }) => () => {
  const { data, config } = props
  const { nodes, links } = data

  const seg = (qty, segs) => {
    const rmd = qty % segs
    const quot = (qty - rmd) / segs
    const rmdHalf = rmd / 2
    const rmd1 = Math.floor(rmdHalf)
    const rmd2 = Math.ceil(rmdHalf)

    return Array.from({ length: segs }).map((o, i) => quot + (i === 0 ? rmd1 : i === segs - 1 ? rmd2 : 0))
  }

  const widths = seg(config.width, config.cols)
  const heights = seg(config.height, config.rows)

  const afterNodes = api.buildAfterNode(nodes, widths, heights)
  const afterLinks = api.buildAfterLink(links, widths, heights, afterNodes)
  const hoverState = api.buildHoverState(afterLinks)
  const allItem = api.getAllItem(nodes)
  const dropdowns = api.initDropdowns(nodes)

  state.afterData = markRaw({ afterNodes, afterLinks, widths, heights, allItem, hoverState })
  state.wrapperStyle = `width:${config.width}px;height:${config.height}px`
  state.dropdowns = dropdowns
}

export const buildAfterNode = (props) => (nodes, widths, heights) => {
  const { config } = props
  const cache = { col: {}, row: {} }

  const half = (qty) => qty >>> 1
  const pos = (node, widths, heights, cache) => {
    const { info } = node
    const { col, row } = info
    let x = cache.col[col]
    let y = cache.row[row]

    if (!x) {
      cache.col[col] = x = widths.reduce((p, c, i) => p + (i < col ? c : i === col ? half(c) : 0), 0)
    }

    if (!y) {
      cache.row[row] = y = heights.reduce((p, c, i) => p + (i < row ? c : i === row ? half(c) : 0), 0)
    }

    let p = { type: 'node', x, y, raw: node }

    typeof config.adjustPos === 'function' && config.adjustPos(p)

    return p
  }

  return nodes.map((node) => pos(node, widths, heights, cache))
}

export const buildAfterLink = () => (links, widths, heights, afterNodes) => {
  const path = (link, cWidth, rHeight, afterNodes) => {
    const { from, to, p } = link
    const nodeFrom = afterNodes.find((node) => node.raw.name === from)
    const nodeTo = afterNodes.find((node) => node.raw.name === to)
    const { x: fx, y: fy } = nodeFrom
    const { x: tx, y: ty } = nodeTo
    const regDir = /^([lrtb])(\d+(\.\d+)?)$/
    const regDirC = /^([lrtb])(\d+(\.\d+)?)c$/

    const relative = (x, y, p, cw, rh) => {
      p = p.toLowerCase()
      p = p.replace(/\s+/g, ' ')
      p = p.replace(/\sc/g, 'c')

      const paths = p.split(/\s/)
      let curr = []
      let match, n, ar0, ar1, curr2

      const operCurr = (curr, type, value) => {
        if (type === 'l') {
          curr[0] -= Math.floor(value * cw)
        } else if (type === 'r') {
          curr[0] += Math.floor(value * cw)
        } else if (type === 't') {
          curr[1] -= Math.floor(value * rh)
        } else if (type === 'b') {
          curr[1] += Math.floor(value * rh)
        }
      }

      return paths.reduce((p, c, i, a) => {
        if (i) {
          if (regDir.test(c)) {
            match = regDir.exec(c)
            operCurr(curr, match[1], parseFloat(match[2]))
            p.push(`l,${curr[0]},${curr[1]}`)
          } else if (regDirC.test(c)) {
            n = a[i + 1]
            match = regDirC.exec(c)
            operCurr(curr, match[1], parseFloat(match[2]))
            ar0 = [...curr]
            if (regDir.test(n)) {
              match = regDir.exec(n)
            } else if (regDirC.test(n)) {
              match = regDirC.exec(n)
            }
            curr2 = [...curr]
            operCurr(curr2, match[1], parseFloat(match[2]) / 2)
            ar1 = [...curr2]
            p.push(`a,${ar0[0]},${ar0[1]},${ar1[0]},${ar1[1]},8`)
          }
        } else {
          curr = [x, y]
          if (regDir.test(c)) {
            match = regDir.exec(c)
            operCurr(curr, match[1], parseFloat(match[2]))
          }
          p.push(`m,${curr[0]},${curr[1]}`)
        }
        return p
      }, [])
    }

    if (p) {
      return { type: 'link', p: relative(fx, fy, p, cWidth, rHeight), raw: link }
    }

    return { type: 'link', p: [`m,${fx},${fy}`, `l,${tx},${ty}`], raw: link }
  }

  return links.map((link) => path(link, widths[1], heights[1], afterNodes))
}

export const drawAfterLink = ({ api, props, state, vm }) => () => {
  const { config } = props
  const { afterData } = state
  const { $refs } = vm
  const { afterLinks, afterNodes, graph } = afterData
  const mmap = { m: 'moveTo', l: 'lineTo', a: 'arcTo' }
  const dpr = window.devicePixelRatio

  const drawLinePart = (ctx, p) => {
    const paths = p.split(',')
    ctx[mmap[paths[0]]](...paths.slice(1).map(Number))
  }

  const draw = (ctx, afterLink) => {
    const { p, raw } = afterLink
    const { status, style } = raw.info
    const color = config.colors[status]

    ctx.save()
    ctx.beginPath()

    if (typeof config.drawLink === 'function') {
      config.drawLink(ctx, afterLink, afterNodes)
    } else {
      if (typeof config.styleLink === 'function') {
        config.styleLink(ctx)
      } else {
        ctx.strokeStyle = color
        style !== 'solid' && ctx.setLineDash(api.isMf() ? [6, 6] : [2, 4])
      }

      if (api.isLinkHover(afterLink) && typeof config.styleHoverLink === 'function') {
        config.styleHoverLink(ctx)
      }

      p.map((p) => drawLinePart(ctx, p))
    }

    ctx.stroke()
    ctx.restore()
  }

  if ($refs.canvas && $refs.canvas.getContext) {
    const ctx = $refs.canvas.getContext('2d')
    const width = graph ? graph.width : config.width
    const height = graph ? graph.height : config.height

    if (ctx) {
      ctx.save()
      ctx.beginPath()
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = config.background
      ctx.fillRect(0, 0, width, height)
      ctx.imageSmoothingEnabled = true
      ctx.webkitImageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      ctx.webkitImageSmoothingQuality = 'high'
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineWidth = api.isMf() ? (config.lineWidth || 1) / dpr : 2
      ctx.miterLimit = 0
      ctx.lineDashOffset = 0
      afterLinks.map((afterLink) => draw(ctx, afterLink))
      ctx.restore()
    }
  }

  api.isMf() && api.drawArrow()
}

export const refresh = ({ api, nextTick, state }) => () => {
  api.removeListeners()

  if (api.isMf()) {
    api.computeMf()
  } else {
    api.compute()
  }

  state.refreshKey++

  nextTick(() => {
    api.drawAfterLink()
    api.addListeners()
  })
}

export const getAllItem = (props) => (nodes) => {
  const allItem = {}
  const { config } = props
  const { headUrl } = config

  nodes.map(({ info: { items } }) => {
    if (Array.isArray(items) && items.length) {
      items.map(({ key }) => {
        allItem[key] = (headUrl || '').replace('{0}', String(key))
      })
    }
  })

  return allItem
}

export const initDropdowns = () => (nodes) => {
  const res = {}

  nodes.map(({ name }) => (res[name] = false))

  return res
}

export const getVars = () => (afterNode, config) => {
  const statusFn = () => afterNode.raw.info.status
  const isCompleteFn = () => statusFn() === config.statusComplete
  const isOngoingFn = () => statusFn() === config.statusOngoing
  const isFailFn = () => statusFn() === config.statusFail
  const half = (qty) => qty >>> 1
  const white = '#fff'
  let { background, borderColor, statusName } = {}

  background = borderColor = config.colors[statusFn()]
  statusName = config.status[statusFn()]

  isCompleteFn() && (background = white)

  return { background, borderColor, half, isCompleteFn, isFailFn, isOngoingFn, statusName, white }
}

export const isLinkHover = (state) => (afterLink) => state.hoverAfterLink === afterLink

export const omitText = omit

export const buildHoverState = (props) => (afterLinks) => {
  const { config } = props
  const { hoverHit } = config
  const hoverMap = new WeakMap()
  const hoverList = []

  const createItem = (cur, next, afterLink) => {
    if (cur[0] === next[0]) {
      const top = cur[1] < next[1] ? cur : next
      const bottom = cur[1] < next[1] ? next : cur
      const tri1 = [top[0] + hoverHit, top[1], top[0] - hoverHit, top[1], bottom[0] - hoverHit, bottom[1]]
      const tri2 = [bottom[0] - hoverHit, bottom[1], bottom[0] + hoverHit, bottom[1], top[0] + hoverHit, top[1]]

      hoverList.push(tri1)
      hoverMap.set(tri1, afterLink)
      hoverList.push(tri2)
      hoverMap.set(tri2, afterLink)
    } else if (cur[1] === next[1]) {
      const left = cur[0] < next[0] ? cur : next
      const right = cur[0] < next[0] ? next : cur
      const tri1 = [left[0], left[1] - hoverHit, left[0], left[1] + hoverHit, right[0], right[1] + hoverHit]
      const tri2 = [right[0], right[1] + hoverHit, right[0], right[1] - hoverHit, left[0], left[1] - hoverHit]

      hoverList.push(tri1)
      hoverMap.set(tri1, afterLink)
      hoverList.push(tri2)
      hoverMap.set(tri2, afterLink)
    }
  }

  afterLinks.map((afterLink) => {
    const { p } = afterLink
    let cur, next

    p.map((p) => {
      const parts = p.split(',')

      if (parts[0] === 'm') {
        cur = parts.slice(1).map(Number)
      } else if (parts[0] === 'l') {
        next = parts.slice(1).map(Number)

        createItem(cur, next, afterLink)

        cur = next
      } else if (parts[0] === 'a') {
        next = parts.slice(1, 3).map(Number)

        createItem(cur, next, afterLink)

        cur = next
      }
    })
  })

  return { hoverMap, hoverList }
}

export const addListeners = ({ api, state, vm }) => () => {
  api.setListeners()

  vm.$refs.canvas.addEventListener('mousemove', state.mousemoveListener)
  vm.$refs.canvas.addEventListener('click', state.mousemoveListener)
  vm.$refs.canvas.addEventListener('click', state.clickListener)
}

export const removeListeners = ({ state, vm }) => () => {
  vm.$refs.canvas.removeEventListener('mousemove', state.mousemoveListener)
  vm.$refs.canvas.removeEventListener('click', state.mousemoveListener)
  vm.$refs.canvas.removeEventListener('click', state.clickListener)
}

export const setListeners = ({ api, emit, props, state, vm }) => () => {
  const { config } = props
  const { delay } = config

  state.mousemoveListener = debounce(delay, (e) => {
    const { left, top } = vm.$refs.canvas.getBoundingClientRect()
    const { clientX, clientY } = e
    let x = clientX - left
    let y = clientY - top

    if (api.isMf() && state.afterData.graph && state.afterData.graph.thin) {
      x *= state.afterData.graph.thinValue
      y *= state.afterData.graph.thinValue
    }

    api.hitTest(x, y)
  })

  state.clickListener = debounce(delay, (e) => {
    const afterLink = state.hoverAfterLink

    if (afterLink) {
      emit('click-link', afterLink, e)
    } else {
      emit('click-blank', null, e)
    }

    api.clearDropdown()
  })
}

export const hitTest = ({ api, state, vm }) => (x, y) => {
  const { afterData } = state
  const { hoverState } = afterData
  const { hoverMap, hoverList } = hoverState

  const pointInTriangle = (x0, y0, x1, y1, x2, y2, px, py) => {
    const v0 = [x2 - x0, y2 - y0]
    const v1 = [x1 - x0, y1 - y0]
    const v2 = [px - x0, py - y0]
    const dot00 = v0[0] * v0[0] + v0[1] * v0[1]
    const dot01 = v0[0] * v1[0] + v0[1] * v1[1]
    const dot02 = v0[0] * v2[0] + v0[1] * v2[1]
    const dot11 = v1[0] * v1[0] + v1[1] * v1[1]
    const dot12 = v1[0] * v2[0] + v1[1] * v2[1]
    const inverDeno = 1 / (dot00 * dot11 - dot01 * dot01)
    const u = (dot11 * dot02 - dot01 * dot12) * inverDeno

    if (u < 0 || u > 1) {
      return false
    }

    const v = (dot00 * dot12 - dot01 * dot02) * inverDeno

    if (v < 0 || v > 1) {
      return false
    }

    return u + v <= 1
  }

  const tri = hoverList.find((item) => pointInTriangle(...item, x, y))

  state.hoverAfterLink = tri ? hoverMap.get(tri) : null

  if (state.hoverAfterLink) {
    api.drawAfterLink()

    vm.$refs.canvas.style.cursor = 'pointer'
  } else {
    api.clearHoverAfterLink()
  }
}

export const clearHoverAfterLink = ({ api, state, vm }) => () => {
  if (state.hoverAfterLink) {
    state.hoverAfterLink = null
  }

  api.drawAfterLink()

  if (vm.$refs.canvas.style.cursor) {
    vm.$refs.canvas.style.cursor = ''
  }
}

export const clickNode = ({ api, emit }) => (params, e) => {
  const { node, afterNode } = params

  !api.isMf() && api.clearDropdown(node.name)

  emit('click-node', afterNode, e)
}

export const clearDropdown = (state) => (nodeName) => {
  const { dropdowns } = state

  Object.keys(dropdowns).map((item) => {
    if (dropdowns[item] && ((nodeName && item !== nodeName) || !nodeName)) {
      dropdowns[item] = false
    }
  })
}

// --- mobile-first ---

export const computeMf = ({ api, markRaw, props, state }) => () => {
  const { data, config } = props
  const { nodes, links } = hideNodeLink(data)
  const { gap = 0, align = '', width = 0, height = 0, padding = 0 } = config
  const { prior = '', radius = 4, font, showArrow = true, lineWidth = 1, arrowEdge = 4 } = config
  const thin = false

  const getRow = buildGetRow(gap)
  const getCol = buildGetCol(gap)
  const rectRow = buildRectRow({ getRow, gap })
  const rectNode = buildRectNode({ rectRow, gap, align, getRow })

  const { afterNodes, graph } = buildAfterNodeGraph({ nodes, thin, getRow, getCol, rectNode, padding, width, height })
  const { afterLinks, arrows } = buildAfterLinkArrow({
    links,
    afterNodes,
    graph,
    prior,
    radius,
    showArrow,
    lineWidth,
    arrowEdge
  })

  const hoverState = api.buildHoverState(afterLinks)

  state.afterData = markRaw({ afterNodes, afterLinks, hoverState, graph, arrows })
  state.wrapperStyle = `width:${graph.width}px;height:${graph.height}px;font:${font}`
}

export const isMf = (mode) => () => mode === 'mobile-first'

const getNodeDef = (node, type) => {
  const shape = node.info.shape || 'circle'

  if (shape === 'circle') return 40

  if (shape === 'rectangle') {
    if (type === 'width') return 160
    if (type === 'height') return 56
  }

  return 0
}

const getNode = (node, type) => {
  const shape = node.info.shape || 'circle'

  if (shape === 'circle') {
    return node.info.width || getNodeDef(node, type)
  }

  if (shape === 'rectangle') {
    return node.info[type] || getNodeDef(node, type)
  }

  return 0
}

const buildGetRow = (gap) => (afterNodes, row, type) => {
  const rowAfterNodes = afterNodes.filter((afterNode) => afterNode.row === row)
  const rowNodes = rowAfterNodes.map((rowAfterNode) => rowAfterNode.raw)

  if (rowNodes.length > 0) {
    if (type === 'width') {
      return rowNodes.reduce((p, c) => p + getNode(c, type), 0) + (rowNodes.length - 1) * gap
    }

    if (type === 'height') {
      return Math.max(...rowNodes.map((rowNode) => getNode(rowNode, type)))
    }
  }

  return 0
}

const buildGetCol = (gap) => (afterNodes, col, type) => {
  const colAfterNodes = afterNodes.filter((afterNode) => afterNode.col === col)
  const colNodes = colAfterNodes.map((colAfterNode) => colAfterNode.raw)

  if (colNodes.length > 0) {
    if (type === 'width') {
      return Math.max(...colNodes.map((colNode) => getNode(colNode, type)))
    }

    if (type === 'height') {
      return colNodes.reduce((p, c) => p + getNode(c, type), 0) + (colNodes.length - 1) * gap
    }
  }

  return 0
}

const buildRectRow = ({ getRow, gap }) => (afterNodes, row, graph) => {
  const accrueRowHeight = Array.from({ length: row })
    .map((c, i) => i)
    .map((i) => getRow(afterNodes, i, 'height'))
    .reduce((p, c) => p + c, 0)
  const accrueGapHeight = row > 0 ? row * gap : 0

  return {
    x: 0,
    y: accrueRowHeight + accrueGapHeight,
    width: graph.width,
    height: getRow(afterNodes, row, 'height')
  }
}

const buildRectNode = ({ rectRow, gap, align, getRow }) => (afterNode, afterNodes, graph) => {
  const { row, col } = afterNode
  const prevRowRect = rectRow(afterNodes, row - 1, graph)
  const rowRect = rectRow(afterNodes, row, graph)
  const width = getNode(afterNode.raw, 'width')
  const height = getNode(afterNode.raw, 'height')
  const y = prevRowRect.y + prevRowRect.height + (row > 0 ? gap : 0) + (rowRect.height - height) / 2
  const rowAfterNodes = afterNodes.filter((afterNode) => afterNode.row === row)
  const get = (i) => rowAfterNodes.find((rowAfterNode) => rowAfterNode.col === i)
  const accrueColWidth = Array.from({ length: col })
    .map((c, i) => i)
    .map((i) => {
      const afterNode = get(i)
      return afterNode ? getNode(afterNode.raw, 'width') : 0
    })
    .reduce((p, c) => p + c, 0)
  const accrueGapWidth = col > 0 ? col * gap : 0
  const dx = align === 'center' ? (graph.width - getRow(afterNodes, row, 'width')) / 2 : 0
  const x = accrueColWidth + accrueGapWidth + dx

  return { x, y, width, height }
}

const normalRowCol = (nodes) => {
  let rows = new Set()
  const rowMap = new Map()

  nodes.forEach((node) => !rows.has(node.info.row) && rows.add(node.info.row))
  rows = [...rows].sort((a, b) => a - b)
  rows.forEach((row, i) => rowMap.set(row, i))

  const afterNodes = nodes.map((node) => {
    return { type: 'node', row: rowMap.get(node.info.row), col: 0, raw: node }
  })

  rows.forEach((r, row) => {
    const rowAfterNodes = afterNodes.filter((afterNode) => afterNode.row === row)
    let cols = rowAfterNodes.map((rowAfterNode) => rowAfterNode.raw).map((node) => node.info.col)
    const colMap = new Map()

    cols = new Set(cols)
    cols = [...cols].sort((a, b) => a - b)
    cols.forEach((col, i) => colMap.set(col, i))

    rowAfterNodes.forEach((rowAfterNode) => (rowAfterNode.col = colMap.get(rowAfterNode.raw.info.col)))
  })

  return afterNodes
}

const buildAfterNodeGraph = ({ nodes, thin, getRow, getCol, rectNode, padding, width, height }) => {
  const afterNodes = normalRowCol(nodes)
  const maxRow = Math.max(...afterNodes.map((afterNode) => afterNode.row))
  const maxCol = Math.max(...afterNodes.map((afterNode) => afterNode.col))
  const graph = { width: 0, height: 0, thin, thinValue: 1 }

  for (let i = 0; i <= maxRow; i++) {
    const tmp = getRow(afterNodes, i, 'width')
    tmp > graph.width && (graph.width = tmp)
  }

  for (let i = 0; i <= maxCol; i++) {
    const tmp = getCol(afterNodes, i, 'height')
    tmp > graph.height && (graph.height = tmp)
  }

  afterNodes.forEach((afterNode) => Object.assign(afterNode, rectNode(afterNode, afterNodes, graph)))

  if (padding > 0) {
    graph.width += 2 * padding
    graph.height += 2 * padding

    afterNodes.forEach((afterNode) => {
      afterNode.x += padding
      afterNode.y += padding
    })
  }

  let dx = 0
  let dy = 0

  if (width > graph.width) {
    dx = (width - graph.width) / 2
    graph.width = width
    afterNodes.forEach((afterNode) => (afterNode.x += dx))
  }

  if (height > graph.height) {
    dy = (height - graph.height) / 2
    graph.height = height
    afterNodes.forEach((afterNode) => (afterNode.y += dy))
  }

  return { afterNodes, graph }
}

const adjustLine = ({ lineWidth }) => (f, t) => {
  const dpr = window.devicePixelRatio
  const isOdd = lineWidth & 0x01
  const dx = Math.abs(f.x - t.x)
  const isVertical = dx < Number.EPSILON

  if (isOdd) {
    if (isVertical) {
      f.x = t.x = Math.floor(f.x) + 0.5 / dpr
    } else {
      f.y = t.y = Math.floor(f.y) + 0.5 / dpr
    }
  } else {
    if (isVertical) {
      f.x = t.x = Math.floor(f.x)
    } else {
      f.y = t.y = Math.floor(f.y)
    }
  }
}

const buildAfterLinkArrow = ({ links, afterNodes, graph, prior, radius, showArrow, lineWidth, arrowEdge }) => {
  const arrows = []
  const buildArrow = getBuildArrow({ arrows, arrowEdge })
  const adjust = adjustLine({ lineWidth })

  const afterLinks = links.map((link) => {
    const { from, to, fromJoint = 'bottom', toJoint = 'top' } = link
    const fromAfterNode = afterNodes.find((afterNode) => afterNode.raw.name === from)
    const toAfterNode = afterNodes.find((afterNode) => afterNode.raw.name === to)
    const f = point(fromAfterNode, fromJoint, graph)
    const t = point(toAfterNode, toJoint, graph)
    const p = []
    const dx = Math.abs(f.x - t.x)
    const dy = Math.abs(f.y - t.y)

    if (dx < Number.EPSILON || dy < Number.EPSILON) {
      adjust(f, t)
      p.push(`m,${f.x},${f.y}`)
      p.push(`l,${t.x},${t.y}`)

      showArrow && buildArrow([f.x, f.y], [t.x, t.y], link)
    } else {
      const mid = [(f.x + t.x) / 2, (f.y + t.y) / 2]

      if (!prior || prior === 'vertical') {
        const tmp0 = { x: f.x, y: mid[1] }
        const tmp1 = { x: t.x, y: mid[1] }
        adjust(f, tmp0)
        adjust(tmp0, tmp1)
        adjust(tmp1, t)
        mid[1] = tmp0.y

        p.push(`m,${f.x},${f.y}`)
        p.push(`a,${f.x},${mid[1]},${mid[0]},${mid[1]},${radius}`)
        p.push(`a,${t.x},${mid[1]},${t.x},${t.y},${radius}`)
        p.push(`l,${t.x},${t.y}`)

        showArrow && buildArrow([t.x, mid[1]], [t.x, t.y], link)
      } else if (prior === 'horizontal') {
        const tmp0 = { x: mid[0], y: f.y }
        const tmp1 = { x: mid[0], y: t.y }
        adjust(f, tmp0)
        adjust(tmp0, tmp1)
        adjust(tmp1, t)
        mid[0] = tmp0.x

        p.push(`m,${f.x},${f.y}`)
        p.push(`a,${mid[0]},${f.y},${mid[0]},${mid[1]},${radius}`)
        p.push(`a,${mid[0]},${t.y},${t.x},${t.y},${radius}`)
        p.push(`l,${t.x},${t.y}`)

        showArrow && buildArrow([mid[0], t.y], [t.x, t.y], link)
      }
    }

    return { type: 'link', f, t, p, raw: link }
  })

  return { afterLinks, arrows }
}

const point = (afterNode, joint, graph) => {
  const exp = /^(bottom|top|left|right)$/
  const variant = /^(bottom|top|left|right)-(\d+)\/(\d+)$/
  const res = { x: 0, y: 0 }

  if (exp.test(joint)) {
    if (joint === 'bottom') {
      res.x = afterNode.x + afterNode.width / 2
      res.y = afterNode.y + afterNode.height
    } else if (joint === 'top') {
      res.x = afterNode.x + afterNode.width / 2
      res.y = afterNode.y
    } else if (joint === 'left') {
      res.x = afterNode.x
      res.y = afterNode.y + afterNode.height / 2
    } else if (joint === 'right') {
      res.x = afterNode.x + afterNode.width
      res.y = afterNode.y + afterNode.height / 2
    }
  }

  if (variant.test(joint)) {
    const m = variant.exec(joint).slice(1)

    m[1] = parseFloat(m[1])
    m[2] = parseFloat(m[2])

    if (m[0] === 'bottom') {
      res.x = afterNode.x + ((m[1] - 0.5) * afterNode.width) / m[2]
      res.y = afterNode.y + afterNode.height
    } else if (m[0] === 'top') {
      res.x = afterNode.x + ((m[1] - 0.5) * afterNode.width) / m[2]
      res.y = afterNode.y
    } else if (m[0] === 'left') {
      res.x = afterNode.x
      res.y = afterNode.y + ((m[1] - 0.5) * afterNode.height) / m[2]
    } else if (m[0] === 'right') {
      res.x = afterNode.x + afterNode.width
      res.y = afterNode.y + ((m[1] - 0.5) * afterNode.height) / m[2]
    }
  }

  if (graph.thin) {
    res.x *= graph.thinValue
    res.y *= graph.thinValue
  }

  return res
}

const getBuildArrow = ({ arrows, arrowEdge }) => (from, to, link) => {
  const p0 = [0, 0]
  const p2 = [0, 0]
  const dx = from[0] - to[0]
  const dy = from[1] - to[1]
  const absx = Math.abs(dx)
  const absy = Math.abs(dy)
  let t = 1
  const edge = arrowEdge

  if (absx < Number.EPSILON) {
    t = dy > 0 ? 1 : dy < 0 ? -1 : 1

    p0[0] = to[0] - edge
    p0[1] = to[1] + Math.sqrt(3) * edge * t
    p2[0] = to[0] + edge
    p2[1] = p0[1]

    if (dy !== 0) {
      arrows.push({ p0, p1: to, p2, link })
    }
  }

  if (absy < Number.EPSILON) {
    t = dx > 0 ? 1 : dx < 0 ? -1 : 1

    p0[0] = to[0] + Math.sqrt(3) * edge * t
    p0[1] = to[1] - edge
    p2[0] = p0[0]
    p2[1] = to[1] + edge

    if (dx !== 0) {
      arrows.push({ p0, p1: to, p2, link })
    }
  }
}

const hideNodeLink = (data) => {
  let { nodes, links } = data
  const hiddenNodeNames = nodes.filter((node) => node.hidden === true).map((node) => node.name)

  nodes = nodes.filter((node) => node.hidden !== true)
  links = links.filter((link) => !~hiddenNodeNames.indexOf(link.from) && !~hiddenNodeNames.indexOf(link.to))

  return { nodes, links }
}

export const drawArrow = ({ state, vm, props }) => () => {
  const { $refs } = vm
  const { config } = props
  const { showArrow = true } = config
  const { afterData } = state
  const { arrows } = afterData

  if (showArrow && $refs.canvas && $refs.canvas.getContext) {
    const ctx = $refs.canvas.getContext('2d')

    if (ctx) {
      ctx.save()

      arrows.forEach((arrow) => {
        ctx.beginPath()
        ctx.moveTo(...arrow.p0)
        ctx.lineTo(...arrow.p1)
        ctx.lineTo(...arrow.p2)
        ctx.closePath()
        ctx.fillStyle = config.colors[arrow.link.info.status]
        ctx.fill()
      })

      ctx.restore()
    }
  }
}

export const antialiasing = (vm) => () => {
  const canvas = vm.$refs.canvas
  const context = canvas.getContext('2d')
  const width = canvas.width
  const height = canvas.height
  let dpr = window.devicePixelRatio

  if (dpr) {
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    canvas.height = height * dpr
    canvas.width = width * dpr
    context.scale(dpr, dpr)
  }
}

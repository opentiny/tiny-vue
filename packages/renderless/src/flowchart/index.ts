import debounce from '../common/deps/debounce'
import { omitText as omit } from '../common/string'
import { fastdom } from '../common/deps/fastdom'

export const compute =
  ({ api, markRaw, props, state }) =>
  () => {
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
    const hoverState = api.buildHoverState({ afterLinks })
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

const clearHoverList = ({ afterLink, state }) => {
  const { hoverMap, hoverList } = state.afterData.hoverState
  const indices = []

  hoverList.forEach((tri, i) => hoverMap.get(tri) === afterLink && indices.unshift(i))
  indices.forEach((index) => hoverList.splice(index, 1))
}

const drawLinePart = (ctx, p) => {
  const mmap = { m: 'moveTo', l: 'lineTo', a: 'arcTo' }
  const paths = p.split(',')
  ctx[mmap[paths[0]]](...paths.slice(1).map(Number))
}

const styleDraw = ({ afterLink, afterNodes, api, config, ctx }) => {
  if (typeof config.styleLink === 'function') {
    config.styleLink(ctx, afterLink, afterNodes)
  } else {
    ctx.strokeStyle = config.colors[afterLink.raw.info.status]
    afterLink.raw.info.style !== 'solid' && ctx.setLineDash(api.isMf() ? [6, 6] : [2, 4])
  }

  if (api.isLinkHover(afterLink) && typeof config.styleHoverLink === 'function') {
    config.styleHoverLink(ctx, afterLink, afterNodes)
  }
}

const hitMatch = (drawCfg, afterLink) => {
  let matched = true

  if (drawCfg.filter) {
    if (drawCfg.filter.from && drawCfg.filter.to) {
      matched = afterLink.raw.from === drawCfg.filter.from && afterLink.raw.to === drawCfg.filter.to
    } else if (drawCfg.filter.from) {
      matched = afterLink.raw.from === drawCfg.filter.from
    } else if (drawCfg.filter.to) {
      matched = afterLink.raw.to === drawCfg.filter.to
    } else {
      matched = false
    }
  }

  return matched
}

const setLinear = ({ afterLink, ctx }) => {
  if (afterLink.linearGrad) {
    const { from, to, linear } = afterLink.linearGrad
    const grad = ctx.createLinearGradient(from.x, from.y, to.x, to.y)

    if (
      Array.isArray(linear.stops) &&
      Array.isArray(linear.colors) &&
      linear.stops.length === linear.colors.length &&
      linear.stops.length > 0
    ) {
      linear.stops.forEach((stop, i) => grad.addColorStop(stop, linear.colors[i]))
    }

    ctx.strokeStyle = grad
    afterLink._grad = grad
  }
}

const realDraw = ({ afterLink, afterNodes, config, ctx, state }) => {
  const defaultDrawLink = () => {
    setLinear({ afterLink, ctx })
    afterLink.p.map((p) => drawLinePart(ctx, p))
  }
  let drawn = false

  if (typeof config.drawLink === 'function') {
    drawn = true
    config.drawLink({ ctx, afterLink, afterNodes })
  } else if (Array.isArray(config.drawLink)) {
    if (config.drawLink.length) {
      for (let i = 0; i < config.drawLink.length; i++) {
        drawn = hitMatch(config.drawLink[i], afterLink)
        if (drawn) {
          config.drawLink[i].method({ ctx, afterLink, afterNodes })
          break
        }
      }
    }
  } else if (config.drawLink && typeof config.drawLink.method === 'function') {
    drawn = hitMatch(config.drawLink, afterLink)
    if (drawn) {
      config.drawLink.method({ ctx, afterLink, afterNodes })
    }
  }

  if (drawn) {
    state.temporary.customLinks.push(afterLink.raw)
    clearHoverList({ afterLink, state })
  } else {
    defaultDrawLink()
  }
}

const draw = ({ afterLink, afterNodes, api, config, ctx, state }) => {
  ctx.save()
  ctx.beginPath()

  styleDraw({ afterLink, afterNodes, api, config, ctx })
  realDraw({ afterLink, afterNodes, config, ctx, state })

  ctx.stroke()
  ctx.restore()

  drawArrow({ afterLink, config, ctx, state })
}

export const drawAfterLink =
  ({ api, props, state, vm }) =>
  () => {
    const { config } = props
    const { afterData } = state
    const { $refs } = vm
    const { afterLinks, afterNodes, graph } = afterData
    const dpr = window.devicePixelRatio

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
        state.temporary.customLinks = []
        afterLinks.map((afterLink) => draw({ afterLink, afterNodes, api, config, ctx, state }))
        ctx.restore()

        api.isMf() && drawGroup({ state, ctx })
      }
    }
  }

export const refresh =
  ({ api, nextTick, state }) =>
  ({ graphWidth = 0, adjustX = 0 } = {}) => {
    api.removeListeners()

    if (graphWidth && graphWidth !== state.temporary.graphWidth) {
      state.temporary.graphWidth = graphWidth
      state.temporary.adjustX = adjustX
    }

    if (api.isMf()) {
      api.computeMf()
    } else {
      api.compute()
    }

    state.refreshKey++

    nextTick(() => {
      api.antialiasing()
      api.drawAfterLink()
      api.addListeners()

      state.temporary.emitter.emit('after-graph-refresh')
    })
  }

export const getAllItem = (props) => (nodes) => {
  const allItem = {}
  const { config } = props
  const { headUrl } = config

  nodes.forEach(({ info: { items } }) => {
    if (Array.isArray(items) && items.length) {
      items.forEach(({ key }) => {
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
  let background, borderColor, statusName

  background = borderColor = config.colors[statusFn()]
  statusName = config.status[statusFn()]

  isCompleteFn() && (background = white)

  return { background, borderColor, half, isCompleteFn, isFailFn, isOngoingFn, statusName, white }
}

export const isLinkHover = (state) => (afterLink) => state.hoverAfterLink === afterLink

export const omitText = omit

export const buildHoverState =
  (props) =>
  ({ afterGroups, afterLinks }) => {
    const { config } = props
    const hoverMap = new WeakMap()
    const hoverList = []

    buildLinkHoverState({ afterLinks, hoverMap, hoverList, config })

    const groupHoverMap = new WeakMap()
    const groupHoverList = []

    if (afterGroups) {
      buildGroupHoverState({ afterGroups, groupHoverMap, groupHoverList })
    }

    return { hoverMap, hoverList, groupHoverMap, groupHoverList }
  }

const buildLinkHoverState = ({ afterLinks, hoverMap, hoverList, config }) => {
  const { hoverHit } = config
  const createItem = (cur, next, afterLink) => {
    if (cur[0] === next[0]) {
      let top, bottom

      if (cur[1] < next[1]) {
        top = cur
        bottom = next
      } else {
        top = next
        bottom = cur
      }

      const tri1 = [top[0] + hoverHit, top[1], top[0] - hoverHit, top[1], bottom[0] - hoverHit, bottom[1]]
      const tri2 = [bottom[0] - hoverHit, bottom[1], bottom[0] + hoverHit, bottom[1], top[0] + hoverHit, top[1]]

      hoverList.push(tri1)
      hoverMap.set(tri1, afterLink)
      hoverList.push(tri2)
      hoverMap.set(tri2, afterLink)
    } else if (cur[1] === next[1]) {
      let left, right

      if (cur[0] < next[0]) {
        left = cur
        right = next
      } else {
        left = next
        right = cur
      }

      const tri1 = [left[0], left[1] - hoverHit, left[0], left[1] + hoverHit, right[0], right[1] + hoverHit]
      const tri2 = [right[0], right[1] + hoverHit, right[0], right[1] - hoverHit, left[0], left[1] - hoverHit]

      hoverList.push(tri1)
      hoverMap.set(tri1, afterLink)
      hoverList.push(tri2)
      hoverMap.set(tri2, afterLink)
    }
  }

  afterLinks.forEach((afterLink) => {
    const { p } = afterLink
    let cur, next

    p.forEach((p) => {
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
}

const buildGroupHoverState = ({ afterGroups, groupHoverMap, groupHoverList }) => {
  afterGroups.forEach((afterGroup) => {
    const [p0, p1, p2, p3] = afterGroup.coords
    const tri0 = [p0.x, p3.y, p0.x, p1.y, p2.x, p3.y]
    const tri1 = [p0.x, p1.y, p2.x, p1.y, p2.x, p3.y]

    groupHoverList.push(tri0)
    groupHoverMap.set(tri0, afterGroup)
    groupHoverList.push(tri1)
    groupHoverMap.set(tri1, afterGroup)
  })
}

export const addListeners =
  ({ api, state, vm }) =>
  () => {
    api.setListeners()

    vm.$refs.canvas.addEventListener('mousemove', state.mousemoveListener)
    vm.$refs.canvas.addEventListener('click', state.mousemoveListener)
    vm.$refs.canvas.addEventListener('click', state.clickListener)
  }

export const removeListeners =
  ({ state, vm }) =>
  () => {
    vm.$refs.canvas.removeEventListener('mousemove', state.mousemoveListener)
    vm.$refs.canvas.removeEventListener('click', state.mousemoveListener)
    vm.$refs.canvas.removeEventListener('click', state.clickListener)
  }

export const setListeners =
  ({ api, emit, props, state, vm }) =>
  () => {
    const { config } = props
    const { delay } = config

    state.mousemoveListener = debounce(delay, (e) => {
      if (!vm.$refs.canvas) return

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
      const afterGroup = state.hoverAfterGroup

      if (afterLink) {
        emit('click-link', afterLink, e)
      } else if (afterGroup) {
        emit('click-group', afterGroup, e)
      } else {
        emit('click-blank', null, e)
      }

      api.clearDropdown()
    })
  }

const pointInTriangle = (points, px, py) => {
  const [x0, y0, x1, y1, x2, y2] = points
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

export const hitTest =
  ({ api, state, vm }) =>
  (x, y) => {
    const { hoverAfterLink = null, hoverAfterGroup = null } = state
    const { afterData } = state
    const { hoverState } = afterData
    const { hoverMap, hoverList, groupHoverMap, groupHoverList } = hoverState

    let tri = hoverList.find((item: number[]) => pointInTriangle(item, x, y))

    state.hoverAfterLink = tri ? hoverMap.get(tri) : null

    if (!tri) {
      tri = groupHoverList.find((item: number[]) => pointInTriangle(item, x, y))
      state.hoverAfterGroup = tri ? groupHoverMap.get(tri) : null
    }

    if (hoverAfterLink !== state.hoverAfterLink || hoverAfterGroup !== state.hoverAfterGroup) {
      if (state.hoverAfterLink || state.hoverAfterGroup) {
        vm.$refs.canvas.style.cursor = 'pointer'
        api.drawAfterLink()
      } else {
        api.clearHoverAfterLink()
      }
    }
  }

export const clearHoverAfterLink =
  ({ api, state, vm }) =>
  () => {
    if (state.hoverAfterLink) state.hoverAfterLink = null
    if (state.hoverAfterGroup) state.hoverAfterGroup = null
    if (vm.$refs.canvas.style.cursor) vm.$refs.canvas.style.cursor = ''

    api.drawAfterLink()
  }

export const clickNode =
  ({ api, emit }) =>
  (params, e) => {
    const { node, afterNode } = params

    !api.isMf() && api.clearDropdown(node.name)

    emit('click-node', afterNode, e)
  }

export const clearDropdown = (state) => (nodeName) => {
  const { dropdowns } = state

  Object.keys(dropdowns).forEach((item) => {
    if (dropdowns[item] && ((nodeName && item !== nodeName) || !nodeName)) {
      dropdowns[item] = false
    }
  })
}

// --- mobile-first ---

export const computeMf =
  ({ api, markRaw, props, state }) =>
  () => {
    const afterConfig = normalConfig(props)
    const { nodes, links, groups } = hideNodeLink(props.data)
    const getRow = buildGetRow({ afterConfig, api })
    const getCol = buildGetCol({ afterConfig, api })
    const rectRow = buildRectRow({ afterConfig, getRow })
    const rectNode = buildRectNode({ afterConfig, api, getRow, rectRow })
    const buildAfterNodeGraphArgs = { afterConfig, api, getCol, getRow, groups, nodes, rectNode, state }

    const { afterGroups, afterNodes, graph } = buildAfterNodeGraph(buildAfterNodeGraphArgs)

    const buildAfterLinkArrowArgs = { afterConfig, afterNodes, graph, links }

    const { afterLinks, arrows } = buildAfterLinkArrow(buildAfterLinkArrowArgs)
    const hoverState = api.buildHoverState({ afterGroups, afterLinks })

    state.afterData = markRaw({ afterConfig, afterGroups, afterLinks, afterNodes, arrows, graph, hoverState })
    state.wrapperStyle = { width: `${graph.width}px`, height: `${graph.height}px` }
  }

const normalConfig = (props) => {
  const { config } = props
  const { align = '', arrowEdge = 4, condHeight = 20, condWidth = 60 } = config
  const { font = '', gap = 0, height = 0, lineWidth = 1, linkEndMinus = 3 } = config
  const { padding = 0, prior = '', radius = 4, showArrow = true, width = 0 } = config
  const { extraWidth = 0, extraHeight = 0 } = config
  const cfg = { align, arrowEdge, condHeight, condWidth, font, gap, height, lineWidth, linkEndMinus }

  Object.assign(cfg, { padding, prior, radius, showArrow, width, extraWidth, extraHeight })

  const afterConfig = Object.assign({}, config, cfg)

  afterConfig.thin = false

  return afterConfig
}

export const isMf = (mode) => () => mode === 'mobile-first'

export const getNodeDef = (props) => (node, type) => {
  const shape = node.info.shape || 'circle'

  if (shape === 'circle') return props.config.nodeWrapperSize || 40

  if (shape === 'rectangle') {
    if (type === 'width') return 160
    if (type === 'height') return 56
  }

  return 0
}

export const getNode = (api) => (node, type) => {
  const shape = node.info.shape || 'circle'

  if (shape === 'circle') {
    return node.info.width || api.getNodeDef(node, type)
  }

  if (shape === 'rectangle') {
    return node.info[type] || api.getNodeDef(node, type)
  }

  return 0
}

const buildGetRow =
  ({ api, afterConfig }) =>
  (afterNodes, row, type) => {
    const rowAfterNodes = afterNodes.filter((afterNode) => afterNode.row === row)
    const rowNodes = rowAfterNodes.map((rowAfterNode) => rowAfterNode.raw)

    if (rowNodes.length > 0) {
      if (type === 'width') {
        return rowNodes.reduce((p, c) => p + api.getNode(c, type), 0) + (rowNodes.length - 1) * afterConfig.gap
      }

      if (type === 'height') {
        return Math.max(...rowNodes.map((rowNode) => api.getNode(rowNode, type)))
      }
    }

    return 0
  }

const buildGetCol =
  ({ api, afterConfig }) =>
  (afterNodes, col, type) => {
    const colAfterNodes = afterNodes.filter((afterNode) => afterNode.col === col)
    const colNodes = colAfterNodes.map((colAfterNode) => colAfterNode.raw)

    if (colNodes.length > 0) {
      if (type === 'width') {
        return Math.max(...colNodes.map((colNode) => api.getNode(colNode, type)))
      }

      if (type === 'height') {
        return colNodes.reduce((p, c) => p + api.getNode(c, type), 0) + (colNodes.length - 1) * afterConfig.gap
      }
    }

    return 0
  }

const buildRectRow =
  ({ getRow, afterConfig }) =>
  (afterNodes, row, graph) => {
    const accrueRowHeight = Array.from({ length: row })
      .map((c, i) => i)
      .map((i) => getRow(afterNodes, i, 'height'))
      .reduce((p, c) => p + c, 0)
    const accrueGapHeight = row > 0 ? row * afterConfig.gap : 0

    return {
      x: 0,
      y: accrueRowHeight + accrueGapHeight,
      width: graph.width,
      height: getRow(afterNodes, row, 'height')
    }
  }

const buildRectNode =
  ({ api, rectRow, afterConfig, getRow }) =>
  (afterNode, afterNodes, graph) => {
    const { row, col } = afterNode
    const prevRowRect = rectRow(afterNodes, row - 1, graph)
    const rowRect = rectRow(afterNodes, row, graph)
    const width = api.getNode(afterNode.raw, 'width')
    const height = api.getNode(afterNode.raw, 'height')
    const y = prevRowRect.y + prevRowRect.height + (row > 0 ? afterConfig.gap : 0) + (rowRect.height - height) / 2
    const rowAfterNodes = afterNodes.filter((afterNode) => afterNode.row === row)
    const get = (i) => rowAfterNodes.find((rowAfterNode) => rowAfterNode.col === i)
    const accrueColWidth = Array.from({ length: col })
      .map((c, i) => i)
      .map((i) => {
        const afterNode = get(i)
        return afterNode ? api.getNode(afterNode.raw, 'width') : 0
      })
      .reduce((p, c) => p + c, 0)
    const accrueGapWidth = col > 0 ? col * afterConfig.gap : 0
    const dx = afterConfig.align === 'center' ? (graph.width - getRow(afterNodes, row, 'width')) / 2 : 0
    const x = accrueColWidth + accrueGapWidth + dx

    return { x, y, width, height }
  }

const normalRowCol = ({ afterConfig, nodes }) => {
  let rows = new Set()
  const rowMap = new Map()
  const autoAdjustPos = afterConfig.autoAdjust !== false

  nodes.forEach((node) => !rows.has(node.info.row) && rows.add(node.info.row))
  rows = [...rows].sort((a, b) => a - b)
  rows.forEach((row, i) => rowMap.set(row, autoAdjustPos ? i : row))

  const afterNodes = nodes.map((node) => {
    return { type: 'node', row: rowMap.get(node.info.row), col: 0, raw: node, lastCol: false, lastRow: false }
  })

  rows.forEach((r, row) => {
    const rowAfterNodes = afterNodes.filter((afterNode) => afterNode.row === row)
    let cols = rowAfterNodes.map((rowAfterNode) => rowAfterNode.raw).map((node) => node.info.col)
    const colMap = new Map()

    cols = new Set(cols)
    cols = [...cols].sort((a, b) => a - b)
    cols.forEach((col, i) => colMap.set(col, autoAdjustPos ? i : col))

    rowAfterNodes.forEach((rowAfterNode) => (rowAfterNode.col = colMap.get(rowAfterNode.raw.info.col)))
  })

  return afterNodes
}

const defaultLayout = ({ afterConfig, afterNodes, getCol, getRow, graph, maxCol, maxRow, rectNode }) => {
  const { height, padding, width } = afterConfig
  let tmp

  for (let i = 0; i <= maxRow; i++) {
    tmp = getRow(afterNodes, i, 'width')
    if (tmp > graph.width) graph.width = tmp
  }

  for (let i = 0; i <= maxCol; i++) {
    tmp = getCol(afterNodes, i, 'height')
    if (tmp > graph.height) graph.height = tmp
  }

  afterNodes.forEach((afterNode) => {
    Object.assign(afterNode, rectNode(afterNode, afterNodes, graph))

    afterNode.lastCol = afterNode.lastRow = false

    if (afterNode.col === maxCol) afterNode.lastCol = true
    if (afterNode.row === maxRow) afterNode.lastRow = true
  })

  if (padding > 0) {
    tmp = 2 * padding
    graph.width += tmp
    graph.height += tmp

    afterNodes.forEach((afterNode) => {
      afterNode.x += padding
      afterNode.y += padding
    })
  }

  if (width > graph.width) {
    tmp = (width - graph.width) / 2
    graph.width = width
    afterNodes.forEach((afterNode) => (afterNode.x += tmp))
  }

  if (height > graph.height) {
    tmp = (height - graph.height) / 2
    graph.height = height
    afterNodes.forEach((afterNode) => (afterNode.y += tmp))
  }
}

const dotModeAdjust = ({ afterConfig, afterNodes, graph, maxCol, state }) => {
  const { padding } = afterConfig

  if (afterConfig.type === 'dot' && state.temporary.graphWidth) {
    graph.width = state.temporary.graphWidth < graph.minWidth ? graph.minWidth : state.temporary.graphWidth

    const colSize = (graph.width - 2 * padding) / (maxCol + 1)

    afterNodes.forEach((afterNode) => {
      afterNode.x = ~~((afterNode.col + 0.5) * colSize + padding) + state.temporary.adjustX
      afterNode.y += state.temporary.adjustY
    })
  }
}

const customLayout = ({ afterConfig, afterNodes, graph }) => {
  if (typeof afterConfig.layout === 'function') {
    const graphHeight = graph.height
    const graphWidth = graph.width
    const coords = afterConfig.layout({ afterNodes, graphHeight, graphWidth })

    if (coords && coords.length === afterNodes.length) {
      afterNodes.forEach((afterNode, i) => {
        if (coords[i]) {
          afterNode.x = Number(coords[i].x) || 0
          afterNode.y = Number(coords[i].y) || 0
        }
      })
    }
  }
}

const calcGraphMinSize = ({ afterConfig, afterNodes, api, graph, maxCol, maxRow }) => {
  const { gap, padding, extraWidth, extraHeight } = afterConfig
  const maxNodeSize = { width: 0, height: 0 }
  let tempSize

  afterNodes.forEach((afterNode) => {
    tempSize = api.getNode(afterNode.raw, 'width')
    if (tempSize > maxNodeSize.width) {
      maxNodeSize.width = tempSize
    }
    tempSize = api.getNode(afterNode.raw, 'height')
    if (tempSize > maxNodeSize.height) {
      maxNodeSize.height = tempSize
    }
  })

  graph.minWidth = (maxCol + 1) * maxNodeSize.width + maxCol * gap + 2 * padding + extraWidth
  graph.minHeight = (maxRow + 1) * maxNodeSize.height + maxRow * gap + 2 * padding + extraHeight
}

const buildAfterNodeGraph = (args) => {
  const { afterConfig, api, getCol, getRow, groups, nodes, rectNode, state } = args
  const afterNodes = normalRowCol({ afterConfig, nodes })
  const maxRow = Math.max(...afterNodes.map((afterNode) => afterNode.row))
  const maxCol = Math.max(...afterNodes.map((afterNode) => afterNode.col))
  const graph = { width: 0, height: 0, minWidth: 0, minHeight: 0, thin: afterConfig.thin, thinValue: 1 }

  calcGraphMinSize({ afterConfig, afterNodes, api, graph, maxCol, maxRow })
  defaultLayout({ afterConfig, afterNodes, getCol, getRow, graph, maxCol, maxRow, rectNode })
  dotModeAdjust({ afterConfig, afterNodes, graph, maxCol, state })
  customLayout({ afterConfig, afterNodes, graph })

  const afterGroups = computeGroup({ afterConfig, afterNodes, graph, groups })

  return { afterGroups, afterNodes, graph }
}

const computeGroup = ({ afterConfig, afterNodes, graph, groups }) => {
  if (groups && groups.length) {
    return groups.map((group) => {
      const afterGroup = { coords: [], width: 0, height: 0, raw: group }
      const coords = computeGroupCoord({ afterNodes, group })
      const padding = [0, 0]
      const adjust = adjustLine(afterConfig)
      const { condWidth, condHeight } = afterConfig

      afterGroup.width = condWidth
      afterGroup.height = condHeight

      if (typeof group.padding === 'number') {
        padding[0] = padding[1] = group.padding
      } else if (Array.isArray(group.padding) && group.padding.length > 1) {
        padding[0] = group.padding[0]
        padding[1] = group.padding[1]
      }

      coords[0] = coords[0] - padding[1] < 0 ? 0 : coords[0] - padding[1]
      coords[1] = coords[1] + padding[1] > graph.width ? graph.width : coords[1] + padding[1]
      coords[2] = coords[2] - padding[0] < 0 ? 0 : coords[2] - padding[0]
      coords[3] = coords[3] + padding[0] > graph.height ? graph.height : coords[3] + padding[0]

      const p0 = { x: coords[0], y: coords[2] }
      const p1 = { x: coords[0], y: coords[3] }
      const p2 = { x: coords[1], y: coords[3] }
      const p3 = { x: coords[1], y: coords[2] }

      adjust({ from: p0, to: p1 })
      adjust({ from: p1, to: p2 })
      adjust({ from: p2, to: p3 })
      adjust({ from: p3, to: p0 })

      const dx = ~~((p3.x - p0.x) / 2)
      const dy = ~~((p1.y - p0.y) / 2)

      p0.y += dy
      p1.x += dx
      p2.y -= dy
      p3.x -= dx

      afterGroup.coords.push(p0, p1, p2, p3)

      return afterGroup
    })
  }
}

const computeGroupCoord = ({ afterNodes, group }) => {
  const points = []
  const coords = ['', '', '', '']

  group.nodes
    .map((name) => afterNodes.find((afterNode) => afterNode.raw.name === name))
    .forEach(({ x, y, width, height }) => {
      points.push({ x, y })
      points.push({ x: x + width, y: y + height })
    })

  points.forEach(({ x, y }) => {
    if (typeof coords[0] !== 'number' || x < coords[0]) coords[0] = x
    if (typeof coords[1] !== 'number' || x > coords[1]) coords[1] = x
    if (typeof coords[2] !== 'number' || y < coords[2]) coords[2] = y
    if (typeof coords[3] !== 'number' || y > coords[3]) coords[3] = y
  })

  return coords
}

const adjustLineEnd = ({ arrowEndMinus, e, from, isVertical, linkEndMinus, linkOffset, s, to }) => {
  if (s) {
    if (isVertical) {
      to.y += (to.y > from.y ? -1 : 1) * (linkEndMinus + (arrowEndMinus || 0))
    } else {
      to.x += (to.x > from.x ? -1 : 1) * (linkEndMinus + (arrowEndMinus || 0))
    }
  }

  if (e) {
    if (isVertical) {
      from.y += (to.y > from.y ? 1 : -1) * (linkOffset || 0)
    } else {
      from.x += (to.x > from.x ? 1 : -1) * (linkOffset || 0)
    }
  }
}

const adjustLine =
  ({ lineWidth, linkEndMinus }) =>
  ({ from, to, s, arrowEndMinus, e, linkOffset }) => {
    const dpr = window.devicePixelRatio
    const isOdd = lineWidth & 0x01
    const dx = Math.abs(from.x - to.x)
    const isVertical = dx < Number.EPSILON

    if (isVertical) {
      from.x = to.x = Math.floor(from.x) + (isOdd ? 0.5 / dpr : 0)
    } else {
      from.y = to.y = Math.floor(from.y) + (isOdd ? 0.5 / dpr : 0)
    }

    adjustLineEnd({ arrowEndMinus, e, from, isVertical, linkEndMinus, linkOffset, s, to })

    return { x: ~~((from.x + to.x) / 2), y: ~~((from.y + to.y) / 2) }
  }

const pathParser = ({ adjust, afterLink, arrow, linear, midpoint, middir, points, radius }) => {
  const arrowEndMinus = afterLink.raw.arrowEndMinus
  const linkOffset = afterLink.raw.linkOffset
  const len = points.length
  const p = []

  for (let i = 1; i < len; i++) {
    adjust({ from: points[i - 1], to: points[i], s: i === len - 1, arrowEndMinus, e: i === 1, linkOffset })
  }

  const prevPoint = points[points.length - 2]
  const lastPoint = points[points.length - 1]

  if (len === 2) {
    p.push(`m,${points[0].x},${points[0].y}`)
    p.push(`l,${points[1].x},${points[1].y}`)
  } else {
    for (let i = 0; i < len - 1; i++) {
      if (i === 0) {
        p.push(`m,${points[i].x},${points[i].y}`)
      } else {
        p.push(`a,${points[i].x},${points[i].y},${points[i + 1].x},${points[i + 1].y},${radius}`)
      }
    }

    p.push(`l,${lastPoint.x},${lastPoint.y}`)
  }

  afterLink.p = p

  if (linear) {
    afterLink.linearGrad = { from: points[0], to: lastPoint, linear }
  }

  if (midpoint) {
    afterLink.mid = midpoint
  } else {
    afterLink.mid = { x: ~~((prevPoint.x + lastPoint.x) / 2), y: ~~((prevPoint.y + lastPoint.y) / 2) }
    middir = getMiddir(prevPoint, lastPoint)
  }

  afterLink.middir = middir

  arrow(prevPoint, lastPoint)
}

const getMiddir = (prev, last) => {
  let middir = 'r'

  if (prev.x !== last.x) {
    middir = prev.x > last.x ? 'l' : 'r'
  } else if (prev.y !== last.y) {
    middir = prev.y > last.y ? 'u' : 'd'
  }

  return middir
}

const validLinkPath = (res) => {
  let points, midpoint, middir, linear, flag

  if (Array.isArray(res) && res.length > 1) {
    points = res
    midpoint = null
    middir = null
    linear = null
    flag = true
  } else if (res && Array.isArray(res.path) && res.path.length > 1) {
    points = res.path
    midpoint = res.mid ? res.mid : null
    middir = res.middir || 'r'
    linear = res.linear ? res.linear : null
    flag = true
  }

  return { points, midpoint, middir, linear, flag }
}

const getFromToRect = ({ afterLink, afterNodes }) => {
  const afterNodeCouple = [afterLink.raw.from, afterLink.raw.to].map((name) =>
    afterNodes.find((afterNode) => afterNode.raw.name === name)
  )
  const { x: x0, y: y0, width: w0, height: h0 } = afterNodeCouple[0]
  const { x: x1, y: y1, width: w1, height: h1 } = afterNodeCouple[1]

  return {
    from: { x: x0, y: y0, width: w0, height: h0 },
    to: { x: x1, y: y1, width: w1, height: h1 }
  }
}

const linkPathApis = {
  getTop: (rect) => ({ x: rect.x + rect.width / 2, y: rect.y }),
  getRight: (rect) => ({ x: rect.x + rect.width, y: rect.y + rect.height / 2 }),
  getBottom: (rect) => ({
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height
  }),
  getLeft: (rect) => ({ x: rect.x, y: rect.y + rect.height / 2 })
}

const customRoute = ({ adjust, afterConfig, afterLink, afterNodes, arrow }) => {
  const { linkPath, radius } = afterConfig
  let valid = false

  if (Array.isArray(linkPath)) {
    for (let i = 0; i < linkPath.length; i++) {
      if (hitMatch(linkPath[i], afterLink)) {
        const fromToRect = getFromToRect({ afterLink, afterNodes })
        const { points, midpoint, middir, linear, flag } = validLinkPath(
          linkPath[i].method({
            afterLink,
            afterNodes,
            ...fromToRect,
            api: linkPathApis
          })
        )

        if (flag) {
          valid = true
          pathParser({ adjust, afterLink, arrow, linear, midpoint, middir, points, radius })
        }

        break
      }
    }
  } else if (linkPath && typeof linkPath.method === 'function') {
    if (hitMatch(linkPath, afterLink)) {
      const fromToRect = getFromToRect({ afterLink, afterNodes })
      const { points, midpoint, middir, linear, flag } = validLinkPath(
        linkPath.method({
          afterLink,
          afterNodes,
          ...fromToRect,
          api: linkPathApis
        })
      )

      if (flag) {
        valid = true
        pathParser({ adjust, afterLink, arrow, linear, midpoint, middir, points, radius })
      }
    }
  }

  return valid
}

const defaultRoute = (args) => {
  const { adjust, afterConfig, afterLink, arrow, link } = args
  const { prior, radius } = afterConfig
  const { f, t, p } = afterLink
  const { arrowEndMinus, linkOffset } = link
  const dx = Math.abs(f.x - t.x)
  const dy = Math.abs(f.y - t.y)

  if (dx < Number.EPSILON || dy < Number.EPSILON) {
    afterLink.mid = adjust({ from: f, to: t, s: 1, arrowEndMinus, e: 1, linkOffset })
    afterLink.middir = getMiddir(f, t)
    p.push(`m,${f.x},${f.y}`)
    p.push(`l,${t.x},${t.y}`)

    arrow(f, t)
  } else {
    const mid = [(f.x + t.x) / 2, (f.y + t.y) / 2]

    if (!prior || prior === 'vertical') {
      const tmp0 = { x: f.x, y: mid[1] }
      const tmp1 = { x: t.x, y: mid[1] }
      adjust({ from: f, to: tmp0, s: 0, e: 1, linkOffset })
      afterLink.mid = adjust({ from: tmp0, to: tmp1, s: 0, e: 0 })
      afterLink.middir = getMiddir(tmp0, tmp1)
      adjust({ from: tmp1, to: t, s: 1, arrowEndMinus, e: 0 })
      mid[1] = tmp0.y

      p.push(`m,${f.x},${f.y}`)
      p.push(`a,${f.x},${mid[1]},${mid[0]},${mid[1]},${radius}`)
      p.push(`a,${t.x},${mid[1]},${t.x},${t.y},${radius}`)
      p.push(`l,${t.x},${t.y}`)

      arrow({ x: t.x, y: mid[1] }, t)
    } else if (prior === 'horizontal') {
      const tmp0 = { x: mid[0], y: f.y }
      const tmp1 = { x: mid[0], y: t.y }
      adjust({ from: f, to: tmp0, s: 0, e: 1, linkOffset })
      afterLink.mid = adjust({ from: tmp0, to: tmp1, s: 0, e: 0 })
      afterLink.middir = getMiddir(tmp0, tmp1)
      adjust({ from: tmp1, to: t, s: 1, arrowEndMinus, e: 0 })
      mid[0] = tmp0.x

      p.push(`m,${f.x},${f.y}`)
      p.push(`a,${mid[0]},${f.y},${mid[0]},${mid[1]},${radius}`)
      p.push(`a,${mid[0]},${t.y},${t.x},${t.y},${radius}`)
      p.push(`l,${t.x},${t.y}`)

      arrow({ x: mid[0], y: t.y }, t)
    }
  }
}

const computeLinkEnds = ({ afterNodes, graph, link }) => {
  const { from, to } = link
  const f = point({
    afterNode: afterNodes.find((afterNode) => afterNode.raw.name === from),
    graph,
    link,
    type: 0
  })
  const t = point({
    afterNode: afterNodes.find((afterNode) => afterNode.raw.name === to),
    graph,
    link,
    type: 1
  })

  return { f, t }
}

const buildAfterLinkArrow = (args) => {
  let { afterConfig, afterNodes, graph, links } = args
  const { condWidth, condHeight } = afterConfig
  const arrows = []
  const buildArrow = getBuildArrow({ arrows, afterConfig })
  const adjust = adjustLine(afterConfig)

  const afterLinks = links.map((link) => {
    const { f, t } = computeLinkEnds({ afterNodes, graph, link })
    const cond = !!(link && link.info.other && link.info.other.title)
    const afterLink = { arrow: null, cond, f, linearGrad: null, mid: null }

    Object.assign(afterLink, { p: [], raw: link, rect: null, t, type: 'link' })

    const arrow = (f, t) => buildArrow(f, t, link, afterLink)
    const flag = customRoute({ adjust, afterConfig, afterLink, afterNodes, arrow })

    if (!flag) {
      defaultRoute({ adjust, afterConfig, afterLink, arrow, link })
    }

    afterLink.rect = {
      x: ~~(afterLink.mid.x - condWidth / 2),
      y: ~~(afterLink.mid.y - condHeight / 2),
      w: condWidth,
      h: condHeight
    }

    return afterLink
  })

  return { afterLinks, arrows }
}

const point = ({ afterNode, graph, link, type }) => {
  const exp = /^(bottom|top|left|right)$/
  const variant = /^(bottom|top|left|right)-(\d+)\/(\d+)$/
  const res = { x: 0, y: 0 }
  const joint = type ? link.toJoint || 'top' : link.fromJoint || 'bottom'

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

const getBuildArrow =
  ({ arrows, afterConfig }) =>
  (from, to, link, afterLink) => {
    const { arrowEdge, linkEndMinus, showArrow } = afterConfig
    const { showArrow: linkShowArrow = true } = link

    if (!showArrow || !linkShowArrow) return

    const p0 = { x: 0, y: 0 }
    const p2 = { x: 0, y: 0 }
    const dx = from.x - to.x
    const dy = from.y - to.y
    const absx = Math.abs(dx)
    const absy = Math.abs(dy)
    let t = 1
    const edge = arrowEdge

    if (absx < Number.EPSILON) {
      t = dy > 0 ? 1 : dy < 0 ? -1 : 1
      to.y -= t * linkEndMinus
      p0.x = to.x - edge
      p0.y = to.y + Math.sqrt(3) * edge * t
      p2.x = to.x + edge
      p2.y = p0.y

      if (dy !== 0) {
        arrows.push((afterLink.arrow = { p0, p1: to, p2, link }))
      }
    }

    if (absy < Number.EPSILON) {
      t = dx > 0 ? 1 : dx < 0 ? -1 : 1
      to.x -= t * linkEndMinus
      p0.x = to.x + Math.sqrt(3) * edge * t
      p0.y = to.y - edge
      p2.x = p0.x
      p2.y = to.y + edge

      if (dx !== 0) {
        arrows.push((afterLink.arrow = { p0, p1: to, p2, link }))
      }
    }
  }

const hideNodeLink = (data) => {
  let { nodes, links, groups } = data
  const hiddenNodeNames = nodes.filter((node) => node.hidden === true).map((node) => node.name)

  nodes = nodes.filter((node) => node.hidden !== true)
  links = links.filter((link) => !~hiddenNodeNames.indexOf(link.from) && !~hiddenNodeNames.indexOf(link.to))

  if (Array.isArray(groups)) {
    groups = groups.filter((group) => {
      group.nodes = group.nodes.filter((name) => !~hiddenNodeNames.indexOf(name))
      return group.nodes.length > 0
    })
  }

  return { nodes, links, groups }
}

const drawArrow = ({ afterLink, config, ctx, state }) => {
  const { arrow } = afterLink

  ctx.save()

  if (arrow && !~state.temporary.customLinks.indexOf(arrow.link)) {
    ctx.beginPath()
    ctx.moveTo(arrow.p0.x, arrow.p0.y)
    ctx.lineTo(arrow.p1.x, arrow.p1.y)
    ctx.lineTo(arrow.p2.x, arrow.p2.y)
    ctx.closePath()

    if (afterLink._grad) {
      ctx.fillStyle = afterLink._grad
      afterLink._grad = null
    } else {
      ctx.fillStyle = config.colors[arrow.link.info.status]
    }

    ctx.fill()
  }

  ctx.restore()
}

const drawGroup = ({ state, ctx }) => {
  const { afterData } = state
  const { afterConfig, afterGroups } = afterData
  const { showGroup = true, radius } = afterConfig

  if (showGroup && ctx && afterGroups) {
    afterGroups.forEach((afterGroup) => {
      const [p0, p1, p2, p3] = afterGroup.coords

      ctx.save()
      ctx.beginPath()
      ctx.moveTo(p0.x, p0.y)
      ctx.arcTo(p0.x, p1.y, p1.x, p1.y, radius)
      ctx.arcTo(p2.x, p1.y, p2.x, p2.y, radius)
      ctx.arcTo(p2.x, p3.y, p3.x, p3.y, radius)
      ctx.arcTo(p0.x, p3.y, p0.x, p0.y, radius)
      ctx.closePath()
      ctx.globalAlpha = 0.3

      if (afterGroup.raw.fillStyle) {
        ctx.fillStyle = afterGroup.raw.fillStyle
        ctx.fill()
      }

      if (afterGroup.raw.strokeStyle) {
        ctx.strokeStyle = afterGroup.raw.strokeStyle

        if (Array.isArray(afterGroup.raw.lineDash)) {
          ctx.setLineDash(afterGroup.raw.lineDash)
        } else {
          ctx.setLineDash([3, 3])
        }

        ctx.stroke()
      }

      ctx.restore()
    })
  }
}

export const clickGroup = (emit) => (afterGroup, e) => {
  emit('click-group', afterGroup, e)
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

export const handleNodeResize =
  ({ state, vm }) =>
  () => {
    const el = vm.$el
    const { padding, height } = state.temporary

    state.nodeHeight = el.offsetHeight
    state.isSmall =
      ((state.sizeMini || state.sizeMedium) && Math.abs(state.nodeHeight - height) < 0.1) || state.sizeSmall

    if (state.layUpdown) {
      const titleWidth = vm.$refs.title.offsetWidth
      const iconWidth = vm.$refs.icon.offsetWidth

      state.posLeft = ~~((titleWidth - iconWidth) / 2)
      state.nodeWidth = iconWidth + padding
    } else {
      let paddingLeft

      if (state.isSmall) {
        paddingLeft = 24 /* 1.5rem */
      } else if (state.sizeMini) {
        paddingLeft = 16 /* 1rem */
      } else if (state.sizeMedium) {
        paddingLeft = 32 /* 2rem */
      }

      state.nodeWidth = vm.$refs.title.offsetWidth + paddingLeft + padding
    }
  }

export const runAdjustYTask =
  ({ api, state }) =>
  () => {
    if (state.temporary.adjustYTask) {
      fastdom.clear(state.temporary.adjustYTask)
      state.temporary.adjustYTask = null
    }

    state.temporary.adjustYTask = fastdom.measure(() => {
      state.temporary.adjustYTask = null
      api.refresh()
    })
  }

export const setAdjustY =
  ({ api, state }) =>
  (param) => {
    let { lastRowAfterNodes, adjustY } = state.temporary

    if (!lastRowAfterNodes.length) {
      lastRowAfterNodes = state.temporary.lastRowAfterNodes = state.afterData.afterNodes.filter(
        (afterNode) => afterNode.lastRow
      )
    }

    const lastRowNodeNames = lastRowAfterNodes.map((afterNode) => afterNode.raw.name)

    if (Array.isArray(lastRowNodeNames) && lastRowNodeNames.includes(param.node) && param.value < adjustY) {
      state.temporary.adjustY = param.value
      api.runAdjustYTask()
    }
  }

export const setNodeAdjustY =
  ({ vm, state }) =>
  () => {
    const elRect = vm.$el.getBoundingClientRect()
    const titleRect = vm.$refs.title.getBoundingClientRect()

    if (state.layUpdown) {
      state.temporary.graphInstance.setAdjustY({ node: state.nodeName, value: -titleRect.height / 2 })
    } else {
      state.temporary.graphInstance.setAdjustY({
        node: state.nodeName,
        value: titleRect.height > elRect.height ? (elRect.height - titleRect.height) / 2 : 0
      })
    }
  }

// 计算多端流程图dot模式节点图标
export const computedIcon =
  ({ state, icons }) =>
  () => {
    let svg, size

    if (state.isSmall) {
      svg = icons[state.nodeStatus].other
      size = 'small'
    } else if (state.sizeMini) {
      svg = icons[state.nodeStatus].mini
      size = 'mini'
    } else {
      svg = icons[state.nodeStatus].other
      size = state.nodeSize
    }

    return { svg, size }
  }

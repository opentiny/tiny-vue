import { layout, bpath, txt, hexToRgba } from './river'

export const buildOption =
  ({ api, emit, props, state, vm }) =>
  () => {
    const WIDTH = (state.canvasWidth = api.getContainerWidth() || props.config.canvasWidth)
    const {
      statusYes: STATUS_YES,
      statusNo: STATUS_NO,
      canvasHeight: HEIGHT,
      statusColor: STATUS_COLOR,
      tooltip: userTooltip,
      title: userTitle
    } = props.config

    const chartData = layout(props.data, { ...props.config, canvasWidth: WIDTH }, vm.$el)

    const chartNodeData = chartData.filter((item) => item.type === 'node')
    const chartLinkData = chartData.filter((item) => item.type === 'link')
    const chartIconData = chartData.filter((item) => item.type === 'icon')
    const chartLegeData = chartData.filter((item) => item.type === 'lege')

    state.nameInfo = chartData.find((item) => item.type === 'name')

    emit('paths', JSON.parse(JSON.stringify(state.nameInfo.paths)))

    const renderNode = api.getRenderNode(chartNodeData)
    const renderLink = api.getRenderLink(chartLinkData)
    const renderIcon = api.getRenderIcon({ chartIconData, STATUS_COLOR, STATUS_YES, STATUS_NO })
    const renderLege = api.getRenderLege(chartLegeData)
    const serieLine = api.getMarkLine(HEIGHT)
    const tooltip = api.getTooltip({ userTooltip, chartData })

    const option = {
      grid: { left: '0%', right: '0%', bottom: '0%', top: '0%' },
      xAxis: { min: 0, max: WIDTH, show: false },
      yAxis: { min: 0, max: HEIGHT, show: false },
      series: [
        { type: 'custom', name: '1', renderItem: renderNode, data: chartNodeData, zlevel: 1 },
        { type: 'custom', name: '2', renderItem: renderLink, data: chartLinkData, zlevel: 2 },
        { type: 'custom', name: '3', renderItem: renderIcon, data: chartIconData, zlevel: 3 },
        { type: 'custom', name: '4', renderItem: renderLege, data: chartLegeData, zlevel: 4 },
        serieLine
      ],
      tooltip: { formatter: tooltip },
      title: userTitle
    }

    return option
  }

export const getRenderNode =
  ({ api: api0, echarts }) =>
  (chartNodeData) => {
    const so = api0.setRiverRgbaOpacity

    return (params, api) => {
      const { dataIndex, coordSys } = params
      const { x: sx, y: sy, width: sw, height: sh } = coordSys
      const data = chartNodeData[dataIndex]
      const { x, y, width, height, g, lp, data: dataNode } = data
      const rectShape = echarts.graphic.clipRectByRect({ x, y, width, height }, { x: sx, y: sy, width: sw, height: sh })
      const lg = g[0].map((stop, i) => ({ offset: stop, color: so(dataNode, g[1][i]) }))
      const nodeLabel = txt(dataNode.label, api.font({}), lp[2])

      return {
        type: 'group',
        name: 'node-group',
        children: [
          {
            type: 'rect',
            transition: ['shape'],
            shape: rectShape,
            style: { fill: new echarts.graphic.LinearGradient(0, 0, 1, 0, lg) }
          },
          {
            type: 'text',
            style: {
              x: lp[0],
              y: lp[1],
              text: nodeLabel.t,
              textFill: so(dataNode, 'rgba(0,0,0,1)')
            }
          }
        ]
      }
    }
  }

export const getRenderLink =
  ({ api, echarts }) =>
  (chartLinkData) => {
    const so = api.setRiverRgbaOpacity

    return (params) => {
      const { dataIndex } = params
      const data = chartLinkData[dataIndex]
      const { lb, g, data: dataLink } = data
      const [posX, posY] = lb
      const p = bpath(data)
      const lg = g[0].map((stop, i) => ({ offset: stop, color: so(dataLink, g[1][i]) }))

      return {
        type: 'group',
        name: 'link-group',
        position: [posX, posY],
        children: [
          {
            type: 'path',
            transition: ['shape'],
            shape: { d: p },
            style: { fill: new echarts.graphic.LinearGradient(0, 0, 1, 0, lg) }
          }
        ]
      }
    }
  }

export const getRenderIcon =
  ({ api: api0 }) =>
  ({ chartIconData, STATUS_COLOR, STATUS_YES, STATUS_NO }) => {
    const so = api0.setRiverRgbaOpacity
    const si = api0.setRiverIconStyle

    return (params, api) => {
      const { dataIndex } = params
      const data = chartIconData[dataIndex]
      const { x, y, radius, lp, data: dataIcon } = data
      const { status, text, skip } = dataIcon

      if (skip) return null

      const circleFill = STATUS_COLOR[String(status)]
      const labelText = txt(dataIcon.label, api.font({}), lp[2])
      const labelTextX = labelText.o ? lp[0] - x : lp[0] + lp[2] / 2 - x
      const labelTextTa = labelText.o ? '' : 'center'
      const iconText = getIconText({ status, STATUS_YES, STATUS_NO, text, api, si, dataIcon })

      return {
        type: 'group',
        position: [x, y],
        children: [
          {
            type: 'circle',
            transition: ['shape'],
            shape: { cx: 0, cy: 0, r: si(dataIcon, 'radius', radius) },
            style: { fill: so(dataIcon, hexToRgba(si(dataIcon, 'fill', circleFill))) }
          },
          {
            type: 'text',
            style: {
              x: labelTextX,
              y: lp[1] - y,
              text: labelText.t,
              textFill: so(dataIcon, hexToRgba(si(dataIcon, 'labelColor', '#000'))),
              textAlign: labelTextTa
            }
          },
          iconText
        ]
      }
    }
  }

const getIconText = ({ status, STATUS_YES, STATUS_NO, text, api, si, dataIcon }) => {
  let tmp = { type: 'path', transition: ['shape'], shape: {}, style: { fill: si(dataIcon, 'color', '#fff') } }

  if (status === STATUS_YES) {
    tmp.shape.d = 'M-1.7 4.5l9.4-9.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-10 10.1c-.4.4-1 .4-1.'
    tmp.shape.d += '4 0-.1 0-.1-.1-.2-.1l-5.8-5.8c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l5.2 5.2z'
  } else if (status === STATUS_NO) {
    tmp.shape.d = 'M19.1 1.6H-6.9c-.5 0-.9-.4-.9-1s.4-1 .9-1h14.2c.5 0 .9.4.9 1s-.4 1-.9 1z'
  } else {
    tmp = {
      type: 'text',
      style: {
        x: 0,
        y: 1,
        text,
        textVerticalAlign: 'middle',
        textAlign: 'center',
        textFill: si(dataIcon, 'color', '#fff'),
        textFont: api.font({ fontSize: 14 })
      }
    }
  }

  return tmp
}

export const getRenderLege = () => (chartLegeData) => {
  return (params, api) => {
    const { dataIndex } = params
    const data = chartLegeData[dataIndex]
    const { cx, cy, radius, color, x, y, t, tw } = data
    const legeLabel = txt(t, api.font({}), tw)

    return {
      type: 'group',
      name: 'lege-group',
      children: [
        { type: 'circle', transition: ['shape'], shape: { cx, cy, r: radius }, style: { fill: color } },
        {
          type: 'text',
          style: { x, y, text: legeLabel.t, textVerticalAlign: 'middle', textAlign: 'left', textFill: color }
        }
      ]
    }
  }
}

export const getTooltip =
  () =>
  ({ userTooltip, chartData }) => {
    return (params) => {
      const { data } = params
      const { data: dataItem, type, t: legeLabel, color: legeColor } = data

      if (typeof userTooltip === 'function') {
        return userTooltip(params, chartData)
      } else if (type === 'node') {
        return dataItem.label
      } else if (type === 'icon') {
        return `
        <div>Status: ${dataItem.status}</div>
        <div>Label: ${dataItem.label}</div>
      `
      } else if (type === 'link') {
        const riverNodes = chartData.filter((item) => item.type === 'node')
        const sourceRiverNode = riverNodes.find((riverNode) => riverNode.data.name === dataItem.source)
        const targetRiverNode = riverNodes.find((riverNode) => riverNode.data.name === dataItem.target)

        return `
        <div>From: ${sourceRiverNode.data.label}</div>
        <div>To: ${targetRiverNode.data.label}</div>
        <div>Val: ${dataItem.value}</div>
      `
      } else if (type === 'lege') {
        return `<div style="background:${legeColor};color:#fff">${legeLabel}</div>`
      }
    }
  }

export const getMarkLine = () => (h) => ({
  type: 'line',
  symbol: 'none',
  data: [
    [0, 0],
    [0, h]
  ],
  lineStyle: { width: 1, type: [2, 6], color: '#fff' },
  zlevel: 0
})

export const setChartOption = (state) => (option) => state.myChart.setOption(option)

export const setListeners =
  ({ api, emit, state }) =>
  (option) => {
    const modifyOption = (option, riverIcon) => {
      const serieLine = option.series.find((serie) => serie.type === 'line')

      if (riverIcon) {
        const { x } = riverIcon

        serieLine.data[0][0] = serieLine.data[1][0] = x
        serieLine.lineStyle.color = '#000'
      } else {
        serieLine.lineStyle.color = '#fff'
      }

      return option
    }

    state.myChart.on('mousemove', { seriesName: '3' }, (params) => {
      if (!state.markLineShow) {
        api.setChartOption(modifyOption(option, params.data))
        state.markLineShow = true
      }
    })

    state.myChart.getZr().on('mousemove', (event) => {
      const notIcon = (parent = event.target) => {
        do {
          if (~['link-group', 'node-group'].indexOf(parent.name)) return true
        } while ((parent = parent.parent))
      }

      if (state.markLineShow && (!event.target || notIcon())) {
        api.setChartOption(modifyOption(option))
        state.markLineShow = false
      }
    })

    state.myChart.on('click', { seriesName: '1' }, (params) => emit('click-node', params))
    state.myChart.on('click', { seriesName: '2' }, (params) => emit('click-link', params))
    state.myChart.on('click', { seriesName: '3' }, (params) => emit('click-icon', params))
    state.myChart.on('click', { seriesName: '4' }, (params) => emit('click-lege', params))
  }

export const setRiverRgbaOpacity =
  ({ props, state }) =>
  (data, rgba) => {
    const { config } = props
    const { nameInfo, lighting } = state
    const { nameField } = nameInfo
    const { grayOpcity, lightOpcity } = config
    const isw = (arr, name) => arr.find((item) => !name.indexOf(`${item}/`))

    if (lighting && lighting.length) {
      const ci = rgba.lastIndexOf(',')
      const bi = rgba.lastIndexOf(')')
      const dataName = data[nameField]

      if (~lighting.indexOf(dataName)) {
        return rgba.slice(0, ci + 1) + lightOpcity + rgba.slice(bi)
      } else if (isw(lighting, dataName)) {
        return rgba.slice(0, ci + 1) + 1 + rgba.slice(bi)
      } else {
        return rgba.slice(0, ci + 1) + grayOpcity + rgba.slice(bi)
      }
    } else {
      return rgba
    }
  }

export const lightUp =
  ({ api, state }) =>
  (param) => {
    const { nameInfo } = state
    const { paths, nameSplit } = nameInfo
    const getIndexVal = (i) => (i >= 0 && i < paths.length ? paths[i].split(nameSplit) : [])
    const getPathVal = (path) => (path ? path.split(nameSplit) : [])
    const getArrayVal = (arr) => {
      let res = []

      arr.forEach((item) => {
        if (typeof item === 'number') res = res.concat(getIndexVal(item))
        else if (typeof item === 'string') res = res.concat(getPathVal(item))

        res = [...new Set(res)]
      })

      return res
    }

    if (typeof param === 'number') {
      state.lighting = getIndexVal(param)
    } else if (typeof param === 'string') {
      state.lighting = getPathVal(param)
    } else if (Array.isArray(param) && param.length) {
      state.lighting = getArrayVal(param)
    } else {
      state.lighting = []
    }

    api.setChartOption(state.option)
  }

export const setRiverIconStyle = (state) => (data, type, oldValue) => {
  const { styling, nameInfo } = state
  const { nameField } = nameInfo
  const dataName = data[nameField]

  if (styling && styling.length) {
    for (let i = 0; i < styling.length; i++) {
      const stl = styling[i]

      if (stl.name && dataName === stl.name && type && stl[type]) return stl[type]
    }
  }

  return oldValue
}

export const style =
  ({ api, state }) =>
  (param) => {
    const styl = (obj) => {
      const { nodeName, iconIndex, styles } = obj

      return Object.assign({}, styles, { name: `n${nodeName}/${iconIndex}`.toLowerCase() })
    }

    if (Array.isArray(param)) {
      const styling = []

      param.forEach((item) => styling.push(styl(item)))

      state.styling = styling
    } else if (typeof param === 'object') {
      state.styling = [styl(param)]
    } else {
      state.styling = []
    }

    api.setChartOption(state.option)
  }

export const computeCanvasStyle =
  ({ props, state }) =>
  () => {
    const { canvasWidth, canvasTransformOrigin, canvasTransform } = state
    const { canvasHeight } = props.config
    const res = {}

    if (canvasWidth) res.width = canvasWidth + 'px'
    if (canvasHeight) res.height = canvasHeight + 'px'
    if (canvasTransformOrigin) res.transformOrigin = canvasTransformOrigin
    if (canvasTransform) res.transform = canvasTransform

    return res
  }

export const getContainerWidth = (state) => () => state.containerEl && state.containerEl.getBoundingClientRect().width

export const resizeListener =
  ({ props, state }) =>
  () => {
    const { ignoreZoom = true } = props.config
    const ratio = ignoreZoom ? window.innerWidth / window.outerWidth : 1

    state.canvasTransform = 'scale(' + ratio + ')'
  }

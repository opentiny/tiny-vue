import * as echarts from 'echarts'

const setLaterFunc = (ctx) => {
  ctx.later = () => {
    ctx.lock = false
    if (ctx.args) {
      ctx.wrapperFn.apply(ctx.context, ctx.args)
      ctx.args = false
    }
  }
}

const setWrapperFunc = (ctx) => {
  ctx.wrapperFn = function () {
    if (ctx.lock) {
      // eslint-disable-next-line prefer-rest-params
      ctx.args = arguments
    } else {
      // eslint-disable-next-line prefer-rest-params
      ctx.fn.apply(ctx.context, arguments)
      setTimeout(ctx.later, ctx.time)
      ctx.lock = true
    }
  }
}

const throttle = (fn, time, context) => {
  let ctx = {
    fn,
    time,
    context,
    lock: undefined,
    args: undefined,
    wrapperFn: undefined,
    later: undefined
  }

  setLaterFunc(ctx)
  setWrapperFunc(ctx)

  return ctx.wrapperFn
}

const backupListener = ({ _vm, throttledResizeHandler, zoomEndHandler }) => {
  _vm._oldZoomEndHandler = zoomEndHandler
  _vm._oldResizeHandler = throttledResizeHandler
}

const addListener = ({ aMapModel, amap, throttledResizeHandler, zoomEndHandler }) => {
  amap.on('zoomend', zoomEndHandler)
  amap.on('moveend', zoomEndHandler)
  amap.on('complete', zoomEndHandler)
  aMapModel.get('resizeEnable') && amap.on('resize', throttledResizeHandler)
}

const removeListener = ({ _vm, aMapModel, amap }) => {
  amap.off('zoomend', _vm._oldZoomEndHandler)
  amap.off('moveend', _vm._oldZoomEndHandler)
  amap.off('complete', _vm._oldZoomEndHandler)
  aMapModel.get('resizeEnable') && amap.off('resize', _vm._oldResizeHandler)
}

const getResizeHandler = ({ _vm, api, moveHandler }) =>
  function (e) {
    echarts.getInstanceByDom(api.getDom()).resize()
    moveHandler.call(_vm, e)
  }

// prettier-ignore
const getZoomEndHandler =
  ({ api, rendering }) =>
    () => {
      if (rendering) {
        return
      }

      api.dispatchAction({
        type: 'amapRoam'
      })
    }

const getMoveHandler = ({ aMapModel, api, coordSys, rendering, viewportRoot }) =>
  function () {
    if (rendering) {
      return
    }

    let offsetEl = viewportRoot.parentNode.parentNode.parentNode
    let mapOffset = [-parseInt(offsetEl.style.left, 10) || 0, -parseInt(offsetEl.style.top, 10) || 0]

    aMapModel.__mapOffset = mapOffset
    coordSys.setMapOffset(mapOffset)
    viewportRoot.style.left = mapOffset[0] + 'px'
    viewportRoot.style.top = mapOffset[1] + 'px'

    api.dispatchAction({
      type: 'amapRoam'
    })
  }

export default echarts.extendComponentView({
  type: 'amap',

  render(aMapModel, ecModel, api) {
    let rendering = true
    let amap = aMapModel.getAMap()
    let viewportRoot = api.getZr().painter.getViewportRoot()
    let coordSys = aMapModel.coordinateSystem

    let moveHandler = getMoveHandler({ aMapModel, api, coordSys, rendering, viewportRoot })
    let zoomEndHandler = getZoomEndHandler({ api, rendering })
    let resizeHandler = getResizeHandler({ _vm: this, api, moveHandler })
    let throttledResizeHandler = throttle(resizeHandler, 300, amap)

    removeListener({ _vm: this, aMapModel, amap })
    addListener({ aMapModel, amap, throttledResizeHandler, zoomEndHandler })
    backupListener({ _vm: this, throttledResizeHandler, zoomEndHandler })

    rendering = false
  }
})

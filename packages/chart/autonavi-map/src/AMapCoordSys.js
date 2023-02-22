import * as echarts from 'echarts'

export default class AMapCoordSys {
  constructor(amap, api) {
    this._amap = amap
    this.dimensions = ['lng', 'lat']
    this._mapOffset = [0, 0]
    this._api = api
  }

  static create(ecModel, api) {
    let tinySys
    let root = api.getDom()

    ecModel.eachComponent('amap', (tinyModel) => {
      let viewportRoot = api.getZr().painter.getViewportRoot()

      if (typeof window.AMap === 'undefined') {
        throw new Error('AMap api is not loaded')
      }

      if (tinySys) {
        throw new Error('Only one amap component can exist')
      }

      if (!tinyModel.__amap) {
        let amapRoot = root.querySelector('.ec-extension-amap')

        if (amapRoot) {
          viewportRoot.style.left = '0px'
          viewportRoot.style.top = '0px'
          root.removeChild(amapRoot)
        }
        amapRoot = document.createElement('div')
        amapRoot.style.cssText = 'width:100%;height:100%'

        amapRoot.classList.add('ec-extension-amap')
        root.appendChild(amapRoot)

        let options = tinyModel.get() || {}

        options = tinyModel.__options = echarts.util.clone(options)

        let amap = (tinyModel.__amap = new window.AMap.Map(amapRoot, options))

        let layer = (tinyModel.__layer = new window.AMap.CustomLayer(viewportRoot))

        layer.setMap(amap)
      }

      let tinyApm = tinyModel.getAMap()
      let tinyOut = tinyModel.getLayer()
      tinyOut.hide()

      let tinyZoom = tinyApm.getZoom()
      let tinyCenter = tinyApm.getCenter()

      tinySys = new AMapCoordSys(tinyApm, api)
      tinySys.setMapOffset(tinyModel.__mapOffset || [0, 0])
      tinySys.setZoom(tinyZoom)
      tinySys.setCenter([tinyCenter.lng, tinyCenter.lat])
      tinyModel.coordinateSystem = tinySys
      tinyOut.show()
    })

    ecModel.eachSeries((seriesModel) => {
      if (seriesModel.get('coordinateSystem') === 'amap') {
        seriesModel.coordinateSystem = tinySys
      }
    })
  }

  setZoom(zoom) {
    this._zoom = zoom
  }

  setCenter(center) {
    this._center = this._amap.lnglatToPixel(center)
  }

  setMapOffset(mapOffset) {
    this._mapOffset = mapOffset
  }

  getAMap() {
    return this._amap
  }

  dataToPoint(data) {
    let point = new window.AMap.LngLat(data[0], data[1])
    let px = this._amap.lngLatToContainer(point)
    let mapOffset = this._mapOffset

    return [px.x - mapOffset[0], px.y - mapOffset[1]]
  }

  pointToData(pt) {
    let mapOffset = this._mapOffset

    pt = this._amap.containerToLngLat({
      x: pt[0] + mapOffset[0],
      y: pt[1] + mapOffset[1]
    })

    return [pt.lng, pt.lat]
  }

  getViewRect() {
    let api = this._api

    return new echarts.graphic.BoundingRect(0, 0, api.getWidth(), api.getHeight())
  }

  getRoamTransform() {
    return echarts.matrix.create()
  }
}

AMapCoordSys.dimensions = AMapCoordSys.prototype.dimensions

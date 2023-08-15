import * as echarts from 'echarts'
import AMapCoordSys from './AMapCoordSys'
import './AMapModel.js'
import './AMapView.js'

echarts.registerCoordinateSystem('amap', AMapCoordSys)

echarts.registerAction(
  {
    type: 'amapRoam',
    event: 'amapRoam',
    update: 'updateLayout'
  },
  (payload, ecModel) => {
    ecModel.eachComponent('amap', (aMapModel) => {
      let amap = aMapModel.getAMap()
      let center = amap.getCenter()
      aMapModel.setCenterAndZoom([center.lng, center.lat], amap.getZoom())
    })
  }
)

import * as echarts from 'echarts'
import AMapCoordSys from './AMapCoordSys'
import extendComponentModel from './AMapModel.js'
import extendComponentView from './AMapView.js'

export default function registerAmap() {
  echarts.registerCoordinateSystem('amap', AMapCoordSys)
  extendComponentModel()
  extendComponentView()

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
}

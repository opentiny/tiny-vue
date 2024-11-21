import BaiduMap from './src/baidu-map.vue'

BaiduMap.install = function (Vue: any) {
  Vue.component(BaiduMap.name, BaiduMap)
}

export { BaiduMap }

export default BaiduMap

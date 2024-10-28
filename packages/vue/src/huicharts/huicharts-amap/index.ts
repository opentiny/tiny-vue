import AutonaviMap from './src/autonavi-map.vue'

AutonaviMap.install = function (Vue: any) {
  Vue.component(AutonaviMap.name, AutonaviMap)
}

export { AutonaviMap }

export default AutonaviMap

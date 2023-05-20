import YearRange from './src/pc.vue'

/* istanbul ignore next */
YearRange.install = function (Vue) {
  Vue.component(YearRange.name, YearRange)
}

YearRange.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    YearRange.install(window.Vue)
  }
}

export default YearRange

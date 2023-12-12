import Core from './src/chart-core'

Core.install = function (Vue: any) {
  Vue.component(Core.name, Core)
}

export default Core

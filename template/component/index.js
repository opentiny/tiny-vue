import [[UNAME]] from './src/index[[SUFFIX]]'
// import '@huawei/[[THEME]]/[[NAME]]/index.css'

[[UNAME]].model = {
  prop: 'modelValue',
  event: 'update:modelValue'
}

/* istanbul ignore next */
[[UNAME]].install = function (Vue) {
  Vue.component([[UNAME]].name, [[UNAME]])
}

[[UNAME]].version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    [[UNAME]].install(window.Vue)
  }
}

export default [[UNAME]]

// import Vue from 'vue'
import { hooks } from '@opentiny/vue-common'
import { $local } from './useStorage'

const defaultPath = {
  pc: '/pc/button/base',
  mobile: '/mobile/navbar/left-right-arrow',
  'mobile-first': '/mobile-first/calendar-bar/basic-usage'
}
const modeNames = Object.keys(defaultPath)

const parsePath = (path) => {
  const items = path.split('/')
  state.mode = items[1]
  state.pathName = items[2]
}

// todo vue2需要预注册一下 @vue/composition-api
const state = hooks.reactive({
  mode: '',
  pathName: '',
  demoId: '',
  modeCtx: $local.modeCtx || defaultPath
})

const fn = {
  // 加载页面
  loadPage: () => {
    const urlSegments = location.pathname.split('/')
    let mode = urlSegments[1]
    if (modeNames.includes(mode)) {
      // 有效的url, 更新缓存
      parsePath(location.pathname)
      state.demoId = location.hash.slice(1)
      fn.cacheCtx()
    } else {
      // 无效的url
      fn.changeMode('pc')
      fn.pushToUrl()
    }
  },
  changeMode: (mode) => {
    parsePath(state.modeCtx[mode])
  },
  // 保存ctx
  cacheCtx: () => {
    state.modeCtx[state.mode] = `/${state.mode}/${state.pathName}#${state.demoId}`
    $local.modeCtx = state.modeCtx
  },
  // 更新url
  pushToUrl: () => history.pushState({}, '', state.modeCtx[state.mode])
}

export function useModeCtx() {
  return {
    state,
    fn
  }
}

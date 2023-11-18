const map = {
  tinyMode: 'tiny_mode'
}

export default {
  isMobile: true,
  VITE_CONTEXT: '',
  base: '',
  prodBase: '',
  initApp: (app) => {
    app.config.globalProperties[map.tinyMode] = { value: 'mobile' }
  }
}

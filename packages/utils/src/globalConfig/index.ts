// 需要微前端的用户传入该变量
export const globalConfig = {
  viewportWindow: null // 获取真实视口的window，解决在微前端中某些bug
}

export const getViewportWindow = () => globalConfig.viewportWindow || window

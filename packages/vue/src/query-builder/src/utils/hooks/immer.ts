export const produce = (state, cb) => {
  return cb(state) || state
}

export const setAutoFreeze = (isAutoFreeze) => {
  return isAutoFreeze
}

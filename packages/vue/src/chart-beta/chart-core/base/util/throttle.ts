function throttle(delay, callback, options) {
  const { noTrailing = false, noLeading = false, debounceMode = undefined } = options || {}
  let timeoutID
  let cancelled = false
  let lastExec = 0
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
  }
  function cancel(options) {
    const { upcomingOnly = false } = options || {}
    clearExistingTimeout()
    cancelled = !upcomingOnly
  }
  function wrapper(...arguments_) {
    const self = this
    const elapsed = Date.now() - lastExec
    if (cancelled) {
      return
    }
    function exec() {
      lastExec = Date.now()
      callback.apply(self, arguments_)
    }
    function clear() {
      timeoutID = undefined
    }
    if (!noLeading && debounceMode && !timeoutID) {
      exec()
    }
    clearExistingTimeout()
    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        lastExec = Date.now()
        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay)
        }
      } else {
        exec()
      }
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay)
    }
  }
  wrapper.cancel = cancel
  return wrapper
}

export default throttle

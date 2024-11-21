import throttle from './throttle'
import { isEqual } from '../object'

const CONTEXT_KEY = '@@observevisibilityContext'

const processOptions = (value) => {
  let options

  if (typeof value === 'function') {
    options = { callback: value }
  } else {
    options = value
  }

  return options
}

const createObserver = ({ options, instance, state }) => {
  if (state.observer) {
    destroyObserver(state)
  }

  if (state.frozen) return

  state.options = processOptions(options)
  state.callback = (result, entry) => {
    state.options.callback(result, entry)

    if (result && state.options.once) {
      state.frozen = true
      destroyObserver(state)
    }
  }

  if (state.callback && state.options.throttle) {
    state.callback = throttle(state.options.throttleDelay || 20, state.callback)
  }

  state.observer = new IntersectionObserver((entries) => {
    let entry = entries[0]

    if (entries.length > 1) {
      const intersectingEntry = entries.find((e) => e.isIntersecting)

      if (intersectingEntry) {
        entry = intersectingEntry
      }
    }

    if (state.callback) {
      state.callback(entry.isIntersecting, entry)
    }
  }, state.options.intersection)

  instance.$nextTick(() => {
    if (state.observer) {
      state.observer.observe(state.el)
    }
  })
}

const destroyObserver = (state) => {
  if (state.observer) {
    state.observer.disconnect()
    state.observer = null
  }

  if (state.callback) {
    state.callback = null
  }
}

const createVisibilityState = ({ el, options, instance }) => {
  const state = { el, observer: null, frozen: false }

  createObserver({ options, instance, state })

  return state
}

const bind = (el, { value, instance }, { context }) => {
  if (!value) return

  if (typeof IntersectionObserver === 'undefined') {
    throw new TypeError('[TINY Error][ObserveVisibility] IntersectionObserver API is not available in your browser')
  } else {
    instance = instance || context

    el[CONTEXT_KEY] = createVisibilityState({ el, options: value, instance })
  }
}

const update = (el, { value, oldValue, instance }, { context }) => {
  if (isEqual(value, oldValue)) return

  const state = el[CONTEXT_KEY]

  if (!value) {
    unbind(el)
    return
  }

  instance = instance || context

  if (state) {
    createObserver({ options: value, instance, state })
  } else {
    bind(el, { value, instance }, { context })
  }
}

const unbind = (el) => {
  const state = el[CONTEXT_KEY]

  if (state) {
    destroyObserver(state)
    delete el[CONTEXT_KEY]
  }
}

const ObserveVisibility = {
  bind,
  update,
  unbind,
  beforeMount: bind,
  updated: update,
  unmounted: unbind
}

export default ObserveVisibility

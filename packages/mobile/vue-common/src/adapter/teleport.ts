let globalId = 0

const getHasComment = (state) => (comment) => {
  const childNodes = state.parent ? Array.from(state.parent.childNodes) : []

  for (let i = 0; i < childNodes.length; i++) {
    if (childNodes[i].textContent === comment) {
      return true
    }
  }
}

const getGetFragment =
  ({ hasComment, startComment, state, endComment }) =>
  (commentFlag) => {
    const fragment = document.createDocumentFragment()

    if (commentFlag) {
      !hasComment(startComment) && fragment.appendChild(document.createComment(startComment))
      state.nodes.forEach((node) => fragment.appendChild(node))
      !hasComment(endComment) && fragment.appendChild(document.createComment(endComment))
    } else {
      const children = state.parent ? Array.from(state.parent.childNodes) : []

      let start, end

      start = end = 0

      for (let i = 0; i < children.length; i++) {
        const node = children[i]

        if (node.nodeType !== 8) {
          continue
        }

        if (node.textContent === startComment) {
          start = i
        }

        if (node.textContent === endComment) {
          end = i
          break
        }
      }

      if (end > start) {
        children.slice(start + 1, end).forEach((node) => fragment.appendChild(node))
      }
    }

    return fragment
  }

const getDisable =
  ({ instance, getFragment, state, startComment, endComment }) =>
  () => {
    instance.$el.appendChild(getFragment())

    const indices = []
    const children = state.parent ? Array.from(state.parent.childNodes) : []

    children.forEach((child, i) => {
      if (child.nodeType === 8) {
        if (child.textContent === startComment || child.textContent === endComment) {
          indices.push(i)
        }
      }
    })

    const minIndex = Math.min(...indices)
    const maxIndex = Math.max(...indices)

    children
      .slice(minIndex, maxIndex + 1)
      .reverse()
      .forEach((child) => state.parent && state.parent.removeChild(child))

    state.parent = null
  }

const getMove =
  ({ state, props, disable, getFragment }) =>
  () => {
    state.waiting = false
    state.parent = document.querySelector(props.to)

    if (!state.parent) {
      disable()
      state.waiting = true

      return
    }

    if (props.where === 'before') {
      state.parent.prepend(getFragment(true))
    } else {
      state.parent.appendChild(getFragment(true))
    }
  }

const getTeardownObserver = (state) => () => {
  if (state.observer) {
    state.observer.disconnect()
    state.observer = null
  }
}

const getOnMutations =
  ({ state, disable, props, move }) =>
  (mutations) => {
    let shouldMove = false

    for (let i = 0; i < mutations.length; i++) {
      const mutation = mutations[i]
      const filteredAddedNodes = Array.from(mutation.addedNodes).filter((node) => !state.nodes.includes(node))

      if (Array.from(mutation.removedNodes).includes(state.parent)) {
        disable()
        state.waiting = !props.disabled
      } else if (state.waiting && filteredAddedNodes.length > 0) {
        shouldMove = true
      }
    }

    shouldMove && move()
  }

const getBootObserver =
  ({ state, onMutations }) =>
  () => {
    if (state.observer) return

    state.observer = new MutationObserver((mutations) => onMutations(mutations))

    state.observer.observe(document.body, {
      attributes: false,
      characterData: false,
      childList: true,
      subtree: true
    })
  }

const getAfterUpdated =
  ({ state, instance, props, bootObserver, maybeMove }) =>
  () => {
    state.nodes = Array.from(instance.$el.childNodes)

    !props.disabled && bootObserver()
    maybeMove()
  }

const getWatchDisabled =
  ({ disable, teardownObserver, bootObserver, move }) =>
  (value) => {
    if (value) {
      disable()
      teardownObserver()

      return
    }

    bootObserver()
    move()
  }

export default ({ reactive, watch, getCurrentInstance, onUpdated, onMounted, onBeforeUnmount, h, defineComponent }) =>
  defineComponent({
    name: 'Vue2Teleport',
    props: {
      to: { type: String, required: true },
      where: { type: String, default: 'after' },
      disabled: Boolean
    },
    setup(props) {
      const state = reactive({ nodes: [], waiting: false, observer: null, parent: null, id: ++globalId })
      const instance = getCurrentInstance()?.proxy
      const startComment = `[${state.id}]vue2-teleporter-start`
      const endComment = `[${state.id}]vue2-teleporter-end`

      const hasComment = getHasComment(state)
      const getFragment = getGetFragment({ hasComment, startComment, state, endComment })
      const disable = getDisable({ instance, getFragment, state, startComment, endComment })
      const move = getMove({ state, props, disable, getFragment })
      const maybeMove = () => !props.disabled && move()
      const teardownObserver = getTeardownObserver(state)
      const onMutations = getOnMutations({ state, disable, props, move })
      const bootObserver = getBootObserver({ state, onMutations })
      const afterUpdated = getAfterUpdated({ state, instance, props, bootObserver, maybeMove })
      const watchDisabled = getWatchDisabled({ disable, teardownObserver, bootObserver, move })

      watch(() => props.to, maybeMove)
      watch(() => props.where, maybeMove)
      watch(() => props.disabled, watchDisabled)

      onUpdated(afterUpdated)
      onMounted(afterUpdated)
      onBeforeUnmount(() => {
        disable()
        teardownObserver()
      })

      return () =>
        h(
          'div',
          { class: 'vue2-teleporter', style: { 'visibility:hidden;display:none;': !props.disabled } },
          (typeof instance?.$slots.default === 'function' ? instance.$slots.default() : instance.$slots.default) || null
        )
    }
  })

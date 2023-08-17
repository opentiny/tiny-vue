import debounce from '../common/deps/debounce'
import { on, off } from '../common/deps/dom'

const getBoundingPosition =
  ({ state }) =>
  () => {
    const { slideMainPostion, positionList } = state
    const list = positionList.slice()
    const len = list.length

    state.boundingIndex = {
      left: -1,
      right: -1
    }

    for (let i = 0; i < len; i++) {
      if (list[i].right > slideMainPostion.right + 2) {
        state.boundingIndex.right = i
        break
      }
    }

    for (let i = len - 1; i >= 0; i--) {
      if (list[i].left < slideMainPostion.left) {
        state.boundingIndex.left = i
        break
      }
    }
  }

const leftSlideHandler =
  ({ state, api }) =>
  () => {
    const { canLeftScroll, slideMainPostion, positionList, boundingIndex } = state

    if (!canLeftScroll || state.timer) {
      return
    }

    const position = boundingIndex.left !== -1 && positionList[boundingIndex.left]

    if (position) {
      api.animationHandler(position.left - slideMainPostion.left)
    }
  }

const rightSlideHandler =
  ({ state, api }) =>
  () => {
    const { canRightScroll, slideMainPostion, positionList, boundingIndex } = state

    if (!canRightScroll || state.timer) {
      return
    }

    const position = boundingIndex.right !== -1 && positionList[boundingIndex.right]

    if (position) {
      api.animationHandler(position.right - slideMainPostion.right)
    }
  }

const updatePosition = ({ state, vm, props, api }) =>
  debounce(10, (isInit) => {
    state.positionList = props.data.map((item, index) => {
      const blockRef = vm.$refs['block' + index]
      const position = (blockRef && blockRef[0].getBoundingClientRect()) || {}
      return Object.assign(position, { index })
    })

    state.slideMainPostion = vm.$refs.slideMain.getBoundingClientRect()
    api.getBoundingPosition()

    isInit === true && api.updatePosition()
  })

const animationLoop =
  ({ state, api, vm }) =>
  (offset, delay, scorllLeft, cb) => {
    const elScrollLeft = vm.$refs.slideMain.scrollLeft
    clearTimeout(state.timer)

    if (elScrollLeft !== state.oldScrollLeft && Math.abs(elScrollLeft - scorllLeft) > Math.abs(offset)) {
      state.timer = setTimeout(() => {
        vm.$refs.slideMain.scrollLeft += offset
        state.oldScrollLeft = elScrollLeft
        api.animationLoop(offset, delay, scorllLeft, cb)
      }, delay)
    } else {
      state.timer = null
      vm.$refs.slideMain.scrollLeft = scorllLeft
      cb && cb()
    }
  }

const animationHandler =
  ({ api, vm, props }) =>
  (allOffset) => {
    const { duration, delay } = props
    const mathFn = allOffset > 0 ? Math.ceil : Math.floor
    const offsetInt = mathFn(allOffset)

    if (!duration) {
      vm.$refs.slideMain.scrollLeft += offsetInt
      api.updatePosition()
      return
    }

    const offset = mathFn(offsetInt / (duration / delay))
    const scorllLeft = vm.$refs.slideMain.scrollLeft + offsetInt

    api.animationLoop(offset, delay, scorllLeft, () => {
      api.updatePosition()
    })
  }

export const api = ['slideBarState', 'leftSlideHandler', 'rightSlideHandler', 'updatePosition']

export const renderless = (props, { reactive, onMounted, onUnmounted, computed }, { vm }) => {
  const state = reactive({
    timer: null,
    oldScrollLeft: -1,
    slideMainPostion: {},
    positionList: [],
    canLeftScroll: computed(() => !props.noArrow && state.boundingIndex.left !== -1),
    canRightScroll: computed(() => !props.noArrow && state.boundingIndex.right !== -1),
    boundingIndex: {
      left: -1,
      right: -1
    }
  })

  const api = {}

  Object.assign(api, {
    slideBarState: state, // 内部 state 重命名，避免使用插槽时 state 覆盖问题
    leftSlideHandler: leftSlideHandler({ state, api }),
    rightSlideHandler: rightSlideHandler({ state, api }),
    animationHandler: animationHandler({ api, vm, props }),
    animationLoop: animationLoop({ state, api, vm }),
    getBoundingPosition: getBoundingPosition({ state, api, vm }),
    updatePosition: updatePosition({ state, vm, props, api })
  })

  onMounted(() => {
    api.updatePosition(true)
    on(window, 'resize', api.updatePosition)
  })

  onUnmounted(() => {
    off(window, 'resize', api.updatePosition)
  })

  return api
}

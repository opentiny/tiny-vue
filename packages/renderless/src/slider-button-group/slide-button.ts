import debounce from '../common/deps/debounce'
import { on, off } from '../common/deps/dom'

const getButtonPosition = ({ sliderState }) => () => {
  const { slideMainPostion, offsetList } = sliderState
  const array = offsetList.slice()
  const length = array.length

  sliderState.boundingIndex = {
    left: -1,
    right: -1
  }

  for (let j = 0; j < length; j++) {
    if (array[j].right > slideMainPostion.right + 2) {
      sliderState.boundingIndex.right = j
      break
    }
  }

  for (let k = length - 1; k >= 0; k--) {
    if (array[k].left < slideMainPostion.left) {
      sliderState.boundingIndex.left = k
      break
    }
  }
}

const arrowLeftHandler = ({ sliderState, api }) => () => {
  const { canLeftScroll, slideMainPostion, offsetList, boundingIndex } = sliderState

  if (!canLeftScroll || sliderState.timer) {
    return
  }

  const leftPosition = boundingIndex.left !== -1 && offsetList[boundingIndex.left]

  if (leftPosition) {
    api.animationEvents(leftPosition.left - slideMainPostion.left)
  }
}

const arrowRightHandler = ({ sliderState, api }) => () => {
  const { canRightScroll, slideMainPostion, offsetList, boundingIndex } = sliderState

  if (!canRightScroll || sliderState.timer) {
    return
  }

  const rightPosition = boundingIndex.right !== -1 && offsetList[boundingIndex.right]

  if (rightPosition) {
    api.animationEvents(rightPosition.right - slideMainPostion.right)
  }
}

const currentPosition = ({ sliderState, vm, props, api }) =>
  debounce(10, (isInit) => {
    sliderState.offsetList = props.data.map((item, i) => {
      const itemsRef = vm.$refs['block' + i]

      const itemsPosition = (itemsRef && itemsRef[0].getBoundingClientRect()) || {}

      return Object.assign(itemsPosition, { i })
    })

    sliderState.slideMainPostion = vm.$refs.slideMain.getBoundingClientRect()

    api.getButtonPosition()

    isInit === true && api.currentPosition()
  })

const loopAnimation = ({ sliderState, api, vm }) => (offset, delay, scorllLeft, cb) => {
  const sliderScrollLeft = vm.$refs.slideMain.scrollLeft
  clearTimeout(sliderState.timer)

  if (sliderScrollLeft !== sliderState.oldScrollLeft && Math.abs(sliderScrollLeft - scorllLeft) > Math.abs(offset)) {
    sliderState.timer = setTimeout(() => {
      vm.$refs.slideMain.scrollLeft += offset
      sliderState.oldScrollLeft = sliderScrollLeft
      api.loopAnimation(offset, delay, scorllLeft, cb)
    }, delay)
  } else {
    sliderState.timer = null

    vm.$refs.slideMain.scrollLeft = scorllLeft
    cb && cb()
  }
}

const animationEvents = ({ api, vm, props }) => (allOffset) => {
  const mathNumber = allOffset > 0 ? Math.ceil : Math.floor
  const offsetInt = mathNumber(allOffset)
  const { duration, delay } = props

  if (!duration) {
    vm.$refs.slideMain.scrollLeft += offsetInt
    api.currentPosition()
    return
  }

  const space = mathNumber(offsetInt / (duration / delay))
  const left = vm.$refs.slideMain.scrollLeft + offsetInt

  api.loopAnimation(space, delay, left, () => {
    api.currentPosition()
  })
}

const clickHandler = (api) => () => {
  api.currentPosition()
}

export const api = ['sliderState', 'arrowLeftHandler', 'arrowRightHandler', 'currentPosition', 'clickHandler']

export const renderless = (props, { reactive, onMounted, onUnmounted, computed, watch }, { vm }) => {
  const sliderState = reactive({
    canLeftScroll: computed(() => !props.noArrow && sliderState.boundingIndex.left !== -1),
    canRightScroll: computed(() => !props.noArrow && sliderState.boundingIndex.right !== -1),
    timer: null,
    offsetList: [],
    slideMainPostion: {},
    oldScrollLeft: -1,
    sliderSpace: props.sliderSpace,
    boundingIndex: {
      left: -1,
      right: -1
    }
  })

  const api = {}

  Object.assign(api, {
    sliderState,
    arrowLeftHandler: arrowLeftHandler({ sliderState, api }),
    arrowRightHandler: arrowRightHandler({ sliderState, api }),
    animationEvents: animationEvents({ api, vm, props }),
    loopAnimation: loopAnimation({ sliderState, api, vm }),
    getButtonPosition: getButtonPosition({ sliderState, api, vm }),
    currentPosition: currentPosition({ sliderState, vm, props, api }),
    clickHandler: clickHandler(api)
  })

  onUnmounted(() => {
    off(window, 'resize', api.currentPosition)
  })

  onMounted(() => {
    api.currentPosition(true)
    on(window, 'resize', api.currentPosition)
  })

  watch(
    () => props.sliderSpace,
    (value, oldValue) => {
      if (value > oldValue) {
        if (props.currentIndex >= sliderState.boundingIndex.right) {
          api.arrowRightHandler()
        }
      }

      if (value < oldValue) {
        if (props.currentIndex <= sliderState.boundingIndex.left) {
          api.arrowLeftHandler()
        }
      }
      api.currentPosition()
    }
  )

  return api
}

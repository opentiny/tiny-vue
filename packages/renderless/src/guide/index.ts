import { xss } from '../common/xss'

export const createShepherd =
  ({ state, props, Shepherd, offset }) =>
  () => {
    const tour = newTour(state, Shepherd, offset)

    state.tour = tour

    const result = {}
    const deepCopy = getItemCopy(props, tour, result)

    if (state.domData && state.domData !== 0) {
      state.domData.forEach((item, i) => {
        let steps = itemStep(item, state, deepCopy, i, Shepherd)

        const step = tour.addStep(steps)
        if (steps.hightBox && steps.hightBox.length != 0) {
          step.on('show', () => {
            steps.hightBox.forEach((item) => {
              document.querySelector(item).classList.add('tiny-guide__z-top')
            })
          })
          step.on('hide', () => {
            steps.hightBox.forEach((item) => {
              document.querySelector(item).classList.remove('tiny-guide__z-top')
            })
          })
          step.on('complete', () => {
            steps.hightBox.forEach((item) => {
              document.querySelector(item).classList.remove('tiny-guide__z-top')
            })
          })
          step.on('cancel', () => {
            steps.hightBox.forEach((item) => {
              document.querySelector(item).classList.remove('tiny-guide__z-top')
            })
          })
          step.on('destroy', () => {
            steps.hightBox.forEach((item) => {
              document.querySelector(item).classList.remove('tiny-guide__z-top')
            })
          })
        }
        callBack(step, item)
      })
    }

    state.tour.start()
    if (props.width || props.height) {
      const dom = document.querySelector('.tiny-guide.shepherd-element') as HTMLElement
      document.documentElement.style.setProperty('--tiny-guide-shepherd-element-size', `${props.width}px`)
      dom.style.height = `${props.height}px`
    }
  }

export const mounted =
  ({ state, api }) =>
  () => {
    if (state.showStep) {
      api.createShepherd()
    }
  }

const getItemCopy = (props, tour, result) => {
  const { domData } = props

  result = domData.map((item) => {
    const itemCopy = JSON.parse(JSON.stringify(item))

    itemCopy.button = item.button.map((e) => {
      const eCopy = JSON.parse(JSON.stringify(e))

      eCopy.action = tour[e.action]
      return eCopy
    })
    return itemCopy
  })
  return result
}

const newTour = (state, Shepherd, offset) => {
  const tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      modalOverlayOpeningPadding: state.modalOverlayOpeningPadding,
      modalOverlayOpeningRadius: state.modalOverlayOpeningRadius,
      arrow: state.arrow,
      highlightClass: state.lightClass,
      classes: 'tiny-guide',
      floatingUIOptions: {
        middleware: [
          offset({
            mainAxis: state.mainAxis,
            crossAxis: state.crossAxis,
            alignmentAxis: state.alignmentAxis
          })
        ]
      }
    }
  })
  return tour
}

const itemStep = (item, state, deepCopy, index, Shepherd) => {
  let steps = {
    text: xss.filterUrl(item.text),
    title: xss.filterUrl(item.title),
    classes: item.classes,
    attachTo: {
      element: item.domElement,
      on: item.popPosition || state.popPosition
    },
    hightBox: item.hightBox || null,
    buttons: deepCopy[index].button,
    cancelIcon: {
      enabled: true
    },
    id: item.id,
    scrollTo: true,
    scrollToHandler(el) {
      if (el && el.getBoundingClientRect().top > document.documentElement.clientHeight) {
        if (document.documentElement.scrollTop > 0) {
          window.scrollTo(0, document.documentElement.scrollTop + el.getBoundingClientRect().top / 2)
        } else {
          window.scrollTo(0, el.getBoundingClientRect().top - document.documentElement.clientHeight / 2)
        }
      }
    },
    when: {
      show() {
        const currentStep = Shepherd.activeTour && Shepherd.activeTour.getCurrentStep()
        const currentStepElement = currentStep && currentStep.getElement()
        const footer = currentStepElement && currentStepElement.querySelector('.shepherd-footer')
        const progress = document.createElement('span')
        progress.classList.add('progress-style')
        progress.innerText = `${Shepherd.activeTour && Shepherd.activeTour.steps.indexOf(currentStep) + 1}/${
          Shepherd.activeTour && Shepherd.activeTour.steps.length
        }`
        footer && footer.insertBefore(progress, currentStepElement.querySelector('.shepherd-button'))
      }
    }
  }
  return steps
}

const callBack = (step, item) => {
  step.on('before-show', () => {
    if (typeof item.beforeShow === 'function') {
      item.beforeShow()
    }
  })
  step.on('show', () => {
    if (typeof item.show === 'function') {
      item.show()
    }
  })
  step.on('before-hide', () => {
    if (typeof item.beforeHide === 'function') {
      item.beforeHide()
    }
  })
  step.on('hide', () => {
    if (typeof item.hide === 'function') {
      item.hide()
    }
  })
  step.on('complete', () => {
    if (typeof item.complete === 'function') {
      item.complete()
    }
  })
  step.on('cancel', () => {
    if (typeof item.cancel === 'function') {
      item.cancel()
    }
  })
  step.on('destroy', () => {
    if (typeof item.destroy === 'function') {
      item.destroy()
    }
  })
}

import { xss } from '@opentiny/utils'

export const createShepherd =
  ({ state, props, Shepherd, offset, designConfig }) =>
  () => {
    const tour = newTour(state, Shepherd, offset, designConfig)

    state.tour = tour

    const result = {}
    const deepCopy = getItemCopy(props, tour, result)

    if (state.domData && state.domData !== 0) {
      state.domData.forEach((item, i) => {
        let steps = itemStep(item, state, deepCopy, i, Shepherd)

        const step = tour.addStep(steps)
        if (steps.hightBox && steps.hightBox.length !== 0) {
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
        callBack(step, item, tour)
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

export const beforeUnmount = (state) => () => {
  state?.tour?.hide()
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

const newTour = (state, Shepherd, offset, designConfig) => {
  const tour = new Shepherd.Tour({
    useModalOverlay: designConfig?.state?.isUseModalOverlay ?? false,
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
        const cancelIcon =
          currentStepElement && currentStepElement.querySelector('.shepherd-header .shepherd-cancel-icon span')
        const cloesIcon = `<svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc fill="none">
            Created with Pixso.
        </desc>
        <defs fill="none" />
        <g>
          <path id="path" d="M12.49 3.3C12.66 3.47 12.66 3.74 12.54 3.92L8.58 7.89L12.49 11.77C12.7 11.96 12.72 12.25 12.54 12.48C12.37 12.67 12.05 12.72 11.83 12.54L7.88 8.58L4 12.49C3.82 12.66 3.5 12.67 3.32 12.5C3.13 12.33 3.08 12.05 3.24 11.83L7.17 7.89L3.29 4C3.12 3.79 3.13 3.48 3.33 3.29C3.5 3.15 3.75 3.13 3.91 3.24L7.88 7.17L11.78 3.3C11.96 3.08 12.29 3.08 12.49 3.3Z" fill-opacity="1.000000" fill-rule="evenodd"/>
        </g>
      </svg>`

        cancelIcon.innerHTML = cloesIcon
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

const callBack = (step, item, tour) => {
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
  tour.on('complete', () => {
    if (typeof item.complete === 'function') {
      item.complete()
    }
  })
  tour.on('cancel', () => {
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

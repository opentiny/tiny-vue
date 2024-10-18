import { xss } from '../common/xss'

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
    useModalOverlay: !designConfig?.state?.isUseModalOverlay,
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
        const cloesIcon = `<?xml version="1.0" encoding="utf-8"?>
          <!-- Generator: Adobe Illustrator 26.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
          <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
          <style type="text/css">
            .st0{fill:none;}
            .st1{fill-rule:evenodd;clip-rule:evenodd;}
          </style>
          <polygon id="Fill-1" class="st0" points="0,16 16,16 16,0 0,0 "/>
          <path id="形状结合" class="st1" d="M4.25,3.4L8,7.15l3.75-3.75c0.23-0.23,0.61-0.23,0.85,0c0.23,0.23,0.23,0.62,0,0.85L8.85,8
            l3.75,3.75c0.23,0.24,0.23,0.62,0,0.85c-0.23,0.23-0.61,0.23-0.85,0L8,8.85L4.25,12.6c-0.23,0.23-0.61,0.23-0.85,0
            c-0.24-0.23-0.24-0.61,0-0.85L7.15,8L3.4,4.25c-0.23-0.23-0.23-0.61,0-0.85C3.64,3.17,4.02,3.17,4.25,3.4z"/>
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

/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import afterLeave from '@opentiny/vue-renderless/common/deps/after-leave'
import PopupManager from '@opentiny/vue-renderless/common/deps/popup-manager'
import { addClass, getStyle, removeClass } from '@opentiny/vue-renderless/common/deps/dom'
import Loading from './index'
import { hooks, directive, createComponent, appProperties } from '@opentiny/vue-common'
import { constants, defaults } from './service'

const insertDom = (parent, el, binding) => {
  if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
    Object.keys(el.maskStyle).forEach((property) => {
      el.mask.style[property] = el.maskStyle[property]
    })

    if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
      addClass(parent, constants.PARENT_RELATIVE_CLS)
    }

    if (binding.modifiers.fullscreen && binding.modifiers.lock) {
      addClass(parent, constants.PARENT_HIDDEN_CLS)
    }

    el.domVisible = true

    parent.appendChild(el.mask)

    hooks.nextTick(() => {
      if (el.instance.hiding) {
        el.instance.$emit('after-leave')
      } else {
        el.instance.state.visible = true
      }
    })

    el.domInserted = true
  } else if (el.domVisible && el.instance.hiding === true) {
    el.instance.state.visible = true
    el.instance.hiding = false
  }
}

const appendLoadingToBody = (el, binding) => {
  const clientRect = el.getBoundingClientRect()
  el.originalPosition = getStyle(document.body, 'position')
  const direction = ['top', 'left']

  direction.forEach((property) => {
    const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft'
    el.maskStyle[property] =
      clientRect[property] +
      document.body[scroll] +
      document.documentElement[scroll] -
      parseInt(getStyle(document.body, `margin-${property}`), 10) +
      'px'
  })
  const size = ['height', 'width']

  size.forEach((property) => {
    el.maskStyle[property] = clientRect[property] + 'px'
  })

  insertDom(document.body, el, binding)
}

const toggleLoading = (el, binding) => {
  if (binding.value) {
    hooks.nextTick(() => {
      if (binding.modifiers.fullscreen) {
        el.originalPosition = getStyle(document.body, 'position')
        el.originalOverflow = getStyle(document.body, 'overflow')
        el.maskStyle.zIndex = PopupManager.nextZIndex()

        addClass(el.mask, constants.IS_FULLSCREEN_CLS)
        insertDom(document.body, el, binding)
      } else {
        removeClass(el.mask, constants.IS_FULLSCREEN_CLS)

        if (binding.modifiers.body) {
          appendLoadingToBody(el, binding)
        } else {
          el.originalPosition = getStyle(el, 'position')

          insertDom(el, el, binding)
        }
      }
    })
  } else {
    afterLeave(
      el.instance,
      () => {
        if (!el.instance.hiding) {
          return
        }

        const target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el

        el.domVisible = false

        removeClass(target, constants.PARENT_RELATIVE_CLS)
        removeClass(target, constants.PARENT_HIDDEN_CLS)

        el.instance.hiding = false
      },
      300,
      true
    )

    el.instance.state.visible = false
    el.instance.hiding = true
  }
}

const vLoading = {
  bind(el, binding, vnode) {
    const vm = vnode.context
    const textExr = el.getAttribute(constants.TEXT_ATTR)
    const spinnerExr = el.getAttribute(constants.TEXT_SPINNER)
    const backgroundExr = el.getAttribute(constants.TEXT_BACKGROUND)
    const customClassExr = el.getAttribute(constants.TEXT_CUSTOM_CLS)

    const mask = createComponent({
      component: Loading,
      propsData: {
        _constants: constants,
        tiny_mode: vm.tiny_mode?.value || appProperties().tiny_mode?.value
      },
      el: document.createElement('div')
    })

    const config = {
      ...defaults,
      text: (vm && vm[textExr]) || textExr,
      spinner: (vm && vm[spinnerExr]) || spinnerExr,
      background: (vm && vm[backgroundExr]) || backgroundExr,
      customClass: (vm && vm[customClassExr]) || customClassExr,
      fullscreen: !!binding.modifiers.fullscreen
    }

    for (const key in config) {
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        mask.state[key] = config[key]
      }
    }

    el.instance = mask
    el.mask = mask.$el
    el.maskStyle = {}

    binding.value && toggleLoading(el, binding)
  },
  update(el, binding) {
    el.instance.setText(el.getAttribute(constants.TEXT_ATTR))

    if (binding.oldValue !== binding.value) {
      toggleLoading(el, binding)
    }
  },
  unbind(el, binding) {
    if (el.domInserted) {
      el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask)
      toggleLoading(el, { value: false, modifiers: binding.modifiers })
    }

    // 手动释放独立组件实例
    if (el.instance) {
      typeof el.instance.$destroy === 'function' && el.instance.$destroy()
      el.instance = null
      el.mask = null
    }
  }
}

export default directive({ vLoading }).vLoading

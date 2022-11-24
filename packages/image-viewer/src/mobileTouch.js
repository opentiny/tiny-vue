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
import { directive } from '@opentiny/vue-common'
import { isObject } from '@opentiny/vue-renderless/common/type'

class TinyTouch {
  constructor(element, tinyBinding, type) {
    const that = this
    that.element = element
    that.tinyBinding = tinyBinding
    that.touchType = type
    that.tinyVueTouches = { x: 0, y: 0 }
    that.tinyVueMoves = true
    that.tinyVueLeave = true
    that.tinyLongTouch = true
    that.tinyVueCallBack = isObject(tinyBinding.value) ? tinyBinding.value.fn : tinyBinding.value
    that.element.addEventListener('touchstart', (e) => {
      that.start(e)
    })
    that.element.addEventListener('touchend', (e) => {
      that.end(e)
    })
    that.element.addEventListener('touchmove', (e) => {
      that.move(e)
    })
  }
  start(e) {
    if (e.touches >= 2) {
      return
    }

    this.tinyVueMoves = true
    this.tinyVueLeave = true
    this.tinyLongTouch = true
    this.tinyVueTouches = {
      x: e.changedTouches[0].pageX,
      y: e.changedTouches[0].pageY
    }

    this.time = setTimeout(() => {
      if (this.tinyVueLeave && this.tinyVueMoves) {
        this.touchType == 'longtap' && this.tinyVueCallBack(this.tinyBinding.value, e)
        this.tinyLongTouch = false
      }
    }, 1000)
  }
  end(e) {
    if (e.touches >= 2) {
      return
    }

    let disX = e.changedTouches[0].pageX - this.tinyVueTouches.x
    let disY = e.changedTouches[0].pageY - this.tinyVueTouches.y

    clearTimeout(this.time)

    if (Math.abs(disX) > 10 || Math.abs(disY) > 100) {
      this.touchType == 'swipe' && this.tinyVueCallBack(this.tinyBinding.value, e)

      if (Math.abs(disX) > Math.abs(disY)) {
        if (disX > 10) {
          this.touchType == 'swiperight' && this.tinyVueCallBack(this.tinyBinding.value, e)
        }

        if (disX < -10) {
          this.touchType == 'swipeleft' && this.tinyVueCallBack(this.tinyBinding.value, e)
        }
      } else {
        if (disY > 10) {
          this.touchType == 'swipedown' && this.tinyVueCallBack(this.tinyBinding.value, e)
        }

        if (disY < -10) {
          this.touchType == 'swipeup' && this.tinyVueCallBack(this.tinyBinding.value, e)
        }
      }
    } else {
      if (this.tinyLongTouch && this.tinyVueMoves) {
        this.touchType == 'tap' && this.tinyVueCallBack(this.tinyBinding.value, e)
        this.tinyVueLeave = false
      }
    }
  }
  move() {
    this.tinyVueMoves = false
  }
}

const mapDirective = () => {
  const deactives = {}
  const names = ['tap', 'swipe', 'swipeleft', 'swiperight', 'swipedown', 'swipeup', 'longtap']

  names.forEach((name) => {
    deactives[name] = directive({
      vTouch: {
        bind(el, tinyBinding) {
          new TinyTouch(el, tinyBinding, name)
        }
      }
    }).vTouch
  })

  return deactives
}

export default mapDirective()

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

import Tooltip from '@opentiny/vue-tooltip'
import { createComponent, h, hooks } from '@opentiny/vue-common'

interface TooltipDirectiveConfig {
  always?: boolean // 是否文字不超长，也触发提示, 默认为 false
  content?: string // 自定义提示内容,  支持字符串或 VNode | VNode[], 不支持嵌套的 html 标签
  effect?: 'dark' | 'light' // tooltip主题，默认为light
}

/** v-auto-tip 绑定值。 支持 falsy值 或 TooltipDirectiveConfig 值， 当传入falsy值时，表示禁用tooltip */
type BoundingValueType = undefined | false | TooltipDirectiveConfig

const globalTooltip = {
  value: null
}

const tooltipContent = hooks.ref('')

// 判断是否超出隐藏
const isEllipsis = (currentTarget) =>
  currentTarget?.textContent && currentTarget.scrollWidth > currentTarget.offsetWidth

const isAlwaysShowTip = (currentTarget) => Boolean(currentTarget?.boundingValue?.always)

const isDarkTheme = (currentTarget) => Boolean(currentTarget?.boundingValue?.effect === 'dark')

const mouseenterHandler = (e) => {
  const currentTarget = e.currentTarget

  // boundingValue是动态的，当它是falsy时，就不进行tooltip
  if (!currentTarget.boundingValue) {
    return
  }
  // always:true 或者 文字超长，则更新全局的tooltip
  if (isAlwaysShowTip(currentTarget) || isEllipsis(currentTarget)) {
    // 全局只创建一个tooltip实例，保证性能
    if (!globalTooltip.value) {
      tooltipContent.value = currentTarget.boundingValue?.content || currentTarget.textContent
      globalTooltip.value = createComponent({
        el: document.createElement('div'),
        propsData: {
          renderContent: () => h('span', { class: 'tiny-directive-tip__content' }, tooltipContent.value),
          placement: 'top',
          effect: isDarkTheme(currentTarget) ? 'dark' : 'light'
        },
        component: Tooltip
      })
    }

    const tooltip = globalTooltip.value
    const popperElm = tooltip.state.popperElm

    tooltipContent.value = currentTarget.boundingValue?.content || currentTarget.textContent
    tooltip.state.referenceElm = currentTarget

    if (popperElm) {
      popperElm.classList.replace(
        `is-${isDarkTheme(currentTarget) ? 'light' : 'dark'}`,
        `is-${isDarkTheme(currentTarget) ? 'dark' : 'light'}`
      )
    }

    tooltip.show()
    tooltip.updatePopper()
  }
}

const mouseleaveHandler = () => {
  globalTooltip.value && globalTooltip.value.hide()
}

// 指令绑定，只有第一次value有值时，才添加事件，之后并不移除事件
const bind = (el, { value }: { value: BoundingValueType }) => {
  // 如果是知己使用指令v-auto-tip，什么都不传也需要添加省略提示功能
  const resultValue = value === undefined ? {} : value

  el.boundingValue = resultValue
  if (resultValue && !el.boundingValue?.listened) {
    el.addEventListener('mouseenter', mouseenterHandler)
    el.addEventListener('mouseleave', mouseleaveHandler)
    el.boundingValue.listened = true
  }
}

const unbind = (el) => {
  if (el.boundingValue?.listened) {
    el.removeEventListener('mouseenter', mouseenterHandler)
    el.removeEventListener('mouseleave', mouseleaveHandler)
  }
}

/** v-auto-tip 指令  
1、基本使用  
v-auto-tip
v-auto-tip="false"  
v-auto-tip="{always:true, content:'123', effect:'dark'}"  

2、动态切换  
v-auto-tip="enabled? {always:true, content:'123', effect:'dark'} : false "  

** 修改enabled, 可以让tooltip动态提示  

3、自定义content  
v-auto-tip="{content:h('span','1234' )}" // 单个vnode  
v-auto-tip="{content:[h('span','1234' ), h('span','5678' ) ]}" // 多vnode  
v-auto-tip="{content:h('span',{innerHTML:'1234<a>5678</a>'})}" // vue3写法：支持动态 html  
v-auto-tip="{content:h('span',{domProps:{ innerHTML:'12345678'}})}" // 如果使用common里的h：支持动态 html  

** content 支持一个有效的字符串或vnode|vnode[]  
 */
export default {
  bind,
  unbind,
  update: bind,
  beforeMount: bind,
  unmounted: unbind,
  updated: bind
}

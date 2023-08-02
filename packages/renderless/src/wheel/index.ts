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

import { cloneDeep } from '../chart-core/deps/utils'

export const created = (api) => () => {
  api.loadPickerData()
  api.loadWheels()
}

/**
 * @description 初始化组装数据
 */

export const loadPickerData = ({ props, state }) => () => {
  state.dataSource = cloneDeep(props.dataSource)
  state.defaultSelectedIndexs = cloneDeep(props.defaultSelectedIndexs)
  const level_1 = state.dataSource
  const level_n = getNextLevel([], state.dataSource, state.defaultSelectedIndexs, 0)
  if (level_n.length === 0) {
    // 单列
    state.pickerData = [level_1]
  } else {
    // 多列
    state.pickerData = [level_1, ...level_n]
  }
}

/**
 * @description 获取第二列至最后一列的滚动数据
 * @param {*} levelItems 多列滚动数据集合，初始为空
 * @param {*} children 当前迭代的元素
 * @param {*} nextIndexs 当前迭代元素的下标
 * @param {*} start 起始迭代的下标
 * @returns 多列滚动数据集合
 */

export const getNextLevel = (levelItems, children, nextIndexs, start) => {
  let levelItem = children[nextIndexs[start]]?.children ?? []
  if (start !== nextIndexs.length - 1) {
    levelItems.push(levelItem)
    return getNextLevel(levelItems, levelItem, nextIndexs, ++start)
  } else {
    return levelItems
  }
}

/**
 * @description 滚动后重新组装数据
 * @param {*} newIndexs 当前迭代元素的下标集合
 * @param {*} oldIndexs 上次迭代元素的下标集合
 * @returns 组装后的数据
 */

export const wheelChanged = ({ api, state }) => (newIndexs, oldIndexs) => {
  if (newIndexs.length > 1) {
    // 多列
    newIndexs.forEach((ii, ri) => {
      if (newIndexs[ri] !== oldIndexs[ri] && ri !== newIndexs.length - 1) {
        const children = getChildren(state.dataSource, newIndexs, 0, ri)
        state.pickerData.splice(ri + 1, 1, children)
      }
    })
  }
  api.wheelsTo(newIndexs)
  api.changeWheelItemStyle(state.pickerData, newIndexs)
}
/**
 * @description 获取当前滚动元素的子元素
 * @param {*} levelItems 当前元素的集合
 * @param {*} newIndexs 当前迭代元素的下标集合
 * @param {*} start 起始迭代的下标，默认为0，后续每次增加1
 * @param {*} maxLoop 最大迭代深度（为滚动列的下标）
 * @returns 当前滚动元素的子元素
 */

export const getChildren = (levelItems, newIndexs, start, maxLoop) => {
  let levelItem = levelItems[newIndexs[start]]?.children ?? []
  if (start !== maxLoop) {
    return getChildren(levelItem, newIndexs, ++start, maxLoop)
  } else {
    return levelItem
  }
}

export const wheelsTo = ({ api, state, nextTick }) => (indexs) => {
  nextTick(() => {
    state.wheels.forEach((wheel, i) => {
      wheel.wheelTo(indexs[i], 0)
      api.refreshWheel(wheel)
    })
  })
}

export const refreshWheel = (nextTick) => (wheel) => {
  nextTick(() => {
    wheel.refresh()
  })
}

export const loadWheels = ({ api, props, state, nextTick, refs }) => () => {
  if (state.wheels.length === 0) {
    nextTick(() => {
      state.wheels = []
      const { wheelWrapper } = refs
      if (props.hasFooter) {
        for (let i = 0; i < state.pickerData.length; i++) {
          api.createWheelHasFooter(wheelWrapper, i)
        }
      } else {
        api.createWheelNoFooter(wheelWrapper)
      }
    })
  }
}

export const createWheelHasFooter = ({ api, state, emit, BScroll }) => (wheelWrapper, i) => {
  const wheels = state.wheels
  if (!wheels[i]) {
    wheels[i] = state.wheels[i] = new BScroll(wheelWrapper.children[i], {
      wheel: {
        selectedIndex: state.defaultSelectedIndexs[i],
        wheelWrapperClass: 'wheel-scroll',
        wheelItemClass: 'wheel-item'
      },
      probeType: 3
    })
    state.prevSelectedIndexs = state.defaultSelectedIndexs
    wheels[i].on('wheelIndexChanged', () => {
      const currentSelectedIndex = wheels[i].getSelectedIndex()

      // 从滚动的当前列往后，默认都滚动到每列的首个元素
      let currentSelectedIndexs = [
        ...state.prevSelectedIndexs.slice(0, i),
        currentSelectedIndex,
        ...new Array(state.defaultSelectedIndexs.length - i - 1).fill(0)
      ]
      api.wheelChanged(currentSelectedIndexs, state.prevSelectedIndexs)
      state.prevSelectedIndexs = currentSelectedIndexs
      emit('change', currentSelectedIndexs)
    })
    api.wheelsTo(state.defaultSelectedIndexs)
    api.changeWheelItemStyle(state.pickerData, state.defaultSelectedIndexs)
  } else {
    wheels[i].refresh()
  }
  return wheels[i]
}

export const createWheelNoFooter = ({ api, state, BScroll }) => (wheelWrapper) => {
  const wheels = state.wheels
  if (!wheels[0]) {
    wheels[0] = state.wheels[0] = new BScroll(wheelWrapper.children[0], {
      probeType: 3,
      click: true
    })
    api.changeWheelItemStyle(state.pickerData, state.defaultSelectedIndexs)
    api.refreshWheel(wheels[0])
  } else {
    wheels[0].refresh()
  }
  return wheels[0]
}

export const changeWheelItemStyle = (state) => (pickerData, currentSelectedIndexs) => {
  pickerData.forEach((item, index) => {
    state.pickerData[index] = item.map((rItem, i) => {
      rItem.selected = i === currentSelectedIndexs[index]
      return rItem
    })
  })
}

export const dealWheels = (state) => () => {
  state.wheels.forEach(wheel => {
    wheel.destroy()
  })
  state.wheels = []
  state.pickerData = []
  state.prevSelectedIndexs = []
  state.defaultSelectedIndexs = []
}

export const clickWheelItem = ({ api, state, emit }) => (index) => {
  api.changeWheelItemStyle(state.pickerData, [index])
  const rItem = state.pickerData[0][index]
  if (state.defaultSelectedIndexs[0] !== index) {
    const selectedLabel = rItem?.label
    emit('clickWheelItem', [index], selectedLabel, rItem)
  } else {
    // 反选
    emit('clickWheelItem', [], '', [])
  }
}

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
// 具体操作方法和工具函数
// 虚拟滚动逻辑
export const handleScroll =
  ({ props, state, virtualScroll, nextTick, ...rest }) =>
  async (event) => {
    // console.log(event, virtualScroll.value, rest, 'hvhvghvghv')
    if (!virtualScroll.value) return
    const scrollTop = virtualScroll.value.scrollTop // 获取可视页面的当前滚动距离
    const viewNum = Math.ceil(props.viewHeight / props.itemHeight) // 向上取整得到可视页面显示的条数
    const viewStart = ~~(scrollTop / props.itemHeight) // 向下取整得到滚动区域的显示的第一条的索引
    // 计算要显示的范围，使用Diff算法来更新数据范围
    const start = viewStart - viewNum > 0 ? viewStart - viewNum : 0 // 上一屏第一条下标
    const end = viewStart + 2 * viewNum < state.data.length ? viewStart + 2 * viewNum : state.data.length // 下一屏最后一个数据的索引（以免超出范围）
    state.visibleData = state.data.slice(start, end) // 间接利用Diff算法来算出上下屏的显示范围，将全列表数据按照范围给到显示数据中
    state.translate = start * props.itemHeight // 实现平滑过渡，先渲染上一屏的内容，然后再渲染显示区域的内容
    // console.log(state.visibleData, state.translate)
    await nextTick()
  }

export const initUser =
  ({ api, props, state }) =>
  (value) => {
    if (!value) {
      state.user = value
      return
    }

    api.getUsers(value).then((info) => {
      // 按value排序
      info.sort((a, b) => {
        return value.indexOf(a[state.valueField] + '') > value.indexOf(b[state.valueField] + '') ? 1 : -1
      })

      const list = info.map((user) => {
        return user[state.valueField]
      })

      state.options = info
      state.user = props.multiple ? list : list[0]
      props.cache && api.cacheUser(info)
    })
  }

export const showCard =
  ({ api, service, state }) =>
  (e, user) => {
    e.preventDefault()
    state.spinner = true
    state.expand = false

    service.fetchUser(user.employeeNumber).then((data) => {
      state.data = data
      state.spinner = false
    })

    api.getUserImageUrl(user.employeeNumber).then((url) => {
      state.imgUrl = url
    })
  }

export const showDetail = (state) => () => {
  state.expand = !state.expand
}

export const computedTextField =
  ({ service, props }) =>
  () =>
    props.textField || service.textField || 'userCN'

export const computedValueField =
  ({ service, props }) =>
  () =>
    props.valueField || service.valueField || 'userId'

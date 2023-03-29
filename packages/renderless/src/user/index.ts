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

import debounce from '@opentiny/vue-renderless/common/deps/debounce'
import { toDateStr } from '@opentiny/vue-renderless/common/date'
import { toJsonStr } from '@opentiny/vue-renderless/common/object'
import { toJson } from '@opentiny/vue-renderless/common/string'
import { log } from '@opentiny/vue-renderless/common'

const request = {
  timmer: null,
  group: {},
  requests: [],
  cache: {},
  batch: 0,
  addRequest({ param, cb }) {
    this.requests.push({ param, cb, result: [] })
    const { valueField, queryIds } = param

    if (!this.group[valueField]) {
      this.group[valueField] = []
    }

    queryIds.forEach((id) => {
      if (!~this.group[valueField].indexOf(id)) {
        !this.group[valueField].push(id)
      }
    })
  },
  removeRequest(item) {
    const idx = this.requests.indexOf(item)
    this.requests.splice(idx, 1)
  },
  clearRequest() {
    this.timmer = null
    this.group = {}
    this.requests = []
    this.cache = {}
    this.batch = 0
  },
  getParams() {
    const args = []

    for (let key in this.group) {
      if (Object.prototype.hasOwnProperty.call(this.group, key)) {
        const all = this.group[key]
        const items = this.splitArr(all, this.batch)

        if (key === 'userId') {
          args.push(...items.map((item) => item.join(',')))
        } else {
          args.push(
            ...items.map((item) => ({
              valueField: key,
              valueSplit: item.valueSplit,
              [key]: item.join(',')
            }))
          )
        }
      }
    }

    return args
  },
  setCache(data, valueField) {
    const me = this

    if (valueField && !this.group[valueField]) {
      this.group[valueField] = []
    }

    data.forEach((item) => {
      for (let key in this.group) {
        if (Object.prototype.hasOwnProperty.call(this.group, key)) {
          if (!me.cache[key]) {
            me.cache[key] = {}
          }
          me.cache[key][item[key]] = item
        }
      }
    })
  },
  singleRequest(param, api, cb) {
    const { queryIds, valueField, valueSplit } = param
    const queryStr = queryIds.join(',')
    const params = valueField === 'userId' ? queryStr : { valueField, valueSplit, [valueField]: queryStr }

    api
      .fetchW3Accounts(params)
      .then((data) => {
        cb(data)
      })
      .catch((e) => {
        cb({ error: e })
      })
  },
  batchRequest(api) {
    const me = this
    const reqParamsSeq = me.getParams()
    let reqLen = reqParamsSeq.length

    reqParamsSeq.forEach((params) => {
      api
        .fetchW3Accounts(params)
        .then((data) => {
          me.setCache(data) // 将所有数据入库
          me.requests.slice().forEach((reqItem) => {
            // 每批次查询后遍历一次所有的request
            const { param, cb } = reqItem
            const { queryIds, valueField } = param

            queryIds.forEach((id) => {
              const user = me.cache[valueField] && me.cache[valueField][id]
              user && !reqItem.result.includes(user) && reqItem.result.push(user)
            })

            if (reqItem.result.length === queryIds.length) {
              me.removeRequest(reqItem)
              cb(reqItem.result)
            }
          })
        })
        .finally(() => {
          reqLen--

          const errors = []

          if (!reqLen) {
            // 所有批次查询完成后触发未完成的回调并检查失败项
            this.requests.forEach(({ cb, result, param }) => {
              const { queryIds, valueField } = param

              cb(result)
              queryIds.forEach((id) => {
                if (!this.cache[valueField] || !this.cache[valueField][id]) {
                  errors.push(id)
                }
              })
            })
            errors.length && log(`user [${errors.join(',')}] not found`, 'warn')
            this.clearRequest()
          }
        })
    })
  },
  setBatch(batch) {
    if (typeof batch !== 'number' || batch <= 0) {
      batch = 50
    }

    if (batch <= 500 && this.batch < batch) {
      this.batch = batch
    }
  },
  getusers({ param, api, batch, cb }) {
    if (batch !== false) {
      this.setBatch(batch)
      clearTimeout(this.timmer)
      this.addRequest({ param, cb })
      this.timmer = setTimeout(() => this.batchRequest(api), 100)
    } else {
      this.singleRequest(param, api, cb)
    }
  },
  splitArr(arr, num) {
    let result = []

    if (arr.length && num > 0) {
      const just = arr.length % num === 0
      const part = Math.floor(arr.length / num)
      const len = just ? part : part + 1

      for (let i = 0; i < len; i++) {
        result.push(arr.slice(i * num, (i + 1) * num))
      }
    }

    return result
  }
}

export const suggestUser = (api) => (query) =>
  new Promise((resolve, reject) => {
    api
      .fetchSuggestUser(query)
      .then((users) => {
        if (users.length) {
          resolve(users)
        } else {
          resolve({ invalid: query })
        }
      })
      .catch(reject)
  })

export const updateOptions = ({ props, state, nextTick }) => (usersList) => {
  const { valueField, textField, noDataText } = props
  const values = [].concat(state.user || [])
  const options = [].concat(state.selected)
  const hides = []
  let count = 0

  usersList.forEach((users) => {
    users.forEach((user) => {
      const u = user[valueField]

      user._show = true
      count++

      if (!~values.indexOf(u)) {
        values.push(u)
        options.push(user)
      } else {
        hides.push(u)
      }
    })
  })

  state.selected.forEach((us) => {
    us._show = !!~hides.indexOf(us[valueField])
  })

  !count && !noDataText && (state.visible = false)

  if (!props.sortByFetchData) {
    options.sort((a, b) => (a[textField] > b[textField] ? 1 : -1))
  }

  state.options = options

  return nextTick()
}

export const autoSelect = ({ props, state, nextTick }) => (usersList) => {
  if (!usersList.length) {
    return nextTick()
  }

  const values = props.multiple ? [].concat(state.user) : []

  usersList.forEach((list) => {
    if (list.length === 1) {
      const value = list[0][props.valueField]

      !~values.indexOf(value) && values.push(value)

      if (props.autoClose) {
        state.visible = false
      }
    }
  })

  if (!values.length) {
    return nextTick()
  }

  if (props.multiple) {
    state.user.length !== values.length && (state.user = values)
  } else {
    state.user = values[0]
  }

  return nextTick()
}

export const searchMethod = ({ api, props, state, emit }) =>
  debounce(props.delay, (query) => {
    if (query && query.length >= props.suggestLength) {
      state.loading = true
      state.visible = true

      const { multiple } = props
      let suggests

      if (multiple) {
        suggests = query
          .split(new RegExp(`[${props.textSplit.split('').join('\\')}]`))
          .filter((q) => q && q.length >= props.suggestLength)
          .map((q) => api.suggestUser(q.trim()))
      } else {
        suggests = [api.suggestUser(query.trim())]
      }

      Promise.all(suggests).then((users) => {
        const failList = []
        const usersList = []

        users.forEach((item) => {
          if (item.invalid) {
            failList.push(item.invalid)
          } else {
            usersList.push(item)
          }
        })

        if (failList.length) {
          emit('error', failList)
        }

        api.updateOptions(usersList).then(() => {
          api.autoSelect(usersList).then(() => {
            api.userChange(state.user)
            state.loading = false
          })
        })
      })
    }
  })

export const setSelected = ({ api, props, state }) => (value) => {
  const values = Array.isArray(value) ? value.map((v) => String(v).toLocaleLowerCase()) : String(value).toLocaleLowerCase().split(props.valueSplit)

  state.selected = state.options.filter((user) => ~values.indexOf(String(user[props.valueField]).toLocaleLowerCase()))

  props.cache && api.cacheUser(state.selected)
}

export const userChange = ({ api, emit, props, state }) => (value) => {
  const { multiple } = props

  let newVal = multiple && Array.isArray(value) ? value.join(props.valueSplit) : String(value || '')

  api.setSelected(newVal)

  if (typeof state.lastValue === 'string' && state.lastValue !== null && state.lastValue.toLocaleLowerCase() !== newVal.toLocaleLowerCase()) {
    emit('update:modelValue', newVal)
    emit('change', newVal, state.selected)
  }

  state.lastValue = newVal
}

const syncCacheIds = (ids, props, queryIds, cacheData) => {
  const { valueField, cacheFields, cacheKey } = props
  const cacheUsers = toJson(window.localStorage.getItem(cacheKey)) || {}
  ids.forEach((id) => {
    // 如果存在cache 但是cache中不存在自定义cacheFields的字段需要优化 TODO
    if (cacheUsers[id]) {
      const cacheUser = cacheUsers[id]

      const textField = props.textField === 'userCN' || props.textField === 'userId' || props.textField === 'dept' ? '' : props.textField

      if (textField !== '' && !cacheUser.a) {
        window.localStorage.removeItem(cacheKey)
        queryIds.push(id)
      }

      const user = {
        userId: cacheUser.i,
        userCN: cacheUser.u,
        dept: cacheUser.d,
        employeeNumber: cacheUser.e,
        [textField]: cacheUser.a
      }

      cacheFields.forEach((field) => {
        user[field] = cacheUser[field]
      })

      cacheData.push(
        Object.assign(user, {
          [valueField]: cacheUsers[id].p || cacheUsers[id].i
        })
      )
    } else {
      queryIds.push(id)
    }
  })
}

export const getUsers = ({ api, props, state }) => (value) => {
  const { valueField, cache } = props
  const ids = Array.isArray(value) ? value : value.split(props.valueSplit)
  const cacheData = []
  const queryIds = cache ? [] : ids

  if (cache) {
    syncCacheIds(ids, props, queryIds, cacheData)
    request.setCache(cacheData, valueField)

    if (!queryIds.length) {
      return Promise.resolve(cacheData)
    }
  }

  const param = { valueSplit: props.valueSplit, valueField, queryIds }

  return new Promise((resolve, reject) => {
    const cb = (data) => {
      if (data.error) {
        reject(data.error)
      } else {
        resolve(data.concat(cacheData))
      }
    }

    request.getusers({ param, api, batch: state.batch, cb })
  })
}

export const updateCache = ({ props, state }) => () => {
  const users = toJson(window.localStorage.getItem(props.cacheKey)) || {}
  const currDate = toDateStr(new Date(), 'yyyyMMdd')

  if (currDate !== users.t) {
    users.t = currDate

    for (let u in users) {
      if (u !== 't') {
        let user = users[u]

        if (user.r > 0) {
          user.r = 0
        } else {
          user.r--
        }
      }
    }
  }

  state.cache = users
}

export const saveCache = ({ props }) => (cache) => {
  window.localStorage.setItem(props.cacheKey, toJsonStr(cache))
}

export const cacheUser = ({ api, props, service }) => (users) => {
  const { valueField, cacheKey } = props
  const cacheUser = toJson(window.localStorage.getItem(cacheKey)) || {}
  const cacheFields = service.userCache
  let user

  for (let i = 0; i < users.length; i++) {
    const u = users[i]
    const key = u[valueField]

    user = cacheUser[key]

    if (user) {
      user.r++
    } else {
      const us = {
        p: u[valueField], // 增加一个主键
        i: u[cacheFields.userId],
        u: u[cacheFields.userCN],
        d: u[cacheFields.dept],
        e: u[cacheFields.eno],
        a: ~['userCN', 'userId', 'dept'].indexOf(props.textField) ? null : u[props.textField],
        r: 0
      }

      props.cacheFields.forEach((field) => {
        us[field] = u[field]
      })

      cacheUser[key] = us
    }
  }
  try {
    api.saveCache(cacheUser)
  } catch (e) {
    const sortUsers = Object.keys(cacheUser).sort((a, b) => (cacheUser[a].r < cacheUser[b].r ? 1 : -1))

    const cutUser = sortUsers.splice(0, sortUsers.length / 2)
    const newCache = {}

    for (let i in cutUser) {
      if (Object.prototype.hasOwnProperty.call(cutUser, i)) {
        newCache[cutUser[i]] = cacheUser[cutUser[i]]
      }
    }

    api.saveCache(newCache)
  }
}

export const useSortable = ({ api, props, state, refs }) => () => {
  const selectDom = refs.select.$el

  if (props.sortable && props.multiple && !state.sortable) {
    const tagsDom = selectDom.querySelector('.tiny-select__tags>span')

    state.sortable = props.sortable.create(tagsDom, {
      handle: '.tiny-tag',
      ghostClass: 'tiny-user__ghost',
      onEnd: ({ newIndex, oldIndex }) => {
        let currUser = state.user.splice(oldIndex, 1)[0]
        state.user.splice(newIndex, 0, currUser)
        api.userChange(state.user)
      }
    })
  }
}

export const visibleChange = ({ state, emit }) => (show) => {
  if (!show) {
    state.visible = show
    state.options = state.selected.map((user) => Object.assign(user, { _show: true }))
  }

  emit('visible-change', show)
}

export const initUser = ({ api, props, state }) => (value) => {
  if (value === state.lastValue) {
    return
  }

  state.user = !props.multiple ? '' : []

  if (typeof value === 'number') {
    value = String(value)
  }

  if (!value) {
    state.options = []
    state.selected = []
    api.userChange(value)
    return
  }

  value &&
    api.getUsers(value).then((info) => {
      // 按value排序
      info.sort((a, b) => (value.indexOf(String(a[props.valueField])) > value.indexOf(String(b[props.valueField])) ? 1 : -1))

      const list = info.map((user) => {
        user._show = true
        return user[props.valueField]
      })

      state.options = info
      state.user = props.multiple ? list : list[0]

      api.userChange(value)
    })
}
export const handleBlur = ({ constants, dispatch, state }) => () => {
  dispatch(constants.COMPONENT_NAME.FormItem, constants.EVENT_NAME.FormBlur, state.user)
}

export const initService = ({ props, service }) => {
  const noopFnCreator = (propName) => () => {
    if (propName) {
      return Promise.reject(new Error(`[TINY Error][User]] Prop ${propName} is not configured`))
    } else {
      return Promise.reject(new Error('[TINY Error][User]] This component depends on @opentiny/vue-service'))
    }
  }

  const $service = service || {}
  const { common = {}, setting = {}, base = {} } = $service
  const { fetchUser, fetchW3Accounts, fetchSuggestUser, fetchUserByUserId } = $service

  const { options = {} } = setting
  const { UserCache = { uuid: 'uuid', userId: 'userId', userCN: 'userCN', dept: 'dept', eno: 'employeeNumber' }, User = { batch: 50 } } = options

  return {
    fetchUser: props.fetchUser || fetchUser || noopFnCreator('fetchUser'),
    fetchW3Accounts: props.fetchW3Accounts || fetchW3Accounts || noopFnCreator('fetchW3Accounts'),
    fetchSuggestUser: props.fetchSuggestUser || fetchSuggestUser || noopFnCreator('fetchSuggestUser'),
    fetchUserByUserId: props.fetchUserByUserId || fetchUserByUserId || noopFnCreator('fetchUserByUserId'),
    getUserImageUrl: props.getUserImageUrl || common.getUserImageUrl || noopFnCreator('getUserImageUrl'),
    getLangData: props.getLangData || base.getLangData || noopFnCreator('getLangData'),
    getUserInfo: props.getUserInfo || base.getUserInfo || noopFnCreator('getUserInfo'),
    userCache: props.UserCache || UserCache,
    batch: User.batch
  }
}

export const filter = ({ props, state }) => () => {
  if (props.multiple && props.hideSelected) {
    const selectedUsers = state.user.map((value) => (typeof value === 'string' ? value.toLocaleLowerCase() : value))

    return state.options.filter(
      (user) => !~selectedUsers.indexOf(typeof user[props.valueField] === 'string' ? user[props.valueField].toLocaleLowerCase() : user[props.valueField])
    )
  }

  return state.options
}

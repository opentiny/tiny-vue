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

let ws = null
const url = 'ws://localhost'
const ports = [27197, 27198, 27199]
let index = 0
let connected
let pollingInterval = 1000
let timeout = 30000
let cid = 0
let callbacks = {}
let pollingTimer
let userStatus = {}
const heartbeatInterval = 20 * 1000
let heartbeatTimer = null
let connectTimer = null
let apiTimers = {}
let events = {}
let out = {}

let error = () => undefined
let ready = () => undefined

const clearCallback = function (cid) {
  clearTimeout(apiTimers[cid])

  delete callbacks[cid]
  delete apiTimers[cid]
}

const onopen = function () {
  connectTimer = setTimeout(() => {
    ws.close()
  }, 5000)
}

const send = function (argv, cb) {
  let id = cid++
  id = String(id)
  argv.cid = id

  if (!connected) {
    cb && setTimeout(cb, 0, { ok: false, message: 'eSpace is not logged in.' })
    return
  }

  if (typeof cb === 'function') {
    callbacks[id] = cb

    apiTimers[id] = setTimeout(() => {
      cb({ ok: false, message: 'time out' })
      clearCallback(id)
    }, timeout)
  }

  ws.send(JSON.stringify(argv))
}

const sendHeartbeat = function () {
  heartbeatTimer = setTimeout(() => {
    if (connected) {
      send(
        {
          type: 'heartbeat'
        },
        () => {
          sendHeartbeat()
        }
      )
    } else {
      clearTimeout(heartbeatTimer)
    }
  }, heartbeatInterval)
}

const connectionSucceeded = function (data) {
  connected = true

  sendHeartbeat()
  clearTimeout(pollingTimer)
  clearTimeout(connectTimer)
  ready(data)
}

const onmessage = function (evt) {
  let data = evt.data
  if (typeof data !== 'string') {
    return
  }

  data = data.replace(/^\d+/, '')
  if (!data) {
    return
  }

  try {
    data = JSON.parse(data)
  } catch (e) {
    return !e
  }

  if (connected) {
    let event = events[data.type]

    if (event) {
      return event(data.data)
    }

    let cid = data.cid
    let cb = callbacks[cid]

    if (cb) {
      if (data.ok) {
        cb(null, data.data)
      } else {
        cb({ ok: data.ok })
      }

      clearCallback(cid)
    }
  } else {
    if (data.type === 'eSpace-ctrl-connection-success') {
      connectionSucceeded(data.data)
    } else {
      ws.close()
    }
  }
}

const bindEvents = function () {
  ws.onopen = onopen
  ws.onclose = onclose
  ws.onmessage = onmessage
}

const connect = function (interval) {
  pollingTimer = setTimeout(() => {
    if (index >= ports.length) {
      index = 0
    }

    ws = new WebSocket(url + ':' + ports[index++])

    bindEvents()
  }, interval || 0)
}

const onclose = function () {
  if (connected || typeof connected === 'undefined') {
    connected = false
    error()
  }

  connect(pollingInterval)
}

out.init = function (conf) {
  if (conf) {
    timeout = conf.timeout || 30000
    pollingInterval = conf.pollingInterval || 0
  }

  connect()
}

out.ready = function (cb) {
  ready = cb
}

out.error = function (cb) {
  error = cb
}

const attrToArr = function (name, total, object) {
  let result = []

  for (let i = 0; i < total; i++) {
    let attrName = name
    if (i) {
      attrName += i
    }

    let attrVal = object[attrName]
    if (attrVal) {
      result.push(attrVal)
    }
  }

  return result
}

/**
 * 事件绑定
 * @param {String} event 事件名
 * @param {Function} hander 事件处理函数
 *
 * example:
 * out.on('user-status-change', function (data){
 *   // do something
 * })
 */
out.on = function (event, hander) {
  events[event] = hander
}

/**
 * 获取用户信息
 * @param {String|Array} accounts 单个帐号或者帐号数组
 * @param {Function} cb 回调函数
 */
out.getUserInfo = function (account, cb) {
  const fn = function (err, data) {
    if (err) {
      return cb(err)
    }

    const formatInfo = function (user) {
      return {
        account: user.account,
        name: user.name,
        mobile: attrToArr('mobile', 6, user),
        'office_phone': attrToArr('office_phone', 6, user),
        'home_phone': user.home_phone,
        'ip_phone': user.ip_phone,
        'other_phone': user.other_phone
      }
    }

    if (data.account) {
      cb(null, formatInfo(data))
    } else {
      let result = {}

      for (let p in data) {
        if (Object.prototype.hasOwnProperty.call(data, p)) {
          let user = data[p]
          result[p] = user ? formatInfo(user) : user
        }
      }
      cb(null, result)
    }
  }

  send(
    {
      type: 'get-user-info',
      param: account
    },
    fn
  )
}

/**
 * 订阅用户状态
 * @param {String|Array} accounts 单个帐号或者帐号数组
 * @param {Function} cb 回调函数
 */
out.subscribeUserStatus = function (accounts, cb) {
  if (Array.isArray(accounts)) {
    accounts.forEach((account) => {
      userStatus[account] = true
    })
  }

  send(
    {
      type: 'subscribe-user-status',
      param: accounts
    },
    cb
  )
}

/**
 * 拉起单人语音
 * @param {String} account 帐号
 * @param {String} num 可选，电话号码或voip
 * @param {Function} cb 回调函数
 */
out.eSpaceCall = function (account, num, cb) {
  send(
    {
      type: 'espace-call',
      param: {
        account,
        number: num
      }
    },
    cb
  )
}

/**
 * 拉起单人语音
 * @param {String} account 帐号
 * @param {Function} cb 回调函数
 */
out.eSpaceCallByAccount = function (account, cb) {
  send(
    {
      type: 'espace-call',
      param: {
        account
      }
    },
    cb
  )
}

/**
 * 拉起单人语音
 * @param {String} number 电话号码
 * @param {Function} cb 回调函数
 */
out.eSpaceCallByNumber = function (number, cb) {
  send(
    {
      type: 'espace-call',
      param: {
        number
      }
    },
    cb
  )
}

/**
 * 拉起单聊IM窗口
 * @param {String} account 帐号
 * @param {Function} cb 回调函数
 */
out.showImDialog = function (account, cb) {
  send(
    {
      type: 'show-espace-im-dialog',
      param: account
    },
    cb
  )
}

/**
 * 拉起群组IM窗口
 * @param {String} gid 群组id
 * @param {Function} cb 回调函数
 */
out.showGroupDialog = function (gid, cb) {
  send(
    {
      type: 'show-espace-im-group-dialog',
      param: gid
    },
    cb
  )
}

/**
 * 添加到联系人列表
 * @param {String} account 帐号
 * @param {Function} cb 回调函数
 */
out.addContactList = function (account, cb) {
  send(
    {
      type: 'add-contact-list',
      param: account
    },
    cb
  )
}

if (!window.WebSocket) {
  const notFn = function () {
    return undefined
  }

  for (let api in out) {
    if (Object.prototype.hasOwnProperty.call(out, api)) {
      let fn = out[api]

      if (typeof fn === 'function') {
        out[api] = notFn
      }
    }
  }
}

let initialized = false

export function init() {
  if (!initialized) {
    localStorage.setItem('eSpaceCtrl_initialized', 0)
    out.init({ timeout: 3000, pollingInterval: 1000 })
    out.ready(() => {
      localStorage.setItem('eSpaceCtrl_initialized', 1)
    })
    out.error(() => {
      localStorage.setItem('eSpaceCtrl_initialized', 0)
    })

    initialized = true
  }

  return out
}

export default out

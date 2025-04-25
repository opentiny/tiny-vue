import Modal from '@opentiny/vue-modal'
import { extend } from '@opentiny/utils'
import { $prefix } from '@opentiny/vue-common'
import { version } from './package.json'
import type { ComponentPublicInstance } from '@opentiny/vue-common'

// 定义 Message 组件类型
interface MessageComponent extends ComponentPublicInstance {
  name: string
  version: string
  install: (Vue: any) => void
  componentName: string
}

// 定义 Vue 类型
interface VueConstructor {
  component: (name: string, component: any) => void
}

const Message = extend(true, { props: { componentName: { type: String, default: 'Message' } } }, Modal, {
  name: $prefix + 'Message'
}) as MessageComponent

/* istanbul ignore next */
Message.install = function (Vue: VueConstructor) {
  Vue.component(Message.name, Message)
}

Message.version = version

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Message.install(window.Vue)
  }
}

export default Message

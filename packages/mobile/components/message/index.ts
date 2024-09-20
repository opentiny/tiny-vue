import Modal from '@opentiny/vue-modal'
import { extend } from '@opentiny/vue-renderless/common/object'
import { $prefix } from '@opentiny/vue-common'
import { version } from './package.json'

const Message = extend(true, { props: { componentName: { type: String, default: 'Message' } } }, Modal, {
  name: $prefix + 'Message'
})

/* istanbul ignore next */
Message.install = function (Vue) {
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

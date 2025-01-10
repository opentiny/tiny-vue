import Modal from '../modal'
import { extend } from '@mobile-root/utils/object'
import { $prefix } from '@mobile-root/common'

const Message = extend(true, { props: { componentName: { type: String, default: 'Message' } } }, Modal, {
  name: $prefix + 'Message'
})

/* istanbul ignore next */
Message.install = function (Vue) {
  Vue.component(Message.name, Message)
}

export default Message

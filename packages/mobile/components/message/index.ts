import Modal from '../modal'
import { extend } from '@opentiny/utils/object'
import { $prefix } from '../../../vue-common'

const Message = extend(true, { props: { componentName: { type: String, default: 'Message' } } }, Modal, {
  name: $prefix + 'Message'
})

/* istanbul ignore next */
Message.install = function (Vue) {
  Vue.component(Message.name, Message)
}

export default Message

<script lang="jsx">
import { $prefix, setup, h } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/notify/vue'
import { iconClose } from '@opentiny/vue-icon'

export default {
  name: $prefix + 'Notify',
  props: {
    beforeClose: Function,
    closeIcon: {
      type: Object,
      default: () => iconClose()
    },
    customClass: [String, Object],
    duration: {
      type: Number,
      default: 4500
    },
    message: [String, Function],
    onClose: Function,
    position: {
      type: String,
      default: 'bottom-right'
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    statusIcon: Object,
    title: [String, Function],
    type: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    let { clearTimer, click, close, closeIcon, message, showClose } = this
    let { showIcon, startTimer, state, statusIcon, title, type } = this
    let {
      closeVNode = null,
      iconVNode = null,
      notifyContent = null,
      notifyTitle = null
    } = {}
    // Type Icon
    if (showIcon && statusIcon) {
      iconVNode = (
        <div class="tiny-notify__icon-zone">
          <span class="tiny-notify__icon-status">
            <statusIcon class="tiny-svg-size"></statusIcon>
          </span>
        </div>
      )
    }
    // Close Button
    if (showClose) {
      closeVNode = (
        <div class="tiny-notify__close-zone">
          <span class="tiny-notify__icon-close">
            <closeIcon class="tiny-svg-size" onClick={close}></closeIcon>
          </span>
        </div>
      )
    }
    // Msg Title
    if (typeof title === 'string') {
      notifyTitle = h('div', { class: 'tiny-notify__title' }, title)
    } else if (typeof title === 'function') {
      notifyTitle = title(h, { vm: this, titleClass: 'tiny-notify__title' })
    }
    // Msg Content
    if (typeof message === 'string') {
      notifyContent = h('p', { class: 'tiny-notify__content' }, message)
    } else if (typeof message === 'function') {
      notifyContent = message(h, {
        vm: this,
        messageClass: 'tiny-notify__content'
      })
    }
    // Main Msg Area
    let msgVNode = (
      <div class="tiny-notify__message-zone">
        <div class="tiny-notify__title-wrapper">{notifyTitle}</div>
        <div class="tiny-notify__content-wrapper">{notifyContent}</div>
      </div>
    )

    return (
      <div
        class={[
          'tiny-notify',
          'tiny-notify--' + type,
          showIcon ? '' : 'tiny-notify--no-icon',
          showClose ? '' : 'tiny-notify--no-close',
          state.position,
          state.customClass
        ]}
        style={state.positionStyle}
        v-show="state.visible"
        onMouseenter={clearTimer}
        onMouseleave={startTimer}
        onClick={click}
      >
        {[iconVNode, msgVNode, closeVNode]}
      </div>
    )
  }
}
</script>

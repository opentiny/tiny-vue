<script lang="jsx">
import { renderless, api } from '@opentiny/vue-renderless/tag/vue'
import { props, setup, h } from '@opentiny/vue-common'
import { iconClose } from '@opentiny/vue-icon'

export default {
  components: {
    IconClose: iconClose()
  },
  emits: ['click', 'close'],
  props: [
    ...props,
    'text',
    'closable',
    'type',
    'hit',
    'disabled',
    'color',
    'size',
    'effect'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, h })
  },
  render() {
    const {
      type,
      size,
      hit,
      effect,
      slots,
      closable,
      color,
      handleClose,
      handleClick
    } = this

    const classes = [
      'tiny-tag',
      type ? `tiny-tag--${type}` : '',
      size ? `tiny-tag--${size}` : '',
      effect ? `tiny-tag--${effect}` : '',
      hit && 'is-hit'
    ]

    const tagElement = (
      <span
        class={classes}
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        {slots.default()}
        {closable && (
          <icon-close
            class="tiny-svg-size tiny-tag__close "
            onClick={handleClose}
          ></icon-close>
        )}
      </span>
    )

    return tagElement
  }
}
</script>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/tag/vue'
import { props, setup, h } from '@opentiny/vue-common'
import { IconClose } from '@opentiny/vue-icon'
import { classes } from './token'
import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  components: {
    IconClose: IconClose()
  },
  emits: ['click', 'close'],
  props: [
    ...props,
    'text',
    'closable',
    'operable',
    'selectable',
    'type',
    'theme',
    'hit',
    'disabled',
    'color',
    'size',
    'effect',
    'customClass'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, h, classes })
  },
  render() {
    const { slots, selectable, disabled, color, handleClose, handleClick, customClass, hit, m, gcls, state } = this
    const size = selectable ? 'medium' : this.size || 'medium'
    const type = selectable ? 'info' : state.type || 'info'
    const effect = selectable ? 'light' : this.effect || 'light'
    const closable = selectable ? false : this.closable
    const operable = selectable ? false : this.operable

    const classes = m(
      'inline-flex items-center rounded-sm box-border border-0.5 sm:border mr-2',
      effect === 'plain' || hit ? gcls(`${type}-border`) : 'border-transparent',
      gcls(`${effect}-${type}`),
      gcls(size),
      { hidden: !state.show },
      selectable ? (state.selected ? gcls('selectable-selected') : gcls('selectable-unselect')) : '',
      selectable && disabled ? gcls('tag-disabled') : '',
      operable ? gcls('tag-operable') : '',
      customClass
    )

    const tagElement = (
      <span data-tag="tiny-tag" class={classes} style={{ backgroundColor: color }} onClick={handleClick}>
        {slots.default()}
        {closable && (
          <icon-close
            class={['w-3 h-3 ml-1 cursor-pointer', effect === 'dark' ? gcls('fill-dark') : gcls(`fill-light-${type}`)]}
            onClick={handleClose}
          ></icon-close>
        )}
      </span>
    )

    return tagElement
  }
})
</script>
